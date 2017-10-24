import webpackTestConfig from './webpack-test.config';
import { ConfigOptions } from 'karma';

export default (config) => {
  config.set({
    // Base path that will be used to resolve all patterns (eg. files, exclude).
    basePath: './',

    // Frameworks to use.
    // Available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // List of files to load in the browser.
    files: [
      'karma-test-entry.ts'
    ],

    // Preprocess matching files before serving them to the browser.
    // Available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'karma-test-entry.ts': ['webpack', 'sourcemap']
    },

    webpack: webpackTestConfig,

    // Webpack please don't spam the console when running in karma!
    webpackMiddleware: {
      noInfo: true,
      // Use stats to turn off verbose output.
      stats: {
        chunks: false
      }
    },

    mime: {
      'text/x-typescript': [ 'ts' ]
    },

    coverageIstanbulReporter: {
      reports: ['text-summary', 'html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },

    // Test results reporter to use.
    // Possible values: 'dots', 'progress'.
    // Available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage-istanbul'],

    // Level of logging
    // Possible values:
    // - config.LOG_DISABLE
    // - config.LOG_ERROR
    // - config.LOG_WARN
    // - config.LOG_INFO
    // - config.LOG_DEBUG
    logLevel: config.LOG_WARN,

    // Start these browsers.
    // Available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    browserConsoleLogOptions: {
      terminal: true,
      level: 'log'
    },

    singleRun: true,
    colors: true
  } as ConfigOptions);
};
