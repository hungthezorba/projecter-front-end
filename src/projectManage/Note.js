import React from 'react'
import Draggable from 'react-draggable'


export default class Note extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            deltaPosition: {
                x: this.props.data.x,
                y: this.props.data.y
            }
        }
    }

    handleDrag = (e, ui) => {
        const {x, y} = this.props.data;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY
            },    
        })
        this.props.handler(this.props.data.id, this.state.deltaPosition.x, this.state.deltaPosition.y)
    }

    render() {
        return (
            <Draggable defaultPosition={{x: this.state.deltaPosition.x, y: this.state.deltaPosition.y}} onStop={ (e) => console.log(e)} onDrag={this.handleDrag} bounds="parent">
                <div style={{marginTop: '25px', fontFamily: 'Quicksand', maxWidth: '500px', backgroundColor: '#F8F8F8', padding: '15px 35px 15px 35px', borderRadius: '10px' }}>
                    <div>
                        <h1 style={{ fontSize: '2.5em' }}>{this.props.data.title}</h1>
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
                </div>
            </Draggable>
        )
    }
}