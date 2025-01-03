import { Box } from "@adaptavant/eds-core";

const AboutUnit = ({ aboutIcon, aboutValue, isHyperLink = false }) => (
  <Box className="flex gap-4">
    {aboutIcon}
    <Box as="div" className="flex flex-col justify-center gap-2">
      <Box as="span">{aboutValue}</Box>
    </Box>
  </Box>
);
export default AboutUnit;
