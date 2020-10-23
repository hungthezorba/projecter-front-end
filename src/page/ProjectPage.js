import React from 'react'
import ProjectCard from '../projectManage/ProjectCard'
import styled from 'styled-components'
import Note from '../projectManage/Note'
const ProjectManageWrapper = styled.div`
    padding: 5em;
`

const ProjectPage = () => (
    <ProjectManageWrapper>
        <ProjectCard/>
        <Note/>
    </ProjectManageWrapper>
)

export default ProjectPage