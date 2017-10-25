import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter } from 'react-router-dom'
import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import hpp from 'hpp'
import { minify } from 'html-minifier'
import { renderRoutes } from 'react-router-config'
import { renderToString } from 'react-dom/server'
import routes from 'common/routes'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()
server
  .disable('x-powered-by')
  .use(helmet())
  .use(hpp())
  .use(compression())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {}

    const sheet = new ServerStyleSheet()

    const markup = renderToString(
      sheet.collectStyles(
        <StaticRouter context={context} location={req.url}>
          {renderRoutes(routes)}
        </StaticRouter>
      )
    )

    const styleTags = sheet.getStyleTags()

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.status(200).send(
        minify(
          `<!doctype html>
            <html lang="en">
              <head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta charSet='utf-8' />
                <title>FitMe</title>
                <meta name="viewport" content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height">
                <meta name="description" content="Fitness made easy">
                <meta name="keywords" content="react, workout, fitme, 2017, exercise, gym, facebook">
                <meta name="theme-color" content="#5755d9">
                <link rel="manifest" href="/manifest.json">
                <meta name="msapplication-tap-highlight" content="no">
                <meta name="mobile-web-app-capable" content="yes">
                <meta name="application-name" content="#Pastey!">
                <meta name="apple-mobile-web-app-capable" content="yes">
                <meta name="apple-mobile-web-app-status-bar-style" content="black">
                <meta name="apple-mobile-web-app-title" content="FitMe">
                <meta name="msapplication-TileColor" content="#5755d9">
                <meta property="og:url" content="https://fitme.now.sh">
                <meta property="og:type" content="website">
                <meta property="og:title" content="FitMe">
                <meta property="og:description" content="Fitness made easy">
                ${styleTags}
                ${assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ''}
                ${process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client
                      .js}" defer crossorigin></script>`}
              </head>
              <body>
                <div id="root">${markup}</div>
              </body>
            </html>`,
          {
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
          }
        )
      )
    }
  })

export default server
