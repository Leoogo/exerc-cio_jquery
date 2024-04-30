$(document).ready(function(){
let nomeTarefa = [];

$('#botaoMostrarLista').click(function(){
        $('ul').slideDown();
    })

    $('#botaoOcultarLista').click(function(){
        $('ul').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        let novaTarefa = $('#tarefas').val();
        nomeTarefa.push(novaTarefa.valeu);
        let novoItemNaLista = $(`<li><p onclick="riscarTexto">${novaTarefa}</p></li>`);
        
        $(novaTarefa).appendTo(novoItemNaLista);
        $(novoItemNaLista).appendTo('ul');
        novaTarefa = $('#tarefas').val('');
        
    })

    let tabelaUl = document.querySelector('ul');

    tabelaUl.addEventListener('click', function(e) {
        if(e.target.classList.contains('riscarTexto')){
            e.target.classList.remove('riscarTexto');
        } else {
            e.target.classList.add('riscarTexto');
        }
    })
})

