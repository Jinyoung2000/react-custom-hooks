import React, { ComponentProps, ComponentType, Suspense } from 'react'

export function withSuspense<Props>(
	WrappedComponent: ComponentType<Props>,
	options: {
		fallback: ComponentProps<typeof Suspense>['fallback']
	}
) {
	return (props: Props & React.Attributes) => {
		return (
			<React.Suspense fallback={options.fallback}>
				<WrappedComponent {...props} />
			</React.Suspense>
		)
	}
}
