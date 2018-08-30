;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.SpckEditor = factory();
  }
}(this, function() {
var SpckEditor = function (element, origin) {
  if (typeof element === 'string') {
    this.element = document.querySelector(element);
  }
  else if (isNode(element)) {
    this.element = element
  }
  else {
    throw new Error('Argument "element" must be a selector string or a HTMLElement.');
  }

  element = this.element;
  if (element && element.contentWindow && element.contentWindow.postMessage) {
    this.contentWindow = element.contentWindow;
  }
  else {
    throw new Error('Argument "element" must be an IFRAME element.');
  }

  this.origin = origin || 'https://embed.spck.io';

  function isNode(o) {
    return (
      typeof Node === "object" ? o instanceof Node :
        o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string"
    );
  }
}

SpckEditor.prototype = {
  connect: function (successCallback, errorCallback, options) {
    options = options || {};
    var maxTries = options.maxTries || 10;
    var interval = options.interval || 500;
    var origin = this.origin;
    var contentWindow = this.contentWindow;

    errorCallback = errorCallback || function (err) {
      throw new Error(err.message);
    };

    var tries = 0;
    var intervalId = setInterval(function () {
      if (tries >= maxTries) {
        clearInterval(intervalId);
        errorCallback({
          id: 1,
          message: 'Connection to iframe window failed: maximum tries exceeded.'
        });
        return;
      }
      else {
        tries++;
        var channel;

        try {
          channel = new MessageChannel();
        }
        catch (e) {
          clearInterval(intervalId);
          errorCallback({
            id: 2,
            message: 'MessageChannel not supported.'
          });
          return;
        }

        channel.port1.onmessage = function (e) {
          if (e.data == 'connected') {
            clearInterval(intervalId);
            if (successCallback) successCallback(tries);
          }
        };

        try {
          contentWindow.postMessage('connect', origin, [channel.port2]);
        }
        catch (e) { }
      }
    }, interval);
  },

  configure: function (config) {
    this.contentWindow.postMessage(config, this.origin);
  },

  getText: function (callback) {
    var channel = new MessageChannel();
    channel.port1.onmessage = callback;
    this.contentWindow.postMessage('text', this.origin, [channel.port2]);
  }
}

return SpckEditor;
}));
