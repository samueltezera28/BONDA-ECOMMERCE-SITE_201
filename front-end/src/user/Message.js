import React from "react";

const showError = (error) => {
  if (error) {
    return (
      <div className="p-3 mb-2 bg-danger bg-gradient text-white">{error}</div>
    )
  }
}

const showSuccess = (success) => {
  if (success) {
    return (
      <div className="p-3 mb-2 bg-success bg-gradient text-white">{success}</div>
    )
  }
}

let loadingMode = {};

const showLoading = (loading) => {
  if (loading) {
    loadingMode = { pointerEvents: 'none', backgroundColor: '#4D4D4D' };
    return (
      <div className="loader"></div>
    )
  } else {
    loadingMode = {};
  }
}

export { showSuccess, showError, showLoading, loadingMode };
