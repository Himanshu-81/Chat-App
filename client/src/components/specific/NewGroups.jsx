import React, { useState } from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import { sampleUsers } from "../../constants/sameData";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroups = () => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMemebers, setSelectedMembers] = useState([]);

  const groupName = useInputValidation("");

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) => [...prev.id]);

    console.log(selectedMemebers);
  };

  const submitHandler = () => {};

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>

        <TextField
          label="Group name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />

        <Typography variant="body1">Members</Typography>

        <Stack>
          {members.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMemberHandler}
            />
          ))}
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="outlined" color="error">
            Cancel
          </Button>
          <Button variant="contained" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroups;
