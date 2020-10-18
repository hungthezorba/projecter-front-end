import React from 'react'
import FieldDiv from './FieldDiv'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'
import { useState } from 'react'

const InterestingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5em 2em 5em;
`
const ConfirmButton = styled.button`
    background-color: #254255; /* Green */
    color: white;
    width: 6.25em;
    padding: 15px 40px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    border-style: solid;
    outline-style: none;
    cursor: pointer;
    font-family: 'Quicksand';
    font-weight: 700;
    border-color: #254255;
`

const Interesting = () => {
    const [fields, setFields] = useState([
        {name: 'Mathematics', isChosen: false},
        {name: 'Botany', isChosen: false},
        {name: 'Diving', isChosen: false},
        {name: 'Chemistry', isChosen: false},
        {name: 'Science', isChosen: false},
        {name: 'Astronomy', isChosen: false},
        {name: 'Hardware', isChosen: false},
        {name: 'Programming', isChosen: false},
        {name: 'Data', isChosen: false},
        {name: 'Camping', isChosen: false},
        {name: 'Wilderness', isChosen: false},
        {name: 'Exploring', isChosen: false }
    ]);

    const handleFieldChange = (index) => {
        const newFields = [...fields]
        newFields[index].isChosen = !newFields[index].isChosen
        setFields(newFields)
        console.log(fields)
    }

    return (
    <InterestingWrapper>
        <div>
            <h2 style={{fontSize: '4.375em', fontFamily: 'Quicksand'}}>Choose your interests</h2>
        </div>
        <FieldDiv fields={fields} onClick={handleFieldChange} />
        <div style={{ marginTop: '5px' }}>
            <ConfirmButton>Confirm</ConfirmButton>
        </div>
    </InterestingWrapper>
    )}
export default Interesting