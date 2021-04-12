import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import NewsCardLists from '../components/NewsCardLists/NewsCardLists'
import Navbar from '../components/Navbar/Navbar'
import SearchBox from '../components/SearchBox/SearchBox'
import { useState, useEffect } from 'react'

export const stocksNews = () => {

    const [news, setNews] = useState([]);
    const [keyword, setKeyword] = useState("");

    const fetchStocks = async () => {
  
      const response3 = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list?category=generalnews&region=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "40f0e74d83mshd5fd7a4a963ac98p1d4f6cjsn1c7d85b1789e"
        }
    });

      const newsResponse = await response3.json();
      console.log(newsResponse);
      setNews(newsResponse.items.result);
  
  
    }

   
  const filteredName = news.filter(c => c.summary.toLowerCase().includes(keyword));

  const onInputChange = (e) => {

    e.preventDefault();
    console.log(e.target.value.toLowerCase());
    setKeyword(e.target.value.toLowerCase());
  }

  
    useEffect(() => {
  
      fetchStocks();
  
    }, []);



    return (

        <div className={styles.container}>
            <Head>
                <title>Stocks Up</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Stocks Up
                </h1>

                <Navbar />
                <SearchBox onChange={onInputChange}/>

                <div className={styles.grid}>

                {news.length === 0 ?
                    <h2>Loading</h2>
                    : 
                    <NewsCardLists news={filteredName} />
                }

                    

                </div>

            </main>



            <footer className={styles.footer}>
                <p>Powered by <br /> <strong> Sumitra Jumrern</strong></p>

                {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
            </footer>
        </div>
    )
}

export default stocksNews;
