import { NextPage } from 'next'
import Head from 'next/head'

async function Test() {
  const request = await fetch(`http://localhost:3000/api/hello`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    //body: JSON.stringify(''),
  })

  const responseJSON = await request.json()

  return responseJSON
}

const Home: NextPage = async () => {
  console.log(await Test())

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export default Home
