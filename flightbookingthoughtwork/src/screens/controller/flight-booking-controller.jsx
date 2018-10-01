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
        let iRefineValue = oComponentProps.getRefineValue();

        _.forEach(aDepartFlights, function (oDepartFlight) {

            let oReturnFlight = oComponentProps.getIsTwoWay()? _.find(aReturnFlights, {companyCode: oDepartFlight.companyCode}) : {};
            let flightClass = oComponentProps.getFlightClass();
          let iPrice;
          if(flightClass == 'firstClass'){
            iPrice = oDepartFlight.firstClassPrice;
          }
          else if(flightClass == 'business') {
            iPrice = oDepartFlight.businessPrice;
          }
          else {
            iPrice = oDepartFlight.economyPrice;
          }

          if(iPrice<=iRefineValue){
            if(!oComponentProps.getIsTwoWay()){


              aFilteredFlights.push(
                  {
                    departFlight: oDepartFlight
                  }
              )
            } else if(!_.isEmpty(oReturnFlight)) {
              aFilteredFlights.push(
                  {
                    departFlight: oDepartFlight,
                    returnFlight: oReturnFlight
                  }
              )
            }
          }
        });

        return aFilteredFlights;

    }

    render() {
        let aFlights = this.getFilteredFlightData();
        let oComponentProps = this.state.componentProps;
        let flightClass = oComponentProps.getFlightClass();

        let departStation = oComponentProps.getDepartStation();
        let destination = oComponentProps.getDestination();
        let departDate = oComponentProps.getDepartDate();
        let returnDate = oComponentProps.getReturnDate();
        let isTwoWay = oComponentProps.getIsTwoWay();
        let iRefineValue = oComponentProps.getRefineValue();


      return (
            <div className="flightSearchEngineContainer">
                <div className="header">
                    <div className="headerText">
                        Flight Search Engine
                    </div>
                </div>
                <div className="searchContainer">
                    <FilterView refineValue = {iRefineValue}/>
                    <FlightDetailView
                        flights = {aFlights}
                        departStation={departStation}
                        destination={destination}
                        departDate={departDate}
                        returnDate={returnDate}
                        isTwoWay={isTwoWay}
                        flightClass = {flightClass}/>
                </div>

            </div>
        );
    }
}

export default FlightBookingController;