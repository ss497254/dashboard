import React from 'react';

interface LoadingAnimationProps {
  size?: number;
}

export const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  size = 100,
}) => {
  return (
    <div className="spinner" style={{ width: size, height: size }}>
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
};
