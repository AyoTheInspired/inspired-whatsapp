import React, { useState, useEffect } from "react";
import db from "../firebase";
import "./SidebarChat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useStateValue } from "../StateProvider";

function SidebarChat({ id, name, addNewChat }) {
	const [seed, setSeed] = useState("");
	const [messages, setMessages] = useState("");
	const [{ rooms }, dispatch] = useStateValue();

	useEffect(() => {
		if (id) {
			db.collection("rooms")
				.doc(id)
				.collection("messages")
				.orderBy("timestamp", "desc")
				.onSnapshot((snapshot) =>
					setMessages(snapshot.docs.map((doc) => doc.data()))
				);
		}
	}, [id]);

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

	// const deleteChat = (name) => {
	// 	console.log(rooms);
	// 	db.collection("rooms").doc().delete();
	// };

	return !addNewChat ? (
		<NavLink to={`/rooms/${id}`} activeClassName="room__active">
			<div className="sidebarChat">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className="sidebarChat__info">
					<h2> {name} </h2>
					<p> {messages[0]?.message} </p>
				</div>
				{/* <div className="delete__wrapper" onClick={deleteChat(name)}>
					<IconButton>
						<DeleteForeverIcon />
					</IconButton>
				</div> */}
			</div>
		</NavLink>
	) : (
		<div className="sidebarChat" onClick={createChat}>
			<h2>Add new Chat</h2>
		</div>
	);
}

export default SidebarChat;
