import {
  FormControl,
  FormGroup,
  InputLabel,
  Typography,
  Input,
  styled,
  Button,
  Box,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { MyData } from "../contextapi/MyContext";

// import { useDispatch, useSelector } from "react-redux";
// import { todoApiData } from "../reduxtoolkit/ApiData";
import { useNavigate } from "react-router-dom";

const StyledFormGroup = styled(FormGroup)(({ theme }) => ({
  padding: theme.spacing(7),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "30%",
  boxShadow: "0px 0px 8px rgba(0,0,0,0.5 )",
  marginTop: "30px",
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  minWidth: "100%",
  cursor: "pointer",
}));

function EntryForm() {
  const { postdata, setPostData, handlePostData } = useContext(MyData);
  // const dispatch = useDispatch();
  // const todoData = useSelector((state) => state.counter.TodoData);
  // const [postdata, setPostData] = useState({});
  const navigate = useNavigate();
  // const handleSubmit = () => {
  //   dispatch(todoApiData(postdata));
  //   navigate("/");
  // };

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <StyledFormGroup>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <Typography variant="h4">Work Todo </Typography>
          </div>
          <StyledFormControl>
            <InputLabel>First Name</InputLabel>
            <Input
              onChange={(e) =>
                setPostData({ ...postdata, fristname: e.target.value })
              }
            />
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel>Last Name</InputLabel>
            <Input
              onChange={(e) =>
                setPostData({ ...postdata, lastname: e.target.value })
              }
            />
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel>Email</InputLabel>
            <Input
              onChange={(e) =>
                setPostData({ ...postdata, email: e.target.value })
              }
            />
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel>Department</InputLabel>
            <Input
              onChange={(e) =>
                setPostData({ ...postdata, department: e.target.value })
              }
            />
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel>Salary</InputLabel>
            <Input
              onChange={(e) =>
                setPostData({ ...postdata, salary: e.target.value })
              }
            />
          </StyledFormControl>
          <Box>
            <Button
              onClick={() => {
                handlePostData();
                navigate("/");
              }}
              variant="outlined"
            >
              Submit
            </Button>
            <Button sx={{ marginLeft: "10px" }} variant="outlined">
              Cancle
            </Button>
          </Box>
        </StyledFormGroup>
      </Box>
    </>
  );
}

export default EntryForm;
