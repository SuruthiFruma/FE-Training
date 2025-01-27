import React, { useEffect } from "react";
import { useState, useContext, useRef } from "react";
import { UserContext } from "../context/userContext";
import { DeleteModal } from "./DeleteModal";
import {
  Box,
  Track,
  MapPinIcon,
  PhoneIcon,
  BankIcon,
  GlobeIcon,
  MailIcon,
  BirthdayIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedinIcon,
  Field,
  Textarea,
  DeleteIcon,
  EditIcon,
  Button,
  Stack,
} from "@adaptavant/eds-core";
import AboutUnit from "./AboutUnit";
import { ST } from "next/dist/shared/lib/utils";
const UserNotes: React.FC = ({ selectedUser, notes, setNotes }) => {
  console.log(selectedUser?.firstName);
  const { allUserData } = useContext(UserContext);
  const [isEditFocused, setIsEditFocused] = useState(false);
  const [storedNotes, setStoredNotes] = useState<string | null>(null);
  const [rerender, setRerender] = useState({});
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    console.log("inside useeffect");
    setStoredNotes(
      localStorage.getItem(`userNotes-${selectedUser?.firstName}`)
    );
  });
  useEffect(() => {
    setNotes(storedNotes);
  }, [isEditFocused]);
  function onModalOpen() {
    setOpenModal(true);
    console.log("modal opened");
    document.querySelector("body").style.overflow = "hidden";
  }

  function onModalClose() {
    setOpenModal(false);
    console.log("modal close");
    document.querySelector("body").style.overflow = "unset";
  }
  return storedNotes ? (
    <Box as="div" className="flex m-4 gap-4">
      {isEditFocused ? (
        <Box as="div">
          <Field size="large" className="w-[540px]">
            <Textarea
              className=" h-[152px]"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </Field>
          <Track
            className="mt-4 w-[540px]"
            railEnd={
              <>
                <Button
                  variant="neutralTertiary"
                  onClick={() => {
                    setNotes("");
                    setIsEditFocused(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="accentPrimary"
                  isDisabled={!notes}
                  onClick={() => {
                    localStorage.setItem(
                      `userNotes-${selectedUser?.firstName}`,
                      notes
                    );
                    setNotes("");
                    setIsEditFocused(false);
                    setRerender({});
                  }}
                >
                  Save
                </Button>
              </>
            }
          ></Track>
        </Box>
      ) : (
        <Box
          as="div"
          className="w-[540px] text-body-12 text-justify inline-block"
        >
          {storedNotes}
        </Box>
      )}

      <Box as="div" onClick={() => setIsEditFocused(true)}>
        <EditIcon size="16" className="cursor-pointer" />
      </Box>
      <Box as="div" onClick={onModalOpen}>
        <DeleteIcon size="16" className="cursor-pointer" />
      </Box>
      <DeleteModal
        openModal={openModal}
        onModalClose={onModalClose}
        selectedUser={selectedUser}
      />
    </Box>
  ) : (
    <Box as="div" className="pt-3">
      <Field size="large" className="w-[540px]">
        <Textarea
          className=" h-[152px]"
          placeholder="Add a note"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </Field>
      <Track
        className="mt-4 w-[540px]"
        railEnd={
          <>
            <Button variant="neutralTertiary" onClick={() => setNotes("")}>
              Cancel
            </Button>
            <Button
              variant="accentPrimary"
              isDisabled={!notes}
              onClick={() => {
                localStorage.setItem(
                  `userNotes-${selectedUser?.firstName}`,
                  notes
                );
                setNotes("");
              }}
            >
              Save
            </Button>
          </>
        }
      ></Track>
    </Box>
  );
};

export default UserNotes;
