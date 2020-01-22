import React from "react";
import {
  Toolbar,
  InputBase,
  IconButton,
  Typography,
  List,
  ListItemAvatar,
  ListItem,
  Avatar,
  ListItemText,
  Divider
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import ActiveUser from "./components/ActiveUser";
import { users } from "./metadata/chatUsers";

const MyChat = () => {
  const [selectedUser, setSelectedUser] = React.useState({});
  const [inputValue, setInputValue] = React.useState("");

  const handleClick = user => {
    setSelectedUser(user);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let date = new Date();

    if (inputValue) {
      selectedUser.messages.unshift({
        poster: "Jot",
        message: inputValue,
        time: date.toLocaleString(undefined, {
          hour: "2-digit",
          minute: "2-digit"
        })
      });

      /**  Temporary - mock a user reply*/
      setTimeout(setReply, 2000);
      
      setSelectedUser(selectedUser);
      setInputValue("");
    }
  };

  /** Temporary - mock a user reply */
  const setReply = () => {
    let date = new Date();
    const reply = {
      poster: selectedUser.name,
      message: `Your message contains ${inputValue.length} characters.`,
      time: date.toLocaleString(undefined, {
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    
    setSelectedUser({
      ...selectedUser,
      messages: [reply, ...selectedUser.messages]
    });
    selectedUser.messages.unshift(reply)
  };

  const handleChange = val => {
    setInputValue(val);
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            borderRight: "1px solid silver",
            width: "300px",
            flexBasis: "300px",
            flexShrink: 0,
            height: "100vh"
          }}
        >
          <Toolbar>
            <InputBase placeholder="Search Contacts" style={{ flexGrow: 1 }} />
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List dense={true} style={{ paddingTop: 0 }}>
            {users.map((user, index) => {
              return (
                <ListItem
                  button
                  alignItems="flex-start"
                  divider={true}
                  value={0}
                  onClick={() => handleClick(user)}
                  key={user.name}
                  style={{
                    boxShadow:
                      user.name === selectedUser.name
                        ? "inset 4px 0px 0px #3f51b5"
                        : ""
                  }}
                >
                  <ListItemAvatar>
                    <Avatar alt={user.name} src={user.img} >{!user.img && user.name[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.name}
                    secondary={
                      <span
                        style={{
                          display: "inline-block",
                          textOverflow: "ellipsis",
                          width: 130,
                          whiteSpace: "nowrap",
                          overflow: "hidden"
                        }}
                      >
                        {user.messages[0].message}
                      </span>
                    }
                  />
                  <Typography variant="body2">
                    {user.messages[0].time}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </div>
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 500,
            justifyContent: Object.keys(selectedUser).length > 0 ? "" : "center"
          }}
        >
          {Object.keys(selectedUser).length > 0 ? (
            <>
              <Toolbar>
                <ActiveUser user={selectedUser} />
                <IconButton style={{ position: "absolute", right: 0 }}>
                  <MoreVertIcon />
                </IconButton>
              </Toolbar>
              <Divider />
              <ChatWindow id={selectedUser.name} user={selectedUser} />
              <Divider />
              <ChatInput
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                value={inputValue}
              />
            </>
          ) : (
            <div
              style={{
                flexGrow: 1,
                maxHeight: "70%",
                cursor: "pointer",
                textAlign: "center"
              }}
            >
              <img
                width="400"
                alt="chat"
                src="https://cdn.pixabay.com/photo/2016/11/30/18/14/chat-1873543_960_720.png"
              />
              <Typography variant="body1">
                Select a conversation to display.
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyChat;
