import React from 'react';
import EventBus from '../../library/eventdispatcher/EventDispatcher';

import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
// pick utils
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import { InlineDatePicker } from 'material-ui-pickers/DatePicker';
import { Slider } from 'material-ui-slider';

const Events = {
    HANDLE_ALL_CONTENT_POST_CLICKED: 'handle_all_content_post_clicked'
};


class FilterView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            originCity: "",
            destinationCity: "",
            departDate: null,
            returnDate: null,
            type:"",
            isTwoWay: false
        }
    }

    handleDepartDateChange = (date) => {
        this.setState({ departDate: date });
    }

    handleReturnDateChange = (date) => {
        this.setState({ returnDate: date });
    }

    originCityOnChange = (oEvent) => {
        this.setState({ originCity: oEvent.target.value });
    }

    destinationCityOnChange = (oEvent) => {
        this.setState({ destinationCity: oEvent.target.value });
    }

    render() {

        return (
            <div className="filterContainer">
                <div className="filters">
                    <div className="inputContainer">
                        <input className="input" placeholder="Enter Origin City" onBlur={this.originCityOnChange}/>
                    </div>
                    <div className="inputContainer">
                        <input className="input" placeholder="Enter Destination City" onBlur={this.destinationCityOnChange}/>
                    </div>
                    <div className="inputContainer datePicker">
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <InlineDatePicker
                                value={this.state.departDate}
                                format={"DD/MM/YYYY"}
                                onChange={this.handleDepartDateChange}
                                emptyLabel={"enter Depart Date"}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="inputContainer datePicker">
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <InlineDatePicker
                                value={this.state.returnDate}
                                format={"DD/MM/YYYY"}
                                onChange={this.handleReturnDateChange}
                                emptyLabel={"Select return Date"}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="inputContainer">
                        <input className="input" placeholder="Enter Destination City" value={this.state.type}/>
                    </div>
                    <div className="searchButton">
                        Search
                    </div>
                </div>

                <div className="refineFlights">
                    <div className="property label">Refine Flight Search</div>
                    <div className="slider">
                        <div className="minPrice">0</div>
                        <div className="maxPrice">20000</div>
                        <Slider value={1} min={0} max={20000} step={1} onChange={this.handleChange} />
                    </div>
                </div>
            </div>
        );
    }
}

export {FilterView, Events};