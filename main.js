const form = document.getElementById('form-agenda');
const atividade='';
const numero='';
const imgSucess = '<img src="./images/success-icon.svg" />'; 
let linhas='';


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeAgenda= document.getElementById('nome-agenda');
    const inputNumeroAgenda= document.getElementById('numero-agenda');
    const contador= document.getElementById(`contador`);
    
    let linha=`<tr>`;
    linha += `<td>${inputNomeAgenda.value}</td>`;
    linha += `<td> ${inputNumeroAgenda.value}</td>`;
    linha += `<td> ${imgSucess}</td>`;
    linha += `</tr>`;
    linhas += linha;

    inputNomeAgenda.value='';
    inputNumeroAgenda.value= '';
}
let cont=0;
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML= linhas;

    const rodapeTabela = document.querySelector('tfoot #contador');
    rodapeTabela.innerHTML= cont +1;
    cont=cont+1;
}

