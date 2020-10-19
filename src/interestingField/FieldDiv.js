import React from 'react';
import Field from './Field'
import './FieldDiv.css'
import Box from '@material-ui/core/Box';

export default class FieldDiv extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fields: [
                'Mathematics',
                'Botany',
                'Diving',
                'Chemistry',
                'Science',
                'Astronomy',
                'Hardware',
                'Programming',
                'Data',
                'Camping',
                'Wilderness',
                'Exploring'
            ]
        }
    }

    render() {
        return (
            <Box display="flex" flexWrap="wrap" justifyContent="center" p={5}> 
                {this.props.fields.map((f, index) => (
                    <Field index={index} name={f.name} isChosen={f.isChosen} onClick={this.props.onClick}></Field>
                ))}
            </Box>
        )
    }
}