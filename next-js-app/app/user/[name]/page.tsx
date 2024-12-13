"use client";
import {
  AddIcon,
  Box,
  IconButton,
  Track,
  Stack,
  Avatar,
} from "@adaptavant/eds-core";

const UserInfo = ({ params }) => {
  return <div>{`Hello ${params.name.replace("%20", " ")}`}</div>;
};
export default UserInfo;
