import axios from "axios";
import { useEffect, useState } from "react";
import Newrow from "./mycomponents/Newrow";
function App() {
  const [data, setdata] = useState()
  

  useEffect ((data) => {
   axios
  .get ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false") 
  .then( (res) => {
     setdata(res.data);
     data && console.log(data);
  } )
  .catch((err) => console.log(err))
   }, [ ])
  
  return (
    <div className="App">
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Sr. no. </th>
      <th scope="col">ath</th>
      <th scope="col">ath_change_percentage</th>
      <th scope="col">ath_date</th>
      <th scope="col">atl</th>
      <th scope="col">atl_change_percentage</th>
      <th scope="col">atl_date</th>
      <th scope="col">circulating_supply</th>
      <th scope="col">current_price</th>
      <th scope="col">fully_diluted_valuation </th>
      <th scope="col">high_24h</th>
      <th scope="col">id</th>
      <th scope="col">image</th>
      <th scope="col">last_updated</th>
      <th scope="col">low_24h</th>
      <th scope="col">market_cap</th>
      <th scope="col">market_cap_change_24h </th>
      <th scope="col">market_cap_change_percentage_24h: </th>
      <th scope="col">market_cap_rank</th>
      <th scope="col">max_supply</th>
      <th scope="col">name</th>
      <th scope="col">price_change_24h</th>
      <th scope="col">price_change_percentage_24h</th>
      <th scope="col">roi</th>
      <th scope="col">symbol</th>
      <th scope="col">total_supply</th>
      <th scope="col">total_volume</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    { data &&
      data.map((row, i = 0) => {
        console.log(row.ath_change_percentage)
        i = i + 1
        return(
          <Newrow currentrow = {row} key = {row.ath} sno = {i} />
        )
      })
    }

  </tbody>
</table>
    </div>
  );
}

export default App;
