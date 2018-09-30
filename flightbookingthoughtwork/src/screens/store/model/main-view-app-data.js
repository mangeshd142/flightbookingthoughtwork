import MockDataForView from '../../tack/mock-data-for-main-view';
import MockDataFarPosts from '../../tack/mock-data-for-flight-booking';

let TreeViewAppData = (function () {

  return {
    getViewData: function () {
      return MockDataForView;
    },
    getMockDataForPosts: function(){
      return MockDataFarPosts;
    },
    toJSON: function () {
      return {
        treeViewData: MockDataForView
      };
    }

  }

})();

export default TreeViewAppData;