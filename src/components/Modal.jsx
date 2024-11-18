import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <section className="modal-container">
        <h3>Modal Content</h3>
        <button type="button" onClick={closeModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </section>
    </div>
  );
};
export default Modal;
