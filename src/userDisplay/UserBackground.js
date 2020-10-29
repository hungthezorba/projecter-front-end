import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const UserBackGroundWrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 100%;
    height: 32rem;
    background-color: #F8F8F8;
    border-radius: 10px;
    grid-column-start: col1-start;
    grid-column-end: col1-end;
`

const ContentWrapper = styled.div`
    padding: 2rem;
    padding-top: 1rem;
    h1 {
        margin: 0px;
        padding-top: 1rem;
    }
    p {
        margin: 0px;
    }
`


const UserBackGround = (props) => {
    return (
        <UserBackGroundWrapper>
            <ContentWrapper>
                <h1>Background</h1>
                <p>Graduated from University of Economics</p>
            </ContentWrapper>
        </UserBackGroundWrapper>
    )
}

export default UserBackGround;