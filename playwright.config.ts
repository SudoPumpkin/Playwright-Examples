/* eslint-disable prettier/prettier */
import { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {

	timeout: 0,

	retries: 0,

	testDir: './e2e',

	snapshotDir: 'snapshots',

	use: {

		headless: true,

		viewport: { width: 1280, height: 720 },

		actionTimeout: 25000,

		ignoreHTTPSErrors: true,

		video: 'on',

		screenshot: 'on',

		launchOptions: {



			slowMo: 100,



		},

	},

	projects: [

		{

			name: 'Chromium',

			use: { browserName: 'chromium' },

			snapshotDir: 'snapshots/chrome',

		},

		{

			name: 'Firefox',

			use: { browserName: 'firefox' },

			snapshotDir: 'snapshots/firefox',

		},

		{

			name: 'Webkit',

			use: { browserName: 'webkit' },

			snapshotDir: 'snapshots/webkit',

		},

	],



};

export default config;
