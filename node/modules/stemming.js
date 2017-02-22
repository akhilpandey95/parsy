/* This Source Code Form is subject to the terms of the MIT
 * License. If a copy of the same was not distributed with this
 * file, You can obtain one at https://github.com/AkhilHector/parsy/blob/master/LICENSE.*/

const colors = require('colors');

module.exports.stem = (foo) => {
    if (typeof foo == "string") {
        process.stdout.write(`action comes here \n`)
    } else {
        process.stdout.write(`${'ERROR:'.bold.red} ${'stem()'.green} doesn't accept ${(typeof foo).magenta} as an argument\n`)
    }
}

module.exports.tokenAndstem = (foo) => {
    if (typeof foo == "string" || Array.isArray(foo)) {
        process.stdout.write(` action comes here \n`)
    } else {
        process.stdout.write(`${'ERROR:'.bold.red} ${'tokenAndstem()'.green} doesn't accept ${(typeof foo).magenta} as an argument\n`)
    }
}
