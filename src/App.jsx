import './App.css'
import axios from 'axios'

const App = () => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(
    (response)=>{
      console.log(response)
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
      <p className='scrolling'>Know about crypto coins</p>
      <hr></hr>
      <div>Hello</div>
    </div>
  )
}

export default App
