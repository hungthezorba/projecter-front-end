import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import './ProjectManage.css'

const Content = styled.div`
    display: flex;
    padding: 3em;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.25em 3em 1.25em 3em;
    width: 40%;
    justify-content: space-between;
    font-size: 1em;
    font-family: 'Roboto';
    font-weight: 400;
`

const Setting = styled.div`
    display: flex;
    position: absolute;
    top: 30px;
    right: 25px;
    @media (max-width: 768px) {
        flex-direction: column;
        position: relative;
        top: 0;
        
    }
`

const ImageContainer = (props) => (
    <Box>
        <img style={{ borderRadius: "10px" }} width="340" height="280" src={props.source} />
    </Box>
)


export default class ProjectCard extends React.Component {

    render() {
        return (
            <Card id="project-card">
                <Content>
                    <ImageContainer source={this.props.imageUrl} />
                    <Info>
                        <div>
                            <Typography style={{fontFamily: 'Quicksand', fontWeight: '700'}} component="h5" variant="h4">
                                {this.props.name}
                            </Typography>
                        </div>
                        <div style={{paddingTop: '4px'}}>
                            <p>{this.props.description}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                            <div style={{ display: 'flex' }}>
                                {this.props.member.map(m => (
                                    <div>
                                        <img style={{ borderRadius: '50%', width: '50px' }} src={m.imageUrl} />
                                    </div>
                                ))}
                                
                            </div>
                            <div style={{ padding: '0 20px' }}>
                                <button className="add-member-button">Add</button>
                            </div>
                        </div>
                    </Info>
                </Content>
                <Setting>
                        <div className="setting-icon">
                            <i style={{color: '#A6A6A6'}} class="fas fa-lg fa-eye-slash"></i>
                        </div>
                        <div className="setting-icon">
                            <i style={{color: '#A6A6A6'}} class="fas fa-lg fa-cog"></i>
                        </div>
                    </Setting>
            </Card>
        )
    }
}