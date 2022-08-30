import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("api/user").then((res) => setUsers(res.data));
  }, []);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {users?.map((user, i) => {
        return (
          <Link to={`/profile/${user.id}`}>
            <ListItem key={i}>
              <ListItemText primary={`${user.name} ${user.lastname}`} />
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
}
