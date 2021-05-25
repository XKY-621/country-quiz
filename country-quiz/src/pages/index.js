import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout';
import QuestionBlock from '../components/QuestionBlock/QuestionBlock'
import styles from '../styles/Home.module.css'

export default function Home({countries}) {
  console.log(countries);
  return <Layout>
    <QuestionBlock />
  </Layout>
}
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();
  return{
    props:{
      countries
    },
  };
};
