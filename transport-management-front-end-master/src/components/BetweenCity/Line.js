import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
import CityServiceData from "../../services/CityService";
import Tables from "./Table";
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
function Line(props) {
  const [line, setLine] = React.useState([]);
  const classes = useStyles();
  const handleChange = (e) => {
    e.preventDefault();
    CityServiceData.findTransBusByCity(props.id)
      .then((response) => {
        setLine(response.data);
        const line = response.data;
        console.log(line);
      })
      .catch((e) => {
        console.log(e);
      });
    //setValue(newValue);
  };
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="text-center h2 text-info">From Dakar</div>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.1753808484819!2d-17.458770633928115!3d14.723552239131518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172b5cff5e381%3A0x15c91e7b2ce1cf53!2sSenegal%20demdikk!5e0!3m2!1sen!2spl!4v1593713948139!5m2!1sen!2spl"
          width="600"
          height="900"
          frameborder="0"
          style={{ border: "0", height: "900", width: "100%" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <br />
      </div>
      <div className="container">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <datagrid>Destination</datagrid>
                </StyledTableCell>
                <StyledTableCell align="right">Information</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {line.map((line, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {line.description}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {line.destination}
                  </StyledTableCell>
                  <StyledTableCell align="right">{line.link}</StyledTableCell>
                  <StyledTableCell align="right">{line.price}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Button onClick={handleChange}>Show Information</Button>
    </>
  );
}

export default Line;
