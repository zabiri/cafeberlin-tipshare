import React from 'react'
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import GrossTips from '../GrossTips/GrossTips'
import Output from '../Output/Output'
const Fri = (props) => {
    const grossHandler = (event) => {
        console.log(event.target.value)
        props.onChangeGross(event.target.value)
    }
    return (
        <div>
            <p>On Fridays there are 4 servers with no silverware roller, but there is support staff whom is paid 10% of gross tips.</p>
            <GrossTips changeGross={grossHandler} gross={props.grossTips} />
            <Output days="isFri" grossTips={props.grossTips} />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        grossTips: state.grossTips
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onChangeGross: gross =>
            dispatch({ type: actionTypes.CHANGE_GROSS, gross: gross })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fri)