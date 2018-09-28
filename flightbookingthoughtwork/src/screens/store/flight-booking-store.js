import _ from 'lodash';

import MicroEvent from '../../library/microevent/MicroEvent.js';
import MainViewProps from './model/main-view-props';
import AppData from'./model/main-view-app-data';


let TreeViewStore = (function () {

  let oComponentProps = MainViewProps;

  let triggerChange = function () {
    TreeViewStore.trigger('change');
  };

  let _getViewData = function () {
    /*return oComponentProps.getData();*/
  };

  let _handleAllContentPostClicked = function(iPostId) {
     let aData = oComponentProps.getPostData();
     aData.push(
         {
             postId: 2,
             imgUrl: 'img/lisbon-acampm1Flickr.jpg',
             title: 'Mangesh3',
             description: 'Magnificently sited on a series of hills running down to the grand Tagus River, Lisbon is one of the world’s most scenic cities.'
         }
     );
    triggerChange();
  };

  let _handleHeaderLogoClicked = function () {
    oComponentProps.setFlag(false);
    triggerChange();
  }
  return {

    getData: function () {
      let data = {
        appData: AppData,
        componentProps: oComponentProps
      };

      return data;
    },

    fetchGlobalData: function (aPostData) {
      oComponentProps.setPostData(aPostData);
      console.log(aPostData);
    },

    getViewData: function () {
      return _getViewData();
    },

    handleAllContentPostClicked: function (iPostId) {
      _handleAllContentPostClicked(iPostId);
    },

    handleHeaderLogoClicked: function () {
      _handleHeaderLogoClicked();
    }
  }
})();

MicroEvent.mixin(TreeViewStore);

export default TreeViewStore;