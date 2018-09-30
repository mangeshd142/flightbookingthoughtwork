import React from 'react';
import _ from 'lodash';
import {FilterView} from '../view/filter-view';
import {FlightDetailView} from '../view/flight-detail-view';

class FlightBookingController extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            appData: this.getStore().getData().appData,
            componentProps: this.getStore().getData().componentProps,
        }
    }

    //@Bind: Store with state
    componentDidMount() {
        this.getStore().bind('change', this.handleTreeViewStateChanged);
        this.props.action.registerEvent();
    }

    componentDidUpdate() {
    }

    componentWillMount() {
        var aMockDataForPost = this.state.appData.getMockDataForPosts();
        this.getStore().fetchGlobalData(aMockDataForPost);
    }

    //@UnBind: store with state
    componentWillUnmount() {
        this.getStore().unbind('change', this.handleTreeViewStateChanged);
        this.props.action.deRegisterEvent();
    }

    //@set: state
    handleTreeViewStateChanged = () => {

        var changedState = {
            appData: this.getStore().getData().appData,
            componentProps: this.getStore().getData().componentProps
        };

        this.setState(changedState);
    }

    getStore = () => {
        return this.props.store;
    }

    getFilteredFlightData = ()=>{
        let oComponentProps = this.state.componentProps;
        let aDepartFlights = oComponentProps.getDepartFlights();
        let aReturnFlights = oComponentProps.getReturnFlights();
        let aFilteredFlights = [];

        _.forEach(aDepartFlights, function (oDepartFlight) {
            let oReturnFlight = _.find(aReturnFlights, {companyCode: oDepartFlight.companyCode});
            if(!_.isEmpty(oReturnFlight)){
                aFilteredFlights.push(
                    {
                        departFlight: oDepartFlight,
                        returnFlight: oReturnFlight
                    }
                )
            }
        });

        return aFilteredFlights;

    }

    render() {
        let aFlights = this.getFilteredFlightData();

        return (
            <div className="flightSearchEngineContainer">
                <div className="header">
                    <div className="headerText">
                        Flight Search Engine
                    </div>
                </div>
                <div className="searchContainer">
                    <FilterView/>
                    <FlightDetailView flights = {aFlights}/>
                </div>

            </div>
        );
    }
}

export default FlightBookingController;