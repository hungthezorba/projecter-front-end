import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import {CustomCmdButton, CustomBadgeButton} from '../StyledComponents/StyledComponents';


const UserCardGrid = styled.div`
    font-family: Quicksand;
    font-style: normal;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	display: grid;
	transition: 0.3s;
	position: relative;
	max-width: 100%;
	min-height: 26rem;
	height: auto;
	background-color: #f8f8f8;
    border-radius: 10px;
    width: 100%;
	grid-template-columns: [avt-col-start] 2fr [avt-col-end content-col-start] 3fr [content-col-end];
	grid-template-rows: [avt-row-start] 1fr;
	grid-column-start: col1-start;
	grid-column-end: col2-end;
`;
const UserCardContentLeft = styled.div`
	padding-top: 2rem;
	padding-left: 2.5rem;
	padding-bottom: 2rem;
	grid-column-start: avt-col-start;
	grid-column-end: avt-col-end;
`;
// Components of content in left column;
const Avatar = styled.img`
	width: 100%;
	max-width: 22rem;
	height: 22rem;
	border-radius: ${props => props.isRound ? "50%" : "0"};
`;

const UserCardContentRight = styled.div`
	width: auto;
	padding-top: 5rem;
	padding-left: 2rem;
	padding-right: 4rem;
	grid-column: content-col-start / content-col-end;
	display: grid;
	grid-template-columns: 2fr 3fr;
	grid-template-rows: min-content 3rem auto 1fr;
	align-content: start;
`;
// Components of content in left column;
const NameSection = styled.div`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	font-weight: bold;
	font-size: 2.5rem;
`

const BioSection = styled.div`
	grid-column: 1 / 3;
	grid-row: 3 / 4;
`;

const LegendSection = styled.div`
	grid-column: 1 / 2;
	grid-row: 2 / 3;
    p {
		color: #A6A6A6;
		margin: 0px;
    }
`
const BadgeSection = styled.div`
	grid-column: 1 / 3;
	grid-row: 4 / 5;
	padding-top: 3rem;
`
const CommandSection = styled.div`

`

const UserCard = (props) => {
	return (
		<UserCardGrid>
			<UserCardContentLeft>
				<Avatar isRound src="https://i.imgur.com/nmXZO74.png" alt="avatar" />
			</UserCardContentLeft>
			<UserCardContentRight>
				<NameSection>Kha Bui</NameSection>
				<CommandSection>
					<CustomCmdButton>Follow</CustomCmdButton>
					<CustomCmdButton ml={0.6}>Invite</CustomCmdButton>
					<CustomCmdButton ml={0.6}>Message</CustomCmdButton>
				</CommandSection>
				<LegendSection>
					<p>@username 91 followers</p>
				</LegendSection>
				<BioSection>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</BioSection>
				<BadgeSection>
					<CustomBadgeButton bgColor="#72BA60">5 year veteran</CustomBadgeButton>
					<CustomBadgeButton bgColor="#80214F" ml={0.6}>Cold hands warm heart</CustomBadgeButton>
					<CustomBadgeButton bgColor="#2C7158" ml={0.6}>Hail Hydra!</CustomBadgeButton>
				</BadgeSection>
			</UserCardContentRight>
		</UserCardGrid>
	);
};

export default UserCard;
