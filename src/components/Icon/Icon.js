import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VisuallyHidden from '../VisuallyHidden';
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

const VOICEOVER_LIST = [
	'Umbrella',
	'Landmark',
	'Fan',
	'Compass Drafting',
	'Car',
	'Hand Spock',
	'Wrench',
	'Flask',
	'Anchor',
	'Tree',
	'Feather',
	'Ribbon',
	'Plant Wilt',
	'Plane',
	'Syringe',
	'Fish Fins',
	'Monument',
	'Bug',
]

const Icon = ({ content }) => {
  return (
		<span>
			<VisuallyHidden>{VOICEOVER_LIST[content - 1]}</VisuallyHidden>
			<FontAwesomeIcon icon={ICON_LIST[content - 1]}/>
		</span>
  );
};

export default Icon;

