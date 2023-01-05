<?php
    $root = $_SERVER['DOCUMENT_ROOT'];
    include $root . '/Docs-top.php';
?>
<script>title = 'Create an Account';</script>
<h1>Create an Account</h1>
<p>To create an account, you need to have access to your crypto wallet. And specifically to one of these listed blockchain networks:</p>
<ul>
    <li>Ethereum</li> 
    <li>Polygon (Recommended due to lower transaction fees)</li>    
</ul>
<p>Technically speaking, you will send a transaction on one of these blockchains, with an encrypted message containing a hash from your new password, that will be used for logging in. So go to <a href='/register'>/register</a>, and:</p>
<img src='/img/tutorial-register.png' alt='/register form'></img>
<ol>
    <li>
        Connect your wallet to the website, either with MetaMask or through the more universal WalletConnect protocol. If the wallet connects well, a border of the selected connection method will turn green.
        <br><img src='/img/tutorial-register-wallet.png' alt='/register connect metamask'></img>
        <p class='small-note'>In the case of using a WalletConnect protocol, you will have to select the right network from your wallet side, which you won't be able to change later, without reconnecting the wallet.</p>
    </li>
    <li>Enter additional deposit sum. (Optional)</li>
    <li>Enter your new password for your new account. This new password <b>should not be your wallet's private key, keywords, or related to that</b>. This is your brand new password for the account on the Ethuardo and currently only on that platform.</li>
    <li>Repeat your new password.</li>
    <li>Click register.</li>
</ol>
<p>Once you have clicked the register button, the procedure of making a transaction will happen:</p>
<img src='/img/tutorial-register-tx.png' alt='Transaction summary'></img>
<p>By default, each transaction is currently sending a default minimum amount of money equal to 0.000001 of the currency that you have chosen.</p>
<div class='technical'>
    <img src='/img/tutorial-register-tx-detail.png' alt='Transaction detail'></img>
    <p>The message in the transaction contains a hash from the hash of your password salted with a login_index(used for logging in)</p>
</div>
<p>Once you have accepted the transaction, our servers will listen the blockchain to see if your transaction has found itself in a block, and then realise the action from the transaction message.<br> To check if the transaction was fully realised, click on the <img src='/img/_block.svg' width='32' height='32' alt='Orders icon'/> to see the status of it.</p>
<img src='/img/tutorial-register-done.png' alt='Registration complete'/>
<p>If the transaction was successful, go to <a href='/login'>/login</a> and try to login!</p>

<?php
    include $root . '/Docs-btm.php';
?>