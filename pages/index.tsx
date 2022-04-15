import type { NextPage, GetServerSideProps } from 'next'
import { ProductsData } from '../components/types';
import Head from 'next/head'
import GlobalStyles from '../components/globalStyles';
import Main from '../components/main'
import fetchData from '../components/fetchData'

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
      <main >
        <Main productsData={productsData} />
      </main>

      <footer>
        <a href="https://github.com/ClassicalJo/frontend-developer-coding-challenge">Link to the repo</a>
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    let productsData = await fetchData(process.env.PRODUCTURL, "GET", process.env.USERTOKEN)
    return { props: { productsData } }
  } catch (error) {
    return { props: { productData: [] } }
  }
}

export default Home
