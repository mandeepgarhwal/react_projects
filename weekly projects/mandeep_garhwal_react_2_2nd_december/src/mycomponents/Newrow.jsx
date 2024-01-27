import React from 'react'

export default function Newrow(currentrow) {
    console.log(currentrow.currentrow)
    console.log(currentrow.sno)
  return (
    <tr>
    <th scope="col">{currentrow.sno}</th>
    <th scope="col">{currentrow.currentrow.ath}</th>
    <th scope="col">{currentrow.currentrow.ath_change_percentage}</th>
    <th scope="col">{currentrow.currentrow.ath_date}</th>
    <th scope="col">{currentrow.currentrow.atl}</th>
    <th scope="col">{currentrow.currentrow.atl_change_percentage}</th>
    <th scope="col">{currentrow.currentrow.atl_date}</th>
    <th scope="col">{currentrow.currentrow.circulating_supply}</th>
    <th scope="col">{currentrow.currentrow.current_price}</th>
    <th scope="col">{currentrow.currentrow.fully_diluted_valuation} </th>
    <th scope="col">{currentrow.currentrow.high_24h}</th>
    <th scope="col">{currentrow.currentrow.id}</th>
    <th scope="col">{currentrow.currentrow.image}</th>
    <th scope="col">{currentrow.currentrow.last_updated}</th>
    <th scope="col">{currentrow.currentrow.low_24h}</th>
    <th scope="col">{currentrow.currentrow.market_cap}</th>
    <th scope="col">{currentrow.currentrow.market_cap_change_24h} </th>
    <th scope="col">{currentrow.currentrow.market_cap_change_percentage_24h} </th>
    <th scope="col">{currentrow.currentrow.market_cap_rank}</th>
    <th scope="col">{currentrow.currentrow.max_supply}</th>
    <th scope="col">{currentrow.currentrow.name}</th>
    <th scope="col">{currentrow.currentrow.price_change_24h}</th>
    <th scope="col">{currentrow.currentrow.price_change_percentage_24h}</th>
    <th scope="col">{(currentrow.currentrow.roi != null) && currentrow.currentrow.roi.percentage}</th>
    <th scope="col">{currentrow.currentrow.symbol}</th>
    <th scope="col">{currentrow.currentrow.total_supply}</th>
    <th scope="col">{currentrow.currentrow.total_volume}</th>
  </tr>
  )
}
