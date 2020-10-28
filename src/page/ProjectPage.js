import React from 'react'
import ProjectCard from '../projectManage/ProjectCard'
import styled from 'styled-components'
import Note from '../projectManage/Note'

const ProjectManageWrapper = styled.div`
    padding: 5em 7em 5em 7em;
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
                    username: 'hungthezorba'
                },
                {
                    id: '2',
                    username: 'polackbeeves'
                },
                {
                    id: '3',
                    username: 'callMeDKay'
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
                    x: '0',
                    y: '0'
                },
                {
                    id: '2',
                    title: 'Search the warehouse',
                    items: [
                        { id: '3', content: 'hello', date: '18/09/2020', done: false },
                        { id: '4', content: 'world', date: '15/10/2020', done: true }
                    ],
                    x: '0',
                    y: '0'
                }
            ]
        }
    }

    render() {
        return (
            <ProjectManageWrapper>
                <ProjectCard name={this.state.name} description={this.state.description} member={this.state.member} />
                <div style={{ height: 'auto', width: '100%', margin: '25px auto', position: 'relative' }}>
                    {this.state.note.map(note => (
                        <Note data={note} />
                    ))}
                </div>
            </ProjectManageWrapper>
        )
    }
}
