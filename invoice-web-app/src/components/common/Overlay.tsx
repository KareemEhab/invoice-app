import { Box } from "@chakra-ui/react";

interface Props {
  onClick: () => void;
}

const Overlay = ({ onClick }: Props) => {
  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundColor="rgba(0, 0, 0, 0.5)" // Black color with 50% opacity
      zIndex={0}
      position="fixed"
      top={0}
      left={0}
      onClick={onClick}
    ></Box>
  );
};

export default Overlay;
