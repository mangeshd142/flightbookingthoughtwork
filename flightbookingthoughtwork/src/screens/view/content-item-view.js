import React from 'react';
import EventBus from '../../library/eventdispatcher/EventDispatcher';
import moment from 'moment';

const Events = {
    HANDLE_ALL_CONTENT_POST_CLICKED: 'handle_all_content_post_clicked'
};


class ContentItemView extends React.Component{


    clicked = () => {
        EventBus.dispatch(Events.HANDLE_ALL_CONTENT_POST_CLICKED);
    }

    render() {
        let oFlightData = this.props.flight;

        return (
            <div className="contentItem">
                <div className="flightDetails">
                    <div className="property price"> {"RS: "+oFlightData.price}</div>
                    <div className="scheduleDetails">
                        <div className="schedule">
                            <div className="property">{oFlightData.id}</div>
                            <div className="property">{oFlightData.from + " > " +oFlightData.to}</div>
                            <div className="property">{"Depart: " +moment(Number.parseInt(oFlightData.deptTime)).format("h:mm a")}</div>
                            <div className="property">{"Arrive: " +moment(Number.parseInt(oFlightData.arriveTime)).format("h:mm a")}</div>
                        </div>
                        <div className="schedule">
                            <div className="property">{oFlightData.id}</div>
                            <div className="property">{oFlightData.from + " > " +oFlightData.to}</div>
                            <div className="property">{"Depart: " +moment(Number.parseInt(oFlightData.deptTime)).format("h:mm a")}</div>
                            <div className="property">{"Arrive: " +moment(Number.parseInt(oFlightData.arriveTime)).format("h:mm a")}</div>
                        </div>
                    </div>
                </div>
                <div className="rightSideContainer">
                    <div className="image"></div>
                    <div className="bookButton">Book This Filght</div>
                </div>
            </div>
        );
    }
}

export {ContentItemView, Events};