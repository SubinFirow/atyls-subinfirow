import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginWrapper from "../layouts/loginWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <LoginWrapper>
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="w-8 h-8 text-gray-100 rounded-full bg-black"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div>{children}</div>
          </LoginWrapper>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
