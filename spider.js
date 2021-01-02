var request = require('request');
var cheerio = require('cheerio');

console.log("Robô para verificar o resultado do jogo do bicho!");


request('https://www.ojogodobicho.com/deu_no_poste.htm', function(err, res, body){
    if(err) console.log('Erro: ' + err);

    var $ = cheerio.load(body);

    $('tbody tr').each(function(){
        var result = $(this).find('td.ylig').text().trim();
        console.log('Resultado: '+ result);
    });
    
});