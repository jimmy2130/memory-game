import React from "react";
import StartPage from '../StartPage';
import GamePage from '../GamePage';
import { GameContext } from '../GameProvider'

const App = () => {
	const { gameSettings } = React.useContext(GameContext)
  return (
  	<>
  		{
  			!gameSettings ? <StartPage/> : <GamePage/>
  		}
  	</>
  );
};

export default App;
