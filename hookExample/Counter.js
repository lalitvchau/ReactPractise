import React, { useState, useEffect } from 'react';
function YourComponent({ props }) {
  // !state Hook
  const [hookVariable, sethookVariable] = useState(defaultValue);

  // !Effect Hook
  useEffect(() => {
    console.log("Component mount !");
    return () => {
      console.log("Component Unmount !");
    };
  });

  return (
    <div> </div>
  );

}
export {
  YourComponent
}