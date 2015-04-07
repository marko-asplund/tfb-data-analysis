
function TfbData(config) {
	this.config = config;

	testTypes = {
		"type1": "json",
		"type2": "db",
		"type3": "query",
		"type4": "fortune",
		"type5": "update",
		"type6": "plaintext"
	}

	return {
		getResults: function(tfbRound, testClass, onReady) {
			function parseData(testClass, data) {
				var classKey = testTypes[testClass];
				var res = [];
				var duration = data['duration'];
				var testData = data['rawData'][classKey];
				for (var fw in testData) {
					var counts = [];
					for(i = 0; i < testData[fw].length; i++) {
						var requests = testData[fw][i]["totalRequests"];
						var t = typeof testData[fw][i]['startTime'] == 'number' ?
							testData[fw][i]['endTime'] - testData[fw][i]['startTime'] : duration;
						var errors = typeof testData[fw][i]["5xx"] == 'number' ? testData[fw][i]["5xx"] : 0;
						counts.push(Math.round( (requests-errors) / t));
					}
					res.push({
						name: fw,
						data: counts,
						visible: false
					});
				}
				return res.sort(function(a, b){return a.name.localeCompare(b.name)});
			};

			console.log('getResults: '+tfbRound+', '+testClass);
			$.get('/data/'+tfbRound+'/results.json', function(results) {
				onReady(parseData(testClass, results));
			});
		},
	}
}