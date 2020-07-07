import React from "react";
import Line from "./Line";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import CityServiceData from "../../services/CityService";
function BetweenCityDetail() {
  const [city, setCity] = React.useState([]);
  const [searchTitle, setSearchTitle] = React.useState("");
  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value.toUpperCase();
    setSearchTitle(searchTitle);
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
      <div>
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
        <br />
        <div className="h-w container">
          {city && city.map((city, index) => <Line key={index} id={city.id} />)}
        </div>
      </div>
    </>
  );
}

export default BetweenCityDetail;
