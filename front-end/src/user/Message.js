import React from "react";

const showError = (error) => {
  if (error) {
    return (
      <div>{error}</div>
    )
  }
}

const showSuccess = (success) => {
  if (success) {
    return (
      <div>{success}</div>
    )
  }
}

let loadingMode = {};

const showLoading = (loading) => {
  if (loading) {
    loadingMode = { pointerEvents: 'none', backgroundColor: 'transparent' };
    return (
      <div>loading...</div>
    )
  } else {
    loadingMode = {};
  }
}

export { showSuccess, showError, showLoading, loadingMode };
