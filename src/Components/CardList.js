import React from 'react';
import Card from './Card';


const CardList = ({ stocks, prices }) => {
    return (
        <div>
            {
                stocks.map((user, i) => {
                    let priceObject = prices.filter(t => t.id === stocks[i].stock_id)[0];
                    return <Card
                        key={i}
                        id={stocks[i].stock_id}
                        name={stocks[i].name}
                        symbol={stocks[i].short_name}
                        price={priceObject == null ? 0 : priceObject.price}
                    />
                })
            }
        </div>
    );
}

export default CardList;