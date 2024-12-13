"use client";
import {
  IconButton,
  AddIcon,
  Heading,
  Track,
  Box,
  Field,
  SearchInput,
} from "@adaptavant/eds-core";
import AboutHeader from "./about";

const Home = () => (
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

        <Track railEnd={<span>Options</span>}>
          <Box as="div">
            <span className="mr-8">All</span>
            <span>Groups</span>
          </Box>
        </Track>

        <Field labelVisibility="hidden" size="standard">
          <SearchInput placeholder="Search" />
        </Field>
      </Box>

      <Box as="div" className="h-3/4 overflow-y-scroll space-y-4">
        {Array.from({ length: 30 }, (_, i) => i + 1).map((item) => {
          return (
            <Box as="div" className="flex gap-4" key={item}>
              <Box as="div" className="w-6 h-6 rounded-full bg-gray-400">
                <span className="text-white">S</span>
              </Box>
              <span>Name {item}</span>
            </Box>
          );
        })}
      </Box>
    </Box>

    <AboutHeader />
  </Box>
);
export default Home;
