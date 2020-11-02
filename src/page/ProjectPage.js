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
            name: '',
            description: '',
            member : [],
            note: [],
            imageUrl: ''
        }
        this.noteCoordinateHandler = this.noteCoordinateHandler.bind(this)
        this.noteColorHandler = this.noteColorHandler.bind(this)
        this.updateNote = this.updateNote.bind(this)
    }

    noteCoordinateHandler(id, x, y) {
        this.setState( prevState => ({
            note: prevState.note.map(
                obj => (obj.id === id ? Object.assign(obj, {
                    x: x,
                    y: y
                }) : obj)
            ),
        }))
    }

    noteColorHandler(id, color) {
        this.setState( prevState => ({
            note: prevState.note.map(
                obj => (obj.id === id ? Object.assign(obj, {
                    backgroundColor: color
                }) : obj)
            )
        }))
    }

    updateNote() {
        fetch("https://5f8e813f4c15c40016a1ebc0.mockapi.io/api/v1/projects/8", {
                    method: 'PUT',
                    headers: {
                        "Content-Type" : "application/json",
                        "Accept" : "application/json"
                    },
                    body : JSON.stringify({
                        note: this.state.note
                    })
                })
                .then(res => res.json())
                .then(
                    (data) => {
                        this.setState(data)
                        console.log(data)
                    },
                    (error) => {
                        console.log(error)
                    }
                    )
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        fetch("https://5f8e813f4c15c40016a1ebc0.mockapi.io/api/v1/projects/8")
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
            <ProjectManageWrapper>
                <ProjectCard name={this.state.name} description={this.state.description} member={this.state.member} imageUrl={this.state.imageUrl} />
                <div style={{ height: 'auto', width: '100%', margin: '25px auto', position: 'relative' }}>
                    {this.state.note.map(note => (
                        <Note noteColorHandler={this.noteColorHandler} onStop={this.updateNote} noteCoordinateHandler={this.noteCoordinateHandler} data={note} />
                    ))}
                </div>
            </ProjectManageWrapper>
        )
    }
}
