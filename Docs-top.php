<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/css/Static.css">
	<!-- Static Service JS -->
	<script type="text/javascript" src="/js/Static.js"></script>
    
	<!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
	
	<!-- JS Top -->
	<script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js/dist/web3.min.js"></script>
	<script type='text/javascript'>
		let web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545");
	</script>
	
	<!-- Wallet Connect -->
	<!-- Inspired by https://youtu.be/Ws5jIo4NMDc -->
	<script src="https://cdn.jsdelivr.net/npm/@walletconnect/web3-provider@1.7.7/dist/umd/index.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
	
	<!-- Modal -->
	<div class="modal fade bgc2" id="Popup" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog modal-xl">
			<div class="modal-content border bg1 text-white">
				<div class="modal-header">
					<h5 class="modal-title" id="PopupTitle">Modal title</h5>
				</div>
				<div class="modal-body" id="PopupBody">
				</div>
				<div class="modal-footer" id='PopupFooter'>
				</div>
			</div>
		</div>
	</div>
	<title></title>
</head>
<body class='bg0'>
<nav class="navbar navbar-expand-lg navbar-dark bg1">
	<div class="container-fluid">
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<a class="navbar-brand" href="/">Ethuardo</a>
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link" href="/browse">Browse</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/docs">Docs</a>
				</li>
				<li class="nav-item">
					<a class="nav-link colorRainbow font-weight-bold linkBasic" href="/newbies">Newbies</a>
				</li>
			</ul>
		</div>
        <script type="text/javascript">
            const userId='0';
        </script>
        <div class="d-flex align-items-center d-flex" id='profileBar'>
            <div>
                <a href='#' class='text-center ' onclick='OrderManager()'>
                    <img src="/img/_block.svg"  height="30" loading="lazy"/>
                    <a class='color1 text-decoration-none' id='OrderManagerCounter'></a>
                </a>
            </div>
            <div class='pad2'></div>
            <div>
                <a href='#' onclick='CartManager()'>
                    <img src="/img/_cart.svg"  height="30" loading="lazy"/>
                    <a class='color1 text-decoration-none' id='CartManagerCounter'></a>
                </a>
            </div>
            <div class='pad2'></div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                </li>
            </ul>
        </div>
	</div>
</nav>
<!--Special externals for /docs-->
<link rel="stylesheet" href="/css/docs.css">
<script type="text/javascript" src="/js/docs.js"></script>
<!--Body-->
<!--/docs starts here-->
<div class='container-fluid'>
    <div class='text-break d-flex'>
        <div id='docs-left'>
            <a type="button" class='d-block d-lg-none docs-toggler-button' onclick='Click();'>
                <img src='/img/docs-toggler.svg' class='w-100'></img>
            </a>
            <script>
                let title;
                let tagLeftContent;
                let tagLR_Gap;
                let tagRight;
                let allowClick=true;
                let Click;
                let Click2;
                function InitPage(){InitPageDocs();}
            </script>
            <div id='docs-left-content'>
                <h5>Basic</h5>
                <ul>
                    <li><a href='/docs/'>Docs</a></li>
                    <li><a href='/docs/introduction'>Introduction</a></li>
                    <li><a href='/docs/create-an-account'>Create an Account</a></li>
                    <li><a href='/docs/deposit-money'>Deposit Money</a></li>
                    <li><a href='/docs/withdraw-money'>Withdraw Money</a></li>
                    <li><a class='docs-wip' href='/docs/buy-an-asset'>Buy an Asset</a></li>
                    <li><a class='docs-wip' href='/docs/make-a-report'>Make a Report</a></li>
                    <li><a href='/docs/rules'>Rules</a></li>
                </ul>
                <h5>Selling</h5>
                <ul>
                    <li><a class='docs-wip' href='/docs/'>Introduction</a></li>
                    <li><a class='docs-wip' href='/docs/seller/become-a-seller'>Become a seller</a></li>
                    <li><a class='docs-wip' href='/docs/seller/create-an-asset'>Create an Asset</a></li>
                    <li><a class='docs-wip' href='/docs/seller/rules'>Rules</a></li>
                </ul>
                <h5>Legal</h5>
                <ul>
                    <li><a class='docs-wip' href='/docs/legal/terms-of-service/'>Terms of service</a></li>
                    <li><a class='docs-wip' href='/docs/legal/privacy-policies'>Privacy policies</a></li>
                    <li><a class='docs-wip' href='/docs/legal/cookie-policy'>Cookie Policy</a></li>
                </ul>
                <h5>Other</h5>
                <ul>
                    <li><a class='docs-wip' href='/docs/development/'>Development</a></li>
                </ul>
            </div>
        </div>
        <div id='docs-gap_lr'></div>
        <div id='docs-right'>
            <div id='docs-right-content'>