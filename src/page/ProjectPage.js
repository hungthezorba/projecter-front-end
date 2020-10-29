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
            name: 'Ocean Freedom',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            member : [
                {
                    id: '1',
                    username: 'hungthezorba',
                    imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'
                },
                {
                    id: '2',
                    username: 'polackbeeves',
                    imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'
                },
                {
                    id: '3',
                    username: 'callMeDKay',
                    imageUrl: 'https://www.w3schools.com/howto/img_avatar.png'
                }
            ],
            note: [
                {
                    id: '1',
                    title: 'Protect the fish!',
                    items: [
                        { id: '1', content: 'hello', date: '18/09/2020', done: false },
                        { id: '2', content: 'world', date: '15/10/2020', done: false }
                    ],
                    x: 170,
                    y: 147
                },
                {
                    id: '2',
                    title: 'Search the warehouse',
                    items: [
                        { id: '3', content: 'hello', date: '18/09/2020', done: false },
                        { id: '4', content: 'world', date: '12/10/2020', done: true }
                    ],
                    x: 511,
                    y: -16
                }
            ]
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
        console.log(this.state.note)
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
