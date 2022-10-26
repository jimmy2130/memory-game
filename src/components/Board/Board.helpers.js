export function getRandomBoard(size) {
	let random = []
	let board = []
	for(let i = 1; i <= size * size / 2; i++) {
		board.push(i)
		board.push(i)
	}
	for(let i = 0; i < size * size; i++)
		random.push(Math.random())
	for(let i = 0; i < random.length - 1; i++) {
		for(let j = i + 1; j < random.length; j++) {
			if(random[i] > random[j]) {
				[random[i], random[j]] = [random[j], random[i]];
				[board[i], board[j]] = [board[j], board[i]];
			}
		}
	}
	console.log(board)
	return board
}

export function initializeGame(size) {
	const board = getRandomBoard(size)
	const boardInfo = board.map((c, index) => ({id: index, content: c, state: 'cover'}))
	return boardInfo
}

export function getAnswer(boardInfo) {
	let random = boardInfo.map(x => x.content)
	let ans = []
	for(let i = 0; i < random.length; i++) {
		for(let j = 0; j < random.length; j++) {
			if(i === j)
				continue
			if(random[i] === random[j])
				ans.push(j)
		}
	}
	return ans
}

export function getMatchStatus(game, answerKey) {
	const arr = game.filter(piece => piece.state === 'active').map(x => x.id)
	if(arr.length === 0 || arr.length % 2 === 1)
		return 'unknown'
	if(answerKey[arr[0]] === arr[1])
		return 'success'
	return 'fail'
}

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