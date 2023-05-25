//a
carregarCatalogo();

botaomodal.onclick = () => {
    cadmodal.style.display = "flex";
    botaoeditar.style.display = "none";
}

function fechar(){
    cadmodal.style.display = "none";
}

//a
dados.forEach((elemento , indice) =>{
    let divcard =  document.createElement("div");
    divcard.innerHTML = `
    <div class="cardimagem"><img src = "img/${elemento.foto}"></div>
    <div class = "cardnome">${elemento.nome}
    <p>${elemento.descricao}</p>
    </div>
    <div class="cardinfo">
    <div class="editar"><i class="bi bi-pencil-fill" onclick="editar(${indice})"></i></div>
    <div class="excluir"><i class="bi bi-trash3-fill" onclick="excluir(${indice})"></i></div>
    </div>
    `
    cards.appendChild(divcard);
});

//a
var fotoa;
botaoeditar.onclick = (evento) =>{
    if((fotoa != foto.value)&&(foto.value !="" )){
        evento.preventDefault();
        fenvio()
        .then(result=>{
            if(result){
                salvarEdicao(nomeArq);
            }
            else{
                alert("houve erro no envio do arquivo")
            }
        })
    }
    else{
        salvarEdicao(fotoa);
    }
}

//a
function excluir(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    dados.splice(indice,1);
    localStorage.setItem("catalogo" , JSON.stringify(dados));
    window.location.reload();

}
//a
function excluir(indice){
    if (confirm("Tem certeza de que deseja excluir?")) {
        let dados = JSON.parse(localStorage.getItem("catalogo"));
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    window.location.reload();
    }
}