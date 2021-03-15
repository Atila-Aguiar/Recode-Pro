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
        <title>Loja</title>
        <link rel="stylesheet" type="text/css" href="./CSS/baseGeral.css">
        <link rel="stylesheet" type="text/css" href="./CSS/NossosProdutos.css">
        <script src="JS/funçõesProdutos.js"></script>
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

            <aside>
                    <h3>Categorias</h3>
                    <ul>
                        <li onclick="todos()">(16)  Todos</li>
                        <li onclick="filtro('geladeira')">(10)  Geladeira</li>
                        <li onclick="filtro('lavaRoupa')">(02)  Lava Roupa</li>
                        <li onclick="filtro('microOndas')">(02)  Micro-ondas</li>
                        <li onclick="filtro('fogao')">(02)  Fogão</li>
                    </ul>
            </aside>
            <main>
                <div class="principal">
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
        </section>
        <footer>
            <br>
            <h3>Quais são as formas de pagamento para clientes?</h3>
            <img src="./IMG/FormasDePagamento.jpg" alt="Formas de pagamento" class="rodape">
        </footer>
    </body>
</html>