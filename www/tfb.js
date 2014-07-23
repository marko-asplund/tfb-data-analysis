
// TODO: fix scope
function parseData(data) {
	var raw = Papa.parse(data, { dynamicTyping: true });
	var res = [];
	for(i = 1; i < raw.data.length; i++) {
//	for(i = 1; i < 10; i++) {
		var a = raw.data[i];
		res.push({
			name: a[0],
			data: a.slice(1, 7),
			visible: false
		});
	}
	return res;
};

function TfbData(serverBaseUrl) {
	this.serverBaseUrl = serverBaseUrl;
	this.say = function() {
		return "foo";
	};
	return {
		getResultsType1: function(onReady) {
			console.log("getResultsType1");
			$.getJSON(serverBaseUrl + "/tfb-data-series.json", function(data) {
				onReady(data);
			});
		},
		getResultsType2: function(onReady) {
			console.log("getResultsType2");
			$.get("http://localhost:8080/data/round-9/tfb-round9-type2.csv", function(data) {
				var d = parseData(data);
//				alert(JSON.stringify(d));
				onReady(d);
			});
		},
		getResultsType3: function(onReady) {
			console.log("getResultsType3");
			$.getJSON(serverBaseUrl + "/tfb-data-series.json", function(data) {
				onReady(data);
			});
		},
		getResultsType4: function(onReady) {
			console.log("getResultsType4");
			$.getJSON(serverBaseUrl + "/tfb-data-series.json", function(data) {
				onReady(data);
			});
		},
		getResultsType5: function(onReady) {
			console.log("getResultsType5");
			$.getJSON(serverBaseUrl + "/tfb-data-series.json", function(data) {
				onReady(data);
			});
		},
		getResultsType6: function(onReady) {
			console.log("getResultsType6");
			$.getJSON(serverBaseUrl + "/tfb-data-series.json", function(data) {
				onReady([]);
			});
		}

	}
}