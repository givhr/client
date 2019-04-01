import axios from 'axios';

export const BASE_URL = 'https://givhr-api.herokuapp.com/api/v1';
//========================================================================================
export const getSurveys = () => {
  axios
    .get(`${BASE_URL}/surveys`)
    .then((data) => {
      console.log('GET SURVEY DATA: ', data);
    })
    .catch((err) => console.log('GET SURVEY ERR >', err));
};
//========================================================================================
export const updateSurvey = (id: number, updates: any) => {
  axios
    .put(`${BASE_URL}/surveys/${id}`, updates)
    .then((data) => {
      console.log('UPDATE SURVEY DATA: ', data);
      // SINGLE SURVEY RESPONSE
    })
    .catch((err) => console.log('UPDATE SURVEY ERR >', err));
};
//========================================================================================
export const createSurvey = (updates) => {
  axios
    .post(`${BASE_URL}/surveys/`, updates)
    .then((data) => {
      console.log('UPDATE SURVEY DATA: ', data);
      // SINGLE SURVEY RESPONSE
    })
    .catch((err) => console.log('UPDATE SURVEY ERR >', err));
};
//========================================================================================
export const getUser = () => {
  axios
    .get(`${BASE_URL}`)
    .then((data) => {
      console.log('GET USER DATA: ', data);
    })
    .catch((err) => console.log('GET USER ERR >', err));
};
//========================================================================================
export const deleteSurvey = () => {
  axios
    .get(`${BASE_URL}`)
    .then((data) => {
      console.log('DELETE SURVEY DATA: ', data);
    })
    .catch((err) => console.log('DELETE SURVEY ERR >', err));
};
//========================================================================================
export const getChannels = async () => {
  const { data } = await axios.get(`${BASE_URL}/channels`);
  return data;
  // .then((data) => {
  //   console.log('GET CHANNELS DATA: ', data);
  // })
  // .catch((err) => console.log('DELETE SURVEY ERR >', err));
};
//========================================================================================
