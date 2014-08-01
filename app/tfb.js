
function TfbData(config) {
	this.config = config;

	return {
		getResults: function(tfbRound, testClass, onReady) {

			function parseData(testClass, data) {
				var raw = Papa.parse(data, { dynamicTyping: true });
				var res = [];
				var range = config.getDataParseOptions(testClass).columnRange;
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

			console.log('getResults: '+tfbRound+', '+testClass);
			$.get('/data/'+tfbRound+'/'+'tfb-'+testClass+'.csv', function(data) {
				onReady(parseData(testClass, data));
			});
		},
	}
}