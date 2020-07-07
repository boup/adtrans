import React from "react";
import MyCarouse from "./Carousel1";
import CityServiceData from "../../services/CityService";
import img from "../../assets/img/tick.jpg";
import tick1 from "../../assets/img/tick1.jpg";
import tick2 from "../../assets/img/tick2.jpg";
import tick3 from "../../assets/img/tick3.jpg";
import "w3-css/3/w3.css";
function Ticket(props) {
  const [ticket, setTicket] = React.useState([]);
  const [show, setShow] = React.useState(true);
  const ticketDetail = (e) => {
    setShow(!show);
    e.preventDefault();
    CityServiceData.findTicketByCity(props.id)
      .then((response) => {
        setTicket(response.data);
        const ticket = response.data;
        console.log(ticket);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const hide = () => {
    setShow(!show);
  };
  return (
    <>
      {/** right column*/}
      <div className="col-md-6">
        <div className="w3-container w3-card w3-white  w3-margin-bottom m3 cus-h">
          <div className="w3-container">
            <p>Ticket:</p>
            why to buy?
            <div className="row">
              <div className="col-md-6 text-center text-info my-auto">
                {" "}
                The ticket can be purchased from the receiver inside the bus by
                cash
              </div>
              <div className="col-md-6">
                {" "}
                <img
                  src={img}
                  alt="Forest"
                  style={{ width: "300px", height: "150px" }}
                  className="mb-0"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={tick1}
                  alt="Forest"
                  style={{ width: "200px", height: "100px" }}
                  className="mb-0"
                />
              </div>
              <div className="col-md-4 ">
                <img
                  src={tick2}
                  alt="Forest"
                  style={{ width: "200px", height: "100px" }}
                  className="mb-0"
                />
              </div>
              <div className="col-md-4 ">
                <img
                  src={tick3}
                  alt="Forest"
                  style={{ width: "200px", height: "100px" }}
                  className="mb-0 "
                />
              </div>
            </div>
            <br />
            <>
              {show ? (
                <>
                  <div className="btn btn-danger" onClick={ticketDetail}>
                    view less
                  </div>
                  <br />
                  {ticket.map((item, index) => (
                    <div className="row" key={index}>
                      <div className="col-md-4">{item.duration}</div>
                      <div className="col-md-4">XOF{item.price}</div>
                      <div className="col-md-4">{item.typeofTicket}</div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="btn btn-success" onClick={hide}>
                  view more
                </div>
              )}
            </>
            {/*<img src={tick1} alt="Forest" style={{ width: "100%" }} />*/}
          </div>
        </div>
        <br />
      </div>
      {/** End of the right column*/}
    </>
  );
}

export default Ticket;
