import React from "react";
import {
  Paper,
  InputBase,
  IconButton,
  Avatar,
  Divider
} from "@material-ui/core";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const ChatInput = ({ handleSubmit, handleChange, value }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "8px 16px"
      }}
    >
      <Avatar style={{ backgroundColor: "orange" }}>H</Avatar>
      <form onSubmit={e => handleSubmit(e)} style={{ display: "flex", width: "100%" }}>
        <Paper
          elevation={1}
          style={{
            marginLeft: 16,
            flexGrow: 1,
            padding: "4px 16px",
            boxShadow:
              "0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)"
          }}
        >
          <InputBase
            style={{ width: "100%" }}
            placeholder="Leave a message"
            inputProps={{ "aria-label": "leave a message" }}
            onChange={e => handleChange(e.target.value)}
            value={value}
          />
        </Paper>
        <IconButton type="submit" aria-label="send">
          <SendOutlinedIcon />
        </IconButton>
      </form>
      <Divider orientation="vertical" />
    </div>
  );
};

export default ChatInput;
