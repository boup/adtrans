import http from "../http/Http";
const findByCityName = (cityName) => {
  return http.get(`/city?cityName=${cityName}`);
};
const getAll = () => {
  return http.get("/city");
};
const findLineByCity = (id) => {
  return http.get(`/city/${id}/line`);
};
const findTicketByCity = (id) => {
  return http.get(`/city/${id}/ticket`);
};
const findOperatorByCity = (id) => {
  return http.get(`/city/${id}/operators`);
};
const findTransBusByCity = (id) => {
  return http.get(`/city/${id}/travelBus`);
};
const findTransPlaneByCity = (id) => {
  return http.get(`/city/${id}/travelPlane`);
};
export default {
  findByCityName,
  getAll,
  findLineByCity,
  findTicketByCity,
  findOperatorByCity,
  findTransBusByCity,
  findTransPlaneByCity,
};
