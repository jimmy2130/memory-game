import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUmbrella,
	faLandmark,
	faFan,
	faCompassDrafting,
	faCar,
	faHandSpock,
	faWrench,
	faFlask,
	faAnchor,
	faTree,
	faFeather,
	faRibbon,
	faPlantWilt,
	faPlaneUp,
	faSyringe,
	faFishFins,
	faMonument,
	faBug
} from '@fortawesome/free-solid-svg-icons'

const ICON_LIST = [
	faUmbrella,
	faLandmark,
	faFan,
	faCompassDrafting,
	faCar,
	faHandSpock,
	faWrench,
	faFlask,
	faAnchor,
	faTree,
	faFeather,
	faRibbon,
	faPlantWilt,
	faPlaneUp,
	faSyringe,
	faFishFins,
	faMonument,
	faBug,
]

const Icon = ({ content }) => {
  return (
		<span>
			<FontAwesomeIcon icon={ICON_LIST[content - 1]}/>
		</span>
  );
};

export default Icon;

