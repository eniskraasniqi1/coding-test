import React from "react";

import styles from "./modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  close?: () => void;
}

const Modal = ({ children, show, close }: ModalProps) => {
  return (
    <>
      {show ? (
        <div className={`${styles.modal} ${show && styles.activeModal}`}>
          <div className={styles.modalOverlay}></div>
          <div className={styles.modalContent}>
            <div
              onClick={() => close && close()}
              className={styles.closeButton}
            >
              X
            </div>
            {children && children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
