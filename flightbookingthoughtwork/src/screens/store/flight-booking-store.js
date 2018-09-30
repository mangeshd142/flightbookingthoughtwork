import _ from 'lodash';

import MicroEvent from '../../library/microevent/MicroEvent.js';
import MainViewProps from './model/main-view-props';
import AppData from'./model/main-view-app-data';


let TreeViewStore = (function () {

    let oComponentProps = MainViewProps;

    let triggerChange = function () {
        TreeViewStore.trigger('change');
    };

    let _handleAllContentPostClicked = function (iPostId) {
        let aData = oComponentProps.getPostData();
        aData.push(
            {
                id: "a-119",
                companyCode: "indigo",
                name: "Indigo",
                price: 9000.00,
                date: "12/10/2018",
                deptTime: "1539306951000",
                arriveTime: "1539313551000",
                from: "Delhi",
                to: "Pune",
                img: "",
            }
        );
        triggerChange();
    };

    const _handleSearchButtonClicked = function (oSchedule) {
        oSchedule = oSchedule.target;
        let aData = oComponentProps.getPostData();
        let aDepartFlights = [];
        let aReturnFlights = [];
        _.forEach(aData, function (oFlight) {
            if(oFlight.from.toLowerCase() == oSchedule.originCity.toLowerCase()
            && (oFlight.to.toLowerCase() == oSchedule.destinationCity.toLowerCase())
                &&(Number.parseInt(oFlight.deptTime) >= Date.parse(oSchedule.departDate.startOf('day')))
                &&(Number.parseInt(oFlight.deptTime) <= Date.parse(oSchedule.departDate.endOf('day')))
            ) {
                aDepartFlights.push(oFlight)
            }

            if(oFlight.from.toLowerCase() == oSchedule.destinationCity.toLowerCase()
                && (oFlight.to.toLowerCase() == oSchedule.originCity.toLowerCase())
                &&(Number.parseInt(oFlight.deptTime) >= Date.parse(oSchedule.returnDate.startOf('day')))
                &&(Number.parseInt(oFlight.deptTime) <= Date.parse(oSchedule.returnDate.endOf('day')))
            ) {
                aReturnFlights.push(oFlight)
            }
        });


        oComponentProps.setDepartFlights(aDepartFlights);
        oComponentProps.setReturnFlights(aReturnFlights);
        triggerChange();

    };

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
        },

        handleAllContentPostClicked: function (iPostId) {
            _handleAllContentPostClicked(iPostId);
        },

        handleSearchButtonClicked: function (oSchedule) {
            _handleSearchButtonClicked(oSchedule);
        }

    }
})();

MicroEvent.mixin(TreeViewStore);

export default TreeViewStore;