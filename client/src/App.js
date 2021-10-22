import React, { useEffect, useState } from 'react';

function App() {
  const [result, setResult] = useState(null)
  const [orderBuy, setOrderBuy] = useState(null)
  const [orderSell, setOrderSell] = useState(null)

  let resultData;
  let orderData;
  let orderBuyData;
  let orderSellData;

  useEffect(() => {
    async function getResultData() {
      try {
        await fetch('/resultData', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then(res => res.json())
          .then(json => {
            resultData = json.data;
            setResult(resultData.result.price)
          })
      } catch (err) {
        console.log(err)
      }
    }

    getResultData();

    async function getOrderData() {
      try {
        await fetch('/orderbookData', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then(res => res.json())
          .then(json => {
            orderData = json.data;

            orderBuyData = orderData.result.bids;
            orderSellData = orderData.result.asks;

            setOrderBuy(orderBuyData)
            setOrderSell(orderSellData)

          })
      } catch (err) {
        console.log(err)
      }
    }

    getOrderData();
  }, [setInterval(100)])

  if (orderBuy && orderSell && result) {
    //total buy
    // let buy = orderBuy[9][1]
    let buy = orderBuy[14][1]
    let buy1 = buy + orderBuy[13][1]
    let buy2 = buy1 + orderBuy[12][1]
    let buy3 = buy2 + orderBuy[11][1]
    let buy4 = buy3 + orderBuy[10][1]
    let buy5 = buy4 + orderBuy[9][1]
    let buy6 = buy5 + orderBuy[8][1]
    let buy7 = buy6 + orderBuy[7][1]
    let buy8 = buy7 + orderBuy[6][1]
    let buy9 = buy8 + orderBuy[5][1]
    let buy10 = buy9 + orderBuy[4][1]
    let buy11 = buy10 + orderBuy[3][1]
    let buy12 = buy11 + orderBuy[2][1]
    let buy13 = buy12 + orderBuy[1][1]
    let buy14 = buy13 + orderBuy[0][1]

    //total sell
    let sell = orderSell[0][1]
    let sell1 = sell + orderSell[1][1]
    let sell2 = sell1 + orderSell[2][1]
    let sell3 = sell2 + orderSell[3][1]
    let sell4 = sell3 + orderSell[4][1]
    let sell5 = sell4 + orderSell[5][1]
    let sell6 = sell5 + orderSell[6][1]
    let sell7 = sell6 + orderSell[7][1]
    let sell8 = sell7 + orderSell[8][1]
    let sell9 = sell8 + orderSell[9][1]
    let sell10 = sell9 + orderSell[10][1]
    let sell11 = sell10 + orderSell[11][1]
    let sell12 = sell11 + orderSell[12][1]
    let sell13 = sell12 + orderSell[13][1]
    let sell14 = sell13 + orderSell[14][1]

    return (
      <div className="main">
        <div className="graf">
          {/* BUY SIDE */}
          <div class="graf__buysell">
            <div class="graf__buysell--info">
              {orderBuy.slice(0, 15).map((oBuy, index) => (
                oBuy.map((oB, index) => (
                  <div key={index} className="graf__buysell--buyColor">{oB}</div>
                ))
              ))}
            </div>
            <div className="graf__buysell--total">
              <div>{buy14}</div>
              <div>{buy13}</div>
              <div>{buy12}</div>
              <div>{buy11}</div>
              <div>{buy10}</div>
              <div>{buy9}</div>
              <div>{buy8}</div>
              <div>{buy7}</div>
              <div>{buy6}</div>
              <div>{buy5}</div>
              <div>{buy4}</div>
              <div>{buy3}</div>
              <div>{buy2}</div>
              <div>{buy1}</div>
              <div>{buy}</div>
            </div>
          </div>

          {/* CORRECT PRICE */}
          <div>
            <h1 class="correctPrice">{result}</h1>
          </div>

          {/* SELL SIDE */}
          <div class="graf__buysell">
            <div class="graf__buysell--info">
              {orderSell.slice(0, 15).map((oSell, index) => (
                oSell.map((oS, index) => (
                  <div key={index} className="graf__buysell--sellColor">{oS}</div>
                ))
              ))}
            </div>
            <div className="graf__buysell--total">
              <div>{sell}</div>
              <div>{sell1}</div>
              <div>{sell2}</div>
              <div>{sell3}</div>
              <div>{sell4}</div>
              <div>{sell5}</div>
              <div>{sell6}</div>
              <div>{sell7}</div>
              <div>{sell8}</div>
              <div>{sell9}</div>
              <div>{sell10}</div>
              <div>{sell11}</div>
              <div>{sell12}</div>
              <div>{sell13}</div>
              <div>{sell14}</div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="main">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}

export default App;