import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox.js';
import './App.css';
import Scroll from '../Components/Scroll';
//const cors = require('cors');

class App extends Component {
    constructor() {
        super()
        this.state = {
            stocks: [],
            searchfield: '',
            prices: []

        }
    }

    componentDidMount() {

        fetch('https://fcsapi.com/api-v2/stock/list?country=United-states&access_key=FT8DEOmaTBENI5Ai1plueQBn0DmBI7CVz19FAonyUjuurONg8y')
            .then(response => response.json())
            .then(stockResponse => {
                console.log(stockResponse);
                this.setState({ stocks: stockResponse.response.slice(0, 1000) });

                let ids = '';
                const idsCount = this.state.stocks.length;

                for (let count = 0; count <= idsCount - 1; count++) {
                    let id = this.state.stocks[count].stock_id;
                    ids = ids + ',' + id;

                }

                ids = ids.substring(1);
                console.log(ids);

                fetch(`https://fcsapi.com/api-v2/stock/latest?id=${ids}&access_key=FT8DEOmaTBENI5Ai1plueQBn0DmBI7CVz19FAonyUjuurONg8y`, {
                    method: 'GET'
                })
                    .then(response => response.json())
                    .then(pricesResponse => {
                        console.log(pricesResponse);
                        this.setState({ prices: pricesResponse.response });
                    });

            });





    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }



    render() {
        const { stocks, searchfield,prices } = this.state;
        const filteredstocks = this.state.stocks.filter(stock => {
            return stock.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !stocks.length ? <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1>STOCKS UP</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList stocks={filteredstocks} prices={prices} />
                    </Scroll>

                </div>
            );
    }
}


export default App;