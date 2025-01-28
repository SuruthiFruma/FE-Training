import { Box, Text, TextLink } from "@adaptavant/eds-core";

const AboutUnit = ({ aboutIcon, aboutValue, isHyperLink = false }) => (
  <Box className="flex gap-4">
    {aboutIcon}
    {isHyperLink ? (
      <Text className="text-body-12">
        <TextLink variant="neutralPrimary" href="#">
          {aboutValue}
        </TextLink>
      </Text>
    ) : (
      <Box as="div" className="flex flex-col justify-center gap-2">
        <Box as="span">{aboutValue}</Box>
      </Box>
    )}
  </Box>
);
export default AboutUnit;
