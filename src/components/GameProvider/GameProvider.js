import React from "react";
import useGame from './use-game.hook'

export const GameContext = React.createContext()

export default function GameProvider(props) {
	const value = useGame()
	return <GameContext.Provider value={value} {...props} />
}
