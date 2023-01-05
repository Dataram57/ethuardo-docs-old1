<?php
    $root = $_SERVER['DOCUMENT_ROOT'];
    include $root . '/Docs-top.php';
?>
    <script>title = 'Deposit Money';</script>
    <h1>Deposit Money</h1>
    <p>To deposit money only to your account, you need to have an account. It doesn't matter from which address you send money, because in the transaction there is a hidden message including the target account id. The same rules can be applied to donating to a specific user <span class='small-note'>(Altho, in that case, you would rather want to send money directly to a specific address.)</span>. It also doesn't matter what available network you choose to use.</p>
    <p>So let's begin:</p>
    <ol>
        <li>
            In your <a href='/dashboard'>dashboard</a> panel, find a Menu cart, and inside of it find the deposit button, which leads to your <a href='/deposit'>deposit</a> page.<br>
            <img src='/img/tutorial-menu-deposit.png' alt='Menu cart'/>
        </li>
        <li>
            Inside, find this form:
            <br><img src='/img/tutorial-deposit-panel.png' alt='Deposit panel'/>
            <br>And:
            <ol>
                <li>Connect your wallet.</li>
                <li>Select your network and coin.</li>
                <li>Enter your deposit amount.</li>
                <li>Click "Send deposit".</li>
            </ol>
        </li>
        <li>
            Send the transaction:<br>
            <img src='/img/tutorial-deposit-tx.png' alt='Transaction summary'>
            <br><span class='small-note'>The transaction message contains function('d') and an argument being your account id.</span>
            <br><img src='/img/tutorial-deposit-tx-detail.png' alt='Transaction detail'>
        </li>
        <li>
            Happy:
            <br><img src='/img/tutorial-deposit-done.png' alt='Deposit complete'>
        </li>
    </ol>
    
<?php
    include $root . '/Docs-btm.php';
?>