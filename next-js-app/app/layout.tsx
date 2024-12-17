"use client";
import "./globals.css";

import brand from "@adaptavant/eds-brands/setmore";
import { Root, Box } from "@adaptavant/eds-core";
import translations from "@adaptavant/eds-translations/english";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import AboutHeader from "./AboutHeader";
import CustomerPanel from "./CustomerPanel";
import { UserResponse } from "../util/types";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allUserData, setAllUserData] = useState<UserResponse>({});
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
      redirect(`/user/${Object.keys(userResponse)[0].replace(" ", "")}`);
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
            <CustomerPanel
              allUserData={allUserData}
              setSelectedUser={setSelectedUser}
            />
            <AboutHeader children={children} selectedUser={selectedUser} />
          </Box>
        </Root>
      </body>
    </html>
  );
}
