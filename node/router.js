/* This Source Code Form is subject to the terms of the MIT
 * License. If a copy of the same was not distributed with this
 * file, You can obtain one at https://github.com/AkhilHector/parsy/blob/master/LICENSE.*/

const fs = require('fs')
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

module.exports.unleash = () => {
    let port = process.env.PORT || 1338
    let app = express()
    let router = express.Router()

    app.use(express.static('assets'))
    app.set('title', "home | parsy")
    app.use(cookieParser())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    router.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html')
    })

    app.use('/', router)

    http.createServer(app).listen(port, () => {
            console.log("Front End Application Server started")
    })
}
