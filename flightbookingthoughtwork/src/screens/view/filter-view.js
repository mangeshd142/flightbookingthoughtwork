import React from 'react';
import EventBus from '../../library/eventdispatcher/EventDispatcher';

import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
// pick utils
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import { InlineDatePicker } from 'material-ui-pickers/DatePicker';
import { Slider } from 'material-ui-slider';
import alertify from 'alertifyjs';
import _ from 'lodash';

const Events = {
    HANDLE_FILTER_VIEW_SEARCH_CLICKED: 'handle_filter_view_search_clicked',
    HANDLE_FILTER_VIEW_REFINE_VALUE_CHANGED: 'handle_filter_view_refine_value_changed'
};


class FilterView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            originCity: "",
            destinationCity: "",
            departDate: null,
            returnDate: null,
            flightClass:"",
            isTwoWay: false
        }
    }

    handleDepartDateChange = (date) => {
        this.setState({ departDate: date });
    }

    handleReturnDateChange = (date) => {
        let oDepartDate = this.state.departDate;
        if(_.isEmpty(this.state.departDate)){
          alertify.error("Please Select Depart date");
          return;
        }
        else if(Date.parse(oDepartDate.endOf("day")) > Date.parse(date)){
          alertify.error("Return Date should be greater than Depart Date");
          return;
        }
        this.setState({ returnDate: date });
    }

    originCityOnChange = (oEvent) => {
        this.setState({ originCity: oEvent.target.value });
    }

    destinationCityOnChange = (oEvent) => {
        this.setState({ destinationCity: oEvent.target.value });
    }

    settingFlightClassChanged = (oEvent) => {
        this.setState({flightClass: oEvent.target.value });
    }

    handleReturnWayClicked = () => {
        this.setState({isTwoWay: true });
    }

    handleOneWayClicked = () => {
        this.setState({isTwoWay: false, returnDate: null});
    }

    handleRefineChange = (iValue) => {
        EventBus.dispatch(Events.HANDLE_FILTER_VIEW_REFINE_VALUE_CHANGED, iValue);
    }

    searchButtonClicked = () => {
      if(_.isEmpty(this.state.originCity)){
        alertify.error("Please Enter Origin City");
        return;
      }

      if(_.isEmpty(this.state.destinationCity)){
        alertify.error("Please Enter Destination City");
        return;
      }

      if(_.isEmpty(this.state.departDate)){
        alertify.error("Please Select Depart date");
        return;
      }

      if(_.isEmpty(this.state.returnDate) && this.state.isTwoWay){
        alertify.error("Please Select Return date");
        return;
      }

      if(_.isEmpty(this.state.flightClass)){
        alertify.error("Please Select Flight Class");
        return;
      }

        EventBus.dispatch(Events.HANDLE_FILTER_VIEW_SEARCH_CLICKED, this.state);
    }

    render() {

      let oOneWayStyle = {};
      let oReturnStyle = {};
      if(this.state.isTwoWay) {
        oReturnStyle = {backgroundColor: "#ccc"};
        oOneWayStyle = {}
      } else {
        oOneWayStyle = {backgroundColor: "#ccc"};
        oReturnStyle = {}
      }
        let oReturnDatePickerView = this.state.isTwoWay ? (<div className="inputContainer datePicker">
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <InlineDatePicker
                value={this.state.returnDate}
                format={"DD/MM/YYYY"}
                onChange={this.handleReturnDateChange}
                emptyLabel={"Select return Date"}
                className={"datePicker"}
            />
          </MuiPickersUtilsProvider>
        </div>) : null;
        return (
            <div className="filterContainer">
                <div className="routeContainer">
                  <div className="oneWay" style={oOneWayStyle} onClick={this.handleOneWayClicked}>One Way</div>
                  <div className="returnWay" style={oReturnStyle} onClick={this.handleReturnWayClicked}>Return</div>
                </div>

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
                                className={"datePicker"}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    {oReturnDatePickerView}
                    <div className="inputContainer">
                      <select className="flightClass" onChange={this.settingFlightClassChanged} value={this.state.flightClass}>
                        <option value=""></option>
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                        <option value="firstClass">FirstClass</option>
                      </select>
                    </div>
                    <div className="searchButton" onClick={this.searchButtonClicked}>
                        Search
                    </div>
                </div>

                <div className="refineFlights">
                    <div className="property label">Refine Flight Search</div>
                    <div className="slider">
                        <div className="minPrice">0</div>
                        <div className="maxPrice">{this.props.refineValue}</div>
                        <Slider value={this.props.refineValue} min={0} max={20000} step={1} onChange={this.handleRefineChange} />
                    </div>
                </div>
            </div>
        );
    }
}

export {FilterView, Events};