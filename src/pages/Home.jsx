import { useState } from 'react'
import axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom'

const Home = () => {
    const [allCoins, setAllCoins] = useState([])
    const [search, setSearch] = useState("")
    console.log(search)
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(
      (response)=>{
        setAllCoins(response.data)
        localStorage.setItem('cryptoCoins', JSON.stringify(response.data))
      }
    ).catch((err)=>{
      console.log(err)
    })
    /*useEffect(()=>{
        let coins = JSON.parse(localStorage.getItem('cryptoCoins'))
        if(coins){
            setAllCoins(coins)
        }
    },[])*/
    console.log(allCoins)
    return (
      <div>
        <br></br>
        <center><span style={{boxShadow:'0px 0px 20px gray'}}><input type='text' value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search for crypto coin...'/></span></center>
        <div className='container'>{allCoins && allCoins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase())).map((coin,index)=>{
          return(
            <div key={index} className='card'>
              <center><img src={coin.image} alt={coin.name} title={coin.name} width={60} height={60} style={{alignContent:'center'}} className='image-shadow'/></center><hr></hr>
              <div><p><b>Name:</b>{coin.name}</p>
              <p><b>Value:</b>${coin.current_price}</p>
              <Link to={`/${coin.id}`}>Know More</Link></div>
            </div>
          )
        })}</div>
      </div>
    )
}

export default Home
