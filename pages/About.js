import Head from 'next/head'
import React from 'react'
import Aboutus from './components/Aboutus'
import Header from './components/Header'

function About() {
  return (
    <div>
      <Head>
        <title>Encrypt-Decrypt</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <Header />

      <Aboutus />
    </div>
  )
}

export default About
