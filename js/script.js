/*
Rifare la todo list come vista insieme a lezione:
1 - popolando gli elementi della lista con JavaScript
2 - inserendo un nuovo todo con un input testuale e gli eventi da tastiera
3 - Rimozione todo con click su icona
4 - Cliccando sul testo compare uno sbarramento a indicarne il completamento
*/



$(document).ready(function() {
    
    // refs
    var template = $('#template .app_todos-item')
    var todos = $('.app_todos')
    var newInput = $('#input');

    var todoItems = [
        {
            text: "Comprare la pasta",
            done: false,
        },
        {
            text: "Pagare le bollette",
            done: false,
        },
        {
            text: "Telefonare dentista",
            done: false,
        },
        {
            text: "Telefonare commercialista",
            done: false,
        },
    ];

    // 1 - popolazione lista
    for (var i = 0; i <todoItems.length; i++) {
        var todoItem = todoItems[i];
        // mi copio il template
        var cloneItem = template.clone();
        // inserisco il testo dell oggetto
        cloneItem.find('.text').text(todoItem.text);
        // aggiungo il tutto alla lista
        todos.append(cloneItem);
    }

    // 2 - inserimento nuovo todo con un input testuale ed eventi tastiera
    newInput.keyup(function(e) {
        if (e.which === 13) {           // 13 è il codice del tasto invio
            // console.log('invio');
            // console.log(newInput.val());

            // copio in variabile il valore, quindi il testo dell input
            inputText = newInput.val().trim();

            if (inputText !== '') {
                // copio template
                var cloneItem = template.clone();
                // inserisco il testo
                cloneItem.find('.text').text(inputText);
                // aggiungo alla lista
                todos.append(cloneItem);
                // reset
                newInput.val('');
            }
        }
    })

    // 3 - Rimozione todo con click su icona
    
    $('body').on('click', '.app_todos li i', function() {
        var item = $(this).parent('li')
        item.remove();
    })

    // 4 - Cliccando sul testo compare uno sbarramento a indicarne il completamento

    $('body').on('click', '.app_todos .text', function() {
        $(this).toggleClass('done');
    })
    

    // end document ready
})