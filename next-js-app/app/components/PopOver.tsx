import React from "react";

import {
  Box,
  Popover,
  Button,
  Text,
  Emoji,
  usePopover,
} from "@adaptavant/eds-core";

const PopOver = ({ selectedUser }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const popover = usePopover({
    matchReferenceWidth: false,
    maxHeight: 200,
    maxWidth: 200,
    offset: 4,
    placement: "bottom-start",
  });

  const { getPopoverProps, getReferenceProps } = popover;

  const triggerRef = getReferenceProps().ref;
  const popRef = getPopoverProps().ref;

  const popoverStyles = React.useMemo(
    () => getPopoverProps().style,
    [getPopoverProps]
  );

  const phoneNumbersInPopOver = selectedUser?.phoneNumbers
    ?.slice(2)
    .map((no, index) => ({
      id: index,
      value: no,
    }));
  const id = React.useId();
  const baseId = `dropdown-${id}`;
  const autoFocusOnOpen = React.useCallback(
    (node) => {
      if (node && isOpen) node.focus({ preventScroll: true });
    },
    [isOpen]
  );

  function mergeRefs(...refs) {
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref && "current" in ref) {
          ref.current = value; // Assign value to ref object
        }
      });
    };
  }

  return (
    <>
      <Box
        as="div"
        aria-controls={1}
        aria-expanded={isOpen}
        aria-haspopup={true}
        className="aria-expanded:bg-neutral-pressed aria-expanded:border-transparent"
        id={1}
        onClick={toggleOpen}
        ref={triggerRef}
        variant="neutralSecondary"
        className="cursor-pointer"
      >
        {`( +${selectedUser?.phoneNumbers?.length - 2} )`}
      </Box>

      {isOpen && (
        <Popover
          aria-labelledby={1}
          as="ul"
          id={1}
          ref={mergeRefs(autoFocusOnOpen, popRef)}
          role="listbox" // add appropriate roles
          style={popoverStyles}
          tabIndex={-1}
          key={1}
        >
          {phoneNumbersInPopOver.map((animal) => {
            return (
              <Box
                as="li"
                className="flex items-center gap-1 p-2 text-body-12"
                key={animal.id}
              >
                <Emoji>{animal.emoji}</Emoji>
                <Text className="text-body-12">{animal.value}</Text>
              </Box>
            );
          })}
        </Popover>
      )}
    </>
  );
};
export { PopOver };
