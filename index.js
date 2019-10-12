google.charts.load("current", {
  callback: function() {
    

      views =
        "Site,DMT Rock Bar, La burra Roja, Wings Army \nVISTAS ,458,293,187";
      visits =
        "Site,DMT Rock Bar, La burra Roja, Wings Army \nVISITAS,2893,7289,3089";
      likes =
        "Site,DMT Rock Bar, La burra Roja, Wings Army \nLIKES ,174,202,215";

      var arrayDataViews = $.csv.toArrays(views, {
        onParseValue: $.csv.hooks.castToScalar
      });
      var arrayDataVisits = $.csv.toArrays(visits, {
        onParseValue: $.csv.hooks.castToScalar
      });
      var arrayDataLikes = $.csv.toArrays(likes, {
        onParseValue: $.csv.hooks.castToScalar
      });


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
  },
  packages: ["corechart"]
});
