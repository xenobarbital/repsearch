import {GET_REP_DATA, GET_LISTING, CHANGE_PAGE} from './ActionTypes';
import {combineReducers} from 'redux';

const getRepData = (state = {}, action) => {
  switch (action.type) {
    case GET_REP_DATA:
      return action.repData;
    default:
      return state;
  }
}

const getListing = (state = [], action) => {
  switch (action.type) {
    case GET_LISTING:
      return action.listing;
    default:
      return state;
  }
}

const changePage = (state = 1, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.pageNumber;
    default:
      return state;
  }
}

const repSearch = combineReducers({
  repData: getRepData,
  listing: getListing,
  currentPage: changePage
});

export default repSearch;
