import APIService from "./APIService";

const getAffair = () => {
  return APIService.get(`/???`);
};

const addAffair = (affair) => {
  return APIService.post(`/???`, affair);
};

const updateAffair = (affair) => {
  return APIService.put(`/???/${affair.id}`, affair);
};

export default {
  getAffair,
  addAffair,
  updateAffair,
};
