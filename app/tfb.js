
function TfbData(config) {
	this.config = config;

	return {
		getResults: function(tfbRound, testClass, onReady) {

			function parseDataRound9(testClass, data) {
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

			function parseData(testClass, data) {
				var types = {
					"type1": "json",
					"type2": "db",
					"type3": "query",
					"type4": "fortune",
					"type5": "update",
					"type6": "plaintext"
				}
				var classKey = types[testClass];
				var res = [];
				var testData = data['rawData'][classKey];
				for (var fw in testData) {
					var counts = [];
					for(i = 0; i < testData[fw].length; i++) {
						counts.push(testData[fw][i]["totalRequests"]);
					}
					res.push({
						name: fw,
						data: counts,
						visible: false
					});
				}
				return res;
			};

			console.log('getResults: '+tfbRound+', '+testClass);
			if(tfbRound == 'round-9') {
				$.get('/data/round-9/tfb-'+testClass+'.csv', function(data) {
					onReady(parseDataRound9(testClass, data));
				});
			} else {
				$.get('/data/'+tfbRound+'/results.json', function(results) {
					onReady(parseData(testClass, results));
				});
			}
		},
	}
}