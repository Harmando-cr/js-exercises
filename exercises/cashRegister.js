// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
// payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, 
// as the value of the change key.

function checkCashRegister(price, cash, cid) {
const currency = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1, 
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01,
  }
  let change = cash - price

  const currencyChange = {}

  const response = {status:'OPEN', change:[]}

  const cashInd = cid.reduce((acc,elm) => {
    return {...acc, [elm[0]]:elm[1]}
  },{})

  if(Object.values(cashInd).reduce((a,b) => a + b,0) === change){
    response.status = 'CLOSED'
    response.change = cid
    return response
  }

  for(const cur in currency){
    while(currency[cur] <= change){
      if(cashInd[cur] - currency[cur] >= 0){
        change = (change - currency[cur]).toFixed(2)
        cashInd[cur] = (cashInd[cur] - currency[cur]).toFixed(2)
        currencyChange[cur] = currencyChange[cur] ? currencyChange[cur] + currency[cur] : currency[cur] 
      }else{
        break
      }
    }
  }

  if (change > 0){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }

  response.change = Object.entries(currencyChange)
  return response
}

module.exports = checkCashRegister