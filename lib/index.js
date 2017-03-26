"use strict";

import Env from '.interal/env'

class Navi extends Env {
    constructor(opts) {
        super(opts);
    }

    isHistoryEnable() {
        let {history} = this.root
        return typeof history != null
    }

    currentUrl() {
        let {location} = this.root
        return location.href
    }

    pushState(url) {
        if (this.isHistoryEnable) {
            let {history} = this.root;
            history.pushState(null, null, url);
        }
    }
    replaceState(url) {
        if (this.isHistoryEnable) {
            let {history} = this.root;
            history.replaceState(null, null, url);
        }
    }
}

export default new Navi
