import React from 'react';

export default function useMobileMenu() {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false)
	const closeMobileMenu = () => setShowMobileMenu(false)
	const openMobileMenu = () => setShowMobileMenu(true)
	function handleEscape(e) {
		if(e.key === 'Escape' && showMobileMenu)
			setShowMobileMenu(false)
	}
	return {
		showMobileMenu,
		closeMobileMenu,
		openMobileMenu,
		handleEscape
	}
}