function GetTradeIds() {
	var ids = new Array();
	
	$('article div[class="tradepoll"]').each(function(index, item) {
		var id = $(item).attr('id').split('trade')[1];
		ids.push(id);
	});
	
	return ids;
}

function SlowForEach(array, iterationCallback, finishCallback, min, max) {
	var timeOffset = 0.0;
	
	for (var i = 0; i < array.length; i++) {
		timeOffset += ((Math.random() * max) + min);
		
		setTimeout(function() {
			iterationCallback({
				index: i,
				item: array[i],
				collection: array
			});
		}, timeOffset);
	}
	
	setTimeout(finishCallback, timeOffset + 1);
}

function SlowIteration(data) {
	bumpTrade(data.collection[data.index]);
}

function BumpAllTrades() {
	var trades = GetTradeIds();

	SlowForEach(trades, SlowIteration, 2, 8);
}

function NextBump() {
	BumpAllTrades();
	
	setTimeout(NextBump, ((Math.random() * 40) + 31) * 1000 * 60);
}

NextBump();