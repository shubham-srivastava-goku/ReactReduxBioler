import React, { Component } from "react";
import { connect } from "react-redux";

import { HomePageData } from "../actions/HomeAction";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.HomePageData();
    }

    render() {
        console.log(this.props.data);
        return (
            <div>
                This is home page.
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.HomeProps.HomeData
});

export default connect(mapStateToProps, { HomePageData })(Home);