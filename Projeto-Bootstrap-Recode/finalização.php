<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Loja</title>
        <link rel="stylesheet" type="text/css" href="./CSS/baseGeral.css">
        <link rel="stylesheet" type="text/css" href="./CSS/PaginaInicial.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    </head>
    <body>
        <header class="bg-primary w-100 text-center">
            <div class="container w-80 rounded">
                <nav class="nav nav-pills nav-fill bg-light rounded">
                    <li class="nav-item my-auto">
                        <a class="nav-link text-primary" href="index.html"><b>INICIO</b></a>
                    </li>
                    <li class="nav-item my-auto">
                        <a class="nav-link text-primary" href="NossosProdutos.php"><b>NOSSOS PRODUTOS</b></a>
                    </li>
                    <li class="nav-item my-auto">
                        <a class="nav-link text-primary" href="NossasLojas.html"><b>LOJAS</b></a>
                    </li>
                    <li class="nav-item my-auto">
                        <a class="nav-link text-primary" href="FaleConosco.html"><b>CONTATO</b></a>
                    </li>
                </nav>
            </div>
            <br>
            <img class="Logo" src="IMG/Frame 1.png">

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
            <div class="container">
                <h1 class="display-3">Obrigado pela preferência!</h1>
            </div>
        </section>

        <footer class="page-footer bg-primary text-center fixed-bottom">
            <div class="container">
                <br>
                <h3 class="">Formas de pagamento</h3>
                <img src="./IMG/FormasDePagamento.jpg" alt="Formas de pagamento" class="rodape">
            </div>  
        </footer>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </body>
</html>