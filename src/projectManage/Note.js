import React from 'react'
import Draggable from 'react-draggable'


export default class Note extends React.Component {

    state = {
        activeDrags: 0,
        deltaPosition: {
            x: 0, y:0
        },
    }

    onStart = () => {
        this.setState({activeDrags: ++this.state.activeDrags})
    }

    render() {
        return (
            <Draggable bounds="parent">
                <div style={{ fontFamily: 'Quicksand', maxWidth: '500px', backgroundColor: '#F8F8F8', padding: '15px 35px 15px 35px', borderRadius: '10px' }}>
                    <div>
                        <h1 style={{ fontSize: '2.5em' }}>Protect the fish!</h1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', position: 'relative' }}>
                            <div>
                                <div>
                                    <p style={{ color: '#A6A6A6' }}>18/09/2020</p>
                                </div>
                                <div>
                                    <p>Lorem ispum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div class="check-box-custom" style={{ position: 'absolute', right: '0', top: '30px' }}>
                                <label class="check-label" for="task-1">
                                    <input type="checkbox" id="task-1" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div style={{ display: 'flex', position: 'relative' }}>
                            <div>
                                <div>
                                    <p style={{ color: '#A6A6A6' }}>18/09/2020</p>
                                </div>
                                <div>
                                    <p>Lorem ispum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div class="check-box-custom" style={{ position: 'absolute', right: '0', top: '30px' }}>
                                <label class="check-label" for="task-1">
                                    <input type="checkbox" id="task-1" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div style={{ display: 'flex', position: 'relative' }}>
                            <div style={{ maxWidth: '30em' }}>
                                <div>
                                    <p style={{ color: '#A6A6A6' }}>18/09/2020</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo mauris arcu, sit amet volutpat lacus ornare sit amet. Suspendisse eget neque a arcu ultricies viverra. Nulla facilisi. Nulla facilisi.</p>
                                </div>
                            </div>
                            <div class="check-box-custom" style={{ position: 'absolute', right: '0', top: '30px' }}>
                                <label class="check-label" for="task-1">
                                    <input type="checkbox" id="task-1" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </Draggable>
        )
    }
}