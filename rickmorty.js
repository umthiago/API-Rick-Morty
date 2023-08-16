function limparFormulario(endereco){
    document.getElementById("endereco").value = ""
    document.getElementById("bairro").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("estado").value = ""
    document.getElementById("complemento").value = ""
    document.getElementById("ddd").value = ""
    document.getElementById("ibge").value = ""
    document.getElementById("siafi").value = ""
}

function preencherFormulario(endereco) {
    document.getElementById("endereco").value = endereco.logradouro
    document.getElementById("bairro").value = endereco.bairro
    document.getElementById("cidade").value = endereco.localidade
    document.getElementById("estado").value = endereco.uf
    document.getElementById("complemento").value = endereco.complemento
    document.getElementById("ddd").value = endereco.ddd
    document.getElementById("ibge").value = endereco.ibge
    document.getElementById("siafi").value = endereco.siafi
}

function eNumero(numero) {
    return /^[0-9]+$/.test(numero)
}

function cepValid(cep) {
    return cep.length == 8 && eNumero(cep)
}

async function pesquisarCep() {
    limparFormulario(endereco)
    const cep = document.getElementById("cep").value.replace("-", "")
    console.log(cep)
    const url = "https://rickandmortyapi.com/api/character/"
    const dados = await fetch(url)
    console.log(dados)
    const personagens = await dados.json()
    console.log(personagens)
    // for (let i = 0; i < array.length; i++) {
    //     if(personagens.id)
        
    // }
    // console.log(personagens)
}
    

document.getElementById("cep").addEventListener("focusout", pesquisarCep)
