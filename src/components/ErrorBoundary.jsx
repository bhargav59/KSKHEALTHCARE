import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Optionally log to an external service
        // console.error('ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
                    <h1 style={{ fontSize: 20, fontWeight: 600, color: '#b91c1c' }}>Something went wrong.</h1>
                    <p style={{ marginTop: 8, color: '#334155' }}>Please refresh the page. If the issue persists, contact support.</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
