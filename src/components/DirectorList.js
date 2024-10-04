import React from "react";

class DirectorList extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div>
                <h2>Name:</h2>
                <h2>Location:</h2>
                <h2>Contact:</h2>
            </div>
        )
    }
}

export default DirectorList;