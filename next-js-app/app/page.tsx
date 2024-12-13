"use client";
import {
  IconButton,
  AddIcon,
  Heading,
  Track,
  Box,
  Field,
  SearchInput,
  Avatar,
  Text,
  TextLink,
  DropdownMenu,
  DropdownMenuPopover,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuList,
} from "@adaptavant/eds-core";
import AboutHeader from "./about";
import { useEffect, useState } from "react";

const Home = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      const { default: userResponse } = await import(
        "../util/usersResponse.json"
      );
      console.log(userResponse);
      setUserData(userResponse);
    };
    fetchUserData();
  }, []);
  return (
    <Box as="div" className="flex h-full">
      <Box as="div" className="w-1/4 p-7">
        <Box as="div" className="h-1/4 space-y-8">
          <Track
            railEnd={
              <IconButton
                aria-label="Click me!"
                icon={AddIcon}
                variant="accentPrimary"
              />
            }
            className="justify-between"
          >
            <Heading as="h1" className="text-heading-16">
              Customers
            </Heading>
          </Track>

          <Track
            className="justify-between"
            railEnd={
              <DropdownMenu>
                <DropdownMenuTrigger>Options</DropdownMenuTrigger>
                <DropdownMenuPopover>
                  <DropdownMenuList>
                    <DropdownMenuItem onClick={() => {}}>
                      Option 1
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {}}>
                      Option 2
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {}}>
                      Option 3
                    </DropdownMenuItem>
                  </DropdownMenuList>
                </DropdownMenuPopover>
              </DropdownMenu>
            }
          >
            <Box as="div" className="flex gap-4">
              <Text as="span" className="text-body-12">
                <TextLink variant="accentPrimary" href="#">
                  All
                </TextLink>
              </Text>
              <Text as="span" className="text-body-12">
                <TextLink variant="accentPrimary" href="#">
                  Groups
                </TextLink>
              </Text>
            </Box>
          </Track>

          <Field labelVisibility="hidden" size="standard">
            <SearchInput placeholder="Search" />
          </Field>
        </Box>

        <Box as="div" className="h-3/4 overflow-y-scroll space-y-4">
          {userData.map(user)=>(
            <Box as="div" className="flex gap-4" key={user}>
               <Avatar name={user} size="24" />
               <span className="text-body-12">{user}</span>
            </Box>

          )}
        </Box>
      </Box>
      <AboutHeader />
    </Box>
  )
};
export default Home;
