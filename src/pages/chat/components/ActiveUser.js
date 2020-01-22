import React from "react";
import { Typography } from "@material-ui/core";

const ActiveUser = ({ user }) => {
  return (
    <div>
      <Typography variant="body1">{user.name}</Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            width: 8,
            height: 8,
            backgroundColor: "green",
            borderRadius: "50%",
            marginRight: 8,
            display: "inline-block"
          }}
        ></span>
        <Typography variant="body2" color="textSecondary">
          Active now
        </Typography>
      </div>
    </div>
  );
};

export default ActiveUser;
