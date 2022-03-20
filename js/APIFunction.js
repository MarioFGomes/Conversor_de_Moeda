var selectionmoeda = document.getElementById("seleteMoedaheader");
TodasTaxas("USD");

function SeletedTaxa() {
    var result = selectionmoeda.options[selectionmoeda.selectedIndex].value;
    TodasTaxas(result);
};

function GetTaxas(obj) {
    for (var i in obj.rates) {
        console.log(i + ":" + obj.rates[i]);
        var divNova = document.createElement("div");
        var conteudoNovo = document.createTextNode(i + ":" + obj.rates[i]);
        divNova.appendChild(conteudoNovo);
        divNova.classList.add("dom");
        
        var section = document.getElementById("cards");
        section.appendChild(divNova);
    }

}

/*setInterval(function(){
        window.location.reload();
    },10000000);*/


















//API


//Este endpoint retorna as taxas mais recentes. usando o Euro como base
function TodasTaxas(dados) {

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        GetTaxas(JSON.parse(this.responseText));
    }
    xhttp.open("GET", 'https://api.frankfurter.app/latest?from=' + dados + '');
    xhttp.send();
}