export function sortPlayerStats(sortedPlayerStats) {
	for(let i = 0; i < sortedPlayerStats.length - 1; i++) {
		for(let j = i + 1; j < sortedPlayerStats.length; j++) {
			if(sortedPlayerStats[i]['score'] < sortedPlayerStats[j]['score'])
				[sortedPlayerStats[i], sortedPlayerStats[j]] = [sortedPlayerStats[j], sortedPlayerStats[i]]
		}
	}
	for(let i = 0; i < sortedPlayerStats.length - 1; i++) {
		for(let j = i + 1; j < sortedPlayerStats.length; j++) {
			if(sortedPlayerStats[i]['score'] === sortedPlayerStats[j]['score']
					&& sortedPlayerStats[i]['id'] > sortedPlayerStats[j]['id'])
				[sortedPlayerStats[i], sortedPlayerStats[j]] = [sortedPlayerStats[j], sortedPlayerStats[i]]
		}
	}
	return sortedPlayerStats
}