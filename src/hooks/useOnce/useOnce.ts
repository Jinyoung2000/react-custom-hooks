import { useEffect, useRef } from 'react'

export const useOnce = () => {
	const isOnce = useRef<boolean>(true)

	useEffect(() => {
		isOnce.current = false
	}, [])

	return isOnce.current
}
