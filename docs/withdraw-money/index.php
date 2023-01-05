<?php
    $root = $_SERVER['DOCUMENT_ROOT'];
    include $root . '/Docs-top.php';
?>
    <script>title = 'Withdraw Money';</script>
    <h1>Withdraw Money</h1>
    <p>In order to withdraw money on a specific network, you need to have an address assigned to that specific network. We don't offer to send withdrawing money to an address that is not assigned to your account. Sometimes the withdrawal may be sent in more than 1 transaction. All costs of withdrawing the money are covered by the service. Withdraw requests are currently being checked every Saturday or earlier, but I(@dataram57) hope this process will become almost immediate in the future.</p>
    <ol>
        <li>
            In your <a href='/dashboard'>dashboard</a> panel, find a Menu cart, and inside of it find the wallet button, which leads to your <a href='/wallet'>wallet</a> page.<br>
                <img src='/img/tutorial-menu-withdraw.png' alt='Menu cart'/>
        </li>
        <li>
            Inside, you will find all networks and coins that we support, as well as the balance that you have in a specific currency/coin and an address that you have assigned to the specific network and your account.<br>
            Find the coin/currency that you wish to withdraw. Let it be, for example, the native currency of the Polygon network (MATIC):
            <img src='/img/tutorial-withdraw-example.png' alt='Example Netowrk -> Coin'/>
        </li>
        <li>
            Click on the "Withdraw" button, and if you submit a withdrawal amount that is:
            <ul>
                <li>=0, your withdraw order will be deleted.</li>
                <li>>0, your withdraw order will be updated or created.</li>
            </ul>
            Also, if your order will have a higher withdrawal amount than you actually have, we will send you the whole amount of money that you have at the moment of realizing your withdraw order.
        </li>
        <li>
            Click "Withdraw" button, and everything is done.
        </li>
    </ol>
<?php
    include $root . '/Docs-btm.php';
?>