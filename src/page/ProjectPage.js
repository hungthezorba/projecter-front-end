import React from 'react'
import ProjectCard from '../projectManage/ProjectCard'
import styled from 'styled-components'

const ProjectManageWrapper = styled.div`
    padding: 5em;
`

const ProjectPage = () => (
    <ProjectManageWrapper>
        <ProjectCard/>
    </ProjectManageWrapper>
)

export default ProjectPage