import type { NextPage, GetServerSideProps } from 'next'
import { ProductsData } from '../components/types';
import Head from 'next/head'
import GlobalStyles from '../components/globalStyles';
import Main from '../components/main'
import fetchData from '../components/fetchData'
import authHeader from '../components/authHeader';
import Footer from '../components/footer';

type AppProps = {
  productsData: ProductsData;
}

const Home: NextPage<AppProps> = ({ productsData }) => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
      </Head>
      <GlobalStyles />
      <Main productsData={productsData} />
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    let headers = authHeader(process.env.USERTOKEN)
    let res = await fetch(process.env.PRODUCTURL, { headers })
    let productsData = await res.json()
    return { props: { productsData } }
  } catch (error) {
    return { props: { productsData: [] } }
  }
}

export default Home
