import Head from 'next/head'
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'

function index() {
  return (
    <div>
      <Head>
        <title>Encrypt-Decrypt</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <Header />

      <Home />
    </div>
  )
}

export default index
