<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Loja</title>
        <link rel="stylesheet" type="text/css" href="./CSS/baseGeral.css">
        <link rel="stylesheet" type="text/css" href="./CSS/PaginaInicial.css">
    </head>
    <body>
        <header>
            <div class="Navegação">
                <a href="index.html">INICIO</a>
                <a href="NossosProdutos.php">NOSSOS PRODUTOS</a>
                <a href="NossasLojas.html">LOJAS</a>
                <a href="FaleConosco.html">CONTATO</a>
            </div>
            <br>
            <img class="Logo" src="IMG/Frame 1.png">
            <hr>
        </header>
        <section>
            <?php
            $conexao = mysqli_connect("localhost", "root","","projetophp",3306);
            mysqli_set_charset($conexao,"utf8");
        
            if ($conexao == false){
                die("A conexão falhou!");
            }
            $insertC = "insert into clientes (nome, telefone, email, endereço) value('".$_POST["nome"]."', '".$_POST["telefone"]."', '".$_POST["email"]."', '".$_POST["endereço"]."');";
            $CC = mysqli_query($conexao, $insertC);  
            
            $insertV = "insert into pedidos (id_produto, quantidade, endereço) value('".$_POST["id"]."', '".$_POST["quantidade"]."', '".$_POST["endereço"]."');";
            $CV = mysqli_query($conexao, $insertV);
            ?>
            <h1>Obrigado pela preferência!</h1>
        </section>
        <footer>
            <br>
            <h3>Quais são as formas de pagamento para clientes?</h3>
            <img src="./IMG/FormasDePagamento.jpg" alt="Formas de pagamento" class="rodape">
        </footer>
    
    </body>
</html>