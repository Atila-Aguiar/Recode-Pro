create database fullstack;
use fullstack;

create table produtos(
id int auto_increment,
quantidade int,
tipo varchar(30),
nome varchar(30),
info varchar(150),
promo varchar(100),
preco varchar(50),
primary key(id)
);

insert into produtos (quantidade, tipo, nome, info, promo, preco)
values

(100, "geladeira","geladeira1","Geladeira/Refrigerador Consul Duplex Frost Free 340 litros CRM39 Evox 110V", "12x de R$ 181,66 sem juros","R$ 2.179,99"),

(100, "fogao", "fogao1","Fogão Elétrico de Mesa 2.000W 2 Bocas Inox Agratto","11x de R$ 9,90 sem juros","R$ 108,90"),

(100, "fogao", "fogao2","Cooktop 05 Bocas - Itatiaia - Bivolt","12x de R$ 36,58 sem juros","R$ 439,00"),

(100, "geladeira","geladeira2","Geladeira Brastemp Frost Free 443 litros - BRE57 Inox 110v","De R$ 3.699,99 Para","R$ 2.179,99"),

(100, "geladeira","geladeira3","Geladeira/Refrigerador Brastemp Frost Free BRM44 375 Litros - Branco - 110V","De R$ 2.300,00 Para","R$ 2.099,99"),

(100, "lavaRoupa","lavaRoupa1","Lavadora de Roupas Brastemp 12Kg BWK12 Branca 220V","12x de R$ 141,66 sem juros","R$ 1.699,99"),

(100, "geladeira","geladeira4","Geladeira/Refrigerador Consul Duplex Frost Free 340 litros CRM39 Branca 110V","De R$ 2.199,90 Para","R$ 2.089,90"),
(100, "geladeira","geladeira5","Geladeira/Refrigerador Brastemp Frost Free 375 Litros BRM45 - Evox - 127v","De R$ 2.689,90 Para","R$ 2.474,70"),

(100, "geladeira","geladeira6","Geladeira/Refrigerador French Door Electrolux 579l Dm84x Inox 110v","De R$ 5.399,99 Para","R$ 5.199.99"),

(100, "geladeira","geladeira7","Geladeira/Refrigerador Consul CRM51 405 Litros Interface Touch Branco 110v","De R$ 2.610,99 Para","R$ 2.399,99"),

(100, "geladeira","geladeira8","Refrigerador Consul CRD37 334 Litros Cycle Defrost Branco 220v","12x de R$ 149,99 sem juros","R$ 1.799,99"),

(100, "geladeira","geladeira9","Refrigerador Brastemp Side Inverse BRO80 540 Litros Ice Maker Evox 110v","12x de R$ 438,24 sem juros","R$ 5.258,99"),

(100, "lavaRoupa","lavaRoupa2","Lavadora de Roupas Electrolux 8,5Kg LAC09 - Branca - 220v","12x de R$ 114,99 sem juros","R$ 1.374,99"),

(100, "microOndas","microondas1","Forno micro-ondas Electrolux MTD30 20 litros 110v","12x de R$ 39,16 sem juros","R$ 469,99"),

(100, "geladeira","geladeira10","Geladeria/Refrigerador Consul Frost Free 397 Freezer Embaixo CRE44 Evox - 110V","De R$ 3.199,99 Para","R$ 2.999,99"),

(100, "microOndas","microondas2","Micro-ondas Consul Espelhado - 20L - Cinza 127V - Cm020","12x de R$ 41,66 sem juros","R$ 499,99");

Create view view_produto as
SELECT * FROM produtos;

create table clientes(
id int auto_increment,
nome varchar(50),
telefone varchar(20),
email varchar(50),
endereço varchar(50),
primary key(id)
);

create table pedidos(
id_pedido int auto_increment,
id_cliente int,
id_produto int,
quantidade int,
endereço varchar(50),

primary key (id_pedido),
foreign key (id_cliente) references clientes(id),
foreign key (id_produto) references produtos(id)
);