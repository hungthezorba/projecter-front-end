import React from 'react'
import ProjectCard from '../projectManage/ProjectCard'
import styled from 'styled-components'
import Note from '../projectManage/Note'
import {Wrapper}  from "../StyledComponents/StyledComponents.js";

const ProjectManageWrapper = styled.div`
    padding: 5rem 0rem;
`

export default class ProjectPage extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            member : [],
            note: []
        }
        this.handler = this.handler.bind(this)
    }

    handler(id, x, y) {
        this.setState(prevState => ({
            note: prevState.note.map(
                obj => (obj.id === id ? Object.assign(obj, {
                    x: x,
                    y: y
                }) : obj)
            )
        }))
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        fetch("https://5f8e813f4c15c40016a1ebc0.mockapi.io/api/v1/projects/9")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState(result)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    render() {
        return (
            <Wrapper>
                <ProjectManageWrapper>
                    <ProjectCard name={this.state.name} description={this.state.description} member={this.state.member} />
                    <div style={{ height: 'auto', width: '100%', margin: '25px auto', position: 'relative' }}>
                        {this.state.note.map(note => (
                            <Note handler={this.handler} data={note} />
                        ))}
                    </div>
                </ProjectManageWrapper>
            </Wrapper>
        )
    }
}
