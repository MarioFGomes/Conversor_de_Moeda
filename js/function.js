(function(){
   
        var seletor=document.getElementById('seleteMoedaheader');
    //PegardadosAPI();

    //testeApi();
    PegarListaPaisesAPI();
   
})();


function PegardadosAPI(){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        alert(`10 GBP = ${data.rates.USD} USD`);
    });
}
//Endpoint Pegando os Tipos de Moedas
function PegarListaPaisesAPI(){
    let dados;
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/currencies`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        //alert(JSON.stringify(data));
        alert(Object.keys(data));
        alert(Object.values(data));
        
        PreencherSelect(data);
    });

}

function PreencherSelect(data){
    
    for (i = 0; i <= data.length; i++) {
        if(data[i]=="USD" || data[i]=="EUR"){
            
            seletor.append('<option value='+data[i]+'>' + data[i] + '</option>');
        }
        
    }
   }

