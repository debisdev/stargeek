const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const botao = document.getElementById("botao");

var url = new URL (window.location.href);
var peditar = url.searchParams.get("peditar");
var pindice = url.searchParams.get("pindice");

if(peditar == "true"){
    editar(pindice);
}

botao.onclick = (evento)=> {
    if((peditar!= "true")||(peditar==null)){
         
    evento.preventDefault();
    fenvio()
    .then(result=>{
        if(result){
            let dados = JSON.parse(localStorage.getItem("catalogo")) || [];
    dados.push(
        {
            nome: nome.value,
            descricao : descricao.value,
            foto: nomeArq
        }
    )
    localStorage.setItem("catalogo", JSON.stringify(dados));
   
;
        }
        else{
            alert("Houve erro no enviodo arquivo");
        }
    });

    }else{
        editarenvio(evento);
        window.location.assign("cadasitem.html")

}
    function editar(indice){
        nome.value= "";
        descricao.value="";
        foto.files[0]=null;
        let dados = JSON.parse(localStorage.getItem("catalogo"))
    }
    
var nomeArq ;
     async function fenvio () {
        const url = 'http://localhost:3005/upload';
        const arquivo = document.getElementById("foto").files[0];
        const formData = new FormData ();
        formData.append('arquivo', arquivo);
        console.log(JSON.stringify(formData));
        try{
            var resp = await fetch(url , {
                method:'POST' ,
                body: formData,
            }
            )
            if (resp.ok){
                let respText = await resp.text();
                nomeArq = respText;
                return true;
            }
            else{
                return false;
            }
        }
        catch (error){
            console.error(error);
            return false;
        }
    }}



     var fotoa;
     function editarenvio(evento){
        evento.preventDefault();
        if((fotoa != foto.value != "")){
            fenvio()
            .then(result =>{
                if(result){
                    salvarEdicao(nomeArq);
                }
            });

            }
            else{
       
            salvarEdicao(fotoa);
           }     
        }

        function salvarEdicao(pfoto){
            let dados =JSON.parse(localStorage.getItem("catalogo"));
            dados[pindice].nome = nome.value;
            dados[pindice].descricao = descricao.value;
            dados[pindice].foto= pfoto;
            dados[pindice].email = emaillogado;
            localStorage.setItem("catalogo ", JSON.stringify(dados));
            window.location.assign("catalogoitem.html")
            
        }