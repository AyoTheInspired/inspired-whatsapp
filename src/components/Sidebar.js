import React from "react";
import styled from "styled-components";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";

function Sidebar() {
	return (
		<Wrap className="sidebar">
			<div className="sidebar__header">
				<Avatar />
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLargeIcon />
					</IconButton>

					<IconButton>
						<ChatIcon />
					</IconButton>

					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>

			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<SearchOutlinedIcon />
					<input type="text" placeholder="Search or start a new chat" />
				</div>
			</div>

			<div className="sidebar__chats">
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</div>
		</Wrap>
	);
}

export default Sidebar;

const Wrap = styled.div``;
