import React from 'react';

export default function useModal(close) {
	const modalRef = React.useRef(null)
	const firstBtnRef = React.useRef(null)
	const lastBtnRef = React.useRef(null)
	function handleScreenClick(e) {
		if(!modalRef.current.contains(e.target))
			close()
	}
	function moveToFirst(e) {
		if(e.key === 'Tab' && !e.shiftKey) {
			e.preventDefault()
			firstBtnRef.current.focus()
		}		
	}
	function backToLast(e) {
		if(e.key === 'Tab' && e.shiftKey) {
			e.preventDefault()
			lastBtnRef.current.focus()
		}
	}
	return {
		modalRef,
		firstBtnRef,
		lastBtnRef,
		handleScreenClick,
		moveToFirst,
		backToLast
	}
}