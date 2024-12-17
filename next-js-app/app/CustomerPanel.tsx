 import {
  Root,
  Box,
  Track,
  Heading,
  IconButton,
  AddIcon,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPopover,
  DropdownMenuList,
  DropdownMenuItem,
  Text,
  TextLink,
  Field,
  SearchInput,
  Avatar,
} from "@adaptavant/eds-core";
import Link from "next/link";
import { useEffect, useState } from "react";

const CustomerPanel = ({allUserData,setSelectedUser}) => {

 	return (<Box as="div" className="w-1/4 p-5">
              <Box as="div" className="h-1/4 space-y-5">
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
                      <TextLink variant="regular" href="#">
                        Groups
                      </TextLink>
                    </Text>
                  </Box>
                </Track>

                <Field label="Search" labelVisibility="hidden" size="standard">
                  <SearchInput placeholder="Search"/>
                </Field>
              </Box>

              <Box as="div" className="h-3/4 overflow-y-scroll space-y-4">
                {Object.keys(allUserData).map((user) => (
                  <Link
                    href={`/user/${user.replace(" ","")}`}
                    key={user}
                    className="flex gap-4"
                  >
                    <Avatar name={user} size="24" />
                    <span className="text-body-12" onClick={()=>setSelectedUser(allUserData[user])}>{user}</span>
                  </Link>
                ))}
              </Box>
            </Box>)
 }
 

 export default CustomerPanel;
