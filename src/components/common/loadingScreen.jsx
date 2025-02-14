// components/common/LoadingScreen.jsx
import React from 'react';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-quinary  z-50">
      <span class="loader"></span>
    </div>
  );
}

export default LoadingScreen;