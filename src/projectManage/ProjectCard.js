import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import './ProjectManage.css'

const Content = styled.div`
    display: flex;
    padding: 3em;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 80%;
        margin: auto;
    }
`

const Setting = styled.div`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`


export default class ProjectCard extends React.Component {

    render() {
        return (
            <Card style={{minWidth: '100%', width: '80vw', borderRadius: '10px'}}>
                <Content>
                <div>
                    <img component="img" alt="projectThumbnail" width="341" height="280" src="https://media.monsterindia.com/cmsimages/1509963788.jpg" />
                </div>
                <div style={{display: 'flex', flexDirection: 'column', padding: '20px', width: '40%'}}>
                    <div>
                        <Typography>
                            Ocean Freedom
                        </Typography>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <img style={{borderRadius: '50%', width: '50px'}} src="https://www.w3schools.com/howto/img_avatar.png"/>
                            </div>
                            <div>
                                <img style={{borderRadius: '50%', width: '50px'}} src="https://www.w3schools.com/howto/img_avatar.png"/>
                            </div>
                            <div>
                                <img style={{borderRadius: '50%', width: '50px'}} src="https://www.w3schools.com/howto/img_avatar.png"/>
                            </div>
                            <div>
                                <img style={{borderRadius: '50%', width: '50px'}} src="https://www.w3schools.com/howto/img_avatar.png"/>
                            </div>
                        </div>
                        <div style={{marginLeft: '10px'}}>
                            <button className="add-member-button">Add</button>
                        </div>
                    </div>
                </div>
                <Setting>
                    <div className="setting-icon">
                        <i class="fas fa-eye-slash"></i>
                    </div>
                    <div className="setting-icon">
                        <i class="fas fa-cog"></i>
                    </div>
                </Setting>
                </Content>
            </Card>
        )
    }
}