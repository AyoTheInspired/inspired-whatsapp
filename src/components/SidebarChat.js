import React, { useState, useEffect } from "react";
import db from "../firebase";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {
	const [seed, setSeed] = useState("");

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	const createChat = () => {
		const roomName = prompt("Please enter a chat room name");

		if (roomName) {
			// do some clever database stuff
			db.collection("rooms").add({
				name: roomName,
			});
		}
	};

	return !addNewChat ? (
		<NavLink to={`/rooms/${id}`} activeClassName="room__active">
			<div className="sidebarChat">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className="sidebarChat__info">
					<h2> {name} </h2>
					<p>Last message...</p>
				</div>
			</div>
		</NavLink>
	) : (
		<div className="sidebarChat" onClick={createChat}>
			<h2>Add new Chat</h2>
		</div>
	);
}

export default SidebarChat;
