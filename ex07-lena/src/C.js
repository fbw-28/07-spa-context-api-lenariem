import React, { Component } from 'react';
import {connect} from 'react-redux';

export class C extends Component {
    render() {
        return (
            <div>
                <h2>Here is C</h2>
                y = {this.props.y}
                <button onClick={this.props.incrementX}>Increment X</button>
            </div>
        )
    }
}

//mapping global state to the props of C
const mapStateToProps = (state) => ({
    y: state.y
});

//connection to reducer
const mapDispatchToProps = (dispatch) => ({
    incrementX: () => dispatch({type: 'INCREMENT_X'})
})

//"connected" version of C
export default connect(mapStateToProps, mapDispatchToProps)(C);
