import React, { useState } from "react";
import {
  Dialog,
  Stack,
  TextField,
  DialogTitle,
  InputAdornment,
  List,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sameData";

const Search = () => {
  const [users, setUsers] = useState(sampleUsers);

  const search = useInputValidation("");

  let isLoadingSendFriendRequest = false;

  const addFriendHandler = (id) => {
    console.log(id);
  };

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find people</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
