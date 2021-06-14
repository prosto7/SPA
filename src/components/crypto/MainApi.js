import React, {useState,useEffect} from 'react'
import './Api.css';
import axios from 'axios'
import Coin from './Coin'
import './Coin.css';


function MainApi() {
    const [coins,setCoins]= useState([]);   // монеты и функция которая будет обновлять
    const [search,setSearch] = useState('')
    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data); //получаем данные о монетах
            
        }).catch(error => alert('Api error'))
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())  // функция фильтр
    );
  return (
    <div className="col coin-app">
        <div className="coin-search">
            <h1 className="coin-text">Поиск валюты</h1>
            <form>
                <input type="text" placeholder="Поиск" className="coin-input" onChange={handleChange}/>
            </form>
        </div>
{filteredCoins.map(coin => {
    return (
        <Coin key={coin.id} name={coin.name} image={coin.image} 
        symbol={coin.symbol}
        volume={coin.total_volume}
        price={coin.current_price}
        priceChange={coin.price_change_percentage_24h}
        marketcap={coin.market_cap}
        />
    )
})}
    </div>
  );
}

export default MainApi;
