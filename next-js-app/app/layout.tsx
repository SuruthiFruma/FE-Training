"use client";
import "./globals.css";

import brand from "@adaptavant/eds-brands/setmore";
import { Root, Box } from "@adaptavant/eds-core";
import translations from "@adaptavant/eds-translations/english";
import { Loading } from "@adaptavant/eds-core";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import CustomerHeader from "./components/CustomerHeader.tsx";
import CustomerPanel from "./components/CustomerPanel.tsx";
import { UserContext } from "./context/userContext";
import { UserResponse } from "../util/types";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [allUserData, setAllUserData] = useState<UserResponse>({});
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [notes, setNotes] = useState<string>("");
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
  useEffect(() => {
    if (notes) setNotes("");
  }, [selectedUser]);
  return (
    <html lang="en">
      <body className="h-screen w-screen">
        <UserContext.Provider value={{ allUserData }}>
          <Root brand={brand} colorScheme="light" translations={translations}>
            {Object.keys(allUserData).length === 0 ? (
              <Box
                as="div"
                className="h-screen flex justify-center items-center"
              >
                <Loading size="80" />
              </Box>
            ) : (
              <Box as="div" className="flex">
                <CustomerPanel
                  allUserData={allUserData}
                  setSelectedUser={setSelectedUser}
                />
                <CustomerHeader
                  children={children}
                  selectedUser={selectedUser}
                  notes={notes}
                  setNotes={setNotes}
                />
              </Box>
            )}
          </Root>
        </UserContext.Provider>
      </body>
    </html>
  );
}
