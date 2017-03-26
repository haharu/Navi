"use strict";

export default function Navi() {
    let root;

    /*
        env determine
    */

    if (typeof window !== 'undefined') {
        root = window;
    } else if (typeof self !== 'undefined') {
        root = self;
    } else {
        console.warn("Using browser-only version in non-browser environment");
        root = this;
    }


    console.log('hello');

}
