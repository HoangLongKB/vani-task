import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
} from 'react';
import ReactPortal from './react-portal';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
};

const ConfirmationModal = ({
  children,
  isOpen,
  handleClose,
  handleConfirm,
}: Props) => {
  const [isCloseAnimation, setIsCloseAnimation] = React.useState(false);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleWithAnimation = (handleCallback: () => void) => {
    setIsCloseAnimation(true);
    setTimeout(() => {
      handleCallback();
      setIsCloseAnimation(false);
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="fixed inset-0 bg-black/40 flex flex-col items-center overflow-hidden z-[999]">
        {Children.map(children, (child) => {
          if (!isValidElement(child)) return null;

          return cloneElement(child, {
            ...child.props,
            isCloseAnimation,
            handleClose: () => {handleWithAnimation(handleClose)},
            handleConfirm: () => {handleWithAnimation(handleConfirm)},
          });
        })}
      </div>
    </ReactPortal>
  );
};

export default ConfirmationModal;
