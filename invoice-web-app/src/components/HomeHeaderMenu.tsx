import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Checkbox,
  Image,
  HStack,
  Text,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
import { useState } from "react";

interface Props {
  setSelectedStatuses: (newStatuses: string[]) => void;
}

const NavbarMenu = ({ setSelectedStatuses }: Props) => {
  const bgColor = useColorModeValue("white", "black.400");
  const textColor = useColorModeValue("black.600", "white");
  const { isOpen, onToggle } = useDisclosure();

  const menuName = useBreakpointValue({
    base: "Filter",
    md: "Filter by status",
  });

  // Initialize state for checkbox statuses
  const [checkboxStatuses, setCheckboxStatuses] = useState<{
    [key: string]: boolean;
  }>({
    draft: true,
    pending: true,
    paid: true,
  });

  // Update selected statuses when checkbox is checked/unchecked
  const handleCheckboxChange = (status: string) => {
    const updatedStatuses = {
      ...checkboxStatuses,
      [status]: !checkboxStatuses[status],
    };

    setCheckboxStatuses(updatedStatuses);

    const selectedStatuses = Object.keys(updatedStatuses).filter(
      (key) => updatedStatuses[key]
    );

    setSelectedStatuses(selectedStatuses);
  };

  return (
    <Menu closeOnSelect={false} closeOnBlur={false}>
      <MenuButton className="hs" color={textColor} onClick={onToggle}>
        <HStack>
          <Text>{menuName}</Text>
          <Image src={isOpen ? arrowUp : arrowDown} />
        </HStack>
      </MenuButton>
      <MenuList marginTop="1rem" bg={bgColor}>
        <MenuItem bg="none" _hover={{ bg: "none" }}>
          <Checkbox
            className="hs"
            color={textColor}
            defaultChecked
            colorScheme="purple"
            onChange={() => handleCheckboxChange("draft")}
          >
            Draft
          </Checkbox>
        </MenuItem>
        <MenuItem bg="none" _hover={{ bg: "none" }}>
          <Checkbox
            className="hs"
            color={textColor}
            defaultChecked
            colorScheme="purple"
            onChange={() => handleCheckboxChange("pending")}
          >
            Pending
          </Checkbox>
        </MenuItem>
        <MenuItem bg="none" _hover={{ bg: "none" }}>
          <Checkbox
            className="hs"
            color={textColor}
            defaultChecked
            colorScheme="purple"
            onChange={() => handleCheckboxChange("paid")}
          >
            Paid
          </Checkbox>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavbarMenu;
