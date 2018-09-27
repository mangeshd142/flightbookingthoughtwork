import React from 'react';
import _ from 'lodash';
import {DemoView} from '../view/demo-view'

class FlightBookingController extends React.Component{

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
  handleTreeViewStateChanged =()=> {

    var changedState = {
      appData: this.getStore().getData().appData,
      componentProps: this.getStore().getData().componentProps
    };

    this.setState(changedState);
  }

  getStore =()=> {
    return this.props.store;
  }

  render() {

    var oComponentProps = this.state.componentProps;
    var bViewFlag = oComponentProps.getFlag();
    var iViewId = oComponentProps.getViewId();
    var aPostData = oComponentProps.getPostData();

    let aDataView = [];
    _.forEach(aPostData, function (oData) {
        aDataView.push((<div>{oData.title}</div>))
    });

    return (
        <div>
            {aDataView}
            <DemoView/>
        </div>
    );
  }
}

export default FlightBookingController;