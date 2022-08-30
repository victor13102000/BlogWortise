import "../styles/search.css";
import useInput from "../Hooks/useInputs";
import axios from "axios";
import { useState } from "react";
import { Button} from "@mui/material";
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
<Link to="/userlist">  <Button style={{color:'white'}}> User list</Button>
</Link>
      
        <br/>
        <h3>Search for a user to see their post</h3>
        <form>
          <input type={"text"} {...searchInput} />
          <Button style={{color:'white'}} onClick={handleSearch}>Search</Button>
        </form>
        {userSearch &&
          userSearch.map((user, i) => {
            return (
              <div key={i} >
                <Link style={{color:"white"}} to={`/profile/${user.id}`}>
                  <Button style={{color:'white'}}>{`${user.name} ${user.lastname}`}</Button>
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
