// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const reporter = require("cucumber-html-reporter");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

exports.config = {
  allScriptsTimeout: 11000,
  // specs: [
  //   './src/**/*.e2e-spec.ts'
  // ],
  specs: ['./src/features/**/*.feature'],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  // framework: 'jasmine',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./src/steps/**/*.steps.ts'],
    format: ['json:./e2e-report.json']
  },
  // jasmineNodeOpts: {
  //   showColors: true,
  //   defaultTimeoutInterval: 30000,
  //   print: function () { }
  // },
  // onPrepare() {
  //   require('ts-node').register({
  //     project: require('path').join(__dirname, './tsconfig.e2e.json')
  //   });
  //   jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  // }
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    chai.use(chaiAsPromised);
    browser.manage().window().maximize();
  },

  onComplete: () =>{
    const options = {
      theme: 'bootstrap',
      jsonFile: './e2e-report.json',
      output: './cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: false,
      metadata: {
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }
    };
    reporter.generate(options);
    browser.close();
    reporter.generate(options);
  }
};