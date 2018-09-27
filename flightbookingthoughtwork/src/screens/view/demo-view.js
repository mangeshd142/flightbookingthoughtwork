import React from 'react';
import EventBus from '../../library/eventdispatcher/EventDispatcher';

const Events = {
    HANDLE_ALL_CONTENT_POST_CLICKED: 'handle_all_content_post_clicked'
};


class DemoView extends React.Component{


    clicked = () => {
        EventBus.dispatch(Events.HANDLE_ALL_CONTENT_POST_CLICKED);
    }

    render() {
        return (
            <div onClick={this.clicked}>
                Click On Me
            </div>
        );
    }
}

export {DemoView, Events};