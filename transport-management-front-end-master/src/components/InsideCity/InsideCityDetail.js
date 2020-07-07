import React from "react";
import { useParams, useHistory } from "react-router-dom";
import CityServiceData from "../../services/CityService";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
//import InsideCity from "./InsideCity/InsideCity";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Line from "./Line";
import Stop from "./Stop";
import Ticket from "./Ticket";
import Operator from "./Operator";
import TransportSchema from "./TransportSchema";
import "w3-css/3/w3.css";
import AOS from "aos";
function InsideCityDetail(props) {
  const [city, setCity] = React.useState([]);
  const [currentcity, setCurrentCity] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(-1);
  const [line, setLine] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [searchTitle, setSearchTitle] = React.useState("");
  const { id } = useParams();
  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value.toUpperCase();
    setSearchTitle(searchTitle);
  };
  React.useEffect(() => {
    AOS.init({ animation: 2000, delay: 1000 });
  }, []);
  const setActiveCity = (city, index) => {
    setCurrentCity(city);
    setCurrentIndex(index);
  };
  const findLineByCity = (e) => {
    e.preventDefault();
    CityServiceData.findLineByCity(1)
      .then((response) => {
        setLine(response.data);
        const line = response.data;
        console.log(line);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const findByCityName = (e) => {
    e.preventDefault();
    CityServiceData.findByCityName(searchTitle)
      .then((response) => {
        setCity(response.data);
        const city = response.data;
        console.log(city);
      })
      .catch((e) => {
        console.log(e);
      });
    setSearchTitle("");
  };
  return (
    <>
      <Paper
        component="form"
        className=" mx-auto Home d-flex justify-content-between"
        elevation={2}
      >
        <InputBase
          className="input"
          placeholder="Find your City"
          value={searchTitle}
          inputProps={{ "aria-label": "Find you City" }}
          onChange={onChangeSearchTitle}
        />
        <IconButton
          type="submit"
          aria-label="search"
          className=""
          onClick={findByCityName}
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      <div
        className="w3-container w3-content Bg  p-0 "
        data-aos="fade-right"
        style={{ maxWidth: "1400px", marginTop: "90px" }}
      >
        <div className="row m-0 bg">
          {city &&
            city.map((city, index) => (
              <>
                <Line key={index} id={city.id} title={city.cityName} />
                <TransportSchema id={city.id} title={city.cityName} />
                <Stop id={city.id} title={city.cityName} />
                <Ticket id={city.id} title={city.cityName} />
                <Operator id={city.id} title={city.cityName} />
              </>
            ))}
        </div>
      </div>
    </>
  );
}
export default InsideCityDetail;
