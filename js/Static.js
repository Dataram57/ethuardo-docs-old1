//Static.js Version 0.7

//testing account
//login: 0x721a22eE6A1CAe9217831D7fB317cA31f1a862d3
//pass: ss

//TO REMOVE:
//withdraw page whole with js
const staticJsVersion='0.4.8';

const minWithdrawETH = 0.0001;
const maxWithdrawETH = 6;
const gasTransaction = 21000;  
const gasTxDataNonZero = 68;
const fixDecimalIndex = 5;
const fixPriceDecimalIndex = 5;
const minClaimableProfit = 0;
const serviceFeeMulti= 0.98;

//Media Slot
const str1 = "<div class='";
const str2 = " pad1'>\n<div class='border'>\n<a onclick='MediaView(";
const str3 = ")' href='#'>\n<img id='MediaSlot";
const str4 = "Img' src='/img/0.png' class='img-fluid'>\n</img>\n</a>\n</div>\n</div>";

const strPopupCancelButton = '<button type="button" class="btn btn-outline-light" data-dismiss="modal" aria-label="Close">Close</button>';
const strPopupOpenInNewTab2 = '"><button type="button" class="btn btn-outline-light">Open in new tab</button></a>';
const strAHref = '<a href="';
const strYouTube1 = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/';
const strYouTube2 = '" allowfullscreen></iframe></div>';

const strConfirmBtn1 = "<button type='button' onClick='";
const strConfirmBtn2 = "' class='btn btn-outline-light'>Confirm</button>";

const strBr='<br />';
const strEndDivTimes3 = "</div>\n</div>\n</div>";
const strEndDivTimes2 = "</div>\n</div>";

const strMediaAddNew = "<label>Media caption</label><input class='form-control input1' id='mediaAddNewCaption' placeholder='' maxlength='64' /><div class='pad1'></div><div class='d-flex d-flex justify-content-center'><button type='button' class='btn btn-outline-light' onclick='MediaAddNewOptionYT()'>Youtube video</button><div class='pad2'></div><button type='button' class='btn btn-outline-light' onclick='MediaAddNewOptionImg()'>Image</button><div class='pad2'></div><button type='button' class='btn btn-outline-light' onclick='MediaAddNewOptionLinkImg()'>Existing image</button></div><div class='pad1'></div><div class='bg2 pad2'><div class='border2 pad1' id='mediaAddNewOption'></div></div>";
const strMediaAddNewOptionYT = "<h1>Youtube Video</h1><div class='pad1'></div><label>Youtube video id</label><div class='d-flex'><input class='form-control input1' id='YoutubeTarget' placeholder='' maxlength='64' /><button type='button' class='btn btn-outline-light' onclick='MediaYTCheck()'>Check</button></div><div class='pad1'></div><div id='youTubeVideoCheck'></div><div class='pad1'></div>";
const strMediaAddNewOptionLinkImg = "<h1>Link image</h1><div class='pad1'></div><label>Image URL</label><div class='d-flex'><input class='form-control input1' id='ImageTarget' placeholder=''/><button type='button' class='btn btn-outline-light' onclick='MediaImgCheck()'>Check</button></div><div class='pad1'></div><div id='imgCheck'></div><div class='pad1'></div>";

const strMediaAddNewOptionBtn1 = "<button type='button' class='btn btn-outline-light' onclick='";
const strMediaAddNewOptionBtn2 = "'>Add</button>";

const strBtn1 = "<button type='button' class='btn btn-outline-danger' onclick='";
const strBtn2 = "'>";
const strBtnEnd = "</button>";

const strImg1 = "<img class=' w-100 img-response' src='";
const strImg2 = "'/>";

const strRow1 = '<tr><th scope="row">';
const strThEnd = '</th>';
const strTd = '<td>';
const strTdEnd = '</td>';
const strTrEnd = '</tr>';

const strBill1="<div class=' d-flex text-break'>\n<div class='border6 w-100 padC'><a class='link1' href='/get?id=";
//const strBtn2;
const strBill3="</a></div>\n<div class='text-right w-100'>";

const strSmCurrency1="<div class='pad1'><div class='bg1 pad2'><div class='pad1 border2'>";

const strNDef='undefined';

const strWDSlot1="<div class='col-6 col-lg-3 pad9'><div class='bg2 pad2'><div class='border2 pad1'><div class='border'><img src='/thumb/";
const strWDSlot2=".png' class='d-fluid w-100'></img></div><a href='/get?id=";
const strWDSlot3="' class='link2'>";
const strWDSlot4="</a><p>Avaliable ETH:<br>";
const strWDSlot5="</p><input class='form-control input1' step='0.00001' id='";
const strWDSlot6="' type='number' min='";
const strWDSlot7="' max='2' placeholder='Amount'></div></div></div>";

const strCart1="<div class='bg2 pad2'><div class='border2 pad1'><div class='row text-center'>";
const strCartSlot1="<div class='col-6 col-sm-4 col-lg-3 col-xl-2'><div class='pad2 border2'><img src='/thumb/";
const strCartSlot2=".png' class='img-responsive img-fluid border'></img><a href='/get?id=";
const strCartSlot3="' class='link1'><h5 id='AddToCartTitle";
const strCartSlot4="'>";
const strCartSlot5="</h5></a><button type='button' class='btn btn-outline-light' onclick='";
const strCartSlot6="' id='";
const strCartSlot7="'>Remove</button></div></div>";
const strCartBtnPayment="<a href='/payment' id='GoToPaymentHref'><button type='button' class='btn btn-outline-light' id='GoToPaymentBtn'>Go to Payments</button></a>";
var serviceDevMode=false;
function SubNull(){}

//local storage:
//Item						Description
//Cart						Array of assets in cart
//CartTitles				Array of assets names
//Wallet-Type				Metamask or other possible wallets..
//Wallet-Account			Wallet current account
//WALLET-Accounts			Wallet accounts
//WALLET-Account			Wallet account
//Orders					txid of the order
//OrdersNames				Orders names
//OrdersTypes				Orders types
//OrdersStatuses			Orders statuses
//Order Statuses:
//-1 - failed
//0 - pending
//1 - done
//2 - done in the past



//This function does nothing, but it is being launched whenever the page will load. (can be overriden)
function InitPage(){}

function GoToSite(link)
{
	if(serviceDevMode) console.log("Should visit: " + link);
	else location.href=link;
}
function GoToSiteNewTab(link)
{
	window.open(link, '_blank').focus();
}

//Code reader/interpreter
class Dimperpreter
{
	//symbols:
	// , next arguments
	// ; end arguemtns
	// @ escape/skip
	
	constructor(scode)
	{
		this.code = scode;
		this.i=0;
	}
	
	Next()
	{
		var temp="";
		var param="";
		let params=[];
		while(this.i < this.code.length)
		{
			temp=this.code.substring(this.i,this.i+1);
			if(temp=="@") { this.i++; param+=this.code.substring(this.i,this.i+1); }
			else if(temp==",") { params.push(param); param=""; }
			else if(temp==";") { params.push(param); this.i++; break; }
			else param+=temp;
			this.i++;
		}
		return params;
	}

	LeftRawData() {return this.code.substring(this.i,this.code.length);}
}

function DimProtect(str)
{
	str=str.replaceAll('@','@@');
	str=str.replaceAll(',','@,');
	str=str.replaceAll(';','@;');
	return str;
}
function HTMLProtect(txt)
{
	const chars=['<',	'>',	' '		];
	const alter=['lt',  'gt',	'nbsp'		];
	for(let i=chars.length-1;i>-1;i--)
		txt=txt.replaceAll(chars[i],'&'+alter[i]);
	return txt;
}
//Utilities
function CalcGas(message){return gasTransaction+gasTxDataNonZero * message.length;}
function CopyToClipboard(txt){navigator.clipboard.writeText(txt);}
function CryptoToFriendly(eth1,eth2){return (eth2 + eth1 / 1000000000000000000).toFixed(fixDecimalIndex);}

function UTF8_Hex(str)
{
	let hex = '';
	for(var i=0;i<str.length;i++)
	{
		hex += ''+str.charCodeAt(i).toString(16);
	}
	return hex;
}

//Api
async function FetchApiRaw(formData,url,callback)
{
	//let formData = new FormData();
	//formData.append('command', 'AddUser');
	let data = await fetch(url, {method: "POST", body: formData})
	.then(response =>
	{
		if (!response.ok)
		{
			throw new Error('Network response was not ok');
			return false;
		}
		return response.text();
	})
	.then(data =>
	{
		console.log(data);
		return data;
	})
	.catch(error =>
	{
		console.error('There has been a problem with fetch operation:', error);
		callback(false);
		return false;
	});
	if(callback!=null) callback(data);
	else return data;
}
async function FetchApi(formData,callback){return await FetchApiRaw(formData,'/api/',callback);}

function DisableWalletChangeNetwork()
{
	let t=document.getElementById('btn-wallet-ChangeNetwork');
	if(t==null) return;
	t.classList.add('disabled');
}
function EnableWalletChangeNetwork()
{
	let t=document.getElementById('btn-wallet-ChangeNetwork');
	if(t==null) return;
	t.classList.remove('disabled');
}

async function WalletChangeNetwork()
{
	let coinIndex=GetCoinIndex(GetSelectedCoinId());
	let networkIndex=GetNetworkIndex(serviceCoinNetworkId[coinIndex]);
	console.log(networkIndex);	
	let chainId=serviceNetworkChainId[networkIndex];
	let address='';
	
	//block if disabled
	let t=document.getElementById("btn-wallet-ChangeNetwork");
	if(t.classList.contains('disabled')) return;
	
	if(isWalletConnected())
	{
		switch(localStorage.getItem('Wallet-Type'))
		{
			case 'MetaMask':
				//Correct ChainId
				if(chainId!==ethereum.chainId) chainId="0x" + chainId.toString(16);
				//Check current selected ChainId
				if(ethereum.chainId!=chainId)
				{	
					console.log('MetaMask: ChangeNetwork');
					
					//https://docs.metamask.io/guide/rpc-api.html#unrestricted-methods
					try
					{
						await MetaMaskRequest("wallet_switchEthereumChain",{chainId: chainId});
					}
					catch(switchError)
					{
						if (switchError.code === 4902)
						{
							try
							{
								await MetaMaskRequest("wallet_addEthereumChain",  
								{ 
									chainId: chainId, // A 0x-prefixed hexadecimal string
									chainName: serviceNetworkWalletTitles[networkIndex],
									nativeCurrency:
									{
										name: serviceNetworkCurrencyName[networkIndex],
										symbol: serviceNetworkCurrencySymbol[networkIndex], // 2-6 characters long
										decimals: 18
									},
									rpcUrls: [serviceNetworkRPC[networkIndex]],
									blockExplorerUrls: [serviceNetworkExplorer[networkIndex]]
								});
							}
							catch(e)
							{
								console.log('MetaMask: Error app side or used refused to add new chain');
								return;
							}
							try
							{
								console.log('MetaMask: ChangeNetwork Secound Attemp');
								await MetaMaskRequest("wallet_switchEthereumChain",{chainId: chainId});
							}
							catch(e)
							{
								console.log('MetaMask: User added network, but denied switch to that network.');
								return;
							}
						}
						else
						{
							console.log('MetaMask: Error app side');
							return;
						}
					}
					/**/
				}
				address=ethereum.selectedAddress;
				break;
		}
		let obj=document.getElementById("address");
		if(obj!=null && address!='') obj.value=address;
	}
	
}


//LocalStorage
//Wallet-Type		-	tells which type of wallet is being connected.
//Wallet-Network	-	tells on what network the transaction will be sent.
////Types(Some types of wallets will not use specific chains):
//0,default		-		Ethereum
//1				-		Binance Smart Chain
//Universal Transaction Functions for this service.


//Options
//from		if is 'NULL', then the sender is the connected wallet first address
//from		if is null, then the sender is picked from the wallet based on the provided coinId
async function CreateTransaction(amount,message,funcAccept,funcWalletNotSetup,from,coinId)
{	
	//correct the amount
	if(isNaN(parseFloat(amount))) amount='0';
	amount=(parseFloat(amount) + 0.000001).toFixed(6);
	
	//log
	console.log("NewTransaction { \namount: "+amount+"\nmessage: " + message + "\nfrom: " + from + "\ncoinID: " + coinId + "\n}");
	
	if(isWalletConnected())
	{
		//Convert testnet coinId to mainnet coinId
		if(serviceDevMode)
			if(typeof coinId !== 'undefined' && coinId!=null && parseInt(coinId)<0)
				coinId=(parseInt(coinId)*-1+1).toString();
	
		//Coin and network
		let coinIndex=0;
		//Coin
		if(typeof coinId !== 'undefined' && coinId!=null)
			coinIndex=GetCoinIndex(coinId);
		else
			coinIndex=GetCoinIndex(GetSelectedCoinId());
		//Network
		let networkIndex=GetNetworkIndex(serviceCoinNetworkId[coinIndex]);
		
		//get random address for the target network
		let recipientAddress=GetRecipientByNetworkIndex(networkIndex);
		if(from==null)	//means that the sender can be any address
			from=GetUserAddress(serviceCoinNetworkId[coinIndex]); //Pick the address of the user
		if(from=='NULL' || from==false)
			from=GetWalletAccount(); //use address that is currently
		//set the sender of this transaction
		
		//Create/calc amount in Wei
		let amountWei=web3.utils.toWei(amount.toString(), "ether");
		
		//Raw Data
		let rawData=UTF8_Hex(message);
		
		//currently this service will not support coins which are smart contracts. (requires deeper dive into MetaMask API)
		//16/4/2022
		//depends... it is not so buried idea.
		
		//Create and execute the transaction
		PopupWalletListen();
		switch(GetWalletType())
		{
			case 'Wallet_Connect':
				
				try
				{
					let result = await currentWallet.eth.sendTransaction({
						from: from,
						to: recipientAddress,
						value: amountWei,
						data: rawData
					});
					console.log('WC result - Start')
					console.log(result);
					console.log('WC result - End')
					if(funcAccept!=null) funcAccept(result.transactionHash);
				}
				catch(err)
				{
					console.log(err);
					PopupMsg('Error',err.toString());
				}
				
				break;
			case 'MetaMask':
				//Chain Id
				let chainId=serviceNetworkChainId[GetNetworkIndex(serviceCoinNetworkId[coinIndex])];
				//Correct ChainId
				if(chainId!==ethereum.chainId) chainId="0x" + chainId.toString(16);
				
				//MetaMask is more safer than the WalletConnect, cause it allows the dapp to switch the wallet network.
				//Check current selected ChainId
				if(ethereum.chainId!=chainId)
				{	
					console.log('MetaMask: ChangeNetwork');
					
					//https://docs.metamask.io/guide/rpc-api.html#unrestricted-methods
					try
					{
						await MetaMaskRequest("wallet_switchEthereumChain",{chainId: chainId});
					}
					catch(switchError)
					{
						if (switchError.code === 4902)
						{
							console.log("MetaMask: Network could't be changed. Try to add new.");
							try
							{
								await MetaMaskRequest("wallet_addEthereumChain",  
								{ 
									chainId: chainId, // A 0x-prefixed hexadecimal string
									chainName: serviceNetworkTitles[networkIndex],
									nativeCurrency:
									{
										name: serviceNetworkCurrencyName[networkIndex],
										symbol: serviceNetworkCurrencySymbol[networkIndex], // 2-6 characters long
										decimals: 18
									},
									rpcUrls: [serviceNetworkRPC[coinIndex]],
									blockExplorerUrls: [serviceNetworkExplorer[coinIndex]]
								});
							}
							catch(e)
							{
								console.log('MetaMask: Error app side or used refused to add new chain');
								PopupMsg('Error','MetaMask: Error app side or used refused to add new chain');
								return;
							}
							try
							{
								console.log('MetaMask: ChangeNetwork Secound Attemp');
								await MetaMaskRequest("wallet_switchEthereumChain",{chainId: chainId});
							}
							catch(e)
							{
								console.log('MetaMask: User added network, but denied switch to that network.');
								PopupMsg('Error','MetaMask: User added network, but denied switch to that network.');
								return;
							}
						}
						else
						{
							console.log('MetaMask: Error app side.');
							PopupMsg('Error','MetaMask: Error app side.');
							return;
						}
					}
					/**/
				}
				
				//Inform the user that Metamask is cursed
				transaction = ({
					data: rawData,
					gas: CalcGas(message),
					from: from,
					to: recipientAddress,
					chainId: chainId,
					value: amountWei,
				});
				MetaMaskTransaction(transaction,funcAccept);
				break;
			default:
				console.error('Impossible wallet type!');
				PopupMsg('Error','Impossible wallet type!');
				break;
		}
	}
	else
	{
		console.log('Wallet is not setup');
		if(funcWalletNotSetup!=null) funcWalletNotSetup(0);
		else PopupWalletNotSetup();
	}
}

//Coins/Tokens/Currency
;;var serviceCoinIds=[				'-1',		'0',		'1',		'-2'
];var serviceCoinTitles=[			'Ether',	'Ether',	'Matic',	'Matic'
];var serviceCoinSymbols=[			'ETH',		'ETH',		'MATIC',	'MATIC'
];var serviceCoinNetworkId=[		'-1',		'0',		'1',		'-2'
];var serviceCoinIsAvailable=[		true,		true,		true,		true
//Networks
];var serviceNetworkId=[				'-1',																'0',								'-2',											'1'
];var serviceNetworkIsTestnet=[			true,																false,								true,											false
];var serviceNetworkIsAvailable=[		true,																true,								true,											true
];var serviceNetworkChainId=[			4,																	1,									80001,											137
];var serviceNetworkTitles=[			'Rinkeby (Ethereum)',												'Ethereum',							'Mumbai (Polygon)',								'Polygon'
];var serviceNetworkWalletTitles=[		'Rinkeby Test Network',												'Ethereum Mainnet',					'Mumbai',										'Polygon Mainnet'
];var serviceNetworkCurrencyName=[		'Ether',															'Ether',							'Matic',										'Matic'
];var serviceNetworkCurrencySymbol=[	'ETH',																'ETH',								'MATIC',										'MATIC'
];var serviceNetworkBaseCoinId=[		'-1',																'0',								'-2',											'1'
];var serviceNetworkAddressPackIndex=[	0,																	0,									0,												0			
];var serviceNetworkRPC=[				'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',	'https://cloudflare-eth.com/',		'https://matic-mumbai.chainstacklabs.com',		'https://polygon-rpc.com'
];var serviceNetworkExplorer=[			'https://rinkeby.etherscan.io',										'https://etherscan.io',				'https://mumbai.polygonscan.com',				'https://polygonscan.com'
];var serviceNetworkExplorerName=[		'Rinkeby.EtherScan',												'EtherScan',						'Mumbai.PolygonScan',							'PolygonScan'
];var serviceNetworkAddressPack=[
/*Ethereum and Polygon*/['0x653eEC0F86E350e3bbC40a2B68fa6F36CAeEBD77','0x6b494581D84bEb0eE64EEC74dEA3896A7090eB61']

];

function GetRecipientByNetworkIndex(i)
{
	let arr=serviceNetworkAddressPack[serviceNetworkAddressPackIndex[i]];
	return arr[Math.floor(Math.random() * arr.length)];
}

function GetNetworkIndex(networkId)
{
	for(let i=serviceNetworkId.length-1;i>-1;i--)
		if(serviceNetworkId[i]==networkId)
			return i;
	return -1;
}

function GetNetworkIndexByChainId(chainId)
{
	if(!isNaN(ethereum.chainId)) chainId=parseInt(chainId);
	else return -1;
	for(let i=serviceNetworkChainId.length-1;i>-1;i--)
		if(serviceNetworkChainId[i]==chainId)
			return i;
	return -1;
}

function GetCoinIndex(coinId)
{
	for(let i=serviceCoinIds.length-1;i>-1;i--)
		if(serviceCoinIds[i]==coinId)
			return i;
	return -1;
}

function GetCoinIndexBySymbol(symbol)
{
	symbol=symbol.trim().toUpperCase();
	for(let i=serviceCoinIds.length-1;i>-1;i--)
		if(!serviceNetworkIsTestnet[i] && serviceCoinSymbols[i]==symbol)
			return i;
	return -1;
}

function GetCoinIdBySymbol(symbol)
{
	return serviceCoinIds[GetCoinIndexBySymbol(symbol)];
}
function GetNetworkTitleByCoinId(coinId){return serviceNetworkTitles[GetNetworkIndex(serviceCoinNetworkId[GetCoinIndex(coinId)])];}
function GetCoinFullNameByIndex(i){return serviceCoinSymbols[i] + ' - ' + serviceCoinTitles[i];}
function GetCoinFullNameById(i){return GetCoinFullNameByIndex(GetCoinIndex(i));}

function GetSelectedChainId(){return serviceNetworkChainId[GetSelectedNetworkIndex()];}
function GetSelectedCoinId()
{
	let i=localStorage.getItem('selectedCoinId');
	if(i==undefined) return 0;
	return parseInt(i);
}
function GetSelectedCoinIndex(){return GetCoinIndex(GetSelectedCoinId());}
function GetSelectedNetworkIndex(){return GetNetworkIndex(serviceCoinNetworkId[GetCoinIndex(GetSelectedCoinId())]);}
function GetSelectedNetworkId(){return serviceNetworkId[GetSelectedNetworkIndex()];}
function GetServiceAddress(){return serviceNetworkAddress[GetSelectedNetworkIndex()];}
function GetNetworkBaseCoinId(networkId) {return serviceNetworkBaseCoinId[GetNetworkIndex(networkId)];}


function ResetNetworkSelectors(){localStorage.setItem('disabledNetworks','');}

//Coin/Network selector vars
var currentWallet=null;
var wasWalletChosen=false;
var blockNetworkSwitching=false;
var blockCoinSwitching=false;

function InitCoinSelector()
{
	let t=document.getElementById('Spawn-CoinSelector');
	if(t==null) return;
	let html='';
	
	//Main button
	html+='<a class="btn btn-outline-light dropdown-toggle" id="coinSelector-selected" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false"></a>';
	
	//Options
	html+='<div class="dropdown-menu bg5" id="coinSelector-options" aria-labelledby="dropdownMenuLink">';
	
	//End writing
	html+='</div>';
	t.innerHTML=html
	html=null;
	
	//Render Coin Options
	UpdateCoinSelectorOptions();
	
	//Select Current Coin
	UpdateCoinSelectorSelected();
}

function UpdateCoinSelector()
{
	UpdateCoinSelectorSelected();
	UpdateCoinSelectorOptions();
}

function UpdateCoinSelectorSelected()
{
	let t=document.getElementById('coinSelector-selected');
	if(t==null) return;
	
	t.innerHTML=GetCoinFullNameByIndex(GetSelectedCoinIndex());
}

function UpdateCoinSelectorOptions()
{
	let t=document.getElementById('coinSelector-options');
	if(t==null) return;
	let html='';
	
	//Load options
	const s1='<a class="dropdown-item netOpt1';
	const s2='"  href="#" onclick="SelectCoin(';
	const s3=');">';
	const s4='</a>';
	
	let selectedNetworkId=parseInt(serviceNetworkId[GetSelectedNetworkIndex()]);
	
	//write options
	for(let i=0;i<serviceCoinNetworkId.length;i++)
		if(parseInt(serviceCoinNetworkId[i])==selectedNetworkId)
		{
			html+=s1;
			html+=s2 + "'" + serviceCoinIds[i] + "'" + s3;
			html+=GetCoinFullNameByIndex(i) + s4;
		}
	
	//end options
	t.innerHTML=html;
}

var onCoinSelected=null;
function SelectCoin(id)
{
	//block
	if(blockCoinSwitching) return;
	
	//block if has been already selected
	if(parseInt(GetSelectedCoinId())==parseInt(id)) return;
	
	//set coin as selected
	localStorage.setItem('selectedCoinId',id);
	
	//Update Selector
	UpdateCoinSelectorSelected();
	
	//Event
	if(onCoinSelected!==null) onCoinSelected();
}

function InitNetworkSelector()
{
	let t=document.getElementById('Spawn-NetworkSelector');
	if(t==null) return;
	let html='';
	
	//Main button
	html+='<a class="btn btn-outline-light dropdown-toggle" id="networkSelector-selected" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false"></a>';
	
	//Options
	html+='<div class="dropdown-menu bg5" id="networkSelector-options" aria-labelledby="dropdownMenuLink">';
	
	//End writing
	html+='</div>';
	t.innerHTML=html;
	html=null;
	
	//Render Network Options
	UpdateNetworkSelectorOptions();
	
	//Select Current Network
	UpdateNetworkSelectorSelected();
}

function UpdateNetworkSelectorSelected()
{
	let t=document.getElementById('networkSelector-selected');
	if(t==null) return;
	
	t.innerHTML=serviceNetworkTitles[GetSelectedNetworkIndex()];
}

function UpdateNetworkSelectorOptions()
{
	let t=document.getElementById('networkSelector-options');
	if(t==null) return;
	let html='';
	
	//Load consts
	const s1='<a class="dropdown-item netOpt1';
	const s2='"  href="#" onclick="SelectNetwork(';
	const s3=');">';
	const s4='</a>';
	
	let selectedNetworkIndex=GetSelectedNetworkIndex();
	
	//write options
	for(let i=0;i<serviceNetworkId.length;i++)
		if(serviceNetworkIsAvailable[i] && (!serviceNetworkIsTestnet[i] || serviceDevMode))
		{
			html+=s1;
			if(selectedNetworkIndex != i && blockNetworkSwitching)
				html+='-disabled';
			html+=s2 + "'" + serviceNetworkId[i] + "'" + s3;
			html+=serviceNetworkTitles[i] + s4;
		}
	
	//end options
	t.innerHTML=html;
}

var onNetworkSelected=null;
function SelectNetwork(id)
{
	//block
	if(blockNetworkSwitching) return;
	
	//block if has been already selected
	if(parseInt(GetSelectedNetworkId())==parseInt(id)) return;

	//set coin(use base coin of the selected network) as selected
	localStorage.setItem('selectedCoinId',GetNetworkBaseCoinId(id));
	
	//Update Selector
	UpdateNetworkSelectorSelected();
	
	//Update CoinSelector
	UpdateCoinSelector();
	
	//Event
	if(onNetworkSelected!==null) onNetworkSelected();
	if(onCoinSelected!==null) onCoinSelected();
}

//Universal Connected Wallet Checker for this service
function isWalletConnected()
{
	if(!wasWalletChosen) return false;
	
	switch(localStorage.getItem('Wallet-Type'))
	{
		case 'MetaMask':return isMetaMaskInstalled();break;
		case 'Wallet_Connect':return true;break;
	}
	return false;
}



//Metamask
async function MetaMaskRequest(method_name,params_)
{
	return await ethereum.request({
		method:	method_name,
		params: [params_]
	});
}

function isMetaMaskInstalled() {return typeof ethereum !== 'undefined';}

async function MetaMaskSetup(callback)
{
	//console.log("MetaMask-Setting_up")
	if(!isMetaMaskInstalled) {console.error('MetaMask is not even installed!!!');return;}
	//https://docs.metamask.io/guide/getting-started.html#basic-considerations
	try
	{
		const accounts = await MetaMaskRequest('eth_requestAccounts');
		SetWallet('MetaMask',accounts[0])
		callback();
	}
	catch(err)
	{
		console.error('User denied account access.',err);
	}
}

function SetWallet(walletType,account)
{
	blockNetworkSwitching=false;
	wasWalletChosen=true;
	localStorage.setItem('Wallet-Type',walletType);
	localStorage.setItem('Wallet-Account',account);
	EnableWalletChangeNetwork();
	if(onWalletConnected!=null) onWalletConnected();
}
function ResetWallet(){SetWallet('',''); wasWalletChosen=false;};
function GetWalletType(){return localStorage.getItem('Wallet-Type');}
function GetWalletAccount(){return localStorage.getItem('Wallet-Account').toLowerCase();}

function MetaMaskTransaction(transaction,callback)
{
	/*
	transaction = ({
		data: UTF8_Hex(message),
		gas: web3.utils.toHex(CalcGas(message)),
		from: web3.givenProvider.selectedAddress,
		to: ethOwner,
		value: web3.utils.toWei(cryptoPrice.toString(), "ether"),
	})
	/**/
	if(window.ethereum)
	{	
		web3.eth.sendTransaction(transaction, (err,transactionId) =>
		{
			if (err)	//rejected 
			{
				console.log('MetaMask-Transaction-Rejected', err);
				PopupMsg('MetaMask problem.',
				"MetaMask couldn't make the transaction becouse one or more causes like:<br><br>"+
				"-You have just rejected the transaction<br>"+
				"-Account is not allowed to be used on this website.<br>"+
				"-<br>"
				);
				
			}
			else		//accepted
			{
				console.log('MetaMask-Transaction-Done: ' + transactionId);
				callback(transactionId);
			}
		});
	}
	else
	{
		console.error("MetaMask-Not_Connected");
	}
}


function ClearWalletsButtons()
{
	let arr=['btn-wallet_connect','btn-metamask'];
	let tag=null;
	for(let i=arr.length-1;i>-1;i--)
	{
		tag=document.getElementById(arr[i]);
		tag.classList.remove('btn-selected-wallet');
		tag.parentElement.classList.remove('btn-selected-wallet-parent');
	}
}

var onWalletConnected=null;
function SetWalletButton(idName)
{
	ClearWalletsButtons();
	let tag=document.getElementById(idName);
	tag.classList.add('btn-selected-wallet');
	tag.parentElement.classList.add('btn-selected-wallet-parent');
}

async function BtnMetaMaskSetup()
{
	await MetaMaskSetup(function() {
		SetWalletButton('btn-metamask');
	});
	UpdateFillUpAddress(ethereum.selectedAddress);
	UpdateNetworkSelectorOptions();
}

function UpdateFillUpAddress(address)
{
	let tag=document.getElementById('address');
	if(tag!=null) tag.value=address;
}

async function BtnWalletConnectSetup()
{
	//disconnect
	if(GetWalletType()=='Wallet_Connect' && wasWalletChosen)
	{
		currentWallet.currentProvider.disconnect();
		ClearWalletsButtons();
		ResetWallet();
		UpdateNetworkSelectorOptions();
		EnableWalletChangeNetwork();
		return;
	}
	
	//define arr
	let arr={
		rpc: {}
		/**/
		,bridge: 'https://bridge.walletconnect.org',
	};
	//add rpcs
	for(let i=serviceNetworkRPC.length-1;i>-1;i--)
		if(serviceNetworkIsAvailable[i])
			arr.rpc[serviceNetworkChainId[i]]=serviceNetworkRPC[i];
	
	let provider = new WalletConnectProvider.default(arr);
	
	try{
		await provider.enable();
	}
	catch(err)
	{
		console.log('User denied Wallet_connect');
		return;
	}
	
	//create wallet
	currentWallet = new Web3(provider);
	
	//SelectNetwork (WC doesn't allow the service to change the network)
	let targetChain=await currentWallet.eth.getChainId();
	if(GetSelectedChainId()!=targetChain)
	{
		let i=0;
		//find network with that id
		for(i=serviceNetworkChainId.length-1;i>-1;i--)
			if(serviceNetworkChainId[i]==targetChain)
				break;
		
		//Disconnect if no matching network
		if(i==-1)
		{
			provider.disconnect();
			currentWallet=null;
			PopupMsg('Wallet Connect - Problem',"This service doesn't support network of chainID = " + targetChain + '.');
			return;
		}
		if(blockNetworkSwitching)
		{
			provider.disconnect();
			currentWallet=null;
			PopupMsg('Wallet Connect - Problem',"This page is requiring from you to use " + serviceNetworkTitles[GetSelectedNetworkIndex()] + ' network.');
			return;
		}
		
		//Select first coin of this network (not optimised, many stupid instructions)
		SelectNetwork(serviceNetworkId[i]);
	}
	
	let accounts = await currentWallet.eth.getAccounts();
	UpdateFillUpAddress(accounts[0]);
	SetWalletButton('btn-wallet_connect');
	SetWallet('Wallet_Connect',accounts[0]);
	blockNetworkSwitching=true;
	
	DisableWalletChangeNetwork();
	UpdateNetworkSelectorOptions();
}


//Local Storage Utility
function ReadArray_LocalStorage(item)
{
	let s=localStorage.getItem(item);
	if(typeof s===strNDef || s==null || s=='') return [];
	else return JSON.parse(s);
}

function SetLocalStorageArray(key,_array){localStorage.setItem(key,JSON.stringify(_array));}

//Cart
//Opens the Cart in the Modal
var cart=[];
var cartTitles=[];

function InitCart()
{
	cart = ReadArray_LocalStorage('Cart');
	cartTitles = ReadArray_LocalStorage('CartTitles');
	UpdateProfileBarCart();
}

function UpdateCartLocalStorage()
{
	SetLocalStorageArray('Cart',cart);
	SetLocalStorageArray('CartTitles',cartTitles);
	UpdateProfileBarCart();
}

function CartManager()
{
	var s=strCart1;
	if(cart.length>0)
		for(let i=0;i<cart.length;i++)
			s+=strCartSlot1 + cart[i] + strCartSlot2 + cart[i] + strCartSlot3 + cart[i] + strCartSlot4 + cartTitles[i] + strCartSlot5 + 'RemoveFromCart("' + cart[i] + '");' + strCartSlot6 + 'AddToCart' + cart[i]  + strCartSlot7;
	else
		s+='Cart is empty.';
	s+=strEndDivTimes3;
	PopupMsg("Cart",s);
	document.getElementById("PopupFooter").innerHTML += strCartBtnPayment;
}

function AddToCart(ids)
{
	var stitle='';
	var temp=null;
	if(typeof ids===strNDef)
	{	
		ids=id;
		stitle=title;
		temp=document.getElementById("AddToCart");
		temp.setAttribute('onclick','RemoveFromCart()');
		temp.innerHTML='Remove from cart';
	}
	else
	{
		temp=document.getElementById("AddToCart" + ids);
		stitle = document.getElementById("AddToCartTitle" + ids).innerHTML;
		temp.setAttribute('onclick','RemoveFromCart("' + ids + '")');
		temp.innerHTML='Remove';
		
		if(typeof id!==strNDef && id==ids)
		{
			var atemp=document.getElementById("AddToCart");
			atemp.setAttribute('onclick','RemoveFromCart()');
			atemp.innerHTML='Remove from cart';
			atemp.className='btn btn-outline-light';
		}
	}
	temp.className='btn btn-outline-light';
	AddToCartRaw(ids,stitle);
}

function AddToCartRaw(id,title)
{
	cart.push(id);
	cartTitles.push(title);
	UpdateCartLocalStorage();
}

function RemoveFromCart(ids)
{
	var stitle='';
	var temp=null;
	if(typeof ids===strNDef)
	{	
		ids=id;
		temp=document.getElementById("AddToCart");
		temp.setAttribute('onclick','AddToCart();');
		temp.innerHTML='Add to cart';
	}
	else
	{
		temp=document.getElementById("AddToCart" + ids);
		temp.setAttribute('onclick','AddToCart("' + ids + '");');
		temp.innerHTML='Restore';
		
		if(typeof id!==strNDef && id==ids)
		{
			var stemp=document.getElementById("AddToCart");
			stemp.setAttribute('onclick','AddToCart();');
			stemp.innerHTML='Add to cart';
			stemp.className='btn btn-outline-light';
		}
		
	}
	temp.className='btn btn-outline-light';
	
	RemoveFromCartRaw(ids);
}

function RemoveFromCartRaw(id)
{
	let i=cart.length-1;
	for(;i>-1;i--)
		if(cart[i]==id) break;
	cart.splice(i,1);
	cartTitles.splice(i,1);
	UpdateCartLocalStorage();
}

function UpdateProfileBarCart()
{
	var temp=document.getElementById("CartManagerCounter");
	if(temp!=null)
	{
		if(cart.length==0) temp.innerHTML='';
		else temp.innerHTML=cart.length;
	}
}

function ResetCart()
{
	cart=[];
	cartTitles=[];
	UpdateCartLocalStorage();
}

//OrderList
//Opens the OrderList in the Modal
/*
{
name			Buying kebab
type			Registration/Buying item
txid			txid
network			network
status			completed/inspected/old
}
/**/
var orders;
var ordersNames;
var ordersTypes;
var ordersStatuses;
var ordersNetworks;
// >0 cancelButton appers
// %2 reportButton appers
var ordersDetails;
var ordersResults;
const orderCheckDelay=5000;
//Updates the LocalStorage
function InitOrders()
{
	orders = ReadArray_LocalStorage('Orders');
	ordersNames = ReadArray_LocalStorage('OrdersNames');
	ordersTypes = ReadArray_LocalStorage('OrdersTypes');
	ordersStatuses = ReadArray_LocalStorage('OrdersStatuses');
	ordersNetworks = ReadArray_LocalStorage('OrdersNetworks');
	ordersDetails = ReadArray_LocalStorage('OrdersDetails');
	ordersResults = ReadArray_LocalStorage('OrdersResults');
	UpdateProfileBarOrders();
	
	for(let i=orders.length-1;i>-1;i--)
		if(ordersStatuses[i]==0)
			TimeOutCheckOrder(orders[i]);
}

function GetOrderIdByTxId(txId)
{
	for(let i=orders.length-1;i>-1;i--)
		if(orders[i]==txId) return i;
	return -1;
}

async function TimeOutCheckOrder(txId)
{
	let formData=new FormData();
	//formData.append('command', 'RegisterTransaction');
	formData.append('command', 'CheckTransaction');
	formData.append('txHash', txId);
	//formData.append('coinId', ordersNetworks[GetOrderIdByTxId(txId)]);
	formData.append('txNetwork', serviceCoinNetworkId[GetCoinIndex(ordersNetworks[GetOrderIdByTxId(txId)])]);
	let response = await FetchApi(formData, null);
	let dim = new Dimperpreter(response);
	let arg = dim.Next();
	let func='';
	while(arg.length>0)
	{
		func=arg[0].trim();
		if(func=='NotFound' || func=='Frost' || func=='TargetFrost'){
			setTimeout(()=>{TimeOutCheckOrder(txId)},orderCheckDelay);
			return;}
		else if(func=='TxResult')
		{
			let _status=1;
			let _result='';
			switch(parseInt(arg[1]))
			{
				//ServiceSpecials
				case -5:_result='DimCodeError. Deposit accepted.';
				break;case -4:_result='DimCodeError. Deposit accepted(registered from the anonymous).';
				break;case -3:_result='DimCodeError. Deposit not accepted(low amount of money).'; _status=-1;
				break;case -1:setTimeout(()=>{TimeOutCheckOrder(txId)},orderCheckDelay); return;
				
				//NoDimCode
				break;case 0:_result='NoDimCode. Deposit notaccepted(low amount of money).'; _status=-1;
				break;case 1:_result='NoDimCode. Deposit accepted(registered from the anonymous).';
				break;case 2:_result='NoDimCode. Deposit accepted.';
				
				//d
				break;case 11:_result='Deposit/Donate accepted.';
				break;case 12:_result='Wrong target. Deposit accepted(registered from the anonymous).';
				break;case 13:_result='Wrong target. Deposit accepted.';
				break;case 14:_result='Target is sender. Deposit accepted.';
				
				//r
				break;case 21:_result='User registered. Deposit accepted.';
				break;case 22:_result='Password updated. Deposit accepted.';
				
				//b
				break;case 31:_result="Couldn't buy for unregistered user. Deposit accepted(registered from the anonymous).";
				break;case 32:_result="The order doesn't buy anything new. Deposit accepted.";
				break;case 33:_result="Buying went successfully (at least 1 product has been bought). Deposit accepted (if there was a rest).";
				break;case 34:_result="Couldn't buy for unregistered user. Deposit notaccepted(low amount of money)."; _status=-1;
				
				//c
				break;case 41:_result="Wallet address changed correctly. Deposit accepted.";
				break;case 42:_result="Wallet address couldn't be changed (Address is already registered). Deposit accepted.";
				break;case 43:_result="Wallet address couldn't be changed (Wrong userId or Address is not set on listening). Deposit accepted(registered from the anonymous).";
				
				//bm
				break;case 51:_result="Memory bought (as much as the transaction could cover) + potential rest of crypto is being deposited.";
				break;case 52:_result="Couldn't buy memory for unregistered user. Deposit accepted(registered from the anonymous).";
				break;case 53:_result="Couldn't buy memory for unregistered user. Deposit notaccepted(low amount of money).";
				
				
				break;
			}
			AddToOrderResult(txId,_result);
			SetOrderStatus(txId,_status);
			
		}
		else if('404')
		{
			setTimeout(()=>{TimeOutCheckOrder(txId)},orderCheckDelay); return;

		}
		/*
		else if(func=='Old'){SetOrderStatus(txId,-1);}
		else if(func=='NotToService'){SetOrderStatus(txId,-2);}
		else if(func=='Inspected' || func=='TransactionAccepted'){SetOrderStatus(txId,1);}
		else if(func=='DimCodeStart') AddToOrderResult(txId,'DimCode Start.');
		else if(func=='NotDimTxCommand') AddToOrderResult(txId,"Couldn't find DimCode.");
		else if(func=='UserDepositDone') AddToOrderResult(txId,'Deposit went successfully.');
		else if(func=='UnknownDepositDone') AddToOrderResult(txId,'Deposit was done successfully, but for the anonymous user.');
		else if(func=='NotBought') AddToOrderResult(txId,"Couldn't buy item of id: " + arg[1] + '.');
		else if(func=='TargetUserFound') AddToOrderResult(txId,'Correct user id.');
		else if(func=='TargetUserNotFound') AddToOrderResult(txId,'Incorrect user id.');
		/**/
		arg = dim.Next();
	}
	console.log('Finished checking transaction of txId:' + txId);
}

function AddToOrderResult(txId, result){ordersResults[GetOrderIdByTxId(txId)]+=result + '<br>';}
function SetOrderResult(txId, result){ordersResults[GetOrderIdByTxId(txId)]=result;}

function SetOrderStatus(txId, newStatus)
{
	let i = GetOrderIdByTxId(txId);
	ordersStatuses[i]=newStatus;
	UpdateOrdersLocalStorage();
	
	//if GUI
	let obj=document.getElementById('order' + i + 'Status');
	
	if(obj!=null)
	{
		let s='';
		switch(newStatus)
		{
			case 1:
			obj.innerHTML='Transaction went successfully.';
			//Cancel button
			s='<button class="mr-2 mt-2 btn btn-outline-light bd-highlight" type="button" onClick="RemoveOrderGUI(' + i + ');">Close</button>';
			//Result button
			break;
			case -1:
			obj.innerHTML='Transaction failed.';
			//Cancel button
			s='<button class="mr-2 mt-2 btn btn-outline-light bd-highlight" type="button" onClick="RemoveOrderGUI(' + i + ');">Close</button>';
			break;
			case 2:
			obj.innerHTML='Transaction went successfully.';
			break;
		}
		document.getElementById('order' + i + 'Options').innerHTML+=s
	}
}

function UpdateOrdersLocalStorage()
{
	SetLocalStorageArray('Orders',orders);
	SetLocalStorageArray('OrdersNames',ordersNames);
	SetLocalStorageArray('OrdersTypes',ordersTypes);
	SetLocalStorageArray('OrdersStatuses',ordersStatuses);
	SetLocalStorageArray('OrdersNetworks',ordersNetworks);
	SetLocalStorageArray('OrdersDetails',ordersDetails);
	SetLocalStorageArray('OrdersResults',ordersResults);
	UpdateProfileBarOrders();
}

function UpdateProfileBarOrders()
{
	var temp=document.getElementById("OrderManagerCounter");
	if(temp!=null)
	{
		if(orders.length==0) temp.innerHTML='';
		else temp.innerHTML=orders.length;
	}
}

function OrderManager(){PopupMsg("Orders",GetOrderManagerGUI());}

function GetOrderManagerGUI()
{
	let orders = ReadArray_LocalStorage('Orders');
	let ordersNames = ReadArray_LocalStorage('OrdersNames');
	let ordersTypes = ReadArray_LocalStorage('OrdersTypes');
	let ordersStatuses = ReadArray_LocalStorage('OrdersStatuses');
	let ordersNetworks = ReadArray_LocalStorage('OrdersNetworks');
	let ordersDetails = ReadArray_LocalStorage('OrdersDetails');
	let ordersResults = ReadArray_LocalStorage('OrdersResults');
	let s='';
	let networkIndex=0;
	
	if(orders.length>0)
		for(let i=orders.length-1;i>-1;i--)
		{
			networkIndex=GetNetworkIndex(ordersNetworks[i]);
			s += '<div class="bg2 pad2 mt-2"><div class="border2 pad1"><div><h3>' + ordersNames[i] +'</h3></div><a id="order' + i + 'Status" class="color1">';
			switch(ordersStatuses[i])
			{
				case 0:
				s += 'pending...';
				break;
				case -1:
				s += 'Transaction failed!';
				break;
				case 1:
				s += 'Transaction went successfully!';
				break;
				case 2:
				s += 'Transaction went successfully!';
				break;
			}
			s += '</a><div class="d-flex  flex-wrap" id="order' + i + 'Options"><button class="mr-2 mt-2 btn btn-outline-light bd-highlight" type="button" data-toggle="collapse" data-target="#order';
			s += i + 'Details" aria-expanded="false">Show more</button><a href="' + serviceNetworkExplorer[networkIndex] + '/tx/' + orders[i] + '" target="_blank"><button class="mr-2 mt-2 btn btn-outline-light bd-highlight" type="button">See on ' + serviceNetworkExplorerName[networkIndex] + '</button></a><button class="mr-2 mt-2 btn btn-outline-light bd-highlight" type="button" onClick="CopyToClipboard(';
			s += "'" + orders[i] + "'" + ');">Copy txHash</button>';
			//Cancel button
			if(ordersStatuses[i]!=0)
				s += '<button class="mr-2 mt-2 btn btn-outline-light bd-highlight" type="button" onClick="RemoveOrderGUI(' + i + ')">Close</button>';
			s += '</div><div class="collapse" id="order' + i + 'Details"><hr color="white"></hr>' + ordersDetails[i] + '</div></div></div>';
		}
	else
		s='empty';	
	return s;
}

function ResetOrders()
{
	orders = [];
	ordersNames = [];
	ordersTypes = [];
	ordersStatuses = [];
	ordersNetworks = [];
	ordersDetails = [];
	ordersResults = [];
	UpdateOrdersLocalStorage();
}

function ResetOrderStatuses()
{
	for(let i=ordersStatuses.length-1;i>-1;i--)
		ordersStatuses[i]=0;
	UpdateOrdersLocalStorage();
}

function RemoveOrderByIndex(i)
{
	orders.splice(i,1);
	ordersNames.splice(i,1);
	ordersTypes.splice(i,1);
	ordersStatuses.splice(i,1);
	ordersNetworks.splice(i,1);
	ordersDetails.splice(i,1);
	ordersResults.splice(i,1);
	UpdateOrdersLocalStorage();
}

function RemoveOrderByTxId(txid){RemoveOrderByIndex(GetOrderIdByTxId(txid));}

function RemoveOrderGUI(index)
{
	RemoveOrderByIndex(index);
	ChangePopupBody(GetOrderManagerGUI());
}

function TrackOrder(name,type,txid,details,coinId)
{
	orders.push(txid);
	ordersNames.push(name);
	ordersTypes.push(type);
	ordersStatuses.push(0);
	if(isNaN(coinId)) coinId=GetSelectedCoinId();
	ordersNetworks.push(coinId);
	ordersDetails.push(details)
	ordersResults.push('');
	UpdateOrdersLocalStorage();
	TimeOutCheckOrder(txid);
}

function God(){
	localStorage.setItem('serviceDevMode','true');
	serviceDevMode=true;}
function Slave(){
	localStorage.setItem('serviceDevMode','false');
	serviceDevMode=false;}

function InitMain()
{
	//set global variables
	window.userId=userId;
	
	//require wallet to be chosen
	wasWalletChosen=false;
	
	//allow network switching
	blockNetworkSwitching=false;
	
	//Check Service Dev Mode
	let i=localStorage.getItem('serviceDevMode');
	if(i=='true') serviceDevMode=true;
	else serviceDevMode=false;
	
	//$("#Popup").modal('show');
	InitCart();
	InitOrders();
	InitNetworkSelector();
	InitCoinSelector();
	//Popup setup
	$("#Popup").on("hidden.bs.modal", function () { document.getElementById("PopupBody").innerHTML = ""; console.log('Popup-Closed');});

	var temp=document.getElementById("userAvatarSrc");
	if(temp!=null)
	{
		var uId=temp.src.substring(0,temp.src.length-4);
		uId=uId.substring(uId.lastIndexOf('/')+1);
		recipient=uId;
	}
}

function InitPageDeposit()
{
	onCoinSelected=function(){
		let c=GetSelectedCoinId();
		let i=GetCoinIndex(c);
		let symbol=serviceCoinSymbols[i];
		let balance=GetUserBalance(c);
		if(balance==false) balance=0;
		document.getElementById('infoCoinName').innerHTML=GetCoinFullNameById(c);
		document.getElementById('infoCoinBalance').innerHTML=balance + ' ' + symbol.toUpperCase() + '<br/>(' + (balance*GetPrice(symbol)).toFixed(2) + '<span class="color2">$</span>)';
	}
	onNetworkSelected=function(){
		let n=GetSelectedNetworkId();
		let i=GetNetworkIndex(n);
		let address=GetUserAddress(n);
		//let r_address=!(address==false);
		//if(!r_address)
		//	address='Address not configured yet.';
		document.getElementById('infoNetworkName').innerHTML=serviceNetworkTitles[i];
		document.getElementById('infoNetworkAddress').innerHTML=address;
		
		let tag=document.getElementById('btn-AttempDeposit');
		//let tag2=document.getElementById('txInfo');
		//if(r_address)
		//{
			tag.classList.remove('disabled');
			//tag2.innerHTML='The transaction must be sent from:<br><a class="link1" href="' + serviceNetworkExplorer[i] + '/address/' + address.toLowerCase() + '">' + address + '</a>';
			//tag2.innerHTML='';
		//}
		//else
		//{
			//tag.classList.add('disabled');
			//tag2.innerHTML='The transaction cannot be sent, becouse the network address is not configured yet.';
		//}
		//console.log(r_address);
	}
	onNetworkSelected();
	onCoinSelected();
}

//review stuff
function TryPostRatingOrReview()
{
	//vars
	let _title='Post ';
	let message='You are about to post the ';
	let JSCode='PostRating()';

	//decide
	if(isEditingReview)
	{
		_title += 'review';
		message += 'review';
		JSCode = 'PostReview()';
	}
	else
	{
		_title += 'rating';
		message += 'rating';
	}

	//rest
	message+=' for <b>' + title + '</b> asset.';

	//popup
	PopupConfirm(_title,message,JSCode);	
}

function PostRating()
{
	//check
	if(currentUserRating==userRating)
	{
		PopupMsg('Result','The rating is as it was. Nothing has changed.');
		return;
	}

	//popup
	PopupFetch();
	
	//post
	let formData = new FormData();
	formData.append('command', 'PostRating');
	formData.append('id', id);
	formData.append('rating', currentUserRating);
	FetchApi(formData, function(data) {
		let dim = new Dimperpreter(data);
		let args = dim.Next();
		let msg = '';
		while(args.length>0)
		{
			switch(args[0].trim())
			{
				case 'k':
					msg = 'Successfully updated your rating of this asset.';
					userRating = currentUserRating;
					document.getElementById('messagePostedRating').innerHTML = userRating;
					break;
				case 'u':
					msg = 'Nothing has changed.';
					break;
				case 'o':
					msg = "You don't own this asset.";
					break;
				case '4':
					msg = "Asset couldn't be found.";
					break;
				case 'n':
					msg = "You are not logged in. Please login, in order to post the rating.";
					break;
				//input errors
				case 'r':
					msg = "Wrong rating value.";
					break;
			}
			args = dim.Next();
		}
		PopupMsg('Result',msg);
	});
}

function PostReview()
{
	//popup
	PopupFetch();

	//get selectedVisibility
	//visibility of the review
	let currentVisibility=-1;
	const arr=document.getElementsByName('RadioGroup1');
	for(let i=arr.length-1;i>-1;i--)
		if(arr[i].checked)
		{
			currentVisibility=parseInt(arr[i].id.substring(5));
			break;
		}

	//visibility of the review author
	if(document.getElementById('isReviewAnon').checked)
		currentVisibility += 4;
	
	//title and content
	const title=document.getElementById('reviewTitle').value.trim();
	const content=document.getElementById('reviewContent').value.trim();

	//post
	let formData = new FormData();
	formData.append('command', 'PostReview');
	formData.append('id', id);
	formData.append('rating', currentUserRating);
    formData.append('visibility', currentVisibility);
	formData.append('title', title);
	formData.append('content', content);
	FetchApi(formData, function(data) {
		let dim = new Dimperpreter(data);
		let args = dim.Next();
		let msg = '';

		while(args.length>0)
		{
			switch(args[0].trim())
			{
				case 'k':
					msg = 'Successfully updated your review of this asset.';
					userReviewVisibility=currentVisibility;
					userRating = currentUserRating;
					document.getElementById('messagePostedRating').innerHTML = userRating;
					break;
				case 'f':
					msg = 'Your account is currently in use. Please try when the other proccess will finish.';
					break;
				case 'o':
					msg = "You don't own this asset.";
					break;
				case '4':
					msg = "Asset couldn't be found.";
					break;
				case 'n':
					msg = "You are not logged in. Please login, in order to post the rating.";
					break;
				//input errors
				case 'r':
					msg = "Wrong rating value.";
					break;
				case 't':
					msg = "Title can't be longer than 32 characters.";
					break;
				case 'c':
					msg = "Content can't be longer than 4096 characters.";
					break;
				case 'v':
					msg = "Visibility is written in a unknown format.";
					break;	
			}
			args = dim.Next();
		}

		PopupMsg('Result',msg);
	});

}


function ToggleReviewOption(val)
{
	//hide/show section
	let tag=document.getElementById('sectionEditReview');
	if(val === undefined)
		val = !tag.hidden;
	tag.hidden = val;
	isEditingReview = !val;

	//update button
	tag = document.getElementById('BtnReviewOption');
	
	//func_click
	let temp='ToggleReviewOption()';
	//if(val) temp='';
	//tag.onclick=temp;

	//text
	if(val)
		if((userReviewVisibility & 3) == 0)
			temp = 'Add review';
		else 
			temp = 'Edit review';
	else temp = 'Close review editing';
	tag.innerHTML=temp;

}

//review stuff end

function InitPageAsset()
{
	let tag=null;
	isBought=!!isBought;
	
	//Check cart
	CheckAssetFromCart();
	
	//Is bought
	//+Is user the owner
	const isOwner = owner == userId;
	if(isBought || isOwner)
	{
		//download button
		document.getElementById('options').innerHTML = "<div class='pad2'><button type='button' class='btn btn-outline-light' onclick='Download(" + '"' + id + '"' + ");'>Download</button></div>";
		
		//allow rating
		if(!isOwner)	//only for consumers
		{
			//show section for posting rating and review
			document.getElementById('sectionPostRateOrReview').hidden=false;
			
			//hide review
			ToggleReviewOption(true);

			//update review title
			document.getElementById('reviewTitle').value=userReviewTitle;
			
			//update visibility
			document.getElementById('radio' + Math.max(userReviewVisibility & 1,userReviewVisibility & 2)).checked = true;
			document.getElementById('isReviewAnon').checked = (userReviewVisibility & 4) > 0;

			//block reviewContent
			const tagReviewContent=document.getElementById('reviewContent');
			tagReviewContent.disabled=true;

			//fetch for single review
			let formData = new FormData();
			formData.append('command', 'GetReviewContent');
			formData.append('id', userReviewId);
			FetchApi(formData, function(data) {
				tagReviewContent.value=data;
				tagReviewContent.disabled=false;
			});

			//show review
			if((userReviewVisibility & 3) > 0) ToggleReviewOption(false);

			//setup rating bar
			tag=document.getElementById('inputRating');
			if(userRating<0) 	//user has not rated yet
				tag.value=50;
			else					//user has rated
				tag.value=userRating;
			currentUserRating=tag.value;
			
			//get tags
			const tagCurrentRating=document.getElementById('messageCurrentRating');
			const tagLastRating=document.getElementById('messagePostedRating');

			//func
			const func_updateRatingMessage=() =>{
				//current
				tagCurrentRating.innerHTML=currentUserRating;

				//last
				if(userRating<0)
					tagLastRating.innerHTML='Not rated';
				else
					tagLastRating.innerHTML=userRating;
			};

			//update at start
			func_updateRatingMessage();

			//make it as event
			tag.addEventListener('input',function(event){
				//get value
				currentUserRating=parseFloat(event.target.value);
				
				func_updateRatingMessage();
			});
		}
	}
	
	//Browse reviews
	//calc final page
	finalAssetPage = publicReviewCount;
	if(isOwner) finalAssetPage += privateReviewCount;
	finalAssetPage = Math.ceil(finalAssetPage / pageReviewDisplayCount);
	//interface vars
	tagAssetPageBottom=$('#reviewsPageBottom')[0];
	tagAssetPage=$('#reviewsPage')[0];
	//clear page
	tagAssetPage.innerHTML='';
	//interface functions
	funcParseAssetPage=async function(data){

		let dim = new Dimperpreter(data);
		let args = dim.Next();
		let temp='';

		//make a list of users to find names (written in a temp)
		while(args.length>0)
		{
			if(args.length==1 && args[0]=='end')
			{
				//finalPage is known now
				finalAssetPage=currentAssetPage;

				//increment the current page
				currentAssetPage++;
			
				//let it be known
				isLoadingPage=false;
				
				//update bottom
				tagAssetPageBottom.innerHTML="<h2>Reached bottom</h2>";
				
				//end
				return '';
			}
			if(args.length == 5 || args.length == 6)
				if(args[2] != '0')
					//store userId
					temp += ';' + args[2];
			args = dim.Next();
		}

		//get names of the reviews authors
		//correct temp
		temp = temp.substring(1);
		let response2 = '';
		if(temp != '')
		{
			console.log("Looking for users: " + temp);
			response2 = await GetUserNames(temp);
		}
		let dim2 = new Dimperpreter(response2);

		//read the code again (knowing the usernames behind the authors)
		temp = '';
		dim.i = 0;
		args = dim.Next();
		let args2 = null;
		while(args.length>0)
		{
			temp += "<div class='mt-4 col-12 col-md-6 col-lg-4'>";
			temp += 	"<div class='bg1 pad1'>";
			temp += 		"<div class='border2 pad1'>";
			temp += 			"<a class='link1' href='/review?id=" + args[0] + "'>";
			temp +=					"<h4>" + HTMLProtect(args[4]) + "</h4>";
			temp +=				"</a>";
			temp +=				"<div class='d-flex'>";
			temp +=					"<span class='color3 w-100'>By ";
			//user finding
			if(args[2]==0)
			temp +=						"Anonymous";
			else
			//search in dim2
			{
				dim2.i = 0;
				args2 = dim2.Next();
				let username = '???';
				while(args2.length > 0)
				{
					if(args2[0] == args[2])
						{
							username = args2[1];
							break;
						}
					args2 = dim2.Next();
				}
				temp +=						"<a class='link2' href='/user?id=" + args[2] + "'>" + username + "</a>";

				//reset dim2
				dim2.i=0;
			}
			temp +=					"</span>"
			temp +=					"<h1 class='pull-right text-right'>" + args[1] + "</h1>";
			temp +=				"</div>";
			temp +=			"</div>";
			temp +=		"</div>";
			temp +=	"</div>";

			//next review
			args = dim.Next();
		}

		//return the html code
		return temp;
	};
	funcGetAssetPage=async function()
	{
		//form a request
		var formData = new FormData();
		formData.append('command', 'BrowseReviews');
		formData.append('id', id);
		formData.append('page', currentAssetPage);
		//formData.append('query', lastQueryTags + '?' + lastQueryPhrase);

		//return the result
		let r;
		await FetchApi(formData, function(data) {
			r=data;
		});
		return r;
	};

	funcUpdateAssetPageBottomInfo=function()
	{
		if(isLoadingAssetPage) {
			UpdateAssetPageLoadingScreen(0);
			return;
		}
		
		let temp='<h2>';
		if(currentAssetPage>finalAssetPage)
			temp+="Reached bottom";
		else
			temp+="See more...";
			tagAssetPageBottom.innerHTML=temp + '</h2>';
	};
	//listen
	InitAssetPageLoader();
	//load page
	LoadAnotherAssetPage();
	
	//Basic visuals
	TagMedia = document.getElementById("media");
	document.getElementById("title").innerHTML = HTMLProtect(title);
	document.getElementById("price").innerHTML = parseFloat(price);
	let temp = document.getElementById('ownerLink');
	temp.innerHTML = HTMLProtect(ownerTitle);
	temp.href = '/user?id=' + owner;
	
	//Stats
	var TagStats=document.getElementById("stats");
	TagStats.innerHTML+= strRow1 + "Sells" + strThEnd + strTd + sells + strTdEnd + strTrEnd;
	TagStats.innerHTML+= strRow1 + "Rating" + strThEnd + strTd + parseInt(rating / ratingCount) + strTdEnd + strTrEnd;
	TagStats.innerHTML+= strRow1 + "Rating Sum" + strThEnd + strTd + rating + strTdEnd + strTrEnd;
	TagStats.innerHTML+= strRow1 + "Rating Count" + strThEnd + strTd + ratingCount + strTdEnd + strTrEnd;
	
	//Get preccise package info
	let formData = new FormData();
	formData.append('command', 'GetPackageInfo');
	formData.append('id', id);
	FetchApi(formData, function(data) {
		var dim = new Dimperpreter(data);
		var arg = dim.Next();
		var func = '';
		
		while(arg.length>0)
		{
			func = arg[0].trim();
			console.log(func);
			//media
			if(func=='Media')
			{
				media.push(arg[1]);
				mediaTitle.push(arg[2]);
			}
			else if(func=='Description')
			{
				//https://github.com/showdownjs/showdown
				document.getElementById("description").innerHTML=RiskyMDToHTML(arg[1]);
			}
			arg = dim.Next();
		}
		//Create MediaSlots
		//size
		var tempStr1='';
		let i = Math.min(6 , media.length);
		if(i>=5) tempStr1 = "col-4 col-sm-3 col-md-2";
		else if(i==4) tempStr1 = "col-6 col-md-3";
		else if(i==3) tempStr1 = "col-4";
		else if(i==2) tempStr1 = "col-6";
		else tempStr1 = "col-12";
		//media slots create
		for (let i = 0; i < 6 && i < media.length; i++)
		{
			TagMedia.innerHTML+= str1 + tempStr1 + str2 + i + str3 + i + str4;
			UpdateMediaSlot(i,i);
		}
		if(media.length<7) document.getElementById("mediaButtons").innerHTML='';
	});
}

var devMode=false;
var TagMedia;
var media = [];
var mediaPage=0;
var selectedMedia=0;
var mediaTitle = [];

function InitPageEdit()
{
	//setup
	media = [];
	mediaPage = 0;
	selectedMedia = 0;
	mediaTitle = [];
	devMode = true;
	
	TagMedia = document.getElementById("media");
	document.getElementById("title").value = title;
	document.getElementById("shortDescription").value = shortDescription;
	document.getElementById("price").value = price;
	document.getElementById("fileName").value = fileName;
	document.getElementById("btnVisitOffertPage").href="/get?id=" + id;
	if(isPrivate==1) isPrivate=true;
	else isPrivate=false;
	document.getElementById("isPrivate").checked=isPrivate;
	
	let formData = new FormData();
	formData.append('command', 'GetPackageInfo');
	formData.append('id', id);
	FetchApi(formData, function(data) {
		var dim = new Dimperpreter(data);
		var arg = dim.Next();
		var func = '';
		while(arg.length>0)
		{
			func=arg[0].trim();
			console.log(func);
			//media
			if(func=='Media')
			{
				media.push(arg[1]);
				mediaTitle.push(arg[2]);
			}
			else if(func=='Description')
			{
				let converter = new showdown.Converter();
				document.getElementById("description").value=converter.makeHtml(arg[1]);
			}
			
			arg = dim.Next();
		}
		
		//media slots create
		for (let i = 0; i < 6; i++)
		{
			TagMedia.innerHTML+= str1 + "col-4 col-sm-3 col-md-2" + str2 + i + str3 + i + str4;
			UpdateMediaSlot(i,i);
		}
		
	});

}

/*
<div class='col-12 col-md-6 col-lg-4 pad2'>
	<div class='bg1 pad1 mt-2'>
		<div class='border2 pad1 '>
			<div class='row'>
				<div class='col-12 col-lg-4'>
					<img class=' w-100' src='/thumb/2b.png'></img>
				</div>
				<div class='col-12 col-lg-8'>
					<a href='/get?id=' class='link1'><h3>Manual</h3></a>
				</div>
			</div>
			<div class='mt-2'>
				<p>Download me you pussy.</p>
			</div>
			<div class='mt-2 grid'>
				<button type='button' href='#' class='mt-1 mr-1 btn btn-outline-light'>Edit</button>
				<button type='button' href='#' data-toggle="collapse" data-target="#collapseExample" class='mt-1 mr-1 btn btn-outline-light'>Details</button>
				<button type='button' href='#' class='mt-1 mr-1 btn btn-outline-light'>Claim Profits</button>
			</div>
			<div class='mt-2 collapse' id="collapseExample">
				<label>Data</label>
				<table class="table table-bordered bg1 color1">
					<tbody>
						<tr>
							<th>Data</th>
							<th>Value</th>
						</tr>
						<tr>
							<th>Rating</th>
							<td>0.1</td>
						</tr>
					</tbody>
				</table>
				<label>Profits</label>
				<table class="table table-bordered bg1 color1">
					<tbody>
						<tr>
							<th>Symbol</th>
							<th>Balance</th>
							<th>in USD</th>
						</tr>
						<tr>
							<th>ETH</th>
							<td>2222</td>
							<td>2222</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<div class='col-12 col-md-6 col-lg-4 pad2'><div class='bg1 pad1 mt-2'><div class='border2 pad1 '><div class='row'><div class='col-12 col-lg-4'><img class=' w-100' src='/thumb/
.png'></img></div><div class='col-12 col-lg-8'><a href='/get?id=
' class='link1'><h3>
</h3></a></div></div><div class='mt-2'><p>
</p></div><div class='mt-2 grid'>
</div><div class='mt-2 collapse' id='
'><label>Data</label><table class='table table-bordered bg1 color1'><tbody><tr><th>Data</th><th>Value</th></tr>
</tbody></table><label>Profits</label><table class='table table-bordered bg1 color1'><tbody><tr><th>Symbol</th><th>Balance</th><th>in USD</th></tr>
</tbody></table></div></div></div></div>


/**/
function InitSellerDashboard()
{
	const str1="<div class='col-12 col-md-6 col-lg-4 pad2'><div class='bg1 pad1 mt-2'><div class='border2 pad1 '><div class='row '><div class='col-12 col-lg-4'><img class=' w-100' src='/thumb/";
	const str2=".png'></img></div><div class='col-12 col-lg-8'><a href='/get?id=";
	const str3="' class='link1 text-break'><h3>";
	const str4="</h3></a></div></div><div class='mt-2'><p>";
	const str5="</p></div><div class='mt-2 grid'>";
	const str6="</div><div class='mt-2 collapse' id='";
	const str7="'><label>Data</label><table class='table table-bordered bg1 color1'><tbody><tr><th>Data</th><th>Value</th></tr>";
	const str8="</tbody></table><label>";
	const str9="</label><table class='table table-bordered bg1 color1 '><tbody><tr><th>Symbol</th><th>Balance</th><th>in USD</th></tr>";
	const strA="</tbody></table></div></div></div></div>";
	
	const btn1="<button type='button' href='#' class='mt-1 mr-1 btn btn-outline-light' ";
	const btn2=">";
	const btn3="</button>";
	
	const btn4="<button type='button' href='";
	
	let bestSeller=-1;
	let bestRating=-1;
	let bestRatingCount=-1;
	let bestProfit=-1;
	let bestUnrProfit=-1;
	let profit=0;
	let unrProfit=0;
	
	const link1="<a class='link1' href='/get/?id=";
	const link2="'>";
	const link3='</a>';
	
	//Memory in bytes
	document.getElementById("memoryBalance").innerHTML=(memoryBalance/1000000);
	let tag=document.getElementById("createdAssets");
	let i=assets.length-6;
	let temp='';
	while(i>-1)
	{
		//Check Stats
		if(assets[i+3]>bestSeller){
			bestSeller=assets[i+3];
			document.getElementById("statsBestSeller").innerHTML=link1 + assets[i] + link2 + assets[i+1] + link3;
		}
		if(assets[i+4]>bestRating){
			bestRating=assets[i+4];
			document.getElementById("statsBestRating").innerHTML=link1 + assets[i] + link2 + assets[i+1] + link3;
			}
		if(assets[i+5]>bestRatingCount){
			bestRatingCount=assets[i+5];
			document.getElementById("statsBestRatingCount").innerHTML=link1 + assets[i] + link2 + assets[i+1] + link3;
		}
		//Prepare profit checker
		profit=0;
		
		unrProfit=0;
		
		temp=str1+assets[i]+str2+assets[i]+str3+assets[i+1]+str4+assets[i+2]+str5;
		//buttons
		temp+="<a href='/edit?id=" + assets[i] + "'><button type='button' class='mt-1 mr-1 btn btn-outline-light'>Edit</button></a>";
		temp+="<button type='button' href='#' data-toggle='collapse' data-target='#collapse" + assets[i] + "' class='mt-1 mr-1 btn btn-outline-light'>Details</button>";
		temp+="<button type='button' onclick='TryClaimProfit(\"" + assets[i] + "\");' class='mt-1 mr-1 btn btn-outline-light'>Claim</button>";
		temp+=str6+'collapse'+assets[i]+str7;
		//Stats
		temp+="<tr><th>Sells</th><td>" + assets[i+3] + "</td></tr>";
		temp+="<tr><th>Rating</th><td>" + assets[i+4] + "</td></tr>";
		temp+="<tr><th>RatingCount</th><td>" + assets[i+5] + "</td></tr>";
		temp+=str8 + "<label class='d-flex'><span>Profits</span>";
		temp+='<button type="button" id="btn_'+assets[i]+'" onclick="ShowProfits('+"'"+ assets[i] +"'"+')" class="btn btn-outline-light mt-1 ml-1 mr-1 mb-1">Future profits</button>';
		temp+='</label>'+str9;
		//Profits
		let tempArray=GetAssetProfits(assets[i]);
		if(tempArray!=null)
		{
			let networks='';
			for(let f=tempArray.length-3;f>0;f-=3)
			{
				let g=';'+serviceCoinNetworkId[GetCoinIndex(tempArray[f])];
				networks=networks.replaceAll(g,'');
				networks+=g;
			}
			networks=networks.substring(1);
			networks=networks.split(';');
			for(let g=networks.length-1;g>-1;g--)
			{
				temp+='<tr class="text-center"><th colspan="3">'+serviceNetworkTitles[GetNetworkIndex(networks[g])]+'</th></tr>';
				for(let f=tempArray.length-3;f>0;f-=3)
					if(networks[g]==serviceCoinNetworkId[GetCoinIndex(tempArray[f])])
					{
						//insert realised and unrealised profits
						let price=GetPrice(serviceCoinSymbols[GetCoinIndex(tempArray[f])]);
						temp += '<tr><th>' + GetCoinFullNameById(tempArray[f]) + '</th><td>';
						temp += "<span class='real_" + assets[i] + "'>" + tempArray[f+1] + '</span>';
						temp += "<span class='wait_" + assets[i] + "'>" + tempArray[f+2] + '</span></td><td>';
						temp += "<span class='real_" + assets[i] +"'>" + tempArray[f+1]*price +'</span>';
						temp += "<span class='wait_" + assets[i] +"'>" + tempArray[f+2]*price +'</span></td></tr>';
						
						//profits
						profit+=tempArray[f+1]*price;
						unrProfit+=tempArray[f+2]*price;
					}
			}
		}
		temp+='<tr><td colspan="2">Total Profit in USD</td><th>';
		temp+="<span class='real_" + assets[i] + "'>" + profit.toFixed(2) + '</span>';
		temp+="<span class='wait_" + assets[i] + "'>" + unrProfit.toFixed(2) + '</span></th></tr>';
		//Check Profit
		if(profit>bestProfit)
		{
			bestProfit=profit;
			document.getElementById("statsBestProfit").innerHTML=link1 + assets[i] + link2 + assets[i+1] + link3;
		}
		if(unrProfit>bestUnrProfit)
		{
			bestUnrProfit=unrProfit;
		}
		temp+=strA;
		tag.innerHTML+=temp;
		i-=6;
	}
	
	//hide unrealised profits
	for(i=assets.length-6;i>-1;i-=6)
		ChangeDisplayInAll('wait_' + assets[i],'none');
}
function GetAssetProfits(id)
{
	id=id.toLowerCase();
	for(let i=assetsProfits.length-2;i>0;i-=2)
		if(assetsProfits[i].toLowerCase()==id)
			return assetsProfits[++i];
	return null;
}

function ShowProfits(target)
{
	const tag=document.getElementById('btn_' + target);
	let isReal=false;
	let temp='Future profits';
	
	if(tag.innerHTML==temp)
	{
		//isReal=false;
		temp='Current profits';
	}
	else
	{
		isReal=true;
	}
	DashboardSellerShowProfits(isReal,target);
	tag.innerHTML=temp;
}

function DashboardSellerShowProfits(isReal,assetId)
{
	let target='';
	if(isReal) target = 'real_' + assetId;
	else target = 'wait_' + assetId;
	ChangeDisplayInAll(target,'block');
	
	isReal=!isReal;
	if(isReal) target = 'real_' + assetId;
	else target = 'wait_' + assetId;
	ChangeDisplayInAll(target,'none');
}

function ChangeDisplayInAll(_class,value)
{
	let elements = document.getElementsByClassName(_class);
	for(let i = elements.length - 1; i > -1; i--)
		elements[i].style.display = value;
}

function TryClaimProfit(id)
{
	let temp='';
	let g=0;
	let profit=0;
	let tempArray=GetAssetProfits(id);
	if(tempArray!=null)
	{
		temp+='<table class="table bg4 table-bordered color1"><tbody>';
		temp+='<tr class="text-center"><th>Coin</th><th>Balance</th><th>Balance(In USD)</th></tr>';
		
		let networks='';
		for(let f=tempArray.length-3;f>0;f-=3)
		{
			let g=';'+serviceCoinNetworkId[GetCoinIndex(tempArray[f])];
			networks=networks.replaceAll(g,'');
			networks+=g;
		}
		networks=networks.substring(1);
		networks=networks.split(';');
		for(let g=networks.length-1;g>-1;g--)
		{
			temp+='<tr class="text-center"><th colspan="3">' + serviceNetworkTitles[GetNetworkIndex(networks[g])] + '</th></tr>';
			for(let f=tempArray.length-3;f>0;f-=3)
			{
				let i=GetCoinIndex(tempArray[f]);
				if(networks[g]==serviceCoinNetworkId[i])
				{
					let price=GetPrice(serviceCoinSymbols[i]);
					temp+='<tr><th>'+GetCoinFullNameByIndex(i)+'</th><td>'+tempArray[f+1]+'<td>'+tempArray[f+1]*price+'</tr>';
					profit+=tempArray[f+1]*price;
				}
			}
		}
		temp+='<tr ><td colspan="2">Total Profit in USD</td><th>'+profit+'</th></tr>';
		temp+='</tbody></table>';
		//find index in assets
		for(g=assets.length-6;g>-1;g--)
			if(assets[g]==id) break;
		PopupConfirm("Claim profits from the asset.","You are about to try to claim profits locked in asset called: <a class='link2' href='/get?id=" + assets[g] + "' target='_blank'>" + assets[g+1] + '</a> with earnings:<br><br>' + temp,"ClaimProfit(\"" + id + "\");");
	}
	else
		PopupMsg('Error','There is no profits to be claimed.');
}

function ClaimProfit(id)
{
	PopupFetch();
	let formData = new FormData();
	formData.append('command', 'ClaimProfit');
	formData.append('ids', id);
	FetchApi(formData, function(data) {
		let temp=data;
		switch(data)
		{
			case 'n':
				temp='You are not logged in.';
				break;
			case 'o':
				temp='You are not the creater of these assets.';
				break;
			case 'f':
				temp='Your account is currently executing one process. Try again later.';
				break;
			case 'k':
				temp='Claiming profit done.';
				break;
			
			default:
				temp='Server Problem.';
				break;
		}
		PopupMsg('Result',temp);
		PopupSetListeningOnCloseOnce(function() {
		GoToSite('/seller-dashboard');
		});
	});
}

const strDashAsset1 = "<div class='mt-1 bg1 pad1'><div class='pad1 border2'>\n<div class='row'>\n<div class='col-4'>\n<img src='/thumb/"; 
const strDashAsset2 = ".png' class='d-fluid img-fluid '></img>\n</div>\n<div class='col-4 col-lg-5'>\n<a href='/get?id=";
const strDashAsset3 = "' class='link1'><h4>";
const strDashAsset4 = "</h4></a>\n<p class='text-break'>";
const strDashAsset5 = "</p>\n</div>\n<div class='col-4 col-lg-3  text-center'>";
const strDashAsset6 = "</div></div>";
const strDashBtn1 = "<button type='button' onClick='";
const strDashBtn2 = "' class='btn btn-outline-light col-12'>";
const strEndBtn = "</button>\n";

function Download(id){GoToSiteNewTab("/download?id=" + id);};
function Report(id){GoToSiteNewTab("/report?id=" + id);};

function GetUserBalance(coinId)
{
	coinId=parseInt(coinId);
	if(serviceDevMode)
		if(coinId<0) coinId=-coinId-1;
	for(i=wallet.length-2;i>-1;i-=2)	//foreach coin in wallet
		if(parseInt(wallet[i])==coinId)
			return wallet[++i];
	return false;
}

function GetUserAddress(networkId)
{
	networkId=parseInt(networkId);
	if(serviceDevMode)
		if(networkId<0) networkId=-networkId-1;
	for(i=walletNetwork.length-2;i>-1;i-=2)	//foreach coin in wallet
		if(parseInt(walletNetwork[i])==networkId)
			return walletNetwork[++i];
	return false;
}

function InitPageDashboard()
{
	const c1="<button type='button' onClick='";
	const c2="' class='btn btn-outline-light mt-2 ml-2'>";
	const c3='</button>\n';
	const c4='</td></tr>';
	const c5='<tr><td>';
	const c6='</td><td>';
	
	//let tagReleasedAssets = document.getElementById("releasedAssets");
	//create assets slots aka Projects 
	let tempStrAssetSlot='';
	let i = 1;		//first is empty
	/*
	while ( i < assets.length)
	{
		tempStrAssetSlot = strDashAsset1 + assets[i];
		tempStrAssetSlot += ".png' class='d-fluid img-fluid '></img>\n</div>\n<div class='col-8'>\n<a href='/get?id=";
		tempStrAssetSlot += assets[i] + "' class='link1'><h4>" + assets[i+1] + "</h4></a>\n<p class='text-break'>" + assets[i+2] + "</p>\n</div>\n</div>\n<div class='grid'><div class='text-center row'>";
		tempStrAssetSlot += c1 + 'DashBtnEdit("' + assets[i] + '");' + c2 + "Edit" + c3;
		tempStrAssetSlot += c1 + 'DashBtnClaimProfit(' + i + ');' + c2 + "Claim Profit" + c3;
		tempStrAssetSlot += c1 + 'DashBtnRemove("' + assets[i] + '");' + c2 + "Remove" + c3;
		tempStrAssetSlot += '<button class="ml-2 mt-2 btn btn-outline-light bd-highlight" type="button" data-toggle="collapse" data-target="#CollapseAssetStats' + assets[i] + '" aria-expanded="false">Show details</button>';
		tempStrAssetSlot +='</div></div>';
		tempStrAssetSlot += '<div class="collapse" id="CollapseAssetStats' + assets[i] + '"><hr color="white"></hr>';
		//table
		
		tempStrAssetSlot += '<table class="table table-bordered bg1 color1"><!--<thead><tr><th>Earned ETH</th><th>Waiting ETH</th></tr></thread><!----><tbody>';
		//tempStrAssetSlot += c5 +'Earned ETH' + c6 + CryptoToFriendly(assets[i+4],assets[i+5]) + c4;
		//tempStrAssetSlot += c5 +'Waiting ETH' + c6 + CryptoToFriendly(assets[i+6],assets[i+7]) + c4;
		tempStrAssetSlot += c5 +'Sells' + c6 + assets[i+4] + c4;
		tempStrAssetSlot += c5 +'Rating' + c6 + assets[i+5] + c4;
		tempStrAssetSlot += c5 +'Rating Count' + c6 + assets[i+6] + c4;
		tempStrAssetSlot += '</tbody></table>';
		//
		tempStrAssetSlot +='</div>';
		tempStrAssetSlot += strDashAsset6 + strBr;
		tagReleasedAssets.innerHTML += tempStrAssetSlot;
		tempStrAssetSlot='';
		i=i+4;
	}
	/**/
	
/*
<div class='col-6 col-md-4 col-xl-3 pad2'>
	<div class='bg1 pad1 mt-2'>
		<div class='border2 pad1 '>
			<div class='row'>
				<div class='col-12 col-lg-4'>
					<img class=' w-100' src='/thumb/2b.png'></img>
				</div>
				<div class='col-12 col-lg-8'>
					<a href='/get?id=' class='link1'><h3>Manual</h3></a>
				</div>
			</div>
			<div class='mt-2'>
				<p>Download me you pussy.</p>
			</div>
			<div class='mt-2 grid'>
				<button type='button' href='/download/' class='mt-1 mr-1 btn btn-outline-light'>Download</button>
				<button type='button' href='/report/' class='mt-1 mr-1 btn btn-outline-light'>Report</button>
			</div>
		</div>
	</div>
</div>
<div class='col-6 col-md-4 col-xl-3 pad2'><div class='bg1 pad1 mt-2'><div class='border2 pad1 '><div class='row'><div class='col-12 col-lg-4'><img class=' w-100' src='/thumb/
'></img></div><div class='col-12 col-lg-8'><a href='/get?id=
</h3></a></div></div><div class='mt-2'><p>
</p></div><div class='mt-2 grid'>
</div></div></div></div>
/**/
	//consts for owned item slot
	const str1="<div class='col-6 col-md-4 col-xl-3 pad2'><div class='bg1 pad1 '><div class='border2 pad1 '><div class='row'><div class='col-12 col-lg-4'><img class=' w-100' src='/thumb/";
	const str2=".png'></img></div><div class='col-12 col-lg-8'><a href='/get?id=";
	const str3="' class='link1 text-break'><h3>";
	const str4="</h3></a></div></div><div class='mt-2'><p>";
	const str5="</p></div><div class='mt-2 grid'>";
	const str6="</div></div></div></div>";
	//consts for button with href
	const strBtn1="<button type='button' onClick='";
	const strBtn2="' class='mt-1 mr-1 btn btn-outline-light'>";
	const strBtn3="</button>";
	i = 1;
	tempStrAssetSlot='';
	while ( i < owned.length)
	{
		tempStrAssetSlot += str1 + owned[i] + str2 + owned[i] + str3 + owned[i+1] + str4 + owned[i+2] + str5;
		//buttons
		tempStrAssetSlot += strBtn1 + 'Download("' + owned[i] + '")' + strBtn2 + 'Download' + strBtn3;
		tempStrAssetSlot += strBtn1 + 'Report("' + owned[i] + '")' + strBtn2 + 'Report' + strBtn3;
		//continue
		tempStrAssetSlot += strDashAsset6 + str6;
		i=i+3;
	}
	document.getElementById("ownedAssets").innerHTML += tempStrAssetSlot;
	/**/
	
	//Wallet
	tempStrAssetSlot='';
	
	let temp='';	//array(string) with networks
	//extract data about networks
	for(i=wallet.length-2;i>-1;i-=2)	//foreach coin in wallet
	{	
		f=serviceCoinNetworkId[GetCoinIndex(parseInt(wallet[i]))]+';';
		temp=temp.replaceAll(f,'');
		temp+=f;
	}
	
	//also do this for the networks
	for(i=walletNetwork.length-2;i>-1;i-=2)	//foreach coin in wallet
	{	
		f=serviceCoinNetworkId[GetCoinIndex(parseInt(walletNetwork[i]))]+';';
		temp=temp.replaceAll(f,'');
		temp+=f;
	}
	
	//now print table with all that networks
	temp=temp.split(';');
	for(i=temp.length-2;i>-1;i--)	//foreach coin in wallet
	{
		let networkId=parseInt(temp[i]);
		
		//Network Header
		tempStrAssetSlot+='<tr><th>' + serviceNetworkTitles[GetNetworkIndex(networkId)] + '</th><td colspan="2" class="text-break">';
		let address=GetUserAddress(temp[i]);
		if(address==false)
			tempStrAssetSlot+='Address not configured yet.';
		else
			tempStrAssetSlot+=address;
		tempStrAssetSlot+='</td></tr>';
		
		//Coins Balances
		for(let f=wallet.length-2;f>-1;f-=2)
		{
			let coinIndex=GetCoinIndex(parseInt(wallet[f]));
			let balance=wallet[f+1];
			if(serviceCoinNetworkId[coinIndex]==networkId)
				tempStrAssetSlot+='<tr><th>' + '('+serviceCoinSymbols[coinIndex]+') ' + serviceCoinTitles[coinIndex] + '</th><td class="text-break">' + parseFloat(balance).toFixed(6) + '</td><td class="text-break">' + (balance*GetPrice(serviceCoinSymbols[coinIndex])).toFixed(2) + '<span class="color2">$</span></td></tr>';
		}
	}
	document.getElementById('accountWallet').innerHTML+=tempStrAssetSlot;
}

function DashBtnClaimProfit(i){
	PopupConfirm("Claim profits from the asset.","You are about to try to claim profits locked in asset called: <a class='link2' href='/get?id=" + assets[i] + "' target='_blank'>" + assets[i+1] + '</a> with earnings: <span class="font-weight-bold">' + CryptoToFriendly(assets[i+4],assets[i+5]) + '</span>',"DashClaimProfit(" + i + ");");	
}

function DashClaimProfit(i)
{
	let fprofit=CryptoToFriendly(assets[i+4],assets[i+5]);
	if(fprofit<minClaimableProfit)
	{
		PopupMsg('Error','Profit is below minimum: ' + minClaimableProfit);
		return;
	}
	
	PopupFetch();
	let formData = new FormData();
	formData.append('command', 'ClaimProfit');
	formData.append('id', assets[i]);
	FetchApi(formData, function(data) {
		let temp='';
		switch(data)
		{
			case 'k':
				temp='Claimed profit correctly.';
				PopupSetListeningOnCloseOnce(function(){ GoToSite('/dashboard'); });
				break;
			case 'f':
				temp='Account can not claim the profit right now. Try again later.';
				break;
			case 'm':
				temp='Account can not claim the profit below the minimum.';
				break;
			case '4':
				temp='This product does not exist??? u hacker!?!?';
				break;
			case 'n':
				temp='You are not the owner of this product??? u hacker!?!?';
				break;
			default:
				temp='??? u hacker!?!?';
				break;
		}
		PopupMsg('Result',temp);
	});
}

/*
					<tr>
						<th>ETH</th>
						<td>0x721a22ee6a1cae9217831d7fb317ca31f1a862d3</td>
						<td>0.1</td>
						<td>1$</td>
						<td class='text-center'>
							<button type='button' class='btn btn-outline-light' data-toggle='collapse' data-target='#ETH_options'>
								Expand
							</button>
						</td>
					</tr>
					<tr id='ETH_options' class='collapse out'>
						<td colspan='5'>
							<div class='grid'>
								<button type='button' onclick='' class='btn btn-outline-light mb-2 ml-1 mr-1'>Withdraw</button>
								<button type='button' onclick='' class='btn btn-outline-light mb-2 ml-1 mr-1'>Change Address</button>
							</div>
							<div class='pad1'>
								<div class='border2 pad1' id='ETH_body'>
									<h3>Change Address</h3>
									<label>Enter new address</label>
									<input class='form-control input1' id='ETH_address' maxlength='256'></input>
									<div class='text-right mt-2'>
										<button type='button' onclick='' class='btn btn-outline-light mb-2 ml-1 mr-1'>Change Address</button>
									</div>
								</div>
							</div>
						</td>
					</tr>
					
					<tr><th>
					</th><td>
					</td><td>
					</td><td>
					</td><td class='text-center'><button type='button' class='btn btn-outline-light' data-toggle='collapse' data-target='#
					_options'>Expand</button></td></tr><tr id='
					_options' class='collapse out'><td colspan='5'><div class='grid'>
					</div><div class='pad1'><div class='border2 pad1' id='
					_body'>
					</div></div></div></td></tr>
/**/

function GetPrice(symbol)
{
	symbol=symbol.toUpperCase();
	for(let i=prices.length-3;i>-1;i-=2)
		if(symbol==prices[i])
			return prices[i+1];
}

function InitPageWallet()
{
	let tag=document.getElementById("mainContainer");
	let temp='';
	let networkId=0;
	let coinId=0;
	let address=false;
	let totalNetworkUSD=0;
	let balance=0;
	let balanceUSD=0;
	
	//for all networks
	for(let i=0;i < serviceNetworkId.length;i++)
	{	
		//prepare vars
		totalNetworkUSD=0;

		//block testnets
		if(serviceNetworkIsTestnet[i]) continue;
		
		//...
		networkId=parseInt(serviceNetworkId[i]);
		
		//network section top
		temp+="	<div class='bg2 pad1'><div class='pad1 border2'><div class='pad1'><h3>";
		temp+=serviceNetworkTitles[i];
		temp+="</h3><div class='bg1 pad1 mt-2'><div class='border2 pad1 '><h3>Basic Info</h3><table class='table table-bordered bg1 color1'><tbody><tr><th>Address</th><th>Total balance in USD</th></tr><tr><td class='color1'>";
		
		//address
		temp+='<span id="networkAddress_' + IntToTextCode(networkId) + '">';
		address=GetUserAddress(networkId);
		if(address==false)
			temp+="Address not configured";
		else
			temp+=address;
		//waitingAddresses
		address=GetUserWaitingAddress(networkId);
		if(address!=false)
			temp+="<br><span class='color3'>Claimable by: " + address + "</span>";
		//...
		temp+='</span>';
		
		//...
		temp+="</td><td><span id='networkTotalBalanceUSD_"+IntToTextCode(networkId)+"'></span></td></tr></tbody></table>";
		
		//buttons
		temp+='<div class="grid">';
		//temp+="<button type='button' onclick='TryChangeUserAddress(" + networkId + ");' class='mt-1 ml-1 mr-1 btn btn-outline-light'>Change address</button>";
		
		//button confirm address
		/*
		temp+="<button type='button' id='networkBtnConfirmAddress_"+IntToTextCode(networkId)+"' onclick='TryConfirmWaitingAddress(" + networkId + ");' class='mt-1 ml-1 mr-1 btn btn-outline-light ";
		if(address==false) temp+='disabled';
		temp+="'>Confirm address</button>";
		*/

		//...
		temp+="</div></div></div><div class='row mt-2'>";
		
		//for all coins
		for(let f=0;f < serviceNetworkId.length;f++)
		{
			coinId=parseInt(serviceCoinNetworkId[f]);
			if(coinId==networkId)
			{
				temp+="<div class='col-6 col-md-4 col-xl-3 '><div class='bg1 pad1 mt-2'><div class='border2 pad1 '><h3>";
				temp+=GetCoinFullNameByIndex(f);
				temp+="</h3><div class='mt-2'><table class='w-100'><tr><th>Balance:</th><td class='text-right text-break'>"
				
				//balance
				balance=parseFloat(GetUserBalance(coinId));
				if(balance==false) balance=0;
				//temp+=balance.toFixed(fixDecimalIndex);
				temp+=balance;
				
				//...
				temp+="</td></tr><tr><th>in USD:</th><td class='text-right'>";
				
				//balance in USD
				balanceUSD=balance*GetPrice(serviceCoinSymbols[f]);
				totalNetworkUSD+=balanceUSD;
				temp+=balanceUSD.toFixed(2);
				
				//...
				temp+="</td></tr></table></div><div class='mt-2 grid'>";
				
				//buttons
				temp+="<a href='/deposit?coinId="+coinId+"'><button type='button' class='mt-1 mr-1 btn btn-outline-light'>Deposit</button></a>";
				temp+="<button type='button' onclick='TryUserWithdraw("+coinId+");' class='mt-1 mr-1 btn btn-outline-light'>Withdraw</button>";
			
				//close rest
				temp+="</div></div></div></div>";
			}
		}
		//...
		temp+="</div></div></div></div><div class='pad1'></div>";
		
		//add to tag
		tag.innerHTML+=temp;
		temp='';
		
		//update total
		document.getElementById("networkTotalBalanceUSD_"+IntToTextCode(networkId)).innerHTML=totalNetworkUSD;
	}
}

function TryConfirmWaitingAddress(networkId)
{
	let address=GetUserWaitingAddress(networkId)
	if(address==false) return;
	let i=GetNetworkIndex(networkId);
	let temp='';
	
	//info
	temp='<p>Make sure you connect your wallet account with the access to this ' + serviceNetworkTitles[i] + ' address:<br>' + address + '</p>';
		
	//wallet (oh god)
	temp+="<div class='bg4 pad1 mt-2 mb-2'><div class='pad1 border2'><!-- Wallet setup panel --><label>Setup wallet</label><div class='grid'><div class='row text-center d-flex justify-content-center'><div class='mt-2 ml-1 mr-1'><button type='button' id='btn-metamask' onclick='BtnMetaMaskSetup();' class='btn btn-outline-light'><img src='/img/logo-metamask.png' class='d-fluid walletSetupLogo'></img></button><h6>MetaMask</h6></div><div class='mt-2 ml-1 mr-1'><button type='button' id='btn-wallet_connect' onclick='BtnWalletConnectSetup();' class='btn btn-outline-light'><img src='/img/logo-wallet_connect.png' class='d-fluid walletSetupLogo'></img></button><h6>Wallet Connect</h6></div></div></div><label>Select Network</label><div class='grid'><div class='row text-center d-flex justify-content-center'><div class='dropdown text-center mt-1 mb-1 ml-1 mr-1' id='Spawn-NetworkSelector'></div><div class='text-center mt-1 mb-1 ml-1 mr-1'><button type='button' class='btn btn-outline-light' id='btn-wallet-ChangeNetwork' onclick='WalletChangeNetwork();'>Change Network</button></div></div></div><label>Select Coin</label><div class='dropdown text-center mt-1 mb-1 ml-1 mr-1' id='Spawn-CoinSelector'></div></div></div>";
	
	//quick error info
	temp+="<p class='quickError'></p>";
	
	//popup
	PopupMsg("Confirm address on " + serviceNetworkTitles[i],temp);
	temp='';
	
	//init selectors
	InitNetworkSelector();
	InitCoinSelector();
	
	onWalletConnected=function(){
		//select network
		blockNetworkSwitching=false;
		SelectNetwork(networkId.toString());
		
		//Block other network
		blockNetworkSwitching=true;
		DisableWalletChangeNetwork();
		UpdateNetworkSelectorOptions();
	};
	onWalletConnected();
	
	//popup buttons
	let tag=document.getElementById('PopupFooter');
	temp+='<button type="button" class="btn btn-outline-light" data-dismiss="modal" aria-label="Close">Close</button>';
	temp+='<button type="button" onclick="UserConfirmAddress('+networkId+')" class="btn btn-outline-light">Create Transaction</button>';
	tag.innerHTML=temp;
}

function UserConfirmAddress(networkId)
{
	let i=GetNetworkIndex(networkId);
	let address=GetUserWaitingAddress(networkId)
	if(address==false) return;
	//let amount=parseFloat(document.getElementById(symbol+'_amount').value);
	let amount=0;
	
	CreateTransaction(amount,"c," + userId + ';',function(txHash)
	{
		PopupTransactionSent();
		PopupSetListeningOnCloseOnce(function() {
			TrackOrder('Change of the <span class="color2">' + serviceNetworkTitles[i] + '</span> wallet address.',3,txHash,'User ID: ' + userId + '<br>New Address: ' + address + '<br>Old address: ' + GetUserAddress(networkId),GetSelectedCoinId());
			GoToSite('/dashboard');
		});
	},null,address);
}

function WalletUpdateNetworkAddress(networkId)
{
	let tag=document.getElementById('networkAddress_' + IntToTextCode(networkId))
	if(tag==null) return false;
	
	let temp='';
	
	//address
	address=GetUserAddress(networkId);
	if(address==false)
		temp+="Address not configured";
	else
		temp+=address;
	
	//waitingAddresses
	address=GetUserWaitingAddress(networkId);
	if(address!=false)
		temp+="<br><span class='color3'>Claimable by: " + address + "</span>";

	//update
	tag.innerHTML=temp;
	temp='';
	
	//button confirm address
	tag=document.getElementById("networkBtnConfirmAddress_"+IntToTextCode(networkId));
	temp=tag.className;
	if(address==false)
		temp+=' disabled';
	else
		temp=temp.replaceAll('disabled','');
	tag.className=temp;
	
	return true;
}

function GetUserWaitingAddress(networkId)
{
	networkId=GetUserWaitingAddressIndex(networkId)+1;
	if(networkId==0) return false;
	return waitingAddresses[networkId];
}

function GetUserWaitingAddressIndex(networkId)
{
	networkId=parseInt(networkId);
	for(let i=waitingAddresses.length-2;i>0;i-=2)
		if(parseInt(waitingAddresses[i])==networkId)
			return i;
	return -1;
}

function GetUserWithdraw(coinId)
{
	coinId=GetUserWithdrawIndex(coinId)+1;
	if(coinId==0) return false;
	return toWithdraw[coinId];
}

function GetUserWithdrawIndex(coinId)
{
	coinId=parseInt(coinId);
	for(let i=toWithdraw.length-2;i>0;i-=2)
		if(parseInt(toWithdraw[i])==coinId)
			return i;
	return -1;
}

function TryUserWithdraw(coinId)
{
	let temp='';
	let tag=null;
	let lastRequest=GetUserWithdraw(coinId);
	let i=GetCoinIndex(coinId);
	
	//message
	temp+='<label>';
	
	//last request
	if(lastRequest==false)
		lastRequest=0;
	else
		temp+='The withdrawal request has already been set for this token. You can overwrite the existing withdrawal request.<br>';
	
	//...
	temp+="Enter withdraw amount</label><input class='form-control input1' value='"
	temp+=lastRequest;
	temp+="'id='amount' min='0' type='number' placeholder='For example 0.1 ETH' /><p>That's around <span id='previewUSD'>2</span>$</p>";
	
	//popup
	PopupMsg("Withdraw " + GetCoinFullNameByIndex(i),temp);
	temp='';
	
	//popup buttons
	tag=document.getElementById('PopupFooter');
	temp+='<button type="button" class="btn btn-outline-light" data-dismiss="modal" aria-label="Close">Close</button>';
	temp+='<button type="button" onclick="UserWithdraw('+coinId+')" class="btn btn-outline-light">Withdraw</button>';
	
	//...
	tag.innerHTML=temp;
	
	//preview USD
	tag=document.getElementById('amount');
	let tag2=document.getElementById('previewUSD');
	let price=GetPrice(serviceCoinSymbols[i]);
	tag.addEventListener('input',function(){
		let amount=parseFloat(tag.value);
		if(isNaN(amount)) amount=0;
		tag2.innerHTML=(price*amount).toFixed(2);
	});
	tag2.innerHTML=(price*lastRequest).toFixed(2);
	PopupSetListeningOnCloseOnce(function(){
		tag.removeEventListener('input',null);
	});
}

function TryChangeUserAddress(networkId)
{
	let temp='';
	let tag=null;
	let lastRequest=GetUserWaitingAddress(networkId);
	let i=GetNetworkIndex(networkId);
	
	//message
	temp+='<label>';
	
	//last request
	if(lastRequest==false)
		lastRequest='';
	else
		temp+='The pending address has already been set for this network. You can overwrite it.<br>';
	
	//...
	temp+="Enter the new address.</label><input class='form-control input1' value='"
	temp+=lastRequest;
	temp+="'id='address' type='text' placeholder='For example 0x6b494581D84bEb0eE64EEC74dEA3896A7090eB61' />";
	
	//popup
	PopupMsg("Change Address on " + serviceNetworkTitles[i],temp);
	temp='';
	
	//popup buttons
	tag=document.getElementById('PopupFooter');
	temp+='<button type="button" class="btn btn-outline-light" data-dismiss="modal" aria-label="Close">Close</button>';
	temp+='<button type="button" onclick="ChangeUserAddress('+networkId+')" class="btn btn-outline-light">Change Address</button>';
	
	//...
	tag.innerHTML=temp;
	
}

function CorrectHex(hex)
{
	hex=hex.toLowerCase();
	hex.replaceAll(' ','');
	if(hex.substring(0,2)=='0x')
		hex=hex.substring(2);
	
	//check
	let a=hex;
	//numbers
	for(let i=9;i>-1;i--)
		a=a.replaceAll(i.toString(),'');
	//letters
	for(let i=102;i>96;i--)
		a=a.replaceAll(String.fromCharCode(i),'');
	
	//check byproduct
	if(a=='')
		return '0x'+hex;
	return false;
}

async function ChangeUserAddress(networkId)
{
	let tag=document.getElementById('address');
	let address=CorrectHex(tag.value.trim());
	let i=GetNetworkIndex(networkId);
	
	//check
	if(address==false || address.length>256)
	{
		PopupMsg('Error - Withdraw ' + serviceNetworkTitles[i],'The address is not in a right format.');
		return;
	}
	else if(address=='0x') address='';
	
	//ask
	PopupFetch();
	let formData = new FormData();
	formData.append('command', 'SetAddressListening');
	formData.append('networkId', networkId);
	formData.append('address', address);
	await FetchApi(formData, function(data) {
		let msg='';
		switch(data)
		{
			case 'd':
				UpdateWalletWaitingAddress(networkId,false);
				WalletUpdateNetworkAddress(networkId);
				msg='Waiting address removed successfully!';
				break;
			case 'k':
				UpdateWalletWaitingAddress(networkId,address);
				WalletUpdateNetworkAddress(networkId);
				msg='Waiting address placed successfully! Now you have to confirm, that you are the owner of this address, in order to fully change the account address(login).';
				break;
			case 'c':
				msg='Provided network is not available.';
				break;
			case 'v':
				msg='Address is not in the right format.';
				break;
			case 'n':
				msg='You are not logged in.';
				break;
			case '-':
				msg='This option is currently blocked.';
				break;
			default:
				msg='Server problem';
				break;
		}
		PopupMsg('Result',msg);
	});
	
}

function UpdateWalletWaitingAddress(networkId,address)
{
	let i=GetUserWaitingAddressIndex(networkId);
	if(i<0)
	{
		waitingAddresses.push(networkId);
		waitingAddresses.push(address);
	}
	else
		waitingAddresses[++i]=address;
}


async function UserWithdraw(coinId)
{
	let tag=document.getElementById('amount');	
	let amount=parseFloat(tag.value);
	if(isNaN(amount)) amount=0;
	let i=GetCoinIndex(coinId);
	
	//remove listener
	tag.removeEventListener('input',null);
	PopupResetListenerOnClose();
	
	//checks
	if(amount<0)
	{
		PopupMsg('Error - Withdraw ' + GetCoinFullNameByIndex(i),'The withdraw value cannot be lower than 0.');
		return;
	}
	/*
	else if(amount>GetUserBalance(coinId))
	{
		PopupMsg('Error - Withdraw ' + GetCoinFullNameByIndex(i),'The withdraw value cannot be greater...');
		return;
	}
	*/
	
	//ask
	PopupFetch();
	let formData = new FormData();
	formData.append('command', 'SetWithdraw');
	formData.append('amount', amount);
	formData.append('coinId', coinId);
	await FetchApi(formData, function(data) {
		let msg='';
		switch(data)
		{
			case 'k':
				UpdateWalletWithdraw(coinId,amount);
				msg='Withdraw request placed successfully!';
				break;
			case 'c':
				msg='Provided coin is not available.';
				break;
			case 'v':
				msg='Value is not in the right format.';
				break;
			case 'n':
				msg='You are not logged in.';
				break;
			default:
				msg='Server problem';
				break;
		}
		PopupMsg('Result',msg);
	});
}

function UpdateWalletWithdraw(coinId,value)
{
	value=parseFloat(value);
	let i=GetUserWithdrawIndex(coinId);
	if(i<0)
	{
		toWithdraw.push(coinId);
		toWithdraw.push(value);
	}
	else
		toWithdraw[++i]=value;
}


function TryWalletChangeAddress(symbol)
{
	PopupConfirm("Change wallet address","You are about to try to give a possibility to address below, to change the address of your " + symbol + " Service account wallet and coins built on it. <br>New Address: "+ document.getElementById(symbol+"_address").value,'WalletChangeAddress("'+symbol+'");');	
	
}
async function WalletChangeAddress(symbol)
{
	let address=document.getElementById(symbol+"_address").value.trim();
	if(address.length==0){PopupMsg('Error','Address is empty.')}
		console.log(GetCoinIdBySymbol(symbol));
	PopupFetch();
	let formData = new FormData();
	formData.append('command', 'SetAddressListening');
	formData.append('address', address);
	formData.append('coinId', GetCoinIdBySymbol(symbol));
	await FetchApi(formData, function(data) {
		let msg='';
		switch(data)
		{
			case 'k':
			msg='Success. Now please confirm that you are the owner of this address by confirming it via option "Confirm Address".';
			const strBtn1="<button type='button' onclick='"
			const strBtn2="' class='btn btn-outline-light mb-2 ml-1 mr-1'>";
			const strBtn3="</button>";
			if(GetWaitingAddressToBeConfirmedIndex(symbol)==0)document.getElementById(symbol+'_buttons').innerHTML+=strBtn1 + 'WalletOptionConfirmAddress("' + symbol + '")' + strBtn2 + 'Confirm Address' + strBtn3;
			UpdateWaitingAddressToBeConfirmed(symbol,address);
			break;
			case 'c':
			msg='Provided coin is not available.';
			break;
			case 'd':
			GoToSite('/wallet');
			return;
			break;
			case 'n':
			msg='You are not logged in.';
			break;
			case 'a':
			msg='Provided address is empty.';
			break;
			default:
			msg='Server problem';
			break;
		}
		PopupMsg('Result',msg);
	});
	
}
function WalletOptionConfirmAddress(symbol)
{
	let temp="<label>Make an optional Deposit.</label><input type='number' min='0' step='0.000000001' class='form-control input1' id='"+symbol+"_amount'></input><p>Make sure you send transaction from address you have provided:<br><span class='color2'>";
	temp+=GetWaitingAddressToBeConfirmed(symbol) + '</span></p>';
	
	temp+="<div class='text-right mt-2'><button type='button' onclick=\"";
	temp+="WalletConfirmAddress('" + symbol + "');";
	temp+="\" class='btn btn-outline-light mb-2 ml-1 mr-1'>Create Transaction</button></div>";
	
	document.getElementById(symbol+"_body").innerHTML=temp;
}

function GetServiceWalletAddress(networkId)
{
	for(let i=wallet.length-3;i>-1;i-=3)
		if(parseInt(wallet[i])==parseInt(networkId))
			return wallet[i+2];
	return null;
}

function GetWalletBalance(symbol)
{
	symbol=symbol.toLowerCase();
	for(let i=wallet.length-3;i>-1;i-=3)
		if(wallet[i]==symbol)
			return wallet[i+1];
	return 0;
}

function UpdateWaitingAddressToBeConfirmed(symbol,address){
	//try to find
	let i=GetWaitingAddressToBeConfirmedIndex(symbol);
	if(i==0)	//append
		waitingAddresses.push(symbol.toLowerCase(),address);
	else		//just update
		waitingAddresses[i+1]=address;
}
function GetWaitingAddressToBeConfirmed(symbol){return waitingAddresses[GetWaitingAddressToBeConfirmedIndex(symbol)+1];}
function GetWaitingAddressToBeConfirmedIndex(symbol){
	symbol=symbol.toLowerCase();
	for(let i=waitingAddresses.length-2;i>-1;i-=2)
		if(waitingAddresses[i]==symbol)
			return i;
	return 0;
}


function InitPagePayout()
{
	document.getElementById("title").innerHTML=title;
	document.getElementById("thumb").src="/thumb/" + id + '.png';
	document.getElementById("desc").innerHTML=shortDesc;
	document.getElementById("eth").innerHTML=ETH2 + ETH / 1000000000000000000;
	document.getElementById("unrEth").innerHTML=unrETH2 + unrETH / 1000000000000000000;
	document.getElementById("sells").innerHTML=sells;
	document.getElementById("ethAmount").min=minWithdrawETH;
	document.getElementById("ethAmount").max=Math.min(maxWithdrawETH,ETH2 + ETH / 1000000000000000000);
	if(typeof lastAmount===strNDef) return;
	document.getElementById("ethAmount").value=lastAmount;
	document.getElementById("ethAddress").value=lastAddress;	
}

var allowPayment=false;
var allowBlockChainPayment=false;
async function InitPagePayment()
{
	allowPayment=false;
	billPrice=0;
	LoadCurrencies();
	await ReloadBill();
	document.getElementById("targetPrice").innerHTML=billPrice;
	onCoinSelected=RecalculatePaymentCryptoBill;
	RecalculatePaymentCryptoBill();
}

function InitPageBuyMemory()
{
	LoadCurrencies();
	
	maxMemoryToBuy=500000000000-memoryBalance;
	
	let tag=document.getElementById('memoryAmount');
	onCoinSelected=function (){
		tag.removeEventListener('input',null);
		tag.addEventListener('input',PageBuyMemory_UpdatePrice);
		PageBuyMemory_UpdatePrice();
	}
	onCoinSelected();
}

function PageBuyMemory_UpdatePrice()
{
	let input=document.getElementById('memoryAmount').value;
	//block input
	if(maxMemoryToBuy < input)
	{
		document.getElementById('memoryAmount').value=maxMemoryToBuy;
		input=maxMemoryToBuy;
	}
	else if (input<minMemoryToBuy)
	{
		input=Math.abs(input);
		if(input==0) input=minMemoryToBuy;
		while(input<minMemoryToBuy) input*=10;
		document.getElementById('memoryAmount').value=input;
	}
	
	document.getElementById('previewMegaBytes').innerHTML=(input/1000000).toFixed(6);
	let calc=(input/1000000000);
	document.getElementById('previewGigaBytes').innerHTML=calc.toFixed(6);
	document.getElementById('targetPrice').innerHTML=(calc * memoryGigaBytePrice).toFixed(2);
	let symbol=serviceCoinSymbols[GetCoinIndex(GetSelectedCoinId())];
	cryptoPrice=calc * memoryGigaBytePrice / GetPrice(symbol);
	document.getElementById('cryptoPrice').innerHTML=cryptoPrice.toFixed(6) + " " + symbol.toUpperCase();

	//payment
	allowPayment=true;
	allowBlockChainPayment=true;
	//get balance
	symbol=symbol.toLowerCase();
	let userCryptoBalance=GetUserBalance(GetSelectedCoinId());
	let address=GetUserAddress(GetSelectedNetworkId());
	symbol=symbol.toUpperCase();
	
	document.getElementById('AccountCryptoSymbol').innerHTML=symbol;
	document.getElementById('AccountCryptoBalance').innerHTML=userCryptoBalance;
	let temp='';
	
	//block Paying overall
	if(userCryptoBalance<cryptoPrice || isNaN(billCryptoPrice))
	{
		temp+="<br/> Account doesn't have enough " + symbol + '.';
		document.getElementById('btnPay').classList.add('disabled');
		document.getElementById('btnSendMoney').classList.add('disabled');
		allowPayment=false;
	}
	else
		document.getElementById('btnPay').classList.remove('disabled');
	
	//block Paying via blockchain if address is not setup.
	if(address==false)
	{
		temp+="<br/> Account doesn't have registered " + symbol + " wallet address.";
		document.getElementById('btnSendMoney').classList.add('disabled');
		allowBlockChainPayment=false;
	}
	else
		document.getElementById('btnSendMoney').classList.remove('disabled');
	
	document.getElementById('Info').innerHTML=temp;
}

function RecalculatePaymentCryptoBill()
{
	allowPayment=true;
	allowBlockChainPayment=true;
	let coinId=GetSelectedCoinId();
	let coinIndex=GetSelectedCoinIndex();
	let symbol=serviceCoinSymbols[coinIndex].toUpperCase();
	let balance=GetUserBalance(coinId);
	if(balance==false) balance=0;
	let address=GetUserAddress(serviceCoinNetworkId[coinIndex]);
	
	billCryptoPrice=billPrice/GetPrice(symbol);
	document.getElementById("cryptoPrice").innerHTML=billCryptoPrice.toFixed(6) + symbol;
	
	document.getElementById('AccountCryptoSymbol').innerHTML=symbol;
	document.getElementById('AccountCryptoBalance').innerHTML=balance;
	let temp='';
	
	//block Paying
	if(balance<billCryptoPrice || isNaN(billCryptoPrice))
	{
		temp+="<br/> Account doesn't have enough " + symbol + '.';
		document.getElementById('btnPay').classList.add('disabled');
		document.getElementById('btnSendMoney').classList.add('disabled');
		allowPayment=false;
	}
	else
		document.getElementById('btnPay').classList.remove('disabled');
	
	//block Paying via blockchain if address is not setup.
	if(address==false)
	{
		temp+="<br/> Account doesn't have registered " + symbol + " wallet address.";
		document.getElementById('btnSendMoney').classList.add('disabled');
		allowBlockChainPayment=false;
	}
	else
		document.getElementById('btnSendMoney').classList.remove('disabled');
	document.getElementById('Info').innerHTML=temp;
}

function LoadCurrencies()
{
	let tagCurrencies = document.getElementById("currencies");
	for(let i=1;i<prices.length;i+=2)
		tagCurrencies.innerHTML+=strSmCurrency1 + "<b>" + prices[i-1] + "</b><br>" + prices[i] + strEndDivTimes3;
}

function InitPageBuyMemory()
{
	LoadCurrencies();
	
	maxMemoryToBuy=500000000000-memoryBalance;
	
	let tag=document.getElementById('memoryAmount');
	onCoinSelected=function (){
		tag.removeEventListener('input',null);
		tag.addEventListener('input',PageBuyMemory_UpdatePrice);
		PageBuyMemory_UpdatePrice();
	}
	onCoinSelected();
}

function PageBuyMemory_UpdatePrice()
{
	let input=document.getElementById('memoryAmount').value;
	//block input
	if(maxMemoryToBuy < input)
	{
		document.getElementById('memoryAmount').value=maxMemoryToBuy;
		input=maxMemoryToBuy;
	}
	else if (input<minMemoryToBuy)
	{
		input=Math.abs(input);
		if(input==0) input=minMemoryToBuy;
		while(input<minMemoryToBuy) input*=10;
		document.getElementById('memoryAmount').value=input;
	}
	
	document.getElementById('previewMegaBytes').innerHTML=(input/1000000).toFixed(6);
	let calc=(input/1000000000);
	document.getElementById('previewGigaBytes').innerHTML=calc.toFixed(6);
	document.getElementById('targetPrice').innerHTML=(calc * memoryGigaBytePrice).toFixed(2);
	let symbol=serviceCoinSymbols[GetCoinIndex(GetSelectedCoinId())];
	cryptoPrice=calc * memoryGigaBytePrice / GetPrice(symbol);
	document.getElementById('cryptoPrice').innerHTML=cryptoPrice.toFixed(6) + " " + symbol.toUpperCase();

	//payment
	allowPayment=true;
	allowBlockChainPayment=true;
	//get balance
	symbol=symbol.toLowerCase();
	let userCryptoBalance=GetUserBalance(GetSelectedCoinId());
	let address=GetUserAddress(GetSelectedNetworkId());
	symbol=symbol.toUpperCase();
	
	document.getElementById('AccountCryptoSymbol').innerHTML=symbol;
	document.getElementById('AccountCryptoBalance').innerHTML=userCryptoBalance;
	let temp='';
	
	//block Paying overall
	if(userCryptoBalance<cryptoPrice || isNaN(cryptoPrice))
	{
		temp+="<br/> Account doesn't have enough " + symbol + '.';
		document.getElementById('btnPay').classList.add('disabled');
		document.getElementById('btnSendMoney').classList.add('disabled');
		allowPayment=false;
	}
	else
		document.getElementById('btnPay').classList.remove('disabled');
	
	//block Paying via blockchain if address is not setup.
	if(address==false)
	{
		temp+="<br/> Account doesn't have registered " + symbol + " wallet address.";
		document.getElementById('btnSendMoney').classList.add('disabled');
		allowBlockChainPayment=false;
	}
	else
		document.getElementById('btnSendMoney').classList.remove('disabled');
	
	document.getElementById('Info').innerHTML=temp;
}

function TryPaymentViaServiceMemory()
{
	if(!allowPayment) return;
	let input=document.getElementById('memoryAmount').value;
	let symbol=serviceCoinSymbols[GetCoinIndex(GetSelectedCoinId())];
	PopupConfirm("Pay via the Service","You are about to try to pay for products that your "+symbol+" balance let, with your Account's "+symbol+" balance.<br>" + 'Avaliable ' + symbol + ' in Account: ' + GetWalletBalance(symbol) + "<br> Price: " + cryptoPrice + ' ' + symbol + '<br>Amount: ' + input,"PaymentViaServiceMemory();");	
}

function PaymentViaServiceMemory()
{
	PopupFetch();
	let formData = new FormData();
	formData.append('command', 'BuyMemory');
	formData.append('coinId', GetSelectedCoinId());
	formData.append('amount', document.getElementById('memoryAmount').value);
	FetchApi(formData, function(data) {
		var dim = new Dimperpreter(data);
		var arg = dim.Next();
		var func = '';
		
		var temp='';
		while(arg.length>0)
		{
			func=arg[0].trim();
			console.log(func);
			//media
			if(func=='K'){temp+="Transaction Completed.";}
			else if(func=='Bought'){temp+="You can't have more than 500 GB of memory.";}
			else if(func=='NoWallet'){temp+="You have got no history with this currency.";}
			else if(func=='Poor'){temp+="You are too poor to pay for this order.";}
			else if(func=='Poor'){temp+="You are too poor to pay for this order.";}
			else if(func=='n'){temp+="You are not logged in.";}
			else if(func=='c'){temp+="Coin is undefined.";}
			else if(func=='t'){temp+="Amount is undefined.";}
			else if(func=='m'){temp+="Amount is below the minimum.";}
			else if(func=='Frost'){temp+="Account is currently being used by other process. Try again later.";}
			arg = dim.Next();
		}
		PopupMsg('Transaction Result',temp);
		PopupSetListeningOnClose(function(){ GoToSite('/dashboard'); });
	});
}

function PaymentViaBlockChainMemory()
{
	if(!allowBlockChainPayment) return;
	let symbol = serviceCoinSymbols[GetCoinIndex(GetSelectedCoinId())];
	
	let input=document.getElementById('memoryAmount').value;
	
	CreateTransaction(cryptoPrice,'bm,' + input + ';',function(txHash) {
		PopupTransactionSent();
		PopupSetListeningOnCloseOnce(function() {
			message='User ID: ' + userId + '<br>Amount:';
			const s='<br><a class="link1" href="/get?id=';
			if(typeof(targetAsset)==strNDef)
			{
				let titles = ReadArray_LocalStorage('CartTitles');
				for(let i=0;i<cart.length;i++)
					message+=s + cart[i] + '">' + titles[i] + '</a>';
			}	
			else
				message +=s + targetAsset + '">' + targetAssetTitle + '</a>';
			
			ResetCart();
			TrackOrder('Purchase of Memory.',3,txHash,'User ID: ' + userId + '<br>Price: ' + cryptoPrice.toFixed(6) + " " + symbol + "<br>Amount of memory: " + input);
			GoToSite('/');
		})
	},null,null);
}

function InitPageSettings()
{
	//currently nothing
}

async function InitPageEditProfile()
{
	//set the username
	document.getElementById("username").value=username;
	
	//description
	let tag=document.getElementById("description");
	tag.placeholder='Loading...';
	tag.disabled=true;
	//load description into the editor
	const dim=new Dimperpreter(await GetUserDescription(userId));
	let args=dim.Next();
	while(args.length>0)
	{
		switch(args[0].trim())
		{
			case 'Description':
				tag.value=args[1];
				break;
		}

		//next
		args=dim.Next();
	}
	
	//enable editing
	tag.disabled=false;
	tag.placeholder='Markdown format only';
}

async function GetUserDescription(userId)
{
	//form a request
	var formData = new FormData();
	formData.append('command', 'GetUserDescription');
	formData.append('id', userId);

	//return the result
	let r;
    await FetchApi(formData, function(data) {
		r=data;
	});
	return r;
}

function TryUpdateUserDescription()
{
	PopupConfirm("Update Profile Description","You are about to update the Profile Description.","UpdateUserDescription();")
}

function UpdateUserDescription()
{
	PopupReset();
	PopupFetch();
	let dimc='';

	//profile will be more configureable in the future
	//main description
	dimc += "Description," + DimProtect(document.getElementById("description").value) + ';';
	
	let formData = new FormData();
	formData.append('command', 'UpdateUserDescription');
	formData.append('packageInfo', dimc);
	FetchApi(formData, function(data) {
		let title='Error';
		let msg='';
		switch(data)
		{
			case 'k':
				title='Yay!';
				msg='PackageInfo has been successfully updated!';
				break;
			case 'n':
				msg='https://youtu.be/2dZy3cd9KFY';
				break;
			case 'l':
				msg='Description is too large!';
				break;
			case 'f':
				msg='Your account is currently being used by other process. Try again later.';
				break;
			default:
				msg='Are you trying to kill me O_O!!!';
				break;
		}
		PopupMsg(title,msg);
	});
}

function TryUpdateUserAvatar()
{
	PopupConfirm("Update Thumbnail","You are about to update the Thumbnail","UpdateUserAvatar();")
}

function UpdateUserAvatar()
{
	PopupFetch();

	//https://stackoverflow.com/questions/5587973/javascript-upload-file
	let tag = document.getElementById("fileSelector1");
	if(tag.files.length == 0) {PopupMsg('Error',"You haven't selected any file."); return;}
	let photo = tag.files[0];
	let temp = LeftStr(photo.name,4);
	if(temp != '.png' && temp != '.PNG') { PopupMsg('Error','Unsupported file format. We accept only PNGs for thumbnails.'); return;}
	if(photo.size > 2000000) { PopupMsg('Error','File size must be less than 2Mb.'); return;}
	
	var reader = new FileReader();
	reader.readAsDataURL(photo);
	reader.onload = function (e) {

		//Initiate the JavaScript Image object.
		var image = new Image();

		//Set the Base64 string return from FileReader as source.
		image.src = e.target.result;

		//Validate the File Height and Width.
		image.onload = function ()
		{
			var height = this.height;
			var width = this.width;
			if (this.width > 512 || this.width/this.height != 1) { PopupMsg('Error','Wrong image size. Ratio of the image size must be = 1/1 = width/height.<br>And can not be larger than 512px in width or height.'); return;}
			
			let formData = new FormData();
			formData.append('command', 'UpdateUserAvatar');
			formData.append("photo", photo);

			FetchApi(formData, function(data) {
				let msg='';
				let title='Error'
				switch(data)
				{
					case 'k':
						title='Yay!';
						msg='Avatar has been updated successfully!';
						document.getElementById("userAvatarPreview").src='/avt/' + userId + '.png?ss=' + new Date().getTime();
						break;
					case 'l':
						msg='File size can not be larger than 2 MB.';
						break;
					case 'e':
						msg="So you play with js huh. You haven't send any file.";
						break;
					case 'n':
						msg='https://youtu.be/2dZy3cd9KFY';
						break;
					case 't':
						msg='Unsupported file format. We accept only PNGs for thumbnails.';
						break;
					case 's':
						msg='Wrong image size. Ratio of the image size must be = 1/1 = width/height.<br>And can not be larger than 512px in width or height.';
						break;
					case 'f':
						msg='Your account is currently being used by other process. Try again later.';
						break;
					default:
						msg='Are you trying to kill me O_O!!!';
						break;
				}
				PopupMsg(title,msg);
				
			});
		};
	};
}


function InitPageReport(){}

async function ReloadBill()
{	
	let temp='';
	let cart = ReadArray_LocalStorage('Cart');
	
	if(typeof(targetAsset) != strNDef)
		temp=targetAsset;
	else if(cart.length>0)
	{
		for (let i = 0; i < cart.length; i++)
			temp+=cart[i]+';';
		temp=InverseLeftStr(temp,1);
	}
	else
		GoToSite('/');
	
	//fetch
	let tagOrderAssets = document.getElementById("orderAssets");
	tagOrderAssets.innerHTML=strBill1 + "#" + strBtn2 + "Product" + strBill3 + "Price" + strEndDivTimes2;;
	
	let formData = new FormData();
	formData.append('command', 'GetBill');
	formData.append('ids', temp);
	await FetchApi(formData, function(data) {
		if(data=="") { window.location.href = '/'; return;}
		var dim = new Dimperpreter(data);
		var arg = dim.Next();
		billPrice=0;
		while(arg.length>0)
		{
			billPrice += Number(arg[1]);
			tagOrderAssets.innerHTML += strBill1 + arg[0] + strBtn2 + arg[2] + strBill3 + arg[1] + strEndDivTimes2;
			arg = dim.Next();
		}
	});
}

function TryPaymentViaService()
{
	if(!allowPayment) return;
	let symbol=serviceCoinSymbols[GetCoinIndex(GetSelectedCoinId())];
	PopupConfirm("Pay via the Service","You are about to try to pay for products that your "+symbol+" balance let, with your Account's "+symbol+" balance.<br>" + '<br>Avaliable ' + symbol + ' in Account: ' + GetUserBalance(GetSelectedCoinId()) + "<br>Total Price in "+symbol+": " + billCryptoPrice,"PaymentViaService();");	
}

function PaymentViaService()
{
	var cart = ReadArray_LocalStorage('Cart');
	var order='';
	if(typeof targetAsset===strNDef)
	{
		console.log('Buying >1 item');
		for(let i=cart.length-1;i>-1;i--)
			order+=cart[i] + ";";
		order=InverseLeftStr(order,1);
	}
	else
	{
		console.log('Buying 1 item');
		order=targetAsset;
	}
	
	PopupFetch();
	let formData = new FormData();
	formData.append('command', 'Payment');
	formData.append('coinId', GetSelectedCoinId());
	formData.append('ids', order);
	FetchApi(formData, function(data) {
		var dim = new Dimperpreter(data);
		var arg = dim.Next();
		var func = '';
		
		var temp='';
		while(arg.length>0)
		{
			func=arg[0].trim();
			console.log(func);
			//media
			if(func=='Err'){temp+="Couldn't buy an Item of id:" + arg[1] + " <br />";}
			else if(func=='K'){temp+="Transaction Completed.";}
			else if(func=='Bought'){temp+="Transaction doesn't buy anything.";}
			else if(func=='ErrDim'){temp+="Wrong arguments.";}
			arg = dim.Next();
		}
		ResetCart();
		PopupMsg('Transaction Result',temp);
		PopupSetListeningOnClose(function(){ GoToSite('/dashboard'); });
	});
}

function PaymentViaBlockChain()
{
	if(!allowBlockChainPayment) return;
		
	let message='';
	if(userId!='-1')
		message='b,';
	
	//write assets to message
	if(typeof targetAsset===strNDef)
	{
		console.log('Buying >1 item');
		for(let i=cart.length-1;i>-1;i--)
			message+=cart[i] + ",";
		message=InverseLeftStr(message,1);
	}
	else
	{
		console.log('Buying 1 item');
		message+=targetAsset;
	}
	//if(userId=='-1') {AttempRegister(message); return;}
	//else
	//	message+=';';
	
	CreateTransaction(billCryptoPrice,message,function(txHash) {
		PopupTransactionSent();
		PopupSetListeningOnCloseOnce(function() {
			message='User ID: ' + userId + '<br>Order:';
			const s='<br><a class="link1" href="/get?id=';
			if(typeof(targetAsset)==strNDef)
			{
				let titles = ReadArray_LocalStorage('CartTitles');
				for(let i=0;i<cart.length;i++)
					message+=s + cart[i] + '">' + titles[i] + '</a>';
			}	
			else
				message +=s + targetAsset + '">' + targetAssetTitle + '</a>';
			
			ResetCart();
			TrackOrder('Purchase of the order.',3,txHash,message);
			GoToSite('/');
		})
	},null,null);
	
	//Get wallet sender address
	//GetServiceWalletAddress(serviceNetworkCurrencySymbol[GetSelectedNetworkIndex()])
}

function Tester()
{
	console.log('ss');
	x=setTimeout(Tester,1000);
}

function DashBtnEdit(s){window.location.href = '/edit?id=' + s;}
//function DashBtnStats(s){window.location.href = '/stats?id=' + s;}
function OpenInNewTab(url) {window.open(url, '_blank').focus();}
function OpenUrl(url) {window.location.href = url;}
function DashBtnDownload(s){OpenInNewTab('/download/?id=' + s)}
function DashBtnReport(s){window.location.href = '/report?id=' + s;}

function AttempLogin()
{
	LoginToggle();
	var login = document.getElementById("address").value;
	//get fresh last login attemp number (used for hashing)
	//the service will not know the current password. It will be able only to listen to listen to the previous password.
	var formData = new FormData();
	formData.append('coinId',GetSelectedCoinId());
	formData.append('login', login);
	formData.append('command', 'GetLoginAttemp');
	
	FetchApi(formData, function(data) {
		if(data=='')
		{
			LoginEnd("#cf0e00","Wrong Login.");
			return;
		}
		//The goal is to achieve that the service will never know the actual password that user enters into the input.
		//I also have to include that someday maybe this database will be public. Like a monero XMR as an example.
		//https://youtu.be/IyNVHmk1k0s
		//WARNING: this lastLoginIndex should never repeat in the history.
		//To achieve this i can try to to make from an infinite type of int.
		//Or I can require from the user to change password if the index will be close to the reset/starting_value/default_value
		var lastLoginIndex = parseInt(data);
		var password = document.getElementById("password").value;
		//new hash that will replace the old (if the key to the old is correct)
		var newPassHash = sha256(sha256(password + (lastLoginIndex + 1)));
		//key to the old hash
		password = sha256(password + lastLoginIndex);
		console.log(sha256(sha256(password)));
		var formData = new FormData();
		formData.append('coinId',GetSelectedCoinId());
		formData.append('login', login);
		formData.append('password', password);
		formData.append('newPassHash', newPassHash);
		formData.append('command', 'Login');
		FetchApi(formData, function(data) {
			if(data=='k')
			{
				LoginEnd("#00c410","You are logged in!");
				window.location.href = '/dashboard';
			}
			else
			{
				LoginEnd("#cf0e00","Wrong Login or Password.");
			}
		});
		//user to login sends.... login,oldpassword,newoutputhashpassword
		//server retrieves this....searches for login and looks on his oldoutputhashpassword
		//server takes the sha256 from the oldpassword and compares the output with the oldoutputhashpassword
		// if the output is the same.. then server updates the oldoutputhashpassword with newoutputhashpassword and give access to the account
		//else error.
	});
}

function LoginEnd(bgColor, text)
{
	$('#cPopup1').collapse('hide')
	setTimeout(function ()
	{
		document.getElementById("cPopup1Body").style.backgroundColor = bgColor;
		document.getElementById("cPopup1Body").innerHTML = text;
		$('#cPopup1').collapse('show');	
		LoginToggle();
    }, 500);
	
}

function Logout()
{
	ResetNetworkSelectors();
	var formData = new FormData();
	formData.append('command', 'Logout');
	FetchApi(formData, function(data) { window.location.href = '/'; });
}

function LoginToggle()
{
	//id='buttonLogin'
	var btn = document.getElementById("buttonLogin");
	if(btn.onClick=='')
	{
		btn.onClick="AttempLogin();";
		btn.style.backgroundColor='#5cb85c';
	}
	else
	{
		btn.onClick='';
		btn.style.backgroundColor='#292b2c';
	}
}

function PopupSetListeningOnClose(funcClose){
	//PopupResetListenerOnClose();
	$("#Popup").on("hidden.bs.modal", ()=> { document.getElementById("PopupBody").innerHTML = ""; funcClose();});}	
function PopupSetListeningOnCloseOnce(funcClose){
	PopupResetListenerOnClose();
	$("#Popup").on("hidden.bs.modal", ()=> { document.getElementById("PopupBody").innerHTML = ""; funcClose(); PopupResetListenerOnClose();});}
function PopupResetListenerOnClose(){$("#Popup").off("hidden.bs.modal");}

function PopupReset()
{
	document.getElementById("PopupFooter").innerHTML = strPopupCancelButton;
}

function PopupShow(){$("#Popup").modal('show');}

function PopupMsg(title, msg)
{
	PopupReset();
	document.getElementById("PopupTitle").innerHTML = title
	document.getElementById("PopupBody").innerHTML = msg;
	$("#Popup").modal('show');
}

function PopupBlockExit()
{
	document.getElementById("PopupFooter").innerHTML='';
	
	
}

function PopupFetch()
{
	PopupMsg('Fetcher','Fetching...');
	PopupBlockExit();
}

function PopupWalletListen()
{
	PopupMsg('Wallet','Waiting for transaction hash response from the wallet<span id="txHashWaitingTimePreview"></span>');
	PopupBlockExit();
	
	//loading bar;
	let t=0;
	let func=() => {
		//console.log('waiting ' + t);
		//check
		let tag=document.getElementById("txHashWaitingTimePreview");
		if(tag==null) return;
		//message
		let temp='';
		temp+='(time: ' + t + 's)';
		for(let i=t%3;i>-1;i--)
			temp+='.';
		tag.innerHTML=temp;
		//repeat
		setTimeout(func, "1000")
		t++;
	}
	setTimeout(func, "1000");
}

function PopupTransactionSent(){PopupMsg('Transaction sent.','Transaction has been sent. Now, you have to wait for the transaction to finish. During this time, you can explore the Ethuardo.');}

function PopupConfirm(title, msg, func)
{
	PopupReset();
	document.getElementById("PopupTitle").innerHTML = title
	document.getElementById("PopupBody").innerHTML = msg;
	document.getElementById("PopupFooter").innerHTML += strConfirmBtn1 + func + strConfirmBtn2;
	$("#Popup").modal('show');
}

function ChangePopupBody(html){document.getElementById("PopupBody").innerHTML = html;}
function LeftStr(str,i){return str.substring(str.length-i);}
function RightStr(str,i){return str.substring(0,i);}
function InverseLeftStr(str,i){return str.substring(0,str.length-i);}

function TryUpdateThumb()
{
	PopupConfirm("Update Thumbnail","You are about to update the Thumbnail","UpdateThumb();")
}

function UpdateThumb()
{
	//https://stackoverflow.com/questions/5587973/javascript-upload-file
	let tag = document.getElementById("fileSelector1");
	if(tag.files.length == 0) {PopupMsg('Error',"You haven't selected any file."); return;}
	let photo = tag.files[0];
	var temp = LeftStr(photo.name,4);
	if(temp != '.png' && temp != '.PNG') { PopupMsg('Error','Unsupported file format. We accept only PNGs for thumbnails.'); return;}
	if(photo.size > 2000000) { PopupMsg('Error','File size must be less than 2Mb.'); return;}
	
	var reader = new FileReader();
	reader.readAsDataURL(photo);
	reader.onload = function (e) {

		//Initiate the JavaScript Image object.
		var image = new Image();

		//Set the Base64 string return from FileReader as source.
		image.src = e.target.result;

		//Validate the File Height and Width.
		image.onload = function ()
		{
			var height = this.height;
			var width = this.width;
			if (this.width/this.height != 1.26) { PopupMsg('Error','Wrong image size. Ratio of the image size must be = 1.26 = width/height.'); return;}
			
			let formData = new FormData();
			formData.append('command', 'UpdateThumbnail');
			formData.append('id', id);
			
			formData.append("photo", photo);
			FetchApi(formData, function(data) {
				let msg='';
				let title='Error'
				switch(data)
				{
					case 'k':
						title='Yay!';
						msg='Thumbnail has been updated successfully!';
						document.getElementById("thumbnail").src='/thumb/'+id +'.png?ss=' + new Date().getTime();
						break;
					case 'm':
						msg='Cannot update the pack becouse, your updated file would break your account memory limit.<br> If you want to expand your memory, please go to the Dashboard.';
						break;
					case 'l':
						msg='File size must be less or equal 1GB.';
						break;
					case 'e':
						msg="So you play with js huh. You haven't send any file.";
						break;
					case 'n':
						msg='https://youtu.be/2dZy3cd9KFY';
						break;
					case '4':
						msg='How did you get here? There is no such offert as this, that you wish to update.';
						break;
					case 'f':
						msg='Your account is currently being used by other process. Try again later.';
						break;
					default:
						msg='Are you trying to kill me O_O!!!';
						break;
				}
				PopupMsg(title,msg);
				
			});
		};
	};
}

function TryUpdateMeta()
{
	let isPrivate='TRUE';
	if(document.getElementById("isPrivate").checked) isPrivate='FALSE';
	PopupConfirm("Update Thumbnail","You are about to update:<br>-Title: " + document.getElementById("title").value + strBr +"-ShortDescription: " + document.getElementById("shortDescription").value + strBr +"-Price: " + document.getElementById("price").value  + strBr + "-FileName: " +  document.getElementById("fileName").value  + strBr + '-Is private: ' + isPrivate,"UpdateMeta();")
}

function UpdateMeta()
{
	let title = document.getElementById("title").value.trim();
	let shortDescription = document.getElementById("shortDescription").value.trim();
	let price = document.getElementById("price").value;
	let fileName=document.getElementById("fileName").value.trim();
	let isPrivate=0;
	if(document.getElementById("isPrivate").checked) isPrivate=1;
	
	if(title=='' || shortDescription==''  || price < 2) { PopupMsg('Error','Some fields have incorrect values.'); return;}
	
	let formData = new FormData();
	formData.append('command', 'UpdateMeta');
	formData.append('id', id);
	formData.append("title", title);
	formData.append("shortDescription", shortDescription);
	formData.append("price", price);
	formData.append("fileName", fileName);
	formData.append("isPrivate", isPrivate);
	
	FetchApi(formData, function(data) {
		let msg='';
		let title='?';
		switch(data)
		{
			case 'k':
				title='Yay!';
				msg='MetaData has been changed successfully!';
				break;
			default:
				msg='Are you trying to kill me O_O!!!';
				break;
		}
		PopupMsg(title,msg);
	});
}


//Media bar
function MediaView(i)
{
	PopupReset();
	i+=mediaPage*6;
	selectedMedia=i;
	if(i>=media.length)
	{		//new media
		return;
		
	}
	else	//media exists in media[]
	{
		var mediaToDisplay = media[i];
		document.getElementById("PopupTitle").innerHTML = mediaTitle[i];
		if(LeftStr(mediaToDisplay,3) == '.yt')
		{
			document.getElementById("PopupBody").innerHTML = strYouTube1 + InverseLeftStr(mediaToDisplay,3) + strYouTube2;
		}
		else //if(LeftStr(mediaToDisplay,4) == '.png' || LeftStr(mediaToDisplay,4) == '.gif' || LeftStr(mediaToDisplay,4) == '.jpg' || LeftStr(mediaToDisplay,5) == '.jpeg')
		{
			document.getElementById("PopupBody").innerHTML = strImg1 + media[i] + strImg2;
			document.getElementById("PopupFooter").innerHTML += strAHref + media[i] + strPopupOpenInNewTab2;
		}
		if(devMode)
		{
			document.getElementById("PopupFooter").innerHTML += strMediaAddNewOptionBtn1 + "MedieMoveLeft();" + strBtn2 + "Move Left" + strBtnEnd;
			document.getElementById("PopupFooter").innerHTML += strMediaAddNewOptionBtn1 + "MedieMoveRight();" + strBtn2 + "Move Right" + strBtnEnd;
			document.getElementById("PopupFooter").innerHTML += strBtn1 + "MediaRemove();" + strBtn2 + "Remove" + strBtnEnd;
		}
	}
	$("#Popup").modal('show');
}

function UpdateMediaSlot(i, targetMedia)
{
	//document.getElementById("MediaSlot" + i).onclick =  function() { MediaView(targetMedia) };
	let mediaToDisplay='_empty.png';
	if(devMode) mediaToDisplay='_editableMediaSlot.png';
	if(i < media.length) mediaToDisplay = media[i];
	//console.log(mediaToDisplay);
	if(LeftStr(mediaToDisplay,3) == '.yt') document.getElementById("MediaSlot" + targetMedia + "Img").src = 'https://i3.ytimg.com/vi/' + mediaToDisplay.split("?")[0] + '/maxresdefault.jpg';
	else if(RightStr(mediaToDisplay,4)=="http") document.getElementById("MediaSlot" + targetMedia + "Img").src = mediaToDisplay;
	else document.getElementById("MediaSlot" + targetMedia + "Img").src = '/img/' + mediaToDisplay;
	
	//https://i3.ytimg.com/vi/erLk59H86ww/maxresdefault.jpg
}

function MediaNext()
{
	mediaPage++;
	if(mediaPage*6 >= media.length)
	{	
		mediaPage = Math.ceil(media.length / 6) - 1;
		if(mediaPage<0) mediaPage = 0;
	}
	RefreshMedia();
}

function MediaPrevious()
{
	mediaPage--;
	if(mediaPage<0) mediaPage = 0;
	RefreshMedia();
}

function RefreshMedia()
{
	var s=mediaPage*6;
	for (let i = 0; i < 6; i++) UpdateMediaSlot(i+s,i);
}

function MediaAddNew()
{
	PopupReset();
	document.getElementById("PopupTitle").innerHTML = 'Add new media';
	document.getElementById("PopupBody").innerHTML = strMediaAddNew;
	//document.getElementById("PopupFooter").innerHTML = '';
	$("#Popup").modal('show');
}

function MediaAddNewOptionLinkImg()
{
	PopupReset();
	document.getElementById("mediaAddNewOption").innerHTML = strMediaAddNewOptionLinkImg;
	document.getElementById("PopupFooter").innerHTML += strMediaAddNewOptionBtn1 + 'MediaAddNewLinkImg()' + strMediaAddNewOptionBtn2;
}

function MediaImgCheck(){document.getElementById("imgCheck").innerHTML = strImg1 + document.getElementById("ImageTarget").value.trim() + strImg2;}

function MediaAddNewLinkImg()
{
	media.unshift(document.getElementById("ImageTarget").value.trim());
	mediaTitle.unshift(document.getElementById("mediaAddNewCaption").value);
	$("#Popup").modal('hide');
	RefreshMedia();
}

function MediaAddNewOptionYT()
{
	PopupReset();
	document.getElementById("mediaAddNewOption").innerHTML = strMediaAddNewOptionYT;
	document.getElementById("PopupFooter").innerHTML += strMediaAddNewOptionBtn1 + 'MediaAddNewYT()' + strMediaAddNewOptionBtn2;
}

function MediaYTCheck()
{
	var a=document.getElementById("YoutubeTarget");
	a.value = a.value.trim();
	if(a.value.indexOf("?t=")==-1) a.value += "?t=0";
	document.getElementById("youTubeVideoCheck").innerHTML = strYouTube1 + a.value + strYouTube2;
}

function MediaAddNewYT()
{
	
	var s = document.getElementById("YoutubeTarget").value.trim();
	if(s.indexOf("?t=")==-1) s += "?t=0";
	media.unshift(s + ".yt");
	mediaTitle.unshift(document.getElementById("mediaAddNewCaption").value);
	$("#Popup").modal('hide');
	RefreshMedia();
}

function MediaAddNewOptionImg()
{
	PopupReset();
	document.getElementById("mediaAddNewOption").innerHTML = "Work in progress... Currently please provide direct url to the image in option ExistingImage.";
}

function TryUpdatePackage()
{
	PopupConfirm("Update Thumbnail","You are about to update the Package of the offert.","UpdatePackage();")
}

function UpdatePackage()
{
	PopupReset();
	let tag = document.getElementById("fileSelector2");
	if(tag.files.length == 0) {PopupMsg('Error',"You haven't selected any file."); return;}
	let pak = tag.files[0];
	var temp = LeftStr(pak.name,4);
	if(pak.size > 1073741824) { PopupMsg('Error','File size must be less or equal 1GB.'); return;}

	let formData = new FormData();
	formData.append('command', 'UpdatePackage');
	formData.append('id', id);
	formData.append("package", pak);
	PopupReset();
	FetchApi(formData, function(data) {
		let msg='';
		let title='Error';
		
		switch(data)
		{
			case 'k':
				title='Yay!';
				msg='Your Package has benn successfully updated!';
				break;
			case 's':
				msg='Server side problem.';
				break;
			case 'm':
				msg='Not enough memory in your account.';
				break;
			case 'l':
				msg='File size must be less than 2Mb.';
				break;
			case 'e':
				msg="So you play with js huh. You haven't send any file.";
				break;
			case 'n':
				msg='https://youtu.be/2dZy3cd9KFY';
				break;
			case '4':
				msg='How did you get here? There is no such offert as this, that you wish to update.';
				break;
			case 'f':
				msg='Your account is currently being used by other process. Try again later.';
				break;
			case 'd':
				msg="You have reached the limit of updating the asset source. <a href='/limits' class='link1'>Visit more here.</a>";
				break;
			default:
				msg='Are you trying to kill me O_O!!!';
				break;
		}
		PopupMsg(title,msg);
	});
}

function TryUpdatePackageInfo()
{
	PopupConfirm("Update Thumbnail","You are about to update the PackageInfo of the offert.","UpdatePackageInfo();")
}

function UpdatePackageInfo()
{
	PopupReset();
	var dimc='';
	//var customCSS = document.getElementById("customCSS");
	
	//media
	for (let i = 0; i < media.length; i++)
		dimc += "Media," + DimProtect(media[i]) + "," + DimProtect(mediaTitle[i]) + ';';
	dimc += "Description," + DimProtect(document.getElementById("description").value) + ';';
	
	let formData = new FormData();
	formData.append('command', 'UpdatePackageInfo');
	formData.append('id', id);
	formData.append('packageInfo', dimc);
	FetchApi(formData, function(data) {
		let title='Error';
		let msg='';
		switch(data)
		{
			case 'k':
				title='Yay!';
				msg='PackageInfo has been successfully updated!';
				break;
			case 'n':
				msg='https://youtu.be/2dZy3cd9KFY';
				break;
			case '4':
				msg='How did you get here? There is no such offert as this, that you wish to update.';
				break;
			case 'm':
				msg='Low amount of memory in account.';
				break;
			case 's':
				msg='Server side problem.';
				break;
			case 'f':
				msg='Your account is currently being used by other process. Try again later.';
				break;
			default:
				msg='Are you trying to kill me O_O!!!';
				break;
		}
		PopupMsg(title,msg);
	});
}

function MedieMoveRight()
{
	if(selectedMedia+1>=media.length) return;
	
	selectedMedia++;
	var temp=selectedMedia-1;
	var med=media[selectedMedia];
	var tit=mediaTitle[selectedMedia];
	media[selectedMedia]=media[temp];
	mediaTitle[selectedMedia]=mediaTitle[temp];
	media[temp]=med;
	mediaTitle[temp]=tit;
	
	mediaPage=Math.floor(selectedMedia / 6);
	RefreshMedia();
}

function MedieMoveLeft()
{
	if(selectedMedia-1 < 0) return;
	
	selectedMedia--;
	var temp=selectedMedia+1;
	var med=media[selectedMedia];
	var tit=mediaTitle[selectedMedia];
	media[selectedMedia]=media[temp];
	mediaTitle[selectedMedia]=mediaTitle[temp];
	media[temp]=med;
	mediaTitle[temp]=tit;
	
	mediaPage=Math.floor(selectedMedia / 6);
	RefreshMedia();
}

function MediaRemove()
{
	media.splice(selectedMedia,1);
	mediaTitle.splice(selectedMedia,1);
	mediaPage=0;
	RefreshMedia();
	$("#Popup").modal('hide');
}

function TryCreateNewAsset(){PopupConfirm("Create New Asset","You are about to create a new Asset.","CreateNewAsset();");}

function CreateNewAsset()
{
	PopupFetch();
	let formData = new FormData();
	formData.append('command', 'CreateNewAsset');
	FetchApi(formData, function(data) {
		let dims=new Dimperpreter(data).Next();
		switch(dims[0])
		{
			case 'b':
				PopupMsg('Result','To create a new asset, you need at least 4Mb of free memory.');
				break;
			case 'n':
				PopupMsg('Result',"You don't have access to the seller-account.");
				break;
			case 'k':
				GoToSite('/edit?id=' + dims[1]);
				break;
			default:
				PopupMsg('Result',"Server problem.");
				break;
		}
	});
}

function DashBtnRemove(id)
{
	PopupConfirm("Remove Asset","You are about to remove asset of Id: " + id,'RemoveAsset("' + id + '");');
}

function RemoveAsset(id)
{
	PopupFetch();
	let formData = new FormData();
	formData.append('command', 'RemoveAsset');
	formData.append('id', id);
	FetchApi(formData, function(data) {
		if(data=='4'){
			PopupMsg('Error',"Asset of this id, doesn't exist.");
		}else if(data=='n'){
			PopupMsg('?','https://youtu.be/2dZy3cd9KFY');
		}else if(data=='x'){
			PopupMsg('?','Problem with money');
		}else if(data=='y'){
			PopupMsg('?','Problem with meta');
		}else if(data=='z'){
			PopupMsg('?','Problem with info');
		}else if(data=='w'){
			PopupMsg('?','Problem with data');
		}else if(data=='t'){
			PopupMsg('?','Problem with thumb');
		}else if(data=='k'){
			PopupMsg('Yay!','Removing the asset went successfully.');
			$("#Popup").on("hidden.bs.modal", function () { window.location.href='/dashboard';});
		}else PopupMsg('?','(O_O)');
	});
}

function TryUpdateUserBasic()
{
	PopupConfirm("Update basic information","You are about to update user basic info with:<br>UserName: " + document.getElementById("username").value ,"UpdateUserBasic();");
}

function UpdateUserBasic()
{
	var username = document.getElementById("username").value.trim();
	if(username.length==0)
	{
		PopupMsg('Error','UserName is empty.')
		return;
	}
	
	PopupFetch();
	let formData = new FormData();
	formData.append('command', 'UpdateUserBasic');
	formData.append('UserName', username);
	FetchApi(formData, function(data) {
		if(data=='k'){
			PopupMsg('Yay','Your basic user info has been updated.');
		}else if(data=='e'){
			PopupMsg('?','Some values are empty.');
		}else if(data=='b'){
			PopupMsg('Error','Address is incorrect.');
		}
		else PopupMsg('?','O_O');
		//	console.log('/edit/?id=' + data);
		//window.location.href='/edit/?id=' + data;
	});
}


function TryUpdateUserPassword()
{
	PopupConfirm("Update Password","You are about to update the password.","UpdateUserPassword();");	
}

function UpdateUserPassword()
{
	var oldPass=document.getElementById("oldPassword").value;
	var newPass1=document.getElementById("newPassword1").value;
	var newPass2=document.getElementById("newPassword2").value;
	
	if(oldPass.length==0)
	{
		PopupMsg("Error","Old password is diffrent");
		return;
	}
	if(newPass1!=newPass2)
	{
		PopupMsg("Error","Passwords are diffrent.");
		return;
	}
	
	PopupFetch();
	
	var formData = new FormData();
	formData.append('command', 'GetLoginAttemp2');
	FetchApi(formData, function(data) {
		if(data=='n' || data=='')
		{
			PopupMsg("?","Interesting case.");
			return;
		}
		
		var password=document.getElementById("oldPassword").value;
		password = sha256(password + parseInt(data));
		var newPassHash=document.getElementById("newPassword1").value;
		newPassHash=sha256(sha256(newPassHash + '0'));
		
		var formData = new FormData();
		formData.append('password', password);
		formData.append('newPassHash', newPassHash);
		formData.append('command', 'UpdatePassword');
		FetchApi(formData, function(data) {
			if(data=='k')
			{
				PopupMsg("Yay!","Password has been updated correctly.");
				$("#Popup").off("hidden.bs.modal");
				$("#Popup").on("hidden.bs.modal", function () { window.location.href='/login'; });
				return;
			}
			else if(data=='n')
			{
				PopupMsg("Error","Wrong old password.");
				return;
			}
			else if(data=='4')
			{
				PopupMsg("?","User not found?");
				return;
			}
			else if(data=='e')
			{
				PopupMsg("?","Some fields are empty?");
				return;
			}
		});
		//user to login sends.... login,oldpassword,newoutputhashpassword
		//server retrieves this....searches for login and looks on his oldoutputhashpassword
		//server takes the sha256 from the oldpassword and compares the output with the oldoutputhashpassword
		// if the output is the same.. then server updates the oldoutputhashpassword with newoutputhashpassword and give access to the account
		//else error.
	});
}

function CheckAssetFromCart()
{
	console.log('InitCart');
	var cart = ReadArray_LocalStorage('Cart');
	for(let i=0;i<cart.length;i++)
		if(cart[i]==id)
		{
			console.log('sd');
			temp=document.getElementById("AddToCart");
			temp.setAttribute('onclick','RemoveFromCart()');
			temp.className='btn btn-outline-light';
			temp.innerHTML='Remove from cart';
			return;
		}
}

async function AttempRegister(products)
{
	//read values
	let tagAdd=document.getElementById("address");
	let tagDeposit=document.getElementById("amount");
	let tagPass1=document.getElementById("pass1");
	let tagPass2=document.getElementById("pass2");
	
	//HTML will not allow to register and buy, but let it stay here
	if(typeof(products)==strNDef) products='';
	
	tagPass1.value=tagPass1.value.trim();
	tagPass2.value=tagPass2.value.trim();
	
	if(parseFloat(tagDeposit.value)<=0)
		tagDeposit.value='0';
	
	if(tagPass1.value.length<8)
	{
		PopupMsg("Password Problem","Password has to be at least 16 characters long.");
		return;
	}
	else if(tagPass1.value!=tagPass2.value)
	{
		PopupMsg("Password Problem","Passwords are diffrent.");
		return;
	}
	else if(tagAdd.value=='')
	{
		PopupMsg("Address Problem","Please click on Metamask button to fill the Ethereum Address.");
		return;
	}
	else if(GetWalletAccount().toLowerCase()!=tagAdd.value.toLowerCase())
	{
		PopupMsg("Wallet Problem","Please switch wallet's account to the account with the address that has been provided.");
		return;
	}
	
	const publicPassHash=DimProtect(sha256(sha256(tagPass1.value + '0')));
	
	CreateTransaction(tagDeposit.value,'r,' + publicPassHash + products + ';',function(txHash) {
		console.log(txHash);
		PopupTransactionSent();
		PopupSetListeningOnCloseOnce(function() {
			let message='Account: ' + tagAdd.value + '<br>Public password hash: ' + publicPassHash;
			TrackOrder('Registration of the account.',1,txHash,message);
			GoToSite('/register-done');
		})
	},null,tagAdd.value);
}

function AttempDeposit()
{
	//if(GetUserAddress(GetSelectedNetworkId())!=false)
		AttempDonateBlockChain(userId,document.getElementById('amount').value);
}
function AttempDonateBlockChain(_userId,amount,message)
{
	amount=parseFloat(amount);
	if(isNaN(amount)) amount=0;
	
	let isDeposit = (userId==_userId);
	if(message!=null) message = 'd,' + userId + ',' + DimProtect(message) + ';';
	else message = 'd,' + userId + ';';
	if(isDeposit) isDeposit='Deposit';
	else isDeposit='Donate';
	/*
	if(amount<=0)
	{
		PopupMsg(isDeposit + " Problem",isDeposit  + " cannot be lower than 0 or greater than 2.");	
		return;
	}
	*/
	CreateTransaction(amount,message,function(txHash) {
		PopupTransactionSent();
		PopupSetListeningOnCloseOnce(function() {
			TrackOrder(isDeposit,1,txHash,'Account ID: ' + userId + '<br>Amount: ' + amount);
			GoToSite('/dashboard');
		});
	},null,false);
}

function GetMainScrollBarMaxHeight()
{
	const tag=document.documentElement;
	return tag.scrollHeight - tag.clientHeight;
}

function InitPageBrowse()
{
	//title
	document.title='Browse - New assets';
	$('#pageTitle')[0].innerHTML=document.title;

	//interface vars
	tagAssetPageBottom=$('#assetPageBottom')[0];
	tagAssetPage=$('#assetPage')[0];

	//clear page
	tagAssetPage.innerHTML='';

	//interface functions
	funcParseAssetPage=async function(data){
		let dim = new Dimperpreter(data);
		let args = dim.Next();
		let temp='';

		//make a list of uncached users (written in a temp)
		while(args.length>0)
		{
			if(args.length==1 && args[0]=='end')
			{
				//finalPage is known now
				finalAssetPage=currentAssetPage;

				//increment the current page
				currentAssetPage++;
			
				//let it be known
				isLoadingPage=false;
				
				//update bottom
				tagAssetPageBottom.innerHTML="<h2>Reached bottom</h2>";
				
				//end
				return '';
			}
			if(GetCachedUserName(args[1])==false)
				temp=temp.replaceAll(';' + args[1],'') + ';' + args[1];
			args = dim.Next();
		}

		//get names of the unknown authors
		if(temp!='')
		{
			//correct temp
			temp = temp.substring(1);
			console.log("Looking for users: " + temp);
			let response2 = await GetUserNames(temp);
			let dim2 = new Dimperpreter(response2);
			args = dim2.Next();
			while(args.length>0)
			{
				userTable.push(args[0]);
				userTable.push(args[1]);
				args = dim2.Next();
			}
		}

		//read the code again (knowing the usernames behind the authors)
		temp='';
		dim.i=0;
		args = dim.Next();
		while(args.length>0)
		{
			temp+="<div class='col-12 col-sm-6 col-md-4 col-lg-3 pad2'>";
			temp+=	"<a href='/get?id=" + args[0] + "' class='link1 text-break'>";
			temp+=		"<img class='border w-100' onerror='this.onerror=null;this.src=\"/thumb/-1.png\";' src='/thumb/" + args[0] + ".png'></img>";
			temp+=	"</a>";
			temp+=	"<a href='/get?id=" + args[0] + "' class='link1 text-break'>";
			temp+=		'<h3>' + args[2] + '</h3>';
			temp+=	"</a>";
			temp+=	"<p class='color3'>";
			temp+=		args[3];
			temp+=	"</p>";
			temp+=	"<span class='color3'>";
			temp+=		'By ';
			temp+=		"<a class='link2' href='/user?id=" + args[1] + "'>";
			temp+=			GetCachedUserName(args[1]);
			temp+=		'</a>'
			temp+=	"</span>";
			temp+="</div>";
			args = dim.Next();
		}

		//return the html code
		return temp;
	};
	funcGetAssetPage=async function()
	{
		//form a request
		var formData = new FormData();
		formData.append('command', 'BrowseAssets');
		formData.append('page', currentAssetPage);
		//formData.append('query', lastQueryTags + '?' + lastQueryPhrase);

		//return the result
		let r;
		await FetchApi(formData, function(data) {
			r=data;
		});
		return r;
	};

	funcUpdateAssetPageBottomInfo=function()
	{
		if(isLoadingAssetPage) {
			UpdateAssetPageLoadingScreen(0);
			return;
		}
		
		let temp='<h2>';
		if(currentAssetPage>finalAssetPage)
			temp+="Reached bottom";
		else
			temp+="See more...";
		tagAssetPageBottom.innerHTML=temp + '</h2>';
	};

	//listen
	InitAssetPageLoader();

	//load page
	LoadAnotherAssetPage();

	
	/*//old
	let temp='';
	let tag=null;
	
	//old
	//title
	temp='Browse - Page ' + currentPage;
	document.title='Browse - Page ' + currentPage;
	document.getElementById('headerTitle').innerHTML=temp;
	temp='';

	//Init page select bar
	InitPageSelectBar(currentPage,finalPage,5);
	
	//set on page selected event
	onPageSelect=function(pageNum){
		GoToSite('/browse?page=' + pageNum);
	}
	*/
}

async function GetUserNames(string_ids)
{
	//form a request
	var formData = new FormData();
	formData.append('command', 'GetUserNames');
	formData.append('ids', string_ids);

	//return the result
	let r;
    await FetchApi(formData, function(data) {
		r=data;
	});
	return r;
}

function UpdateAssetPageLoadingScreen(frame)
{
	//stop/kill task
	if(!isLoadingAssetPage) return;

	//update
	frame=frame%3;
	let temp="<h2>Loading";
	for(let i=frame;i>-1;i--)
		temp+='.';
	temp+='</h2>';
	tagAssetPageBottom.innerHTML=temp;
	
	//another
	setTimeout("UpdateAssetPageLoadingScreen(" + ++frame + ");", 500);
}


//assetPage				assets
var isLoadingAssetPage=false;
var funcParseAssetPage=SubNull;
var funcGetAssetPage=SubNull;
var funcUpdateAssetPageBottomInfo=SubNull;
var tagAssetPageBottom=null;
var tagAssetPage=null;

function InitAssetPageLoader()
{
	if(tagAssetPageBottom==null)
	{
		console.log("Couldn't init AssetPageLoader, becouse tagAssetPageBottom is null");
		return;
	}

	window.addEventListener("scroll", () => {
		if(window.scrollY + tagAssetPageBottom.offsetHeight/3 >= GetMainScrollBarMaxHeight())
			LoadAnotherAssetPage();
		//console.log(window.scrollY);
	});
}

async function LoadAnotherAssetPage()
{	
	//vars
	if(tagAssetPage==null)
	{
		console.log('tagAssetPage is null!');
		return;
	}

	//try to block
	if(isLoadingAssetPage)	//is currently loading
		return;

	if(currentAssetPage > finalAssetPage || finalAssetPage < 0)	//has reached the final page
	{
		funcUpdateAssetPageBottomInfo();
		return;
	}
	//let it be known
	isLoadingAssetPage=true;

	//loading screen - update bottom info
	funcUpdateAssetPageBottomInfo();

	//fetch data
	let response = await funcGetAssetPage();

	//update page
	if(response!=undefined) tagAssetPage.innerHTML+=await funcParseAssetPage(response);

	//increment the current page
	currentAssetPage++;

	//let it be known
	isLoadingAssetPage=false;

	//update bottom info
	funcUpdateAssetPageBottomInfo();
}

function GetCachedUserName(userId)
{
	userId=userId.toLowerCase();
	for(let i=userTable.length-2;i>-1;i-=2)
		if(userTable[i].toLowerCase()==userId)
			return userTable[++i];
	return false
}

//here the interface ends



var onPageSelect=null;
function SelectPage(pageNum){if(onPageSelect!=null)onPageSelect(pageNum);}

function InitPageSelectBar(currentPage,finalPage,count)
{
	let tag=document.getElementById('pageSelectBar');
	let temp='';
	let i=0;
	
	//btn-previous
	if(currentPage>1)
		temp+='<a onclick="SelectPage(' + ( currentPage - 1 )  + ');" class="btn btn-outline-light">Previous</a>';
	
	//btn-first page
	if(currentPage-count>0)
		temp+='<a onclick="SelectPage(1);" class="btn btn-outline-light">1...</a>';
	
	//btns-previous pages
	for(i=Math.min(count,currentPage) - 1 ;i > 0;i--)
		temp+='<a onclick="SelectPage(' + ( currentPage - i )  + ');" class="btn btn-outline-light">' + ( currentPage - i ) + '</a>';
	
	//btn-current page
	temp+='<a class="btn btn-outline-light active">' + currentPage + '</a>';
	
	//correct count
	count--;
	if(currentPage+count>finalPage)
		count=finalPage-currentPage;
	
	//btns-next pages
	for(i = 1; i <= count; i++)
		temp+='<a onclick="SelectPage(' + (currentPage + i) + ');" class="btn btn-outline-light">' + (currentPage + i) + '</a>';
	
	//btn-final page
	if(currentPage+count<finalPage)
		temp+='<a onclick="SelectPage(' + finalPage + ');" class="btn btn-outline-light">...' + finalPage + '</a>';
	
	//btn-next
	if(currentPage<finalPage)
		temp+='<a onclick="SelectPage(' + ( currentPage + 1 )  + ');" class="btn btn-outline-light">Next</a>';
	
	//end
	tag.innerHTML=temp;
}

function RiskyMDToHTML(md)
{
	const obj=new showdown.Converter();
	const safeText=md.replaceAll('&','&amp');
	return obj.makeHtml(safeText);
}

function InitPageUser()
{
	//header
	document.getElementById('headerUserName').innerHTML=HTMLProtect(targetUserName);

	//page info/description
	GetUserDescription(targetUserId).then((data) => {
		let tag = document.getElementById('description');
		let tag2 = document.getElementById('descriptionArea');
		let dim = new Dimperpreter(data);
		let args = dim.Next();
		tag2.hidden=true;
		while(args.length>0)
		{
			switch(args[0].trim())
			{
				case 'Description':
					let temp=args[1].trim();
					if(temp!="")
					{
						tag.innerHTML=RiskyMDToHTML(temp);
						tag2.hidden=false;
					}
					break;
			}
			args = dim.Next();
		}
	});

	//check number of assets
	if(finalAssetPage==0)
	{
		document.getElementById('assetsArea').hidden=true;
		return;
	}
	
	//the rest of the code is for assetPage loading

	//interface vars
	tagAssetPageBottom=$('#assetPageBottom')[0];
	tagAssetPage=$('#assetPage')[0];

	//interface functions
	funcParseAssetPage=async function(data){
		let dim = new Dimperpreter(data);
		let args = dim.Next();
		let temp='';
		while(args.length>0)
		{
			temp+="<div class='col-12 col-sm-6 col-md-4 col-lg-3 pad2'>";
			temp+=	"<a href='/get?id=" + args[0] + "' class='link1 text-break'>";
			temp+=		"<img class='border w-100' onerror='this.onerror=null;this.src=\"/thumb/-1.png\";' src='/thumb/" + args[0] + ".png'></img>";
			temp+=	"</a>";
			temp+=	"<a href='/get?id=" + args[0] + "' class='link1 text-break'>";
			temp+=		'<h3>' + args[1] + '</h3>';
			temp+=	"</a>";
			temp+=	"<p class='color3'>";
			temp+=		args[2];
			temp+=	"</p>";
			temp+="</div>";
			args = dim.Next();
		}

		//return the html code
		return temp;
	};
	funcGetAssetPage=async function()
	{
		//form a request
		var formData = new FormData();
		formData.append('command', 'BrowseUserAssets');
		formData.append('user', targetUserId);
		formData.append('page', currentAssetPage);
		//formData.append('query', lastQueryTags + '?' + lastQueryPhrase);

		//return the result
		let r;
		await FetchApi(formData, function(data) {
			r=data;
		});
		return r;
	};
	funcUpdateAssetPageBottomInfo=function()
	{
		if(isLoadingAssetPage) {
			UpdateAssetPageLoadingScreen(0);
			return;
		}
		
		let temp='<h2>';
		if(currentAssetPage>finalAssetPage)
			temp+="Reached bottom";
		else
			temp+="See more...";
		tagAssetPageBottom.innerHTML=temp + '</h2>';
	};
	
	//listen
	InitAssetPageLoader();

	//load page
	LoadAnotherAssetPage();
}

//returns
//REVIEW_RATING,REVIEW_TITLE,REVIEW_AUTHOR_ID,REVIEW_AUTHOR_NAME,ASSET_ID,ASSET_TITLE,[IS_SPECIAL];#RAW_CONTENT
async function API_GetFullReview(review_id)
{
	//form a request
	var formData = new FormData();
	formData.append('command', 'GetFullReview');
	formData.append('id', review_id);

	//return the result
	let r;
	await FetchApi(formData, function(data) {
		r=data;
	});
	return r;
}

async function InitPageReview()
{
	try
	{
		//get data
		let data = await API_GetFullReview(GetURLParams()['id'][0]);
		let dim = new Dimperpreter(data);
		
		//read data
		const args = dim.Next(); 
		//REVIEW_RATING,REVIEW_TITLE,REVIEW_AUTHOR_ID,REVIEW_AUTHOR_NAME,ASSET_ID,ASSET_TITLE,[IS_SPECIAL];
		let i = 0;
		const rating = parseInt(args[i++]);
		const title = args[i++];
		const authorId = args[i++];
		const isAuthorAnon = authorId == '-1';
		let authorName = '???';
		if(!isAuthorAnon) authorName = args[i++];
		const assetId = args[i++];
		const assetTitle = args[i++];
		const isSpecial = args.length > i;
		//#RAW_CONTENT
		data = dim.LeftRawData();

		console.log(args);

		//show content on the page
		document.getElementById('reviewTitle').innerHTML = '"<span class="color2">' + title + '</span>"';
		let tag = document.getElementById('reviewAssetLink');
		tag.innerHTML = assetTitle;
		tag.href = '/get?id=' + assetId;
		tag = document.getElementById('reviewAuthorLink');
		tag.innerHTML = authorName;
		if(isAuthorAnon)
			tag.parentElement.innerHTML='By Anonymous';
		else
			tag.href = '/user?id=' + authorId;

		document.getElementById('reviewContent').innerHTML = RiskyMDToHTML(data);




	}
	catch(e)
	{
		console.log(e);
		GoToSite('/404');
	}
}




/*
PopupReset();
i+=mediaPage*6;
selectedMedia=i;
if(i>=media.length)
{		//new media
	return;
	
}
else	//media exists in media[]
{
	var mediaToDisplay = media[i];
	document.getElementById("PopupTitle").innerHTML = mediaTitle[i];
	if(LeftStr(mediaToDisplay,3) == '.yt')
	{
		document.getElementById("PopupBody").innerHTML = strYouTube1 + InverseLeftStr(mediaToDisplay,3) + strYouTube2;
	}
	else //if(LeftStr(mediaToDisplay,4) == '.png' || LeftStr(mediaToDisplay,4) == '.gif' || LeftStr(mediaToDisplay,4) == '.jpg' || LeftStr(mediaToDisplay,5) == '.jpeg')
	{
		document.getElementById("PopupBody").innerHTML = strImg1 + media[i] + strImg2;
		document.getElementById("PopupFooter").innerHTML += strAHref + media[i] + strPopupOpenInNewTab2;
	}
	if(devMode)
	{
		document.getElementById("PopupFooter").innerHTML += strMediaAddNewOptionBtn1 + "MedieMoveLeft();" + strBtn2 + "Move Left" + strBtnEnd;
		document.getElementById("PopupFooter").innerHTML += strMediaAddNewOptionBtn1 + "MedieMoveRight();" + strBtn2 + "Move Right" + strBtnEnd;
		document.getElementById("PopupFooter").innerHTML += strBtn1 + "MediaRemove();" + strBtn2 + "Remove" + strBtnEnd;
	}
}
$("#Popup").modal('show');
*/




//TO DELETE

function TrySubmitForPayout()
{
	PopupConfirm("Submit for payout","You are about to submit selected assets to try to withdraw from them the money into your ETH Address.","SubmitForPayout();");	
}

function SubmitForPayout()
{
    document.getElementById("media");
	var temp=0;
	var selectedAssets=[];
	var selectedAssetsAmounts=[];
	let i = 1;		//first is empty
	{
		while ( i < assets.length)
		{
			temp = document.getElementById("asset" + assets[i]).value;
			if(temp>0 && temp!='')
			{
				selectedAssets.push(assets[i]);
				selectedAssetsAmounts.push(temp);
			}
			i=i+4;
		}
	}
	if(selectedAssets.length==0)
	{
		PopupMsg("Error","Nothing is selected.");
		return;
	}
	
	
	
	
	
	
	
	
}











//https://stackoverflow.com/questions/814613/how-to-read-get-data-from-a-url-using-javascript
function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

function GetURLParams() {return parseURLParams(location.href);}




function IntToTextCode(value)
{
	value=value.toString();
	for(let i=0;i<15;i++)
		value=value.replaceAll(String.fromCharCode(i+43),String.fromCharCode(i+65));
	return value;
}
function TextCodeToInt(value)
{
	for(let i=0;i<15;i++)
		value=value.replaceAll(String.fromCharCode(i+65),String.fromCharCode(i+43));
	return parseInt(value);
}


function sha256(ascii) {
	function rightRotate(value, amount) {
		return (value>>>amount) | (value<<(32 - amount));
	};
	
	var mathPow = Math.pow;
	var maxWord = mathPow(2, 32);
	var lengthProperty = 'length'
	var i, j; // Used as a counter across the whole file
	var result = ''

	var words = [];
	var asciiBitLength = ascii[lengthProperty]*8;
	
	//* caching results is optional - remove/add slash from front of this line to toggle
	// Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
	// (we actually calculate the first 64, but extra values are just ignored)
	var hash = sha256.h = sha256.h || [];
	// Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
	var k = sha256.k = sha256.k || [];
	var primeCounter = k[lengthProperty];
	/*/
	var hash = [], k = [];
	var primeCounter = 0;
	//*/

	var isComposite = {};
	for (var candidate = 2; primeCounter < 64; candidate++) {
		if (!isComposite[candidate]) {
			for (i = 0; i < 313; i += candidate) {
				isComposite[i] = candidate;
			}
			hash[primeCounter] = (mathPow(candidate, .5)*maxWord)|0;
			k[primeCounter++] = (mathPow(candidate, 1/3)*maxWord)|0;
		}
	}
	
	ascii += '\x80' // Append Ƈ' bit (plus zero padding)
	while (ascii[lengthProperty]%64 - 56) ascii += '\x00' // More zero padding
	for (i = 0; i < ascii[lengthProperty]; i++) {
		j = ascii.charCodeAt(i);
		if (j>>8) return; // ASCII check: only accept characters in range 0-255
		words[i>>2] |= j << ((3 - i)%4)*8;
	}
	words[words[lengthProperty]] = ((asciiBitLength/maxWord)|0);
	words[words[lengthProperty]] = (asciiBitLength)
	
	// process each chunk
	for (j = 0; j < words[lengthProperty];) {
		var w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
		var oldHash = hash;
		// This is now the undefinedworking hash", often labelled as variables a...g
		// (we have to truncate as well, otherwise extra entries at the end accumulate
		hash = hash.slice(0, 8);
		
		for (i = 0; i < 64; i++) {
			var i2 = i + j;
			// Expand the message into 64 words
			// Used below if 
			var w15 = w[i - 15], w2 = w[i - 2];

			// Iterate
			var a = hash[0], e = hash[4];
			var temp1 = hash[7]
				+ (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
				+ ((e&hash[5])^((~e)&hash[6])) // ch
				+ k[i]
				// Expand the message schedule if needed
				+ (w[i] = (i < 16) ? w[i] : (
						w[i - 16]
						+ (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15>>>3)) // s0
						+ w[i - 7]
						+ (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2>>>10)) // s1
					)|0
				);
			// This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
			var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) // S0
				+ ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2])); // maj
			
			hash = [(temp1 + temp2)|0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
			hash[4] = (hash[4] + temp1)|0;
		}
		
		for (i = 0; i < 8; i++) {
			hash[i] = (hash[i] + oldHash[i])|0;
		}
	}
	
	for (i = 0; i < 8; i++) {
		for (j = 3; j + 1; j--) {
			var b = (hash[i]>>(j*8))&255;
			result += ((b < 16) ? 0 : '') + b.toString(16);
		}
	}
	return result;
};





























