import React from 'react'
import Card from '../Card/Card'
import styles from '../../styles/Home.module.css'

export const CardLists = ({ stocks, prices }) => {


    return (
        <div className={styles.grid}>
       

            {stocks.map((stock, i) => {
                console.log(prices);

                let priceObject = prices.filter(t => t.id == stock.stock_id)[0];
                console.log(priceObject);

                return <Card
                    key={i}
                    id={stock.stock_id}
                    name={stock.name}
                    symbol={stock.short_name}
                    price={priceObject == null ? 0 : priceObject.c}
                />
            })
            }

{/* 
            {
                
                
                stocks.map((stock) => {

                let priceObject = prices.filter(t => t.id === stock.stock_id)[0];
                console.log("CardLists");

                return <Card
                    stock = {stock}
                    price={priceObject == null ? 0 : priceObject.price}
                />
            })
            } */}


        </div>
    )
}

export default CardLists;
