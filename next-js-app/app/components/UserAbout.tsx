import React, { useEffect } from "react";
import { useContext, useRef } from "react";
import { UserContext } from "../context/userContext";
import {
  Box,
  Track,
  Icon,
  PhoneIcon,
  MailIcon,
  BirthdayIcon,
} from "@adaptavant/eds-core";
const UserAbout: React.FC = () => {
  const { allUserData } = useContext(UserContext);
  const selectedUserRef = useRef(null);
  useEffect(() => {
    selectedUserRef.current =
      allUserData[location.pathname.replace("/user/", "")];
    console.log(selectedUserRef.current);
  });
  return (
    <Track className="h-3/4 flex flex-col space-y-6 items-start text-body-12 p-3">
      {/* Phone number */}
      <Box className="flex gap-4">
        <PhoneIcon />
        <Box as="div" className="flex flex-col gap-2">
          {selectedUserRef.current?.phoneNumbers.map((phone) => (
            <Box as="span">{phone}</Box>
          ))}
        </Box>
      </Box>

      {/* Email */}
      <Box className="flex gap-4">
        <MailIcon />
        <Box as="div" className="flex flex-col gap-2">
          {selectedUserRef.current?.emails.map((email) => (
            <Box as="span">{email}</Box>
          ))}
        </Box>
      </Box>

      <Box className="flex gap-4">
        <BirthdayIcon />
        <Box as="div" className="flex flex-col justify-center gap-2">
          <Box as="span">{selectedUserRef?.current?.firstName}</Box>
        </Box>
      </Box>
    </Track>
  );
};

export default UserAbout;
