import { useGlobalContext } from "../context";
import { FaBars } from "react-icons/fa6";

const Home = () => {
  const { openModal, openSideBar, isSideBarOpen } = useGlobalContext();

  return (
    <main>
      <button type="button" onClick={openSideBar} className="toggle-sidebar">
        <FaBars />
      </button>
      <button
        type="button"
        className={isSideBarOpen ? "hide-button" : "btn show-modal"}
        onClick={openModal}
      >
        Open Modal
      </button>
    </main>
  );
};
export default Home;
