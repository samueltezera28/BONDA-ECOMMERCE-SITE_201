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

const showLoading = (loading) => {
  if (loading) {
    return (
      <div>loading...</div>
    )
  }
}

export { showSuccess, showError, showLoading };
