import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary p-6 bg-red-900/20 border border-red-500 rounded-xl text-center">
          <h2 className="text-red-500 text-xl font-bold mb-4">حدث خطأ غير متوقع 😢</h2>
          <p className="text-white mb-4">
            {this.state.error?.message || 'حدث خطأ في التطبيق'}
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null, errorInfo: null });
              window.location.reload();
            }}
            className="bg-[#2a5a8a] text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition"
          >
            إعادة تحميل الصفحة 🔄
          </button>
          {this.state.errorInfo && (
            <details className="mt-4 text-right text-sm text-gray-400">
              <summary>تفاصيل الخطأ (للمطورين)</summary>
              <pre className="mt-2 p-2 bg-black/50 rounded overflow-auto">
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
