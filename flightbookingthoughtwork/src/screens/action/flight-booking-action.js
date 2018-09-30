import eventBus from'../../library/eventdispatcher/EventDispatcher.js';
import MainViewStore from '../store/flight-booking-store';
import {Events} from  '../view/filter-view'

let TreeViewAction = (function () {


  let handleAllContentPostClicked = function (oContext, iPostId) {
    MainViewStore.handleAllContentPostClicked(iPostId);
  };
  let handleSearchButtonClicked = function (oSchedule) {
    MainViewStore.handleSearchButtonClicked(oSchedule);
  };

  return {
    //Register Event Listener
    registerEvent: function () {
      eventBus.addEventListener(Events.HANDLE_FILTER_VIEW_SEARCH_CLICKED, handleSearchButtonClicked);
    },

    //De-Register Event Listener
    deRegisterEvent: function () {
      eventBus.removeEventListener(Events.HANDLE_FILTER_VIEW_SEARCH_CLICKED, handleAllContentPostClicked);
    }
  }
})();

export default TreeViewAction;