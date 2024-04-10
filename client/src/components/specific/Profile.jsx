import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UsernameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        src="https://i.pinimg.com/474x/13/7e/de/137edeca70ddd731b834f9b2fb4eeaa4.jpg"
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard
        heading={"Bio"}
        text={"Don’t tell anyone, but I’m a ninja."}
      />
      <ProfileCard
        heading={"Username"}
        text={"himanshu.081"}
        Icon={<UsernameIcon />}
      />
      <ProfileCard heading={"Name"} text={"Himanshu"} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment("2023-11-04T18:20:00.000Z").fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"0.5rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
