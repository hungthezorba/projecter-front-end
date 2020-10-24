import React from 'react'
import ProjectCard from '../projectManage/ProjectCard'
import styled from 'styled-components'
import Note from '../projectManage/Note'
const ProjectManageWrapper = styled.div`
    padding: 5em 7em 5em 7em;
`

const ProjectPage = () => (
    <ProjectManageWrapper>
        <ProjectCard/>
        <div style={{height: 'auto', width: '80vw', padding: '20px', position: 'relative'}}>
            <Note/>
            <Note/>
        </div>
    </ProjectManageWrapper>
)

export default ProjectPage