import { Modal, ModalProps } from "antd";
import React, { useState } from "react";

interface IProps extends ModalProps {
  open?: boolean;
  data?: any;
  onDismiss?: () => void;
  width?: string | number;
  children: React.ReactNode;
  title?: string;
  center: boolean;
}

const ModalComponent1 = ({
  open,
  onDismiss,
  width,
  children,
  title,
  center,
  data,
}: IProps) => {
  return (
    <>
      <Modal
        title={title}
        open={open}
        centered={center}
        width={width}
        onCancel={onDismiss}
        footer={null}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalComponent1;
