google.charts.load("current", {
  callback: function() {
    var arrayData = [];
    var array = [];
    var text = "";
    var views = "";
    var visits = "";
    var likes = "";
    var csvStringViews = "";
    var csvStringVisits = "";
    var csvStringLikes = "";
    $.get("data.csv", function(csvString) {
      arrayData = $.csv.toArrays(csvString, {
        onParseValue: $.csv.hooks.castToScalar
      });
      arrayData.map((item, index) => {
        text = text + item;
      });

      console.log("texto concatenado");
      console.log(text);

      array = text.split("|");

      console.log("Array separado");
      console.log(array);

      views = array[0];
      visits = array[1];
      likes = array[2];

      console.log("Tres textos");
      console.log(views);
      console.log(visits);
      console.log(likes);

      var arrayDataViews = $.csv.toArrays(views, {
        onParseValue: $.csv.hooks.castToScalar
      });
      var arrayDataVisits = $.csv.toArrays(visits, {
        onParseValue: $.csv.hooks.castToScalar
      });
      var arrayDataLikes = $.csv.toArrays(likes, {
        onParseValue: $.csv.hooks.castToScalar
      });

      console.log("Textos convertidos en array");
      console.log(arrayDataViews);
      console.log(arrayDataVisits);
      console.log(arrayDataLikes);

      var dataViews = new google.visualization.arrayToDataTable(arrayDataViews);
      var dataVisits = new google.visualization.arrayToDataTable(
        arrayDataVisits
      );
      var dataLikes = new google.visualization.arrayToDataTable(arrayDataLikes);

      var chartViews = new google.visualization.ColumnChart(
        document.getElementById("chartViews")
      );
      var chartVisits = new google.visualization.ColumnChart(
        document.getElementById("chartVisits")
      );
      var chartLikes = new google.visualization.ColumnChart(
        document.getElementById("chartLikes")
      );

      chartViews.draw(dataViews);
      chartVisits.draw(dataVisits);
      chartLikes.draw(dataLikes);
    });
  },
  packages: ["corechart"]
});
