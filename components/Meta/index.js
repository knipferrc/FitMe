import Head from 'next/head'
import React from 'react'

const Meta = () => (
  <Head>
    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height"
    />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="/static/css/fit.css" />
    <style jsx>{`
      html,
      body {
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
      }
    `}</style>
  </Head>
)

export default Meta
