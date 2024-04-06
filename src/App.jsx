import { useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [allCoins, setAllCoins] = useState([])
  const [search, setSearch] = useState("")
  console.log(search)
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(
    (response)=>{
      setAllCoins(response.data)
    }
  ).catch((err)=>{
    console.log(err)
  })
  return (
    <div>
      <div  className="heading">
        Crypto Coins
      </div>
      <hr></hr>
      <div style={{backgroundColor:'#C0F3AB', overflow:'hidden'}}><p className='scrolling'>Know about crypto coins and prices</p></div>
      <hr></hr><br></br>
      <center><span style={{boxShadow:'0px 0px 20px gray'}}><input type='text' value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search for crypto coin...'/></span></center>
      <div className='container'>{allCoins && allCoins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase())).map((coin,index)=>{
        return(
          <div key={index} className='card'>
            <center><img src={coin.image} alt={coin.name} title={coin.name} width={60} height={60} style={{alignContent:'center'}} className='image-shadow'/></center><hr></hr>
            <div><p><b>Name:</b>{coin.name}</p>
            <p><b>Current Price:</b>${coin.current_price}</p>
            <p><u>Know more</u></p></div>
          </div>
        )
      })}</div>
    </div>
  )
}

export default App
