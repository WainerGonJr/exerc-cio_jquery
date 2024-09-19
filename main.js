$(document).ready(function() {
    // Quando o formulário é submetido
    $('#task-form').on('submit', function(event) {
        event.preventDefault(); // Prevenir o envio padrão do formulário

        // Obter o valor do campo de texto
        var task = $('#task-input').val();

        // Se o campo não estiver vazio, adicionar à lista
        if (task) {
            $('#task-list').append('<li>' + task + '</li>');
            $('#task-input').val(''); // Limpar o campo de texto
        }
    });

    // Adicionar linha ao clicar nos itens
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
