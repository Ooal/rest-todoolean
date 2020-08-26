
function del(){
  var id = $(this).data('id');
  $.ajax({url: "http://157.230.17.132:3028/todos/" + id,
    method: "DELETE",
    success: function (data) {
      get();
    },
    error: function(err) {
      console.log('err', err);
    }
  });
}

function insert(){
  var text = $('#text').val();
  $.ajax({url: "http://157.230.17.132:3028/todos",
    method: "POST",
    data: {
      text : text
    },
    success: function (data) {
      get();
    },
    error: function(err) {
      console.log('err', err);
    }
  });
}

function get(){
  $.ajax({url: "http://157.230.17.132:3028/todos",
    method: "GET",
    success: function (data) {
      print(data);
    },
    error: function(err) {
      console.log('err', err);
    }
  });
}

function print(data){
  var target = $('#lista');
  target.text('');
  for (var i = 0; i < data.length; i++) {
    var element = data[i];
    var template = $('#template').html();
    var compiled = Handlebars.compile(template);
    var tml = compiled(element);
    target.append(tml);
  }
}

function init() {
 get();
 $('#ad').click(insert);
 $(document).on('click','.x',del);
}
$(document).ready(init);
