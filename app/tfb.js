
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
				const classKey = testTypes[testClass];
				const res = [];
				const duration = data['duration'];
				const testData = data['rawData'][classKey];
				for (let fw in testData) {
					const counts = [];
					let isValidTestResult = true;
					for(i = 0; i < testData[fw].length; i++) {
						const requests = testData[fw][i]["totalRequests"];
						if (typeof requests != 'number') {
							isValidTestResult = false;
							console.log("WARN: invalid data for "+fw+", skipping");
							break;
						}
						const errors = typeof testData[fw][i]["5xx"] == 'number' ? testData[fw][i]["5xx"] : 0;
						counts.push(Math.round( (requests-errors) / duration));
					}
					if(isValidTestResult) {
						res.push({
							name: fw,
							data: counts,
							visible: false
						});
					}
				}
				return res.sort(function(a, b){return a.name.localeCompare(b.name)});
			};

			console.log('debug: getResults: '+tfbRound+', '+testClass);
			$.get('/data/'+tfbRound+'/results.json.gz', function(results) {
				onReady(parseData(testClass, results));
			});
		},
	}
}