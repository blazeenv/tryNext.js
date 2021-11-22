/* eslint-disable max-len */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

const Home: NextPage = () => (

  <Layout pageTitle="Home Page">
    <Image src="/nextjs.jpg" width={300} height={300} alt="profile" />
    <h1 className={styles['title-homepage']}>Hello World</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facilis omnis consequatur molestiae reiciendis, quo libero dolor voluptatem ad culpa asperiores labore recusandae a accusantium mollitia perferendis. Cupiditate, architecto ducimus?</p>
  </Layout>

);

export default Home;
