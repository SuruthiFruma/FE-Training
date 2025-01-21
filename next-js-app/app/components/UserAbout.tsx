import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import {
  Box,
  Track,
  MapPinIcon,
  PhoneIcon,
  BankIcon,
  GlobeIcon,
  MailIcon,
  BirthdayIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  ClipboardCopyIcon,
  LinkedinIcon,
  DropdownMenu,
  IconButton,
  DropdownMenuPopover,
  DropdownMenuList,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropDownMenu,
} from "@adaptavant/eds-core";
import AboutUnit from "./AboutUnit";
import { is } from "../../.next/server/vendor-chunks/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1";
const UserAbout: React.FC = ({ selectedUser }) => {
  const { allUserData } = useContext(UserContext);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <Box
      as="div"
      className="h-3/4 flex flex-col gap-3 items-start text-body-12 p-3"
    >
      {/* Phone number */}
      <Box className="flex gap-4">
        <PhoneIcon size="16" />
        <Box as="div" className="flex flex-col gap-2">
          {selectedUser?.phoneNumbers.map(
            (phone, index) =>
              index < 2 && (
                <Box as="span" key={phone}>
                  {phone}
                </Box>
              )
          )}
        </Box>
        <Track className="justify-end items-end">
          <DropdownMenu>
            <DropdownMenuTrigger>{`( +${
              selectedUser?.phoneNumbers.length - 2
            } )`}</DropdownMenuTrigger>
            <DropdownMenuPopover>
              <DropdownMenuList></DropdownMenuList>
              {selectedUser?.phoneNumbers.slice(2).map((phone, index) => (
                <DropdownMenuItem key={index}>
                  <Track railEnd={<ClipboardCopyIcon></ClipboardCopyIcon>}>
                    {phone}
                  </Track>
                </DropdownMenuItem>
              ))}
            </DropdownMenuPopover>
          </DropdownMenu>
        </Track>
      </Box>

      {/* Email */}
      <Box className="flex gap-4">
        <MailIcon size="16" />
        <Box as="div" className="flex flex-col gap-2">
          {selectedUser?.emails.map(
            (email, index) =>
              index < 2 && (
                <Box as="span" key={email}>
                  {email}
                </Box>
              )
          )}
        </Box>
      </Box>
      <AboutUnit
        aboutIcon={<BirthdayIcon size="16" />}
        aboutValue={selectedUser?.dateOfBirth}
      />
      <AboutUnit
        aboutIcon={<BankIcon size="16" />}
        aboutValue={selectedUser?.currentCompany}
      />
      <AboutUnit
        aboutIcon={<MapPinIcon size="16" />}
        aboutValue={selectedUser?.address}
      />
      <AboutUnit
        aboutIcon={<GlobeIcon size="16" />}
        aboutValue={selectedUser?.portfolio}
        isHyperLink={true}
      />
      <AboutUnit
        aboutIcon={<InstagramIcon size="16" />}
        aboutValue={selectedUser?.instagram}
        isHyperLink={true}
      />
      <AboutUnit
        aboutIcon={<FacebookIcon size="16" />}
        aboutValue={selectedUser?.facebook}
        isHyperLink={true}
      />
      <AboutUnit
        aboutIcon={<TwitterIcon size="16" />}
        aboutValue={selectedUser?.twitter}
        isHyperLink={true}
      />
      <AboutUnit
        aboutIcon={<YoutubeIcon size="16" />}
        aboutValue={selectedUser?.youtube}
        isHyperLink={true}
      />
      <AboutUnit
        aboutIcon={<LinkedinIcon size="16" />}
        aboutValue={selectedUser?.linkedin}
        isHyperLink={true}
      />
    </Box>
  );
};

export default UserAbout;
