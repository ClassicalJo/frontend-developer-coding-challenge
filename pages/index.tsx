import type { NextPage, GetServerSideProps } from 'next'
import { ProductsData, UserData } from '../components/types';
import Head from 'next/head'
import GlobalStyles from '../components/globalStyles';
import Main from '../components/main'
import fetchData from '../components/fetchData'
import authHeader from '../components/authHeader';
import Footer from '../components/footer';

type AppProps = {
  productsData: ProductsData;
  userData: UserData;
}

const Home: NextPage<AppProps> = ({ productsData, userData }) => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
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
  const headers = authHeader(process.env.USERTOKEN)
  let productsFetch = fetch(process.env.PRODUCTURL, { headers })
  let userFetch = fetch(process.env.USERURL, { headers })
  try {
    let [products, user] = await Promise.all([productsFetch, userFetch])
    let productsData = await products.json()
    let userData = await user.json()
    return { props: { productsData, userData } }
  } catch (error) {
    return { props: { productsData: [], userData: {} } }
  }
}

export default Home
