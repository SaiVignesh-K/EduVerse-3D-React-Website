import React, { createContext, useContext, useState } from 'react';

const SharedStateContext = createContext();

export const SharedStateProvider = ({ children }) => {
  const [text, setText] = useState('Hover over the dot to see the text');
  const [desc, setDesc] = useState('Default description');

  return (
    <SharedStateContext.Provider value={{ text, setText, desc, setDesc }}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => {
  return useContext(SharedStateContext);
};


// import React, { createContext, useContext, useState } from 'react';

// const SharedStateContext = createContext();

// export const SharedStateProvider = ({ children }) => {
//   const [text, setText] = useState('Hover over the dot to see the text');
//   const [desc, setDesc] = useState('Default description');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   return (
//     <SharedStateContext.Provider value={{ text, setText, desc, setDesc, isDropdownOpen, setIsDropdownOpen }}>
//       {children}
//     </SharedStateContext.Provider>
//   );
// };

// export const useSharedState = () => {
//   return useContext(SharedStateContext);
// };
