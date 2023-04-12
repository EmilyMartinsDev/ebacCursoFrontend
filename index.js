$($(document).ready(function () {
    let arrayTarefa = [];
    $('form').submit((e)=>{
        e.preventDefault();
              
        let tarefa = $('#tarefa').val();
      if (!tarefa){
        $('.aviso').css('display', 'block').text("Preencha o campo!");
        return;
      }
        if(arrayTarefa.includes(tarefa)){
          $('.aviso').css('display', 'block').text("Essa atividade já existe!");
          return;
        }

        $('.aviso').css('display', 'none');
        const li = $(`<li>${tarefa}</li>`).attr({id: tarefa}).click(()=>colocaRisco(li));
        $("#tarefa").val('');
        $('ul').append(li);
    
        arrayTarefa.push(tarefa);


    });

  function colocaRisco(li){
    li.addClass('concluido')
  }
}));
