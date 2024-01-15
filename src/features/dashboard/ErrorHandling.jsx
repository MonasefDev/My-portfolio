import React from "react";

function ErrorHandling({ error }) {
  if (!error) return null;
  return (
    <>
      <div />
      <div>{error.message}</div>
    </>
  );
}

export default ErrorHandling;
