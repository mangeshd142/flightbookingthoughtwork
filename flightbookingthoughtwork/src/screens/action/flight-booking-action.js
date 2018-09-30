import eventBus from'../../library/eventdispatcher/EventDispatcher.js';
import MainViewStore from '../store/flight-booking-store';
import {Events} from  '../view/filter-view'

let TreeViewAction = (function () {


  let handleAllContentPostClicked = function (oContext, iPostId) {
    MainViewStore.handleAllContentPostClicked(iPostId);
  };
  let handleHeaderLogoClicked = function () {
    MainViewStore.handleHeaderLogoClicked();
  };

  return {
    //Register Event Listener
    registerEvent: function () {
      eventBus.addEventListener(Events.HANDLE_ALL_CONTENT_POST_CLICKED, handleAllContentPostClicked);
    },

    //De-Register Event Listener
    deRegisterEvent: function () {
      eventBus.removeEventListener(Events.HANDLE_ALL_CONTENT_POST_CLICKED, handleAllContentPostClicked);
    }
  }
})();

export default TreeViewAction;