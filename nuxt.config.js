const express = require('express')
const session = require('express-session')

module.exports = {
  head: {
    title: 'FitMe',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Simple document creation tool'
      }
    ]
  },
  loading: { color: '#00bcd4' },
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios'],
  plugins: ['plugins/element-ui.js'],
  css: ['element-ui/lib/theme-chalk/index.css'],
  serverMiddleware: [
    express.json(),
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    }),
    // Api middleware
    // We add /api/login & /api/logout routes
    '~/api'
  ]
}
