import React from "react";
import url from "../http/Http";
import axios from "axios";
const ApiContext = React.createContext();

function ApiProvidor() {
  const [cityData, setCityData] = React.useState([]);
  const [lineData, setLineData] = React.useState([]);
  const [cityData, setCityData] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${url}/city/?cityName=${cityName}`).then((response) => {
      const cityData = response.data;
      setCityData(cityData);
      console.log(cityData);
    });
  }, []);
  const findByCityName = (cityName) => {
    return http.get(`/city?cityName=${cityName}`);
  };
  return (
    <ApiContext.Provider
      value={{ cityData, findByCityName }}
    ></ApiContext.Provider>
  );
}

export default { ApiContext, ApiProvidor };
