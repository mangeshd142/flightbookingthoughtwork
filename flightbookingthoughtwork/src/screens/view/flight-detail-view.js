import React from 'react';
import EventBus from '../../library/eventdispatcher/EventDispatcher';
import _ from 'lodash';

import {ContentItemView} from './content-item-view';

const Events = {
    HANDLE_ALL_CONTENT_POST_CLICKED: 'handle_all_content_post_clicked'
};


class FlightDetailView extends React.Component{


    getFlightdata = () => {
        let afilteredFlights = [];
        _.forEach(this.props.flights, function (oFlight) {
           afilteredFlights.push(<ContentItemView flight = {oFlight}/>)
        });
        return afilteredFlights;
    }

    render() {
        let aFlightViees = this.getFlightdata();
        return (
            <div className="flightDetailContainer">
                <div className="filterHeader">
                    <div className="property route"> Pune > delhi > Pune</div>
                    <div className="scheduleDate">
                        <div className="property depart">Depart: 1st Jan 2012</div>
                        <div className="property return">Return: 4st Jan 2012</div>
                    </div>
                </div>
                <div className="contentData">
                    {aFlightViees}
                </div>
            </div>
        );
    }
}

export {FlightDetailView, Events};