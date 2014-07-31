
// TODO: fix scope

function parseData(testClass, data) {
	var raw = Papa.parse(data, { dynamicTyping: true });
	var res = [];
	var range = $.extend({}, getDataParseOptions().default, getDataParseOptions()[testClass]).columnRange;
	for(i = 1; i < raw.data.length; i++) {
		var a = raw.data[i];
		if(isNaN(a[1]) || a[1] == 0) {
			console.log("invalid data, skipping row "+i+": "+a[0]);
			continue;
		}
		res.push({
			name: a[0],
			data: a.slice(range[0], range[1]),
			visible: false
		});
	}
	return res;
};

function getDataParseOptions() {
	return {
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
	}
};

function TfbData() {
	return {
		getResults: function(tfbRound, testClass, onReady) {
			console.log('getResults: '+tfbRound+', '+testClass);
			$.get('/data/'+tfbRound+'/'+'tfb-'+testClass+'.csv', function(data) {
				onReady(parseData(testClass, data));
			});
		},
		chartOptions: {
	    default: {
	      subtitle: {
	        text: 'TFB',
	      },
	      xAxis: {
	      	title: {
	      		text: "concurrency level"
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

		},
	}
}