import React from 'react'
import './Field.css'
import Box from '@material-ui/core/Box'

export default class Field extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange(e) {
        this.props.isChosen = !this.props.isChosen
    }


    render() {
        return (
            <Box flex="0 0 calc(16.66% - 20px)" ml={0.75} mr={0.75} mb={7}> 
                <button type="button" className={"field-button " + (this.props.isChosen ? 'active' : '')} onClick={(e) => this.props.onClick(this.props.index)} >
                    {this.props.name}
                </button>
            </Box>
        )
    }
    
}