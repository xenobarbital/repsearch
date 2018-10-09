import {GET_REP_DATA, GET_LISTING, CHANGE_PAGE} from './ActionTypes';

export default class ActionCreators {
  static getRepData(repData) {
    return {
      type: GET_REP_DATA,
      repData
    }
  }

  static getListing(listing) {
    return {
      type: GET_LISTING,
      listing
    }
  }

  static changePage(pageNumber) {
    return {
      type: CHANGE_PAGE,
      pageNumber
    }
  }
}
