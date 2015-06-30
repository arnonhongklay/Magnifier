(function() {
  ohmpieng.directive('meter', function() {
    return {
      template: '<div></div>',
      scope: {
        chart: '='
      },
      restrict: 'E',
      replace: true,
      link: function(scope, element) {
        var draw, gauge;
        gauge = new google.visualization.Gauge(element[0]);
        draw = function(datas) {
          var chartOptions, view;
          view = new google.visualization.arrayToDataTable([['Label', 'Value'], [datas.data.text, datas.data.value]]);
          chartOptions = {
            height: 150,
            redFrom: 90,
            redTo: 100,
            yellowFrom: 75,
            yellowTo: 90,
            minorTicks: 5
          };
          return gauge.draw(view, chartOptions);
        };
        return scope.$watch('chart', function(datas) {
          if (datas && datas.data && datas.max) {
            return draw(datas);
          }
        });
      }
    };
  });

}).call(this);
