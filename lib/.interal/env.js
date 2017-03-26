"use strict";

const AGENT = {
    browser: 'BROWSER',
    server: 'SERVER',
    bot: 'BOT'
};

const ROOT = this;


export default class {
    constructor() {
        if (typeof window !== 'undefined') {
            this.root = window;
            this.agent = AGENT.browser;
        } else if (typeof self !== 'undefined') {
            this.root = self;
            this.agent = AGENT.bot;
        } else {
            console.warn("Using browser-only version in non-browser environment");
            this.root = ROOT;
            this.agent = AGENT.server;
        }
    }
}
