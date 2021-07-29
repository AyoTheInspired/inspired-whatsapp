import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
	const [seed, setSeed] = useState("");

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	return (
		<Wrap>
			<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
			<div className="sidebarChat__info">
				<h2>Room Name</h2>
				<p>Last message...</p>
			</div>
		</Wrap>
	);
}

export default SidebarChat;

const Wrap = styled.div`
	display: flex;
	padding: 20px;
	cursor: pointer;
	border-bottom: 1px solid #f6f6f6;
`;
