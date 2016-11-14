'use strict';

// Protractor configuration
exports.config = {
	allScriptsTimeout: 110000,

	plugins : [{
		path: './node_modules/protractor-istanbul-plugin',
		logAssertions: true,
		failAssertions: true
	}],
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['./app/e2e_tests/login.e2e.test.js', './app/e2e_tests/list-forms.e2e.test.js'],
	beforeLaunch: './server.js',

	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	}
};
