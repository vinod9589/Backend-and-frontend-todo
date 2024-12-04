import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography, TextField, Button } from "@mui/material";
import DeleteSweepSharpIcon from "@mui/icons-material/DeleteSweepSharp";
import EditLocationAltSharpIcon from "@mui/icons-material/EditLocationAltSharp";
import PreviewSharpIcon from "@mui/icons-material/PreviewSharp";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserTodo, handleUpdateData } from "../reduxtoolkit/TodoSlice";
import axios from "axios";
import { MyData } from "../contextapi/MyContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const {
    list,
    handleGetData,
    handleDeleteData,
    handleUpdateData,
    setId,
    setPostData,
    postdata,
    id,
  } = React.useContext(MyData);
  React.useEffect(() => {
    handleGetData();
  }, []);
  // const dispatch = useDispatch();
  // const list = useSelector((state) => state.counter.users);
  // console.log(list);
  const [editIndex, setEditIndex] = React.useState(null);
  // const [postData, setPostData] = React.useState({
  //   fristname: "",
  //   lastname: "",
  //   email: "",
  //   department: "",
  //   salary: "",
  // });
  console.log(list);

  // const handleDelete = (index) => {
  //   dispatch(deleteUserTodo({ index }));
  // };

  const handleEdit = (todo, index) => {
    console.log("Editing:", todo, "Index:", index);
    setId(todo._id);
    setEditIndex(index);
    setPostData({
      fristname: todo.fristname || "",
      lastname: todo.lastname || "",
      email: todo.email || "",
      department: todo.department || "",
      salary: todo.salary || "",
    });
  };

  const handleSave = () => {
    console.log(id, postdata);
    if (!id) {
      console.error("Cannot save without an ID");
      return;
    }
    handleUpdateData();
    setEditIndex(null);
  };

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4">All Data</Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>id</StyledTableCell>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">Email&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Department&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Salary&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Action&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((todo, index) =>
              editIndex === index ? (
                <StyledTableRow key={todo._id}>
                  <StyledTableCell align="left">{index + 1}</StyledTableCell>
                  <StyledTableCell>
                    <TextField
                      value={postdata.fristname}
                      onChange={(e) =>
                        setPostData({ ...postdata, fristname: e.target.value })
                      }
                      placeholder="First Name"
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TextField
                      value={postdata.lastname}
                      onChange={(e) =>
                        setPostData({ ...postdata, lastname: e.target.value })
                      }
                      placeholder="Last Name"
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TextField
                      value={postdata.email}
                      onChange={(e) =>
                        setPostData({ ...postdata, email: e.target.value })
                      }
                      placeholder="Email"
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TextField
                      value={postdata.department}
                      onChange={(e) =>
                        setPostData({ ...postdata, department: e.target.value })
                      }
                      placeholder="Department"
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TextField
                      value={postdata.salary}
                      onChange={(e) =>
                        setPostData({ ...postdata, salary: e.target.value })
                      }
                      placeholder="Salary"
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button onClick={handleSave} variant="outlined">
                      Save
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ) : (
                <StyledTableRow key={todo._id}>
                  <StyledTableCell align="left">{index + 1}</StyledTableCell>
                  <StyledTableCell>{todo.fristname}</StyledTableCell>
                  <StyledTableCell align="right">
                    {todo.lastname}
                  </StyledTableCell>
                  <StyledTableCell align="right">{todo.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    {todo.department}
                  </StyledTableCell>
                  <StyledTableCell align="right">{todo.salary}</StyledTableCell>
                  <StyledTableCell align="center">
                    <PreviewSharpIcon style={{ color: "#b66576" }} />
                    <DeleteSweepSharpIcon
                      style={{ color: "#6c5a79", cursor: "pointer" }}
                      onClick={() => handleDeleteData(todo._id)}
                    />
                    <EditLocationAltSharpIcon
                      style={{ color: "#365071", cursor: "pointer" }}
                      onClick={() => handleEdit(todo, index)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              )
            )}

            <StyledTableRow>
              <StyledTableCell component="th" scope="row"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell sx={{ fontWeight: "bold" }} align="right">
                Total:-
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: "bold" }} align="right">
                Rs:-{list.map((i) => +i.salary).reduce((a, b) => a + b, 0)}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
