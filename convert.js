const cryptoAmountInput = document.getElementById("crypto-amount");
const resultDisplay = document.getElementById("result-display");
const cryptoDisplay = document.getElementById("crypto-display")
const dollarDisplay = document.getElementById("dollar-display")
const searchInput = document.getElementById("search-input");
const bitcoinClick = document.getElementById("bitcoin-click");
const ethereumClick = document.getElementById("ethereum-click");
const cryptoAmountNumber = Number(cryptoAmountInput.value); 
const bitcoinText = " Bitcoin(s)";
const ethereumText =" Ethereum(s)";
const dollarText=" Dollar(s)";
const searchBoxPopup =  document.getElementById("search-box-popup")
//const bitcoinAmount = Number(cryptoAmountInput.value) * 21000;
//const ethereumAmount = cryptoAmountNumber * 1500;
const hasSelectedBitcoin = false;
const hasSelectedEthereum = false;
bitcoinClick.addEventListener("click", function(){
    //console.log("ready to type")
    
    //console.log(cryptoAmountNumber);
    const bitcoinAmount = 21000 * Number(cryptoAmountInput.value); 
    console.log(Number(cryptoAmountInput.value));
    //console.log(bitcoinAmount);
    cryptoDisplay.innerHTML = cryptoAmountInput.value + bitcoinText;
    dollarDisplay.innerHTML = String(bitcoinAmount) + dollarText;
    console.log(bitcoinAmount);
  })
  ethereumClick.addEventListener("click", function(){
    //console.log("ready to type")
    
    //console.log(cryptoAmountNumber);
    const ethereumAmount = 1500 * Number(cryptoAmountInput.value); 
    console.log(Number(cryptoAmountInput.value));
    //console.log(bitcoinAmount);
    cryptoDisplay.innerHTML = cryptoAmountInput.value + ethereumText;
    dollarDisplay.innerHTML = String(ethereumAmount) + dollarText;
    console.log(ethereumAmount);
  })
  searchInput.addEventListener("focus", function(){
    searchBoxPopup.classList.remove("hidden");

  })
  /*
  searchInput.addEventListener("blur", function(){

  cryptoAmountInput.addEventListener("focus", function(){

    searchBoxPopup.classList.add("hidden");

  })
  */

//const hasLetterE = [a.e];
//const hasLetterB = [a.b];

//if bitcoin selected show div with bitcoin info else show ethereum
if(hasSelectedBitcoin){
    resultDisplay.classList.remove("hidden");
}