import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import {
	CustomCmdButton,
	CustomBadgeIcon,
	ToolTipBox,
	ToolTipCard,
	ToolTipContent,
} from "../StyledComponents/StyledComponents";
import MsgModal from "./MsgModal.js";

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
	max-height: 22rem;
	border-radius: ${(props) => (props.isRound ? "50%" : "0")};
`;

const UserCardContentRight = styled.div`
	width: auto;
	padding-top: 4.5rem;
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
`;

const BioSection = styled.div`
	grid-column: 1 / 3;
	grid-row: 3 / 4;
`;

const LegendSection = styled.div`
	grid-column: 1 / 2;
	grid-row: 2 / 3;
	p {
		color: #a6a6a6;
		margin: 0px;
	}
`;
const BadgeSection = styled.div`
	grid-column: 1 / 3;
	grid-row: 4 / 5;
	padding-top: 2rem;
`;
const CommandSection = styled.div``;

const UserCard = (props) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
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
					I am a hardworking and ambitious individual with a great passion for the business
					industry. I am currently in my second year of studying International Business at
					University of Economics Ho Chi Minh City. I have excellent communication skills, enabling
					me to effectively communicate with a wide range of people.
				</BioSection>
				<BadgeSection>
					<ToolTipCard>
						<ToolTipContent>
							<CustomBadgeIcon
								src="https://cdn.iconscout.com/icon/free/png-64/badge-1486567-1257080.png"
								alt="badge"
							/>
						</ToolTipContent>
						<ToolTipBox>5 year veteran</ToolTipBox>
					</ToolTipCard>
					<ToolTipCard>
						<ToolTipContent>
							<CustomBadgeIcon
								src="https://cdn.iconscout.com/icon/free/png-64/medal-38-124197.png"
								alt="badge"
							/>
						</ToolTipContent>
						<ToolTipBox>Gold contributors 2020</ToolTipBox>
					</ToolTipCard>
					<ToolTipCard>
						<ToolTipContent>
							<CustomBadgeIcon
								src="https://cdn.iconscout.com/icon/premium/png-64-thumb/medal-2058355-1731971.png"
								alt="badge"
							/>
						</ToolTipContent>
						<ToolTipBox>Most-time leader</ToolTipBox>
					</ToolTipCard>
				</BadgeSection>
			</UserCardContentRight>
		</UserCardGrid>
	);
};

export default UserCard;
