"use client";

import {
  AddIcon,
  Box,
  IconButton,
  Track,
  Stack,
  Avatar,
  Heading,
  Tabs,
  TabList,
  TabItem,
  TabContent,
} from "@adaptavant/eds-core";
import Link from "next/link";
import UserAbout from "./UserAbout";
const CustomerHeader = ({ children, selectedUser }) => (
  <Box as="div" className="w-3/4">
    <Box as="div" className="h-1/4 p-8">
      <Stack>
        <Box as="div">
          <Box as="div" className="flex gap-4 justify-center items-center">
            <Avatar name={`${selectedUser?.firstName}`} size="64" />
            <Box as="div">
              <Heading as="h2" className="text-heading-16">
                {`${selectedUser?.firstName} ${selectedUser?.lastName} `}
              </Heading>
              <Box as="span" className="text-body-12">
                {`${selectedUser?.city} , ${selectedUser?.country} , ${selectedUser?.time}`}
              </Box>
            </Box>
          </Box>
        </Box>

        <Tabs defaultValue="About" className="mt-8">
          <TabList>
            <TabItem value="about">About</TabItem>
            <TabItem value="notes">Notes</TabItem>
            <TabItem value="integration">Integration</TabItem>
            <TabItem value="updates">Updates</TabItem>
          </TabList>
          <TabContent value="about">
            <UserAbout />
          </TabContent>
          <TabContent value="notes">{}</TabContent>
          <TabContent value="integration">{}</TabContent>
          <TabContent value="updates">{}</TabContent>
        </Tabs>
      </Stack>
    </Box>

    {/* TODO */}
    <Box as="div" className="h-3/4">
      {" "}
      {children}
    </Box>
  </Box>
);
export default CustomerHeader;
