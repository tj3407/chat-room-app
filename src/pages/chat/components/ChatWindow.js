import React from "react";
import { Typography, Box, Avatar } from "@material-ui/core";

const userStyle = {
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: 16
};

const otherUserStyle = {
  marginBottom: 16
};

const ChatWindow = props => {
  const { id, user, ...other } = props;
  const { messages } = user;

  return (
    <div style={{ cursor: "pointer" }}>
      <div style={{ position: "relative" }}>
        <div
          style={{
            padding: 16,
            height: "70vh",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column-reverse"
          }}
          id="chat-window"
        >
          {messages.map((item, index) => {
            const { poster, message, time } = item;

            return (
              <div
                style={user.name === poster ? otherUserStyle : userStyle}
                key={index}
              >
                <div style={{ display: "flex", maxWidth: 500 }}>
                  {user.name === poster ? (
                    <Avatar
                      alt={user.name}
                      src={user.img}
                      style={{ marginRight: 16 }}
                    >
                      {!user.img && user.name[0]}
                    </Avatar>
                  ) : (
                    <Avatar
                      style={{ backgroundColor: "orange", marginRight: 16 }}
                    >
                      H
                    </Avatar>
                  )}
                  <div>
                    <div
                      style={{
                        padding: "8px 16px",
                        borderRadius: 4,
                        backgroundColor:
                          user.name === poster ? "#f5f5f5" : "#3f51b5",
                        color: user.name === poster ? "black" : "white"
                      }}
                    >
                      <Typography variant="body2" style={{ fontWeight: 500 }}>
                        {poster}
                      </Typography>
                      <Typography variant="body2" style={{ marginTop: 8 }}>
                        {message}
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "8px",
                        justifyContent: "flex-end"
                      }}
                    >
                      <Typography
                        variant="body2"
                        style={{ textTransform: "lowercase" }}
                      >
                        {time}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
