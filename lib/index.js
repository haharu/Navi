"use strict";

import Env from '.interal/env'
import _ from 'lodash';

class Navi extends Env {

    constructor(opts) {
        super(opts);
        let {location, navigator, history, onpopstate} = this.root;
        this.isHistoryAvailable = history && history.pushState
    }

    get current() {
        return new URL(location.href);
    }

    parseUrl(url) {
        if (url) {
            let current = this.current;

            if (_.startsWith(url, '//')) {
                return `${current.protocol}${url}`
            } else if (_.startsWith(url, '/')) {
                if (url === '/') {
                    return current.origin;
                }
                current.pathname = url;
                return current.href;
            } else if (_.startsWith(url, '#')) {
                current.hash = url;
                return current.href
            } else if (_.startsWith(url, '?')) {
                current.search = url;
                return current.href
            } else {
                current.pathname += `/${url}`
                return current.href;
            }
        }
        return '';
    }

    linkTo(url) {
        location.href = this.parseUrl(url);
    }

    redirectTo(url) {
        location.replace(this.parseUrl(url));
    }

    pushState(url, data = null) {
        if (this.isHistoryAvailable) {
            history.pushState(data, '', url);
        } else {
            console.error("browser doesn't support history");
            // TODO: history polyfill
        }
    }

    replaceState(url, data = null) {
        if (this.isHistoryAvailable) {
            history.replaceState(data, '', url);
        } else {
            console.error("browser doesn't support history");
            // TODO: history polyfill
        }
    }
}

export default new Navi
