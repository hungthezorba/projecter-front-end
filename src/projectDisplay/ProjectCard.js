import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ProjectCardWrapper = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s;
    width: 100%;
    height: 15rem;
    background-color: #F8F8F8;
    border-radius: 10px;
    grid-column-start: pro-col
    grid-column-end: pro-row;
`


const ProjectCard = (props) => {
    return (
        <ProjectCardWrapper>
            <div className="container">
                <p>This is card container</p>
            </div>
        </ProjectCardWrapper>
    )
}

export default ProjectCard;