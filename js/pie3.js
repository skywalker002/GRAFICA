
var chart1 = c3.generate({
    data: {
        // iris data from R
   
   columns: [
            
           ["Primaria", 14580379],
            ["Secundaria", 6571858],
            ["Preparatoria", 4602837],
        ],
        type : 'pie',
       onclick: function (d, i) { console.log("onclick", d, i); },
       onmouseover: function (d, i) { console.log("onmouseover", d, i); },
       onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});



setTimeout(function () {
    chart.unload({
        ids: 'Primaria'
    });
    chart.unload({
        ids: 'Secundaria'
    });
    chart.unload({
       ids:'Preparatoria' 
    });
}, 200000);







