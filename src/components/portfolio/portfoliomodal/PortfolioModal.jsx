import { Modal, Box, Typography } from "@material-ui/core";
import React from "react";

function PortfolioModal( item , open, setOpen) {
  console.log(title);
  console.log(open);
  const {title} = item;

  return (
    <Modal
      open={open}
      onClose={setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {title}
    </Modal>
  );
}

export default PortfolioModal;
