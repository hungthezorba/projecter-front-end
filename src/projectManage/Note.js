import React from 'react'
import Draggable from 'react-draggable'
import Skeleton from 'react-loading-skeleton'


export default class Note extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            deltaPosition: {
                x: this.props.data.x,
                y: this.props.data.y
            },
            color: this.props.backgroundColor
        }
    }

    handleDrag = (e, ui) => {
        const { x, y } = this.props.data;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY
            },
        })
        this.props.noteCoordinateHandler(this.props.data.id, this.state.deltaPosition.x, this.state.deltaPosition.y)
    }

    handleColorChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState({
            [name] : value
        })
        this.props.noteColorHandler(this.props.data.id, this.state.color)
    }

    render() {
        return (
            <Draggable defaultPosition={{ x: this.state.deltaPosition.x, y: this.state.deltaPosition.y }} onStop={this.props.onStop} onDrag={this.handleDrag} bounds="parent">
                <div style={{ marginTop: '25px', fontFamily: 'Quicksand', maxWidth: '500px', backgroundColor: this.props.data.backgroundColor, padding: '15px 35px 15px 35px', borderRadius: '10px' }}>
                    {this.props.data.items ?
                        <div>
                            <div>
                                <div>
                                    <h1 style={{ fontSize: '2em' }}>{this.props.data.title}</h1>
                                </div>
                                <div>
                                    <label style={{backgroundColor: this.state.backgroundColor}} className="color-picker" for="head">
                                        <input onClose={this.props.onStop} onChange={this.handleColorChange} value={this.state.backgroundColor} type="color" name="color"/>
                                    </label>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {this.props.data.items.map(item => (
                                    <div style={{ display: 'flex', position: 'relative' }}>
                                        <div style={{ maxWidth: '30em' }}>
                                            <div>
                                                <p style={{ color: '#A6A6A6' }}>{item.date}</p>
                                            </div>
                                            <div>
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                                        <div class="check-box-custom" style={{ position: 'absolute', right: '0', top: '30px' }}>
                                            <label class="check-label" for={"task-" + item.id}>
                                                <input type="checkbox" id={"task-" + item.id} defaultChecked={item.done} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> :
                        <Skeleton />
                    }
                </div>

            </Draggable>
        )
    }
}