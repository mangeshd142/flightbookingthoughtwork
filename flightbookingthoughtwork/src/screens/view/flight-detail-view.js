import React from 'react';
import EventBus from '../../library/eventdispatcher/EventDispatcher';
import _ from 'lodash';
import moment from 'moment';

import {ContentItemView} from './content-item-view';

const Events = {
    HANDLE_ALL_CONTENT_POST_CLICKED: 'handle_all_content_post_clicked'
};


class FlightDetailView extends React.Component{


    getFlightData = () => {
        let aFilteredFlights = [];
        _.forEach(this.props.flights, (oFlight)=> {
           aFilteredFlights.push(<ContentItemView
               departFlight = {oFlight.departFlight}
               returnFlight = {oFlight.returnFlight}
               flightClass = {this.props.flightClass}
           />)
        });
        return aFilteredFlights;
    };

    render() {
        let aFlightViews = this.getFlightData();
        let sRoute = ""
        if(this.props.departStation){
          sRoute = this.props.departStation+ " > " +this.props.destination;
        }
        sRoute = this.props.isTwoWay ? sRoute + " > "+ this.props.departStation: sRoute;

        let departDate = this.props.departDate? "Depart:" +moment(this.props.departDate).format('Do MMM YYYY'):"";
        let returnDate = this.props.returnDate? <div className="property return">{"Return:" +moment(this.props.returnDate).format('Do MMM YYYY')}</div> : null;
        return (
            <div className="flightDetailContainer">
                <div className="filterHeader">
                    <div className="property route"> {sRoute}</div>
                    <div className="scheduleDate">
                        <div className="property depart">{departDate}</div>
                        {returnDate}
                    </div>
                </div>
                <div className="contentData">
                    {aFlightViews}
                </div>
            </div>
        );
    }
}

export {FlightDetailView, Events};