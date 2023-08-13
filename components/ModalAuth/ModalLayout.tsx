import React from "react";
import { createPortal } from "react-dom";
import { HiOutlineXMark } from "react-icons/hi2";

interface IModalLayout {
  show: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const ModalLayout: React.FC<IModalLayout> = ({ onClose, show, children }) => {
  const [portal, setPortal] = React.useState<HTMLElement | null>();
  const onCloseModal = () => {
    onClose(false);
  };

  React.useEffect(() => {
    setPortal(document.getElementById("portal"));
  }, []);

  return (
    <>
      {show &&
        createPortal(
          <div className='coating'>
            <div className='back_coating' onClick={onCloseModal}></div>
            <div className='drawer'>
              <a
                onClick={onCloseModal}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  fontSize: "18px",
                }}
              >
                <HiOutlineXMark />
              </a>
              {children}
            </div>
          </div>,
          portal!
        )}
    </>
  );
};

export default ModalLayout;
