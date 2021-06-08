import Head from 'next/head'

import Header from '../components/Header'


export default function Home() {
  
  return (
    <div >
      <Head>
        <title>Create Next App</title>
       
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <h1>hello rohith</h1>
      {/*header*/}
      <Header/>
      {/*nav */}
      {/*results*/}
    </div>
  )
}
