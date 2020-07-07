import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import CityServiceData from "../../services/CityService";
import "w3-css/3/w3.css";
import img from "../../assets/img/ddk.png";
import img1 from "../../assets/img/atfu.png";
function Operator(props) {
  const [opera, setOperator] = React.useState([]);
  const handdleShow = (e) => {
    e.preventDefault();
    CityServiceData.findOperatorByCity(props.id)
      .then((response) => {
        setOperator(response.data);
        const oper = response.data;
        console.log(oper);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="col-md-8 container ">
        <div className="w3-card w3-round w3-white w3-center w3-margin-bottom cus-h ">
          <div className="w3-container ">
            <p className="">Operator:</p>
            <div className="row">
              <div className="col bg-warning mr-1">
                Public
                <div className="row">
                  <div className="col">
                    <img src={img} alt="DDK" width="100%" />
                  </div>
                  <div className="col">
                    <div className="btn btn-outline-secondary mt-5 mr-5">
                      <a
                        className="ddk"
                        href="http://demdikk.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        More info
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col bg-info">
                Private
                <div className="row">
                  <div className="col">
                    <img src={img1} alt="DDK" width="75%" className="mb-0" />
                  </div>
                  <div className="col">
                    <div className="btn btn-warning mt-5 mr-5">
                      <a
                        className="ddk"
                        href="http://aftu-senegal.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        More info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<img src={img2} alt="Forest" style={{ width: "200px" }} />*/}
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
export default Operator;
