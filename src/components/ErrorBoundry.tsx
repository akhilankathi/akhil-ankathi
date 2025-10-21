// import { Component } from "react";

// export class ErrorBoundery extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false, error: null };
//     }
//     static getDerivedStateFromError(error) {
//     return { hasError: true, error };
//   }
  
//   componentDidCatch(error, errorInfo) {
//     // log error to monitoring service (Sentry, LogRocket, Datadog, etc.)
//     console.error("Error caught by ErrorBoundary:", error, errorInfo);
//   }

  
//   render() {
//     if (this.state && this.state.hasError) {
//       return (
//         <div className="p-4 bg-red-100 text-red-700 rounded-md">
//           <h2>⚠️ Widget failed to load</h2>
//           <p>{this.state.error?.message}</p>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }