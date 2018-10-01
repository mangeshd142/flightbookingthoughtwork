import React from 'react';
import EventBus from '../../library/eventdispatcher/EventDispatcher';
import moment from 'moment';
import _ from "lodash";

const Events = {
    HANDLE_ALL_CONTENT_POST_CLICKED: 'handle_all_content_post_clicked'
};


class ContentItemView extends React.Component{


    clicked = () => {
        EventBus.dispatch(Events.HANDLE_ALL_CONTENT_POST_CLICKED);
    }

    render() {
        let oDepartFlightData = this.props.departFlight;
        let oReturnFlightData = this.props.returnFlight;
        let iPrice;
        if(this.props.flightClass == 'firstClass'){
          iPrice = oDepartFlightData.firstClassPrice;
        }
        else if(this.props.flightClass == 'business') {
          iPrice = oDepartFlightData.businessPrice;
        }
        else {
          iPrice = oDepartFlightData.economyPrice;
        }

        let oReturnDetailView =  !_.isEmpty(oReturnFlightData) ? (<div className="schedule">
          <div className="property">{oReturnFlightData.id}</div>
          <div className="property">{oReturnFlightData.from + " > " +oReturnFlightData.to}</div>
          <div className="property">{"Depart: " +moment(Number.parseInt(oReturnFlightData.deptTime)).format("h:mm a")}</div>
          <div className="property">{"Arrive: " +moment(Number.parseInt(oReturnFlightData.arriveTime)).format("h:mm a")}</div>
        </div>) : null;
        return (
            <div className="contentItem">
                <div className="flightDetails">
                    <div className="property price"> {"RS: "+iPrice}</div>
                    <div className="scheduleDetails">
                        <div className="schedule">
                            <div className="property">{oDepartFlightData.id}</div>
                            <div className="property">{oDepartFlightData.from + " > " +oDepartFlightData.to}</div>
                            <div className="property">{"Depart: " +moment(Number.parseInt(oDepartFlightData.deptTime)).format("h:mm a")}</div>
                            <div className="property">{"Arrive: " +moment(Number.parseInt(oDepartFlightData.arriveTime)).format("h:mm a")}</div>
                        </div>
                        {oReturnDetailView}
                    </div>
                </div>
                <div className="rightSideContainer">
                    <div className="image">
                    </div>
                    <div className="bookButton">Book This Flight</div>
                </div>
            </div>
        );
    }
}

export {ContentItemView, Events};