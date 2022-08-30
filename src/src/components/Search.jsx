import "../styles/search.css";
import useInput from "../Hooks/useInputs";
import axios from "axios";
import { useState } from "react";
import { Button, Input } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
const Search = () => {
  const searchInput = useInput();
  const [userSearch, setUserSearch] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const search = await axios.get(`/api/user/search/${searchInput.value}`);
    setUserSearch(search.data);
  };

  return (
    <Box>
      <aside className="search">
<Link to="/userlist">  <Button style={{color:'red'}}> User list</Button>
</Link>
      
        <br/>
        <h3>Search for a user to see their post</h3>
        <form>
          <input type={"text"} {...searchInput} />
          <Button onClick={handleSearch}>Search</Button>
        </form>
        {userSearch &&
          userSearch.map((user, i) => {
            return (
              <div key={i} color="black">
                <Link to={`/profile/${user.id}`}>
                  <h4>{`${user.name} ${user.lastname}`}</h4>
                </Link>
                <br></br>
              </div>
            );
          })}
      </aside>
    </Box>
  );
};
export default Search;
