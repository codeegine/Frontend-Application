import * as TYPES from '../types';
import axios from 'axios';

import { baseURL } from '../../utils/constants';


export const getProduct = () => async dispatch => {
  const id = 6781;

  dispatch({
    type: TYPES.FETCH_PRODUCT_START
  })

  try {
    const res = await axios.get(`${baseURL}/product/${id}/`, {
      headers: {
        "Content-Type": "application/json"
      },
    });

    dispatch({
      type: TYPES.FETCH_PRODUCT_SUCCESS,
      payload: res.data.data || res.data
    })
  } catch (e) {
    dispatch({
      type: TYPES.FETCH_PRODUCT_FAILURE,
      payload: e.message
    })
  }
}

export const getTrl = () => async dispatch => {

  dispatch({
    type: TYPES.FETCH_TRL_START
  })

  try {
    const res = await axios.get(`${baseURL}/trl/`, {
      headers: {
        "Content-Type": "application/json"
      },
    });

    dispatch({
      type: TYPES.FETCH_TRL_SUCCESS,
      payload: res.data.data || res.data
    })
  } catch(e) {
    dispatch({
      type: TYPES.FETCH_TRL_FAILURE,
      payload: e.message
    })
  }
}
