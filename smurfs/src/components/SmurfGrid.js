import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions';
import SmurfCard from './SmurfCard';

const SmurfGrid = props => {

    useEffect(() => {
        props.fetchData();
    }, []);

    if (props.isFetching) {
        return <h2>Snatching Smurfs . . .</h2>
    }

    return(
        <div>
            {Array.from(props.smurfs).map((smurf, index) => (
                <SmurfCard
                    key={index}
                    smurf={smurf}
                />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchData }
)(SmurfGrid)