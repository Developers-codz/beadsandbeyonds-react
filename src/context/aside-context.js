import { createContext, useContext, useState } from "react";

const AsideContext = createContext(false);

const AsideProvider = ({ children }) => {
  const [activeAside, setActiveAside] = useState(false);
  return (
    <AsideContext.Provider value={{ activeAside, setActiveAside }}>
      {children}
    </AsideContext.Provider>
  );
};

const useAside = () => useContext(AsideContext);

export { useAside, AsideProvider };
