"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import brand from "@adaptavant/eds-brands/setmore";
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
import translations from "@adaptavant/eds-translations/english";
import Link from "next/link";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import AboutHeader from "./AboutHeader";
import CustomerPanel from './CustomerPanel'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allUserData, setAllUserData] = useState<{ [key: string]: object }>({});
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  useEffect(() => {
    const fetchUserData = async () => {
      const { default: userResponse } = await import(
        "../util/usersResponse.json"
      );
      console.log(userResponse[Object.keys(userResponse)[0]]);
      console.log(userResponse);

      setAllUserData(userResponse);
      setSelectedUser(userResponse[Object.keys(userResponse)[0]]);
      redirect(`/user/${Object.keys(userResponse)[0].replace(" ","")}`);
    };
    fetchUserData();
  }, []);

  return (
    <html lang="en">
      <body className="">
        <Root
          className="h-[800px]"
          brand={brand} 
          colorScheme="light" 
          translations={translations} 
        >
          <Box as="div" className="flex h-full">
         
              <CustomerPanel allUserData={allUserData}/>
              <AboutHeader children={children} selectedUser={selectedUser}/>
            
          </Box>
        </Root>
      </body>
    </html>
  );
}
