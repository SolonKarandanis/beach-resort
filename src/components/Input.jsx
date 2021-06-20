import React, { Component } from 'react'

export default class Input extends Component {
    divRef = React.createRef();

    componentDidMount(){
        console.log(this.divRef);
        // this.divRef.value.focus();
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    ref={this.divRef} />
            </div>
        )
    }
}
