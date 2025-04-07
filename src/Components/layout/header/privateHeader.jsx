import React, { useState, useEffect } from "react";
import { IMAGES } from "../../constants/assets";
import Button from "../../common/button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../router/routes";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button as MTButton,
} from "@material-tailwind/react";

const PrivateHeader = ({ buttonText, buttonRoute, variant }) => {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => setOpenLogoutModal((prev) => !prev);

  const handleLogoutConfirm = () => {
    toggleModal();
    navigate(ROUTES.REGISTER);
  };

  const handleButtonClick = () => {
    if (buttonText === "Log Out") {
      toggleModal();
    } else {
      navigate(buttonRoute);
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-4 py-2 transition-all duration-300 z-50 `}
      >
        <div className="cursor-pointer">
          <img
            src={IMAGES.LOGO}
            alt="Logo"
            onClick={() => navigate(ROUTES.HOME)}
            className="h-12"
          />
        </div>

        {buttonText && (
          <div>
            <Button
              variant={variant === "secondary" ? "secondary" : "primary"}
              onClick={handleButtonClick}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>

      {/* Logout Confirmation Modal */}
      <Dialog open={openLogoutModal} handler={toggleModal}>
        <DialogHeader>Confirm Logout</DialogHeader>
        <DialogBody divider>Are you sure you want to log out?</DialogBody>
        <DialogFooter>
          <MTButton
            variant="text"
            color="gray"
            onClick={toggleModal}
            className="mr-2"
          >
            No
          </MTButton>
          <MTButton
            variant="gradient"
            color="red"
            onClick={handleLogoutConfirm}
          >
            Yes, Log Out
          </MTButton>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default PrivateHeader;
