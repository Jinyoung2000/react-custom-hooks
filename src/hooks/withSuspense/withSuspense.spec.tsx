import { fireEvent, render, waitFor } from '@testing-library/react'
import { useState } from 'react'
import { withSuspense } from './withSuspense'

describe('withSuspense', () => {
	it('withSuspense로 Wrapping된 컴포넌트에서 비동기 호출이 완료될 때까지 fallback이 렌더링된다.', async () => {
		const AsyncComponent = withSuspense(
			({ isLoading }: { isLoading: boolean }) => {
				if (isLoading) {
					throw new Promise<void>(() => {})
				}
				return <div>완료</div>
			},
			{
				fallback: <div>loading</div>,
			}
		)
		const Page = () => {
			const [isLoading, setLoading] = useState(true)

			return (
				<div>
					<button onClick={() => setLoading(false)}>완료하기</button>
					<AsyncComponent isLoading={isLoading} />
				</div>
			)
		}

		const { getByText } = render(<Page />)
		expect(getByText('loading')).toBeInTheDocument()

		fireEvent.click(getByText('완료하기'))
		await waitFor(() => expect(getByText('완료')).toBeInTheDocument())
	})
})
