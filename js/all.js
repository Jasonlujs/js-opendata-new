$(function () {
  $.ajax({
    type: 'GET',
    url: 'all.json',
    success: function (data) {
      // 跑 for 迴圈撈資料      
      var api = data.result.records;
      var str = [];
      var area = document.getElementById('mySelect');
      var list = document.querySelector('.main');
      function add() {
        for (var i in api) {
          if (str.indexOf(api[i].Zone) == -1) {
            str.push(api[i].Zone);
          }
        }
        for (var i in str) {
          $('#mySelect').append($('<option>', {
            value: str[i],
            text: str[i]
          }));
        }
      }
      add();

      function updateList(e) {
        var select = e.target.value;
        var name = '';
        for (var i = 0; i < api.length; i++) {
          if (select == api[i].Zone) {

            name += '<h2>' + api[i].Zone + '</h2><div class="content"><div style="width: 100%;height: 155px; position: relative;background-image: url(' + api[i].Picture1 + ');background-size: cover; background-position: center center; "><h3>' + api[i].Name + '</h3><h4>' + api[i].Zone + '</h4></div><div class="clock"><img src="image/icons_clock.png">' + api[i].Opentime + '</div><div class="pin"><img src="image/icons_pin.png">' + api[i].Add + '</div><div class="phone"><img src="image/icons_phone.png">' + api[i].Tel + '</div><div class="ticket"><img src="image/icons_tag.png">' + api[i].Ticketinfo + '</div></div>';

          }
        }
        list.innerHTML = name;
      }


      $('#gotop').click(function () {
        $('html,body').animate({
          scrollTop: 0
        }, 900);
      });
      area.addEventListener('change', updateList, false)





    }
  });

});



//   var str=[];
//   var area=document.getElementById('mySelect');    
//   var list=document.querySelector('.list');

//   function add(){
//   for(var i in api){
//   if(str.indexOf(api[i].Zone) == -1){
//     str.push(api[i].Zone) ;
//     }
//   }
//   for(var i in str){
//   $('#mySelect').append($('<option>', { 
//           value: str[i],
//           text : str[i] 
//       }));
//     }
//   }
//   add();

//  function updateList(e){
//     var select = e.target.value;
//     var name='';
//        for(var i in api){
//             if(select== api[i].Zone){
//             name+=api[i].Name;
//             console.log(name)
//             // name += '    <div class="content"><div id="img" class="img"><h3>'+api[i].Name+'</h3><h4>'+api[i].Zone+'</h4></div><div class="clock"><img src="image\icons_clock.png">'+api[i].Opentime+'</div><div class="pin"><img src="image\icons_pin.png">'+api[i].Add+'</div><div class="phone"><img src="image\icons_phone.png">'+ api[i].Tel+'</div><div class="ticket"><img src="image\icons_tag.png">'+api[i].Ticketinfo+'</div></div>';
//         }
//     }
//     list.innerHTML = name;
//     for(var i in api){
//     document.getElementById("img").style.backgroundImage='url('+api[i].Picture1+')';
//     document.getElementById("img").style.backgroundSize="cover";
//     }
//  }
// area.addEventListener('change',updateList,false)