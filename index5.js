const botaomodal = document.getElementById("btn");
const cards = document.querySelector(".cards");
const cadmodal = document.querySelector(".cadmodal");
const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const foto = document.getElementById("foto");
const botaocadastrar = document.querySelector(".btncadastrar");
const botaoeditar = document.querySelector(".btneditar");
const botaofechar = document.querySelector(".btnclose");
const idelemento = document.getElementById("idalterar");
 
carregarCatalogo();

botaomodal.onclick = () => {
    cadmodal.style.display = "flex";
    botaoeditar.style.display = "none";
}

function fechar(){
    cadmodal.style.display = "none";
}

botaocadastrar.onclick = () =>{
    let dados = JSON.parse(localStorage.getItem("catalogo")) || [];
    dados.push(
        {
            nome: nome.value,
            descricao : descricao.value,
            foto: foto.value
        }
    )
    localStorage.setItem("catalogo", JSON.stringify(dados));
    }


function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if (dados == null){
         divcard.innerHTML = "<p> Nenhum item encontrado";
         cards.appendChild(divcard);
         return null
    }
    dados.forEach((elemento , indice) =>{
        let divcard =  document.createElement("div");
        divcard.innerHTML = `
        <div class="cardimagem"><img src = "${elemento.foto}"></div>
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
}

function editar(indice)
{
    nome.value = "";
    descricao.value= "";
    foto.value= "";
    cadmodal.style.display = "flex";
    botaocadastrar.style.display = "none";

}

botaoeditar.onclick = () =>{
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    dados [idelemento.value].nome = nome.value;
    dados[idelemento.value].descriacao = descricao.value;
    dados[idelemento.value].foto = foto.value;
    localStorage.setItem("catalogo" , JSON.stringify(dados));

}

    function excluir(indice){
        let dados = JSON.parse(localStorage.getItem("catalogo"));
        dados.splice(indice,1);
        localStorage.setItem("catalogo" , JSON.stringify(dados));
        window.location.reload();

    }
    function excluir(indice){
        if (confirm("Tem certeza de que deseja excluir?")) {
            let dados = JSON.parse(localStorage.getItem("catalogo"));
        dados.splice(indice,1);
        localStorage.setItem("catalogo", JSON.stringify(dados));
        window.location.reload();
        }
       
       
    }