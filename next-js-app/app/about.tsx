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

const AboutHeader = () => (
  // <Box as="div" className="w-3/4">
  //   <Box as="div" className="h-1/4 flex flex-col">
  //     <Box as="div" className="flex justify-between">
  //       <Box as="div" className="flex">
  //         <span className="w-6 h-6 rounded-full bg-zinc-500">A</span>
  //         <Box as="div" className="">
  //           <h2>Adam Carter</h2>
  //           <span>Portland US</span>
  //         </Box>
  //       </Box>
  //     </Box>
  //     <Box as="div" className="flex flex-wrap">
  //       <nav>
  //         <a>About</a>
  //         <a>Notes</a>
  //         <a>Appointments</a>
  //         <a>Updates</a>
  //       </nav>
  //     </Box>
  //   </Box>

  //   <Box as="div" className="h-3/4"></Box>
  // </Box>
  <Box as="div" className="w-3/4">
    <Box as="div" className="h-1/4">
      <Stack>
        <Box as="div">
          <Box as="div" className="flex">
            <Avatar name="Suruthi" size="64" />
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
    <Box as="div" className="h-3/4"></Box>
  </Box>
);
export default AboutHeader;
