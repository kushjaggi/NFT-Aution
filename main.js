//Import createPandoraExpressSDK from SDK
const { createPandoraExpressSDK } = require("pandora-express");
const pandoraSDK = createPandoraExpressSDK();

//Connecting with Metamask wallet.
const init = async () => {
//check if metamask is present
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    console.log("Connected");
  } else {
    alert("Metamask not found");
  }
};
const mintNft = async () => {
  //get current account address
    const accounts = await web3.eth.getAccounts();
  //Get ChainID of current account
    const chainId = await web3.eth.net.getId();
  //Mint NFT using SDK erc721 nft mint
   await pandoraSDK.erc721.nft.mint(web3, chainId, accounts[0], itemURI.value, [
    [accounts[0], 100],
  ]);
  }
  const auctionNft = async () => {
    const accounts = await web3.eth.getAccounts();
    const chainId = await web3.eth.net.getId();
    console.log(chainId);
    await pandoraSDK.erc721.order.sellNFTByBid(
      web3,
      chainId,
      auctionItemTokenId.value,//Token ID
      auctionItemPrice.value,// Base Price of Token
      accounts[0],
      auctionItemTime.value// Time of Auction
    );
  }
  const bid = async () => {
    const accounts = await web3.eth.getAccounts();
    const chainId = await web3.eth.net.getId();
    console.log(chainId);
    await pandoraSDK.erc721.order.bid(
      web3,
      chainId,
      BidItemSaleId.value, //Sale ID of Token
      accounts[0],
      BidItemPrice.value // Price offered by the Bidder
    );
  };
  const executeBid = async () => {
    const accounts = await web3.eth.getAccounts();
    const chainId = await web3.eth.net.getId();
    console.log(chainId);
    await pandoraSDK.erc721.order.acceptBid(
      web3,
      chainId,
      ExecuteSaleId.value, //Sale ID of the token on Auction
      ExecuteBidId.value, //Bid ID of the Bid offering
      accounts[0]
    );
  };
  const withdrawBidMoney = async () => {
    const accounts = await web3.eth.getAccounts();
    const chainId = await web3.eth.net.getId();
    console.log(chainId);
    await pandoraSDK.erc721.order.withdrawBid(
      web3,
      chainId,
      WithdrawSaleId.value,
      WithdrawBidId.value,
      accounts[0]
    );
  }
  const cancelSale = async () => {
    const accounts = await web3.eth.getAccounts();
    const chainId = await web3.eth.net.getId();
    console.log(chainId);
    await pandoraSDK.erc721.order.cancelSale(
      web3,
      chainId,
      accounts[0],
      CancelSaleId.value
    );
  }
  const itemURI = document.getElementById("txtCreateItemURI");

  const createItemButton = document.getElementById("btnCreateItem");
  createItemButton.onclick = mintNft;
  
  const itemURI1 = document.getElementById("txtCreateItemURI1");
  const itemURI2 = document.getElementById("txtCreateItemURI2");
  
  const auctionItemTokenId = document.getElementById("numAuctionItemTokenId");
  const auctionItemPrice = document.getElementById("numAuctionItemPrice");
  const auctionItemTime = document.getElementById("numAuctionItemTime");
  
  const auctionItemButton = document.getElementById("btnAuctionItem");
  auctionItemButton.onclick = auctionNft;
  
  const BidItemSaleId = document.getElementById("numBidItemSaleId");
  const BidItemPrice = document.getElementById("numBidItemPrice");
  
  const BidItemButton = document.getElementById("btnBidItem");
  BidItemButton.onclick = bid;
  
  const ExecuteSaleId = document.getElementById("numExecuteSaleId");
  const ExecuteBidId = document.getElementById("numExecuteBidId");
  
  const ExecuteBidItemButton = document.getElementById("btnExecuteBidItem");
  ExecuteBidItemButton.onclick = executeBid;
  
  const WithdrawSaleId = document.getElementById("numWithdrawSaleId");
  const WithdrawBidId = document.getElementById("numWithdrawBidId");
  
  const WithdrawBidItemButton = document.getElementById("btnWithdrawBidItem");
  WithdrawBidItemButton.onclick = withdrawBidMoney;
  
  const CancelSaleId = document.getElementById("numCancelSaleId");
  
  const CancelItemSaleButton = document.getElementById("btnCancelItemSale");
  CancelItemSaleButton.onclick = cancelSale;
  
  init();
             