import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
const Coin = () => {
    const [allCoins, setAllCoins] = useState([])
    let {id} = useParams()
    console.log(id)
    useEffect(()=>{
        let coins = JSON.parse(localStorage.getItem('cryptoCoins'))
        if(coins){
            setAllCoins(coins)
        }
    },[])
    console.log(allCoins)
  return (
    <div>
        <Link to='/' className="backButton">Back</Link><br/>
      {allCoins.filter(coin=>coin.id===id).map((coin1,index)=>{
        return(
            <div key={index} className="singleCoin">
                <center>
                    <img src={coin1.image} alt={coin1.name} className="singleImage"/><br/>
                    <p style={{fontSize:'large'}}><b>Name:</b>{coin1.name}</p>
                    <p style={{fontSize:'large'}}><b>Market Rank:</b>{coin1.market_cap_rank}</p>
                    <p style={{fontSize:'large'}}><b>Symbol:</b>{" "}{coin1.symbol}</p>
                    <p style={{fontSize:'large'}}><b>Value:</b>${coin1.current_price}</p>
                    <p style={{fontSize:'large'}}><b>Updated on:</b>{coin1.last_updated.slice(0,10)}</p>
                    <p style={{fontSize:'large'}}><b>Updated time:</b>{coin1.last_updated.slice(11,23)}</p>
                    <p style={{fontSize:'large'}}><b>Max Supply:</b>{" "}{coin1.max_supply?coin1.max_supply:"--"}</p>
                    <p style={{fontSize:'large'}}><b>Total Supply:</b>{coin1.total_supply}</p>
                    <p style={{fontSize:'large'}}><b>Price Change percentage:</b>{" "}{coin1.ath_change_percentage}</p>
                    <a href={`https://en.wikipedia.org/wiki/${coin1.name}`} target="_blank" className="detailsButton">Complete Details</a><br/><br/>
                </center>
            </div>
        )
      })}
    </div>
  )
}

export default Coin
