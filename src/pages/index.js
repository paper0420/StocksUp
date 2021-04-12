import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import CardLists from '../components/CardLists/CardLists'

import Navbar from '../components/Navbar/Navbar'
import SearchBox from '../components/SearchBox/SearchBox'



export default function Home() {
  const [stocks, setStocks] = useState([]);
  const [prices, setPrices] = useState([]);
  const [keyword, setKeyword] = useState("");

  const fetchStocks = async () => {

    const response = await fetch('https://fcsapi.com/api-v2/stock/list?country=United-states&access_key=FT8DEOmaTBENI5Ai1plueQBn0DmBI7CVz19FAonyUjuurONg8y');
    const stockResponse = await response.json();
    // console.log(stockResponse);
    setStocks(stockResponse.response.slice(0, 1000));

    const stocks = stockResponse.response.slice(0, 1000);

    let ids = '';

    const idsCount = stocks.length;

    for (let count = 0; count <= idsCount - 1; count++) {
      let id = stocks[count].stock_id;
      ids = ids + ',' + id;

    }

    ids = ids.substring(1);
    // console.log("ids....."+ ids);

    const response2 = await fetch(`https://fcsapi.com/api-v3/stock/latest?id=${ids}&access_key=FT8DEOmaTBENI5Ai1plueQBn0DmBI7CVz19FAonyUjuurONg8y`, {
      method: 'GET'
    });
    const pricesResponse = await response2.json();

    // console.log(pricesResponse);
    setPrices(pricesResponse.response);

  }



  const filteredName = stocks.filter(c => c.name.toLowerCase().includes(keyword));

  const onInputChange = (e) => {
    e.preventDefault();
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
        <SearchBox
          onChange={onInputChange} />


        <div className={styles.grid}>

          {prices.length === 0 ?
            <h2>Loading</h2>
           
            :  <CardLists stocks={filteredName} prices={prices} />

          }


        </div>

      </main>



      <footer className={styles.footer}>

        <p>Powered by <br /> <strong> Sumitra Jumrern</strong></p>

        {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}


      </footer>
    </div>

  );
}
