// "use client";
// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// import brand from "@adaptavant/eds-brands/setmore";
// import { Root } from "@adaptavant/eds-core";
// import translations from "@adaptavant/eds-translations/english";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="">
//         <Root
//           className="h-[800px]"
//           brand={brand} // brand config and tokens
//           colorScheme="light" // preferred color scheme
//           translations={translations} // preferred language for text that is built into components
//         >
//           {children}
//         </Root>
//       </body>
//     </html>
//   );
// }
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userData, setUserData] = useState<{ [key: string]: object }>({});
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  useEffect(() => {
    const fetchUserData = async () => {
      const { default: userResponse } = await import(
        "../util/usersResponse.json"
      );
      console.log(userResponse[Object.keys(userResponse)[0]]);
      console.log(userResponse);

      setUserData(userResponse);
      setSelectedUser(userResponse[Object.keys(userResponse)[0]]);
      redirect(`/user/${Object.keys(userResponse)[0]}`);
    };
    fetchUserData();
  }, []);

  return (
    <html lang="en">
      <body className="">
        <Root
          className="h-[800px]"
          brand={brand} // brand config and tokens
          colorScheme="light" // preferred color scheme
          translations={translations} // preferred language for text that is built into components
        >
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

                <Field label="Search" labelVisibility="hidden" size="standard">
                  <SearchInput placeholder="Search" />
                </Field>
              </Box>

              <Box as="div" className="h-3/4 overflow-y-scroll space-y-4">
                {Object.keys(userData).map((user) => (
                  <Link
                    href={`/user/${user}`}
                    key={user}
                    className="flex gap-4"
                  >
                    <Avatar name={user} size="24" />
                    <span className="text-body-12">{user}</span>
                  </Link>
                ))}
              </Box>
            </Box>
            <Box as="div" className="flex">
              {children}
            </Box>
          </Box>
        </Root>
      </body>
    </html>
  );
}
