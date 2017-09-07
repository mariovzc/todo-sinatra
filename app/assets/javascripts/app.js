$('.update-task').click(function(){
  executeAjax(this.id.split('-')[0],"PUT","Tarea Completada");
});

$('.delete-task').click(function(){
  executeAjax(this.id.split('-')[0],"DELETE","Tarea Eliminada");
});

function executeAjax(id,type,message){
  $.ajax({
    url: 'task/' + id,
    type: type,
    success: function(result) {
        alert(message);
        window.location.reload();
    },
  });
}