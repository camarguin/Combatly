import Head from 'next/head';
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import Layout from "../components/Layout";


export default function JoinRoom() {
  return (
    <Layout>
      <Head>
        <title>Combatly - Join a room</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Form btnName="JOIN" formTitle="JOIN ROOM" />
    </Layout>
  )
}
