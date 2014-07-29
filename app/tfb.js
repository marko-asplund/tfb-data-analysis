
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
		getResultsType1: function(onReady) {
			console.log("getResultsType1");
			$.getJSON("/tfb-data-series.json", function(data) {
				onReady(data);
			});
		},
		getResultsType2: function(onReady) {
			console.log("getResultsType2");
			$.get("/data/round-9/tfb-round9-type2.csv", function(data) {
				onReady(parseData(data));
			});
		},
		getResultsType3: function(onReady) {
			console.log("getResultsType3");
			$.getJSON("/tfb-data-series.json", function(data) {
				onReady(data);
			});
		},
		getResultsType4: function(onReady) {
			console.log("getResultsType4");
			$.getJSON("/tfb-data-series.json", function(data) {
				onReady(data);
			});
		},
		getResultsType5: function(onReady) {
			console.log("getResultsType5");
			$.getJSON("/tfb-data-series.json", function(data) {
				onReady(data);
			});
		},
		getResultsType6: function(onReady) {
			console.log("getResultsType6");
			$.getJSON("/tfb-data-series.json", function(data) {
				onReady([]);
			});
		}

	}
}