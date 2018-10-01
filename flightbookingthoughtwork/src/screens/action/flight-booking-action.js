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

  let handleRefineValueChanged = function (iRefineValue) {
    MainViewStore.handleRefineValueChanged(iRefineValue);
  };

  return {
    //Register Event Listener
    registerEvent: function () {
      eventBus.addEventListener(Events.HANDLE_FILTER_VIEW_SEARCH_CLICKED, handleSearchButtonClicked);
      eventBus.addEventListener(Events.HANDLE_FILTER_VIEW_REFINE_VALUE_CHANGED, handleRefineValueChanged);
    },

    //De-Register Event Listener
    deRegisterEvent: function () {
      eventBus.removeEventListener(Events.HANDLE_FILTER_VIEW_SEARCH_CLICKED, handleAllContentPostClicked);
    }
  }
})();

export default TreeViewAction;