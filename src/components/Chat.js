import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";
import styled from "styled-components";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import db from "../firebase";
import "./Chat.css";
import { useStateValue } from "../StateProvider";
import firebase from "firebase";

function Chat() {
	const [input, setInput] = useState("");
	const [seed, setSeed] = useState("");
	const { roomId } = useParams();
	const [roomName, setRoomName] = useState("");
	const [messages, setMessages] = useState([]);
	const [{ user }, dispatch] = useStateValue();

	useEffect(() => {
		if (roomId) {
			db.collection("rooms")
				.doc(roomId)
				.onSnapshot((snapshot) => {
					setRoomName(snapshot.data()?.name);
					db.collection("rooms")
						.doc(roomId)
						.collection("messages")
						.orderBy("timestamp", "asc")
						.onSnapshot((snapshot) =>
							setMessages(snapshot.docs.map((doc) => doc.data()))
						);
				});
		}
	}, [roomId]);

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, [roomId]);

	const sendMessage = (e) => {
		e.preventDefault();
		db.collection("rooms").doc(roomId).collection("messages").add({
			message: input,
			name: user.displayName,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput("");
	};

	return (
		<Wrap className="chat">
			<div className="chat__header">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className="chat__headerInfo">
					<h3> {roomName} </h3>
					{messages.length > 0 && (
						<p>
							Last discussion:&nbsp;&nbsp;
							{new Date(
								messages[messages.length - 1]?.timestamp?.toDate()
							).toLocaleString()}
						</p>
					)}
				</div>

				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlinedIcon />
					</IconButton>

					<IconButton>
						<AttachFileIcon />
					</IconButton>

					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="chat__body">
				{messages.map((message) => (
					<p
						className={`chat__message ${
							message.name === user.displayName && "chat__receiver"
						}`}>
						<span className="chat__name"> {message.name} </span>
						{message.message}
						<span className="chat__timestamp">
							{new Date(message.timestamp?.toDate()).toLocaleString()}
						</span>
					</p>
				))}
			</div>
			<div className="chat__footer">
				<InsertEmoticonIcon />
				<form>
					<input
						type="text"
						placeholder="Type a message"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button type="submit" onClick={sendMessage}>
						Send a Message
					</button>
				</form>
				<MicIcon />
			</div>
		</Wrap>
	);
}

export default Chat;

const Wrap = styled.div`
	@media (max-width: 768px) {
		flex: 1;
		border-top: 7px solid green;
	}
`;
