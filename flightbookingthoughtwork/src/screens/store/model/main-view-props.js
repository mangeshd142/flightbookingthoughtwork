let TreeViewProps = (function () {
    /**********************Variable Declaration**************************/
    let aPostData = [];
    let departFlights;
    let returnFlights;
    let flightClass = "";
    let departStation = "";
    let destination = "";
    let departDate = null;
    let returnDate = null;
    let isTwoWay = false;
    let refineValue = 20000;
    /**********************All Getter and Setter*************************/
    return {
        getPostData: function () {
            return aPostData;
        },

        setPostData: function (_oData) {
            aPostData = _oData;
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
        },

        getFlightClass: function () {
            return flightClass;
        },

        setFlightClass: function (_flightClass) {
          flightClass = _flightClass;
        },

        getDepartStation: function () {
            return departStation;
        },

        setDepartStation: function (_departStation) {
          departStation = _departStation;
        },

        getDestination: function () {
            return destination;
        },

        setDestination: function (_destination) {
          destination = _destination;
        },

        getDepartDate: function () {
            return departDate;
        },

        setDepartDate: function (_departDate) {
          departDate = _departDate;
        },

        getReturnDate: function () {
            return returnDate;
        },

        setReturnDate: function (_returnDate) {
          returnDate = _returnDate;
        },

        getIsTwoWay: function () {
            return isTwoWay;
        },

        setIsTwoWay: function (_isTwoWay) {
          isTwoWay = _isTwoWay;
        },

        getRefineValue: function () {
            return refineValue;
        },

        setRefineValue: function (_refineValue) {
          refineValue = _refineValue;
        },

    }
})();

export default TreeViewProps;