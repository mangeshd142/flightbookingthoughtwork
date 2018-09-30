let TreeViewProps = (function () {
    /**********************Variable Declaration**************************/
    let aPostData = [];
    let bFlag = false;
    let iViewId;
    let departFlights;
    let returnFlights;
    /**********************All Getter and Setter*************************/
    return {
        getPostData: function () {
            return aPostData;
        },

        setPostData: function (_oData) {
            aPostData = _oData;
        },
        getFlag: function () {
            return bFlag;
        },

        setFlag: function (_bFlag) {
            bFlag = _bFlag;
        },

        getViewId: function () {
            return iViewId;
        },

        setViewId: function (_iViewId) {
            iViewId = _iViewId;
        },

        getDepartFlights: function () {
            return departFlights;
        },

        setDepartFlights: function (_departFlights) {
            departFlights = _departFlights;
        },

        getReturnFlights: function () {
            return returnFlights;
        },

        setReturnFlights: function (_returnFlights) {
            returnFlights = _returnFlights;
        }

    }
})();

export default TreeViewProps;