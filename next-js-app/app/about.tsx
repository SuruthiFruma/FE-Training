"use client";

import {
  AddIcon,
  Box,
  IconButton,
  Track,
  Stack,
  Avatar,
  Heading,
} from "@adaptavant/eds-core";
import Link from "next/link";

const AboutHeader = ({ children , selectedUser}) => (
  <Box as="div" className="w-3/4">
    <Box as="div" className="h-1/4">
      <Stack>
        <Box as="div">
          <Box as="div" className="flex">
            <Avatar name={`${selectedUser.firstName}`} size="64" />
            <Box as="div">
              <Heading as="h2" className="text-heading-16">
                Suruthi Fruma
              </Heading>
              <Box as="span" className="text-body-12">
                Portland , US, 5:59PM
              </Box>
            </Box>
          </Box>
        </Box>
        <Track className="gap-4">

          <Box as="span" className="text-body-12">
            About
            </Box>

          <Box as="span" className="text-body-12">
            Notes
          </Box>
          <Box as="span" className="text-body-12">
            Appointments
          </Box>
          <Box as="span" className="text-body-12">
            Updates
          </Box>
        </Track>
      </Stack>
    </Box>

    {/* TODO */}
    <Box as="div" className="h-3/4">
      {children}
    </Box>
  </Box>
);
export default AboutHeader;
