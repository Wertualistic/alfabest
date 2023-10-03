import React, { useState, useEffect } from "react";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error("Error caught by error boundary:", error);
      setHasError(true);
    };

    // Add a global error handler to catch unhandled errors in child components.
    window.addEventListener("error", errorHandler);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    // You can render a custom error message or component here.
    return <p>Something went wrong. Please try again later.</p>;
  }

  return children;
}

export default ErrorBoundary;
