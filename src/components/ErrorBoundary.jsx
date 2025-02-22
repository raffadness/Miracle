import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // Menangkap error
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // Log error ke console dan simpan informasi error
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Tampilkan UI fallback dengan pesan error
      return (
        <div className="p-4 text-red-500">
          <h2>Something went wrong.</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <details className="mt-2 text-sm">
            <summary>Details</summary>
            <pre>
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </details>
        </div>
      );
    }

    // Render children jika tidak ada error
    return this.props.children;
  }
}

export default ErrorBoundary;
