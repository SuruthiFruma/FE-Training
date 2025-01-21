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
  LinkedinIcon,
} from "@adaptavant/eds-core";
import AboutUnit from "./AboutUnit";
const UserAbout: React.FC = ({ selectedUser }) => {
  const { allUserData } = useContext(UserContext);
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
          <Box
            as="span"
            className="cursor-pointer hover:bg-neutral-active p-2 hover:rounded-full"
          >{`( +${selectedUser?.phoneNumbers.length - 2} )`}</Box>
        </Track>
      </Box>

      {/* Email */}
      <Box className="flex gap-4">
        <MailIcon size="16" />
        <Box as="div" className="flex flex-col gap-2">
          {selectedUser?.emails.map((email) => (
            <Box as="span" key={email}>
              {email}
            </Box>
          ))}
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
