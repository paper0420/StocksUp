import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox.js';
import './App.css';
import Scroll from '../Components/Scroll';
import Newscardlist from '../Components/Newscardlist';
//const cors = require('cors');


class App extends Component {
    constructor() {
        super()
        this.state = {
            stocks: [],
            searchfield: '',
            prices: [],
            route: 'Prices',
            news: []
        }
    }

    componentDidMount() {
        //  fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => this.setState({ stocks: data }))

        // fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json())
        //     .then(data => {
        //         console.log('data test::', data);
        //         this.setState({ news: data });
        //     }

        //     )




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


        fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list?category=generalnews&region=US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key": "40f0e74d83mshd5fd7a4a963ac98p1d4f6cjsn1c7d85b1789e"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('data:::', data);
                this.setState({ news: data.items.result });
            }


            )



    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    onRouteChange = (route) => {
        this.setState({searchfield:''});
        this.setState({ route: route });
    }


    render() {
        const { stocks, searchfield, prices,news } = this.state;

        const filteredstocks = this.state.stocks.filter(stock => {
            return stock.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        console.log(this.state.news);
        const filterednews = this.state.news.filter(newss => {
            return newss.summary.toLowerCase().includes(searchfield.toLowerCase());
        })





        return (
            <div>
                <h1 className='tc'>STOCKS UP</h1>
                <SearchBox searchChange={this.onSearchChange} onRouteChange={this.onRouteChange} />
                {this.state.route === 'Prices' && stocks.length
                    ? <div >
                        <Scroll>
                           
                            <CardList stocks={filteredstocks} prices={prices} />
                        </Scroll>
                    </div>
                    : (this.state.route === 'News' && news.length
                        ?
                        <div >
                            <Scroll>
                                
                                <Newscardlist news={filterednews} />

                            </Scroll>
                        </div>
                        : <h1>Loading</h1>)


                }

            </div>
        );
    }
}


export default App;