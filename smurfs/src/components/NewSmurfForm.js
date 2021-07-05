import React, { useState } from 'react'
import { connect } from 'react-redux'

import { postData } from '../actions'

const NewSmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({name:'', age:'', height:''});
    

    const handleChanges = event => {
        console.log(event.target.value)
        setNewSmurf({
            ...newSmurf,
            [event.target.name]:event.target.value
        })
    }

    const addSmurf = smurf => {
        props.postData(smurf)
    }

    return(
        <div>
            <form>New Smurf
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={handleChanges}
                />
                <input 
                    type="text"
                    name="age"
                    placeholder="age"
                    onChange={handleChanges}
                />
                <input 
                    type="text"
                    name="height"
                    placeholder="height (cm)" 
                    onChange={handleChanges}
                />
                <button 
                    onClick={() => addSmurf}
                >Add Smurf</button>
            </form>
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
    { postData }
)(NewSmurfForm)