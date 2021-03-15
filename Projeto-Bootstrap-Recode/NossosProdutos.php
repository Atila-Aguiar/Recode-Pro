<?php
    $conexao = mysqli_connect("localhost", "root","","projetophp",3306);
    mysqli_set_charset($conexao,"utf8");

    if ($conexao == false){
        die("A conexão falhou!");
    }
    $sql = "select * from produtos;";

    $teste = mysqli_query($conexao, $sql);

?>  
<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Loja</title>
        <link rel="stylesheet" type="text/css" href="./CSS/baseGeral.css">
        <link rel="stylesheet" type="text/css" href="./CSS/NossosProdutos.css">
        <script src="JS/funçõesProdutos.js"></script>
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
            <div class="container d-flex">
                <aside role="complementary">
                    <div class="container aside">
                        <h3>Categorias</h3>
                        <ul class="nav">
                            <li class="nav-link" onclick="todos()">(16)  Todos</li>
                            <li class="nav-link" onclick="filtro('geladeira')">(10)  Geladeira</li>
                            <li class="nav-link" onclick="filtro('lavaRoupa')">(02)  Lava Roupa</li>
                            <li class="nav-link" onclick="filtro('microOndas')">(02)  Micro-ondas</li>
                            <li class="nav-link" onclick="filtro('fogao')">(02)  Fogão</li>
                        </ul>
                    </div>
                </aside>
                <main role="main">
                    <div class="container d-inline">
                        <?php
                            while($row = $teste->fetch_assoc()) {
                                if ($row['quantidade']>0){
                                    $imagem = "./IMG/".$row["nome"].".jpg";
                                    $imgN = 'imgNormal("'.$row['nome'].'")';
                                    $imgG = 'imgGrande("'.$row['nome'].'")';
                                    print_r("<div class='produto' id='".$row["tipo"]."'>");
                                    print_r("<img class='imgprod' src='$imagem' onmouseout='$imgN' onmouseenter='$imgG' name='".$row['nome']."'></img>");
                                    print_r("<br>");
                                    print_r("<p class='info'>".$row["info"]."</p>");
                                    print_r("<hr>");
                                    print_r("<p class='promo'>".$row["promo"]."</p>");
                                    print_r("<a href=Carrinho.php?id=".$row["id"]."><p class='preço'>".$row["preco"]."</p></a>");
                                    print_r("</div>");
                                };
                            };
                        ?>
                    </div>
                </main>
            </div>
        </section>

        <footer class="page-footer bg-primary text-center">
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