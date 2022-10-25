export function resetCover(game) {
	for(let i = 0; i < game.length; i++) {
		if(game[i]['state'] === 'cover-cover' || game[i]['state'] === 'active-cover')
			game[i]['state'] = 'cover'
	}
	return game
}

export function setFail(game, id) {
	for(let i = 0; i < game.length; i++) {
		if(game[i]['id'] === id)
			game[i]['state'] = 'cover-cover'
		else if(game[i]['state'] === 'active')
			game[i]['state'] = 'active-cover'
	}
	return game
}

export function setSuccess(game, id) {
	for(let i = 0; i < game.length; i++) {
		if(game[i]['id'] === id)
			game[i]['state'] = 'cover-inactive'
		else if(game[i]['state'] === 'active')
			game[i]['state'] = 'active-inactive'
	}
	return game	
}