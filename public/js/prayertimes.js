var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var d = new Date();
//alert(new Date().getMonth());
var prayerurl = "http://api.aladhan.com/calendar?latitude=38.9717&longitude=-95.2353&timezonestring=America/Chicago&method=2&month="+(d.getMonth()+1)+"&year="+d.getFullYear();
//"http://api.aladhan.com/calendar?latitude=38.9717&longitude=-95.2353&timezonestring=America/Chicago&method=2&month=07&year=2016"
//"http://api.aladhan.com/timings/1467233067?latitude=38.9717&longitude=-95.2353&timezonestring=America/Chicago&method=2";
//alert(prayerurl);

$.ajax({
        type: 'GET',
        url: prayerurl,
        dataType: 'json',

        error: function(xhr, ajaxOptions, thrownError) {
            alert(xhr);
            alert(ajaxOptions);
            alert(thrownError);
            alert(ajaxOptions);
        }
    })
    .done(function(data) {
        //alert(data);
        var date = new Date();
        new Vue({
            el: 'body',
            data: {
                prayertimes: data,
                month: monthNames[d.getMonth()],
                year: d.getFullYear()
            }
        });

    })

.fail(function(data) {
    //  alert("fail");
    //alert(data.count);

});
