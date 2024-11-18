import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import logo from "../logo.svg";

import { links, social } from "../data";

const SideBar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContext();

  return (
    <aside className={isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button
          type="button"
          onClick={closeSideBar}
          className="close-sidebar-btn"
        >
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default SideBar;
