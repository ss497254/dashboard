import React from 'react';
import { LoadingAnimation } from 'x/stories/LoadingAnimation';

function Home() {
  return (
    <div className="h-screen bg-blue-500">
      Home
      <LoadingAnimation />
    </div>
  );
}

export default Home;
