function setTaskActions(){
  $('.update-task').click(function(){
    executeAjax(this.id.split('-')[0],"PUT","Tarea Completada");
  });
  
  $('.delete-task').click(function(){
    executeAjax(this.id.split('-')[0],"DELETE","Tarea Eliminada");
  });
}
setTaskActions();
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
var tasks = [];
$(document).ready(function(){
  $.get('/all',function(data){
    tasks = data;
  });
});


$('select').on('change', function() {
  var type = (this.value == 'complete') ? true : false;
  var html = "";
  if (type == "all") {
    html = DisplayTasks(tasks);
  }else{
    var filtered = tasks.filter(function (el) {
      return el.done == type;
    });
    html = DisplayTasks(filtered);
  }
  $('.data-list').html(html);
  setTaskActions();
});



function DisplayTasks(cTasks){
  var html = '';
  cTasks.forEach(function(task){
    var done = (task.done === false) ? 'Incompleto' : "Completado";
    html +=   '<div class="column is-4">';
    html += '<div class="box">';
    html +=  '<article class="media">';
    html +=    '<div class="media-content">';
    html +=      '<div class="content has-text-centered">';
    html +=        '<p>';
    html +=          '<h2><strong>Tarea:'+ task.title +' </strong></h2>';
    html +=          '<small>Estado: '+ done +'</small>';
    html +=          '<br>';
    html +=        '</p>';
    html +=      '</div>';
    html +=      '<hr>';
    html +=      '<nav class="level is-mobile center">';
    html +=        '<div class="action-links">';
    if (task.done === false){ 
      html +=       '<a id="'+task.id+'-update" href="javascript:void(0);" class="level-item update-task">';    
      html +=         '<span class="icon is-medium"><i class="fa fa-check"></i></span>';
      html +=       '</a>';
    }
    html +=         '<a id="'+task.id+'-delete" class="level-item danger delete-task">';
    html +=           '<span class="icon is-medium"><i class="fa fa-trash"></i></span>';
    html +=          '</a>';
    html +=        '</div>';
    html +=      '</nav>';
    html +=    '</div>';
    html +=  '</article>';
    html +='</div>';
    html +='</div>';
  });
  return html;
}

"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.filter = function (obj, predicate) {
      return Object.keys(obj).filter(function (key) {
            return predicate(obj[key]);
      }).reduce(function (res, key) {
            return Object.assign(res, _defineProperty({}, key, obj[key]));
      }, {});
};