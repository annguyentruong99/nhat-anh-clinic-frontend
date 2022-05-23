import React from "react";

type Props = {
	children: React.ReactNode;
};

type State = {
	hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
	state = { hasError: false };

	static getDerivedStateFromError(error: any) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.error(error);
		console.error(errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
