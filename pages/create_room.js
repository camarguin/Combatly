import Head from 'next/head';
import Form from "../components/Form/Form";
import Header from '../components/Header/Header';
import Layout from '../components/Layout';

export default function CreateRoom() {
  return (
    <Layout>
      <Head>
        <title>Combatly - Create your room</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Form btnName="CREATE" formTitle="CREATE ROOM" />
    </Layout>
  )
}
