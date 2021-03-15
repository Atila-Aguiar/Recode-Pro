function filtro(produtos){
    let produto = document.getElementsByClassName("produto")
    for (let i=0; produto.length > i; i++){
        if (produtos == produto[i].id){
            produto[i].style = "display:inline-block";
        }
        else{
            produto[i].style = "display:none";
        }
    }
}
function todos(){
    let produto = document.getElementsByClassName("produto")
    for (let i=0; produto.length > i; i++){
            produto[i].style = "display:block";

    }
}

function imgGrande(Name){
    var goo = window.document.getElementsByName(Name)[0];
        goo.style.height = "230px";
        goo.style.width = "200px";
        
        }


function imgNormal(Name){
    var goo = window.document.getElementsByName(Name)[0];
        goo.style.height = "130px";
        goo.style.width = "130px";
}
