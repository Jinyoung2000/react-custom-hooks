import { useEffect, useRef } from 'react'

const useOnce = () => {
	const isOnce = useRef<boolean>(true)

	useEffect(() => {
		isOnce.current = false
	}, [])

	return isOnce.current
}

export default useOnce
