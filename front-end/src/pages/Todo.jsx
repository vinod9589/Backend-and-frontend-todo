import { badgeClasses } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import ListIcon from "@mui/icons-material/List";
import AddTaskIcon from "@mui/icons-material/AddTask";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { TextField } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Todo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate("");
  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div className="text-center">
                <h3>Create Task</h3>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
                <TextField
                  id="filled-multiline-flexible"
                  label="Discription"
                  multiline
                  maxRows={4}
                  variant="outlined"
                />
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>

      {/* ----------------container-fluid---------------------- */}
      <div className="container-fluid text-center">
        <div>
          <h2>Todo</h2>
        </div>
        <div className="container card">
          <div className="text-start ">
            <IconButton
              onClick={handleOpen}
              className="bg-primary"
              color="white"
              aria-label="add to shopping cart"
            >
              <AddIcon className="text-white fs-4" />
            </IconButton>
          </div>
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-md-3 shadow">
              <div className="d-flex justify-content-center align-content-center align-items-center border border-primary">
                <ListIcon className="text-primary" />
                <span className="px-2 fs-4">Todo</span>
              </div>
            </div>
            <div className="col-md-3 shadow">
              <div className="d-flex justify-content-center align-content-center align-items-center border border-primary">
                <CloudSyncIcon className="text-danger" />
                <span className="px-2 fs-4">In Progress</span>
              </div>
            </div>
            <div className="col-md-3 shadow">
              <div className="d-flex justify-content-center align-content-center align-items-center border border-primary">
                <AddTaskIcon className="text-success" />
                <span className="px-2 fs-4">Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
