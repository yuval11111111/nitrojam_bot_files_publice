const Parser = require('rss-parser')
let parser = new Parser()
let api = require('../API.json')
const fs = require('fs')

let youtube = api.youtube

module.exports = (client) => {
    client.checkVid = async () => {
        const data = await parser.parseURL(
            `https://youtube.com/feeds/videos.xml?channel_id=${youtube}`
        );

        const rawData = fs.readFileSync(`${__dirname}./.json/video.json`)
        console.log(`raw:`+rawData, `data:`+data);
    }
}