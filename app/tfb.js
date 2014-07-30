
// TODO: fix scope
function parseData(data) {
	var raw = Papa.parse(data, { dynamicTyping: true });
	var res = [];
	for(i = 1; i < raw.data.length; i++) {
		var a = raw.data[i];
		if(isNaN(a[1]) || a[1] == 0) {
			console.log("invalid data, skipping row "+i+": "+a[0]);
			continue;
		}
		res.push({
			name: a[0],
			data: a.slice(1, 7),
			visible: false
		});
	}
	return res;
};

function TfbData() {
	return {
		getResults: function(tfbRound, testClass, onReady) {
			console.log('getResults: '+tfbRound+', '+testClass);
			$.get('/data/'+tfbRound+'/'+'tfb-'+testClass+'.csv', function(data) {
				onReady(parseData(data));
			});
		},
		foo: function(onReady) {
		}

	}
}