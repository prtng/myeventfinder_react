import { GET_EVENTS, DELETE_EVENT, ADD_EVENT } from './types';
import axios from 'axios';

export const getEvents = () => async (dispatch) => {
  const res = await axios.get(
    'https://my-json-server.typicode.com/prtng/eventfinderjson/events'
  );
  dispatch({
    type: GET_EVENTS,
    payload: res.data,
  });
};

export const deleteEvent = (id) => async (dispatch) => {
  await axios.delete(
    `https://my-json-server.typicode.com/prtng/eventfinderjson/events/${id}`
  );
  dispatch({
    type: DELETE_EVENT,
    payload: id,
  });
};

export const addEvent = (event) => async (dispatch) => {
  /* This try-catch block is not necessary. Since we are using mock rest api, 
     if we try to delete any event other than those present in the JSON we will 
     get 404 error.
  */
  const response = await axios.post(
    'https://my-json-server.typicode.com/prtng/eventfinderjson/events',
    event
  );
  dispatch({
    type: ADD_EVENT,
    payload: response.data,
  });
};
