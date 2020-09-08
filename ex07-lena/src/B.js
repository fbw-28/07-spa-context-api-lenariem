import React, { Component } from 'react';
import {connect} from 'react-redux';

export class B extends Component {
    render() {
        return (
            <div>
                <h2>Here is B</h2>
                x = {this.props.x}
                <button onClick={this.props.incrementY}>Increment Y</button>
            </div>
        )
    }
}

//mapping global state to the props of B
const mapStateToProps = (state) => ({
    x: state.x
});

//connection to reducer
const mapDispatchToProps = (dispatch) => ({
    incrementY: () => dispatch({type: 'INCREMENT_Y'})
})

//"connected" version of B
export default connect(mapStateToProps, mapDispatchToProps)(B);
