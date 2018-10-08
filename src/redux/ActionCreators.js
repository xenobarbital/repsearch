import {GET_REP_DATA, GET_LISTING, CHANGE_PAGE} from './ActionTypes';

export default class ActionCreactors {
  static getRepData() {
    return {
      type: GET_REP_DATA
    }
  }

  static getListing() {
    return {
      type: GET_LISTING
    }
  }

  static changePage() {
    return {
      type: CHANGE_PAGE
    }
  }
}
