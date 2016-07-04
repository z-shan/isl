
var prayerurl= "http://api.aladhan.com/timings/" + Math.round(+new Date()/1000) + "?latitude=38.9717&longitude=-95.2353&timezonestring=America/Chicago&method=2";
//"http://api.aladhan.com/timings/1467233067?latitude=38.9717&longitude=-95.2353&timezonestring=America/Chicago&method=2";
//alert(prayerurl);
  $.ajax({
          type 		: 'GET',
          url 		: prayerurl,
          dataType 	: 'json',

          error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr);
            alert(ajaxOptions);
              alert(thrownError);
              alert(ajaxOptions);
            }
      })
      .done(function(data) {
        //alert(data);

        new Vue({
          el: '#timingsTable',
          data:{
            prayertimes:data,
            time: Math.round(+new Date()/1000)
            month:

          }


        });

      })

      .fail(function(data) {
      //  alert("fail");
        //alert(data.count);

      });
