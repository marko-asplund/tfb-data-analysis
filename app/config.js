
function Config() {
  const parseOptions = {
    default: {
      columnRange: [1, 7]
    },
    type3: {
      columnRange: [1, 6]
    },
    type5: {
      columnRange: [1, 6]
    },
    type6: {
      columnRange: [1, 5]
    }
  };

  const chartOptions = {
    default: {
      subtitle: {
        text: 'TFB',
      },
      xAxis: {
        title: {
          text: 'concurrency level'
        },
        categories: ['8', '16', '32', '64', '128', '256']
      },
      yAxis: {
        title: {
          text: 'responses / second'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        valueSuffix: 'responses / second'
      },
      legend: {
      },
      series: [{}]
    },
    type3: {
      xAxis: {
        title: {
          text: 'queries / request'
        },
        categories: ['1', '5', '10', '15', '20']
      }
    },
    type5: {
      xAxis: {
        title: {
          text: 'queries / request'
        },
        categories: ['1', '5', '10', '15', '20']
      }
    },
    type6: {
      xAxis: {
        categories: ['256', '1,024', '4,096', '16,384']
      }
    },
  };

  return {
    getDataParseOptions: function(testClass) {
      return $.extend({}, parseOptions.default, parseOptions[testClass]);
    },
    getChartOptions: function(testClass, options) {
      return $.extend({}, chartOptions.default, chartOptions[testClass], options);
    }

  };

}
