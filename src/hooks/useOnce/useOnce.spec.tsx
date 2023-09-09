import { renderHook } from '@testing-library/react'

import useOnce from './useOnce'

describe('useOnce', () => {
	it('첫 렌더링 이후 값은 true여야한다.', async () => {
		const { result } = renderHook(() => useOnce())
		expect(result.current).toBe(true)
	})
})
