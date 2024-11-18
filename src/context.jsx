import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Modal open");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log("Modal closed");
  };

  const openSideBar = () => {
    setIsSideBarOpen(true);
    console.log("SB open");
  };

  const closeSideBar = () => {
    setIsSideBarOpen(false);
    console.log("SB closed");
  };

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isModalOpen,
        setIsSideBarOpen,
        setIsModalOpen,
        openModal,
        openSideBar,
        closeModal,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

// const GlobalContext = createContext();

// export const useGlobalContext = () => useContext(GlobalContext);

// const AppContext = ({ children }) => {
//   const [isSideBarOpen, setIsSideBarOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//     console.log("Modal open");
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     console.log("Modal closed");
//   };

//   const openSideBar = () => {
//     setIsSideBarOpen(true);
//     console.log("SB open");
//   };

//   const closeSideBar = () => {
//     setIsSideBarOpen(false);
//     console.log("SB closed");
//   };

//   return (
//     <GlobalContext.Provider
//       value={{
//         isSideBarOpen,
//         isModalOpen,
//         setIsSideBarOpen,
//         setIsModalOpen,
//         openModal,
//         openSideBar,
//         closeModal,
//         closeSideBar,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };
// export default AppContext;
