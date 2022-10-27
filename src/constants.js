export const COLORS = {
	primary: 'hsl(37deg 98% 54%)',
	primaryLight: 'hsl(37deg 100% 65%)',
	text: 'hsl(0deg 0% 99%)',
	modalBackground: 'hsl(0deg 0% 95%)',
	backdrop: 'hsl(0deg 0% 0% / 50%)',
	background: 'hsl(206deg 45% 15%)',
	secondary: 'hsl(205deg 30% 27%)',
	secondaryInactive: 'hsl(203deg 28% 79%)',
	secondaryHover: 'hsl(205deg 37% 55%)',
	tertiaryText: 'hsl(203deg 22% 55%)',
	tertiaryBackground: 'hsl(203deg 25% 90%)',
};

export const BREAKPOINTS = {
	tabletMax: 850,
  phoneMax: 600,
};

export const QUERIES = {
	'tabletAndDown': `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  'phoneAndDown': `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
};