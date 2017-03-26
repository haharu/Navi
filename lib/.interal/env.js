"use strict";

const AGENT = {
    browser: 'BROWSER',
    server: 'SERVER',
    bot: 'BOT'
};

const ROOT = this;

export default class Env {
    constructor() {
        if (typeof window !== 'undefined') {
            this.root = window;
            this.agent = AGENT.browser;
        } else if (typeof global !== 'undefined') {
            console.warn("Using browser-only version in non-browser environment");
            this.root = global;
            this.agent = AGENT.server;
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
