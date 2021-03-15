<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>Loja</title>
        <link rel="stylesheet" type="text/css" href="./CSS/baseGeral.css">
        <link rel="stylesheet" type="text/css" href="./CSS/Carrinho.css">
        <script src="JS/funçõesCarrinho.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
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
            <h1>Carrinho</h1>
            <table>
                
                <thead>
                    <th>Produto</th>
                    <th>Preço Unitário</th>
                    <th>Quantidade</th>
                    <th>Preço Total</th>
                </thead>
                <tbody>
                    <?php
                    $conexao = mysqli_connect("localhost", "root","","projetophp",3306);
                    mysqli_set_charset($conexao,"utf8");
                
                    if ($conexao == false){
                        die("A conexão falhou!");
                    }
                    $sql = "select * from produtos where id=".$_GET["id"].";";
                    $quant = mysqli_query($conexao,"select quantidade from produtos where id=".$_GET["id"].";");

                    if($_GET["quantidade"]=TRUE and $_GET["quantidade"]< $quant->fetch_assoc()) {
                        $quantidade=$_GET["quantidade"];
                    } else{
                        $quantidade=1;
                    };
                
                    $id = mysqli_query($conexao, $sql);
                    while($row = $id->fetch_assoc()){
                        $imagem = "./IMG/".$row["nome"].".jpg";
                        print_r("<tr>");
                        print_r("<td><img class='produto' src='$imagem'</td>");
                        print_r("<td>".$row["preco"]."</td>");
                        print_r("<td>".$quantidade." <button onclick='altera()' type='button'>^</button></td>");
                        
                        $tira=explode(' ',$row["preco"]);
                        if ((strlen($tira[1]))>6) {
                            $tira2=explode('.',$tira[1]);
                            $tira3=explode(',',$tira2[1]);
                            $preço=(($tira2[0].'000.00')+($tira3[0].'.00')+('0.'.$tira3[1]));
                        } else {
                            $tira2=explode(',',$tira[1]);
                            $preço=($tira2[0].'.00')+('0.'.$tira2[1]);
                        };
                        $preço=$preço*$quantidade;
                        print_r("<td>R$ ".$preço."</td>");
                        print_r("</tr>");
                    };
                    print_r("</tbody>");
                    print_r("</table>");
                    #print_r("<a href=Carrinho.php?id=".$_GET["id"]."&quantidade="+.getElementById("quantidade").value"></a>");
                    ?>

                    <button type="button" class="btn btn-info btn-contato" data-toggle="modal"
                        data-target="#form-contato" id="alertaBtn">Confirmar Compra</button>

                    <div class="modal fade" id="form-contato">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Finalização da Compra</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form action="finalização.php" method="post">
                                        <label for="nome" class="col-form-label">Nome:</label>
                                        <input type="text" class="form-control" name="nome"id="nome">

                                        <label for="telefone" class="col-form-label">Telefone:</label>
                                        <input type="text" class="form-control" name="telefone" id="telefone" placeholder="(00)00000-0000">

                                        <label for="email" class="col-form-label">Email:</label>
                                        <input type="email" class="form-control" name="email" id="Email">


                                        <label for="endereço" class="col-form-label">Endereço:</label>
                                        <input type="text" class="form-control" name="endereço" id="endereço">

                                        <input style="display:none;" type="text" name="id" id="id" value="<?php echo $_GET["id"]?>">
                                        <input style="display:none;" type="text" name="quantidade" id="quantidade" value="<?php echo $quantidade?>">

                                        <input type="submit" class="btn btn-info">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>         
                </tbody>
            </table>

                


        </section>
        <footer>
            <br>
            <h3>Quais são as formas de pagamento para clientes?</h3>
            <img src="./IMG/FormasDePagamento.jpg" alt="Formas de pagamento" class="rodape">
        </footer>
    </body>
</html>