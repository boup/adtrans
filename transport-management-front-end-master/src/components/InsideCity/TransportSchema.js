import React from "react";
import ReactToPdf from "react-to-pdf";
import img from "../../assets/img/schema.png";

function TransportSchema() {
  const ref = React.createRef();
  return (
    <>
      <div className="col-md-6 ">
        <div className="w3-card w3-round w3-white w3-center w3-margin-bottom cus-h">
          <div className="w3-container " ref={ref}>
            <p>City Travel Schema:</p>

            <img
              className="mb-0"
              src={img}
              alt="Forest"
              style={{ width: "100%", height: "50vh" }}
            />
          </div>
          <ReactToPdf targetRef={ref} filename="Transport_Schema.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Download</button>}
          </ReactToPdf>
        </div>
      </div>

      <br />
    </>
  );
}

export default TransportSchema;
