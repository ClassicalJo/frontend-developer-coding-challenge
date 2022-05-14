import type { NextPage, GetServerSideProps } from 'next'
import { ProductsData, UserData } from '../components/types';
import Head from 'next/head'
import GlobalStyles from '../components/globalStyles';
import Main from '../components/main'
import authHeader from '../components/authHeader';
import Footer from '../components/footer';
import fetchInitialData from '../components/main/fetchInitialData';

type AppProps = {
  productsData: ProductsData;
  userData: UserData;
}

const Home: NextPage<AppProps> = ({ productsData, userData }) => {
  return (
    <div >
      <Head>
        <title>Aerolab Challenge</title>
      </Head>
      <GlobalStyles />
      <Main
        initialUserData={userData}
        productsData={productsData} />
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return await fetchInitialData(
    process.env.USERTOKEN,
    process.env.PRODUCTURL,
    process.env.USERURL)
}

export default Home
