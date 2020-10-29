import React, { useState, useEffect } from "react";
import UserCard from "../userDisplay/UserCard";
import UserBackground from "../userDisplay/UserBackground";
import ProjectCard from "../projectDisplay/ProjectCard";
import {Wrapper}  from "../StyledComponents/StyledComponents.js";
import styled from "styled-components";

const UserProfileGrid = styled.div`
	position: relative;
	font-family: Quicksand;
	display: grid;
	grid-template-columns: [col1-start] 2fr [col1-end col2-start] 3fr [col2-end];
	grid-template-rows: auto;
	grid-column-gap: 65px;
	grid-row-gap: 72px;
	padding-top: 2rem;
	padding-bottom: 2rem;
	margin-top: 74px;
	background-color: #fff;
`;

const RightColumnWrapper = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: [pro-col] 1fr;
	grid-template-row: [pro-row] 1fr;
	grid-row-gap: 4.5rem;
`;

const UserProfile = (props) => {
	const [name, setName] = useState("Kha Bui");

	return (
		<Wrapper>
			<UserProfileGrid>
				<UserCard />
				<UserBackground />
				<RightColumnWrapper>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</RightColumnWrapper>
			</UserProfileGrid>
		</Wrapper>
	);
};

export default UserProfile;
