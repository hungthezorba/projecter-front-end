import React from 'react'
import './Field.css'
export default class Field extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isChosen : false
        }
        this.hasChosen = this.hasChosen.bind(this)
    }

    hasChosen(e) {
        e.preventDefault();
        this.setState({isChosen : !this.state.isChosen})
    }

    render() {
        return (
            <div>
                <button type="button" className={"field-button " + (this.state.isChosen ? 'active' : '')} onClick={this.hasChosen}>
                    {this.props.name}
                </button>
            </div>
        )
    }
    
}