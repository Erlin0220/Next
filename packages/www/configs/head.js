const moment = require('moment');
/*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
module.exports = {
    title: '暄桐教室',//process.env.npm_package_name || '',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '暄桐的写字课 | 文人式的生活与快乐' },
        {
            name: "keywords",
            content:
                "书法,写字,书法课,书法零基础,美育,临帖,暄桐,暄桐教室,林曦,林糊糊,ask林曦,儿童书法,齐白石,丰子恺,小世界,闹事集,文人"
        },
        { hid: 'version', name: 'version', content: `${process.env.npm_package_version} ${moment().format("YYYY-MM-DD HH:mm")}` }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
}