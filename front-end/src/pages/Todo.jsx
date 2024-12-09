import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ListIcon from "@mui/icons-material/List";
import AddTaskIcon from "@mui/icons-material/AddTask";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 500,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

function Todo() {
  const [open, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState({ todo: [], inProgress: [], completed: [] });
  const [editingTask, setEditingTask] = useState(null);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTaskTitle("");
    setTaskDescription("");
    setEditingTask(null);
  };

  // const handleCreateTask = () => {
  //   const newTask = {
  //     title: taskTitle,
  //     description: taskDescription,
  //     id: Date.now(),
  //   };
  //   if (editingTask) {
     
  //     setTasks((prevTasks) => ({
  //       ...prevTasks,
  //       todo: prevTasks.todo.map((task) =>
  //         task.id === editingTask.id ? newTask : task
  //       ),
  //     }));
  //   } else {
  
  //     setTasks((prevTasks) => ({
  //       ...prevTasks,
  //       todo: [...prevTasks.todo, newTask],
  //     }));
  //   }
  //   handleClose();
  // };

  // const handleEditTask = (task) => {
  //   setEditingTask(task);
  //   setTaskTitle(task.title);
  //   setTaskDescription(task.description);
  //   handleOpen();
  // };

  // const handleDeleteTask = (taskId) => {
  //   setTasks((prevTasks) => ({
  //     ...prevTasks,
  //     todo: prevTasks.todo.filter((task) => task.id !== taskId),
  //   }));
  // };

  return (
    <>
     
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="text-center">
              <h3>{editingTask ? "Edit Task" : "Create Task"}</h3>
              <TextField
                fullWidth
                margin="normal"
                id="task-title"
                label="Task Title"
                variant="outlined"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                id="task-description"
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleCreateTask}
                style={{ marginTop: "16px" }}
              >
                {editingTask ? "Update Task" : "Create Task"}
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>

    
      <div className="container-fluid text-center mt-4">
        <h2>Todo</h2>

        <div className="container card py-4 px-3 mt-3">
          <div className="text-start mb-4">
            <IconButton
              onClick={handleOpen}
              style={{ backgroundColor: "#1976d2", color: "white" }}
              aria-label="add task"
            >
              <AddIcon />
            </IconButton>
          </div>

          <div className="row d-flex justify-content-around ">
           
            <div className="col-md-3 col-sm-6 shadow p-3 mb-3">
              <div className="d-flex justify-content-center align-items-center border border-primary py-2">
                <ListIcon className="text-primary" fontSize="large" />
                <span className="px-2 fs-5">Todo</span>
              </div>
              {tasks.todo.length === 0 ? (
                <p>No tasks available</p>
              ) : (
                tasks.todo.map((task) => (
                  <Card key={task.id} style={{ marginTop: "10px" }}>
                    <CardContent>
                      <Typography variant="h6">{task.title}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {task.description}
                      </Typography>
                      <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>
                        <IconButton onClick={() => handleEditTask(task)} color="primary">
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteTask(task.id)} color="secondary">
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            
            <div className="col-md-3 col-sm-6 shadow p-3 mb-3">
              <div className="d-flex justify-content-center align-items-center border border-primary py-2">
                <CloudSyncIcon className="text-danger" fontSize="large" />
                <span className="px-2 fs-5">In Progress</span>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 shadow p-3 mb-3">
              <div className="d-flex justify-content-center align-items-center border border-primary py-2">
                <AddTaskIcon className="text-success" fontSize="large" />
                <span className="px-2 fs-5">Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
