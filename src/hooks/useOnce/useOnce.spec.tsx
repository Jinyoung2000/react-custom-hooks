import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useOnce } from './useOnce'

describe('useOnce', () => {
	it('리렌더링 전 값은 true고 후에는 false로 변경되어야한다.', async () => {
		const { result, rerender } = renderHook(() => useOnce())
		expect(result.current).toBe(true)
		act(() => {
			rerender()
		})
		expect(result.current).toBe(false)
	})
})
