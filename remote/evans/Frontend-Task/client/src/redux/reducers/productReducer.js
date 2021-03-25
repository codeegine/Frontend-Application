import * as TYPES from '../types';

const INITIAL_STATE = {
  isLoading: false,
  errorMessage: '',
  product: {},
  trl: []
};

export function productReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TYPES.FETCH_PRODUCT_START:
    case TYPES.FETCH_TRL_START:
      return {
        ...state,
        errorMessage: '',
        isLoading: true
      }
    case TYPES.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: action.payload
      }
    case TYPES.FETCH_TRL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        trl: action.payload
      }
    case TYPES.FETCH_PRODUCT_FAILURE:
    case TYPES.FETCH_TRL_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default productReducer;
