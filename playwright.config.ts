import { PlaywrightTestConfig } from "playwright/test";

interface TestConfig extends PlaywrightTestConfig {
    baseURL: string
}

const defaultConfig: PlaywrightTestConfig = {
    timeout: 90000,
    testDir: './src/tests',
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    expect: {
        timeout: 90000
    },
    use: {
        video: 'on',
        ignoreHTTPSErrors: true,
        trace: 'on-first-retry',
    },
    fullyParallel: true,
    projects: [
        {
            name: "defaultProject",
            use: {
                browserName: "chromium",
                channel: "chrome",
                //contextOptions: {
                //    storageState: "./.auth/auth.json"
                //},
                acceptDownloads: true,

            },
            //dependencies: ['setup']
        }
        
    ]

};

const devConfig: TestConfig = {
    baseURL: `${process.env.BASE_URL_DEV}`
};

const homConfig: TestConfig = {
    baseURL: `${process.env.BASE_URL_HOM}`
};

const prodConfig: TestConfig = {
    baseURL: `${process.env.BASE_URL_PROD}`
};

const environment = process.env.TEST_ENV || 'hom';
const config: TestConfig = {
    ...defaultConfig,
    ...(environment === 'dev' ? devConfig : environment === 'prod' ? prodConfig :  homConfig)
}

require('dotenv').config();
export default config;