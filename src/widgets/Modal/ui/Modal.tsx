import { FC, ReactNode } from 'react';
import cls from './Modal.module.scss'
import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    className: string,
    children: ReactNode
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        isOpen,
        onClose,
        className,
        children 
    } = props

    const handleOverlay = (e: any) => {
      if(e.target === e.currentTarget) {
        onClose()
      }
    }

    if (!isOpen) return null;
  
    return (
      <div className={cls.modal_overlay} onClick={handleOverlay}>
        <div className={classNames(cls.modal, {}, [className])}>
          {/* <Button className={cls.modal_close_button} onClick={onClose}>Close</Button> */}
          <div className={cls.modal_content}>
            {children}
          </div>
        </div>
      </div>
    );
};
