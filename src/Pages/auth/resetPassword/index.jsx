import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthHeader from "../../../Components/layout/header/authHeader";
import { ROUTES } from "../../../router/routes";
import { Link } from "react-router-dom";
import { IMAGES } from "../../../Components/constants/assets";
import Button from "../../../Components/common/button";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const validationSchema = Yup.object({
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.AUTH_IMAGE})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <AuthHeader buttonText="Sign Up" buttonRoute={ROUTES.REGISTER} />

      <div className="relative z-10 bg-bgGray p-8 rounded-3xl shadow-lg w-[400px] text-white">
        <h2 className="text-center text-3xl md:text-5xl font-normal mb-2 uppercase font-bebas">
          RESET PASSWORD
        </h2>

        <Formik
          initialValues={{ newPassword: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Reset Password Data:", values);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <div className="mb-4 relative">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  placeholder="New Password"
                  className={`w-full px-4 py-2 bg-bgGray text-paragraphColor rounded-md border focus:outline-none focus:ring-2  placeholder-paragraphColor ${
                    errors.newPassword && touched.newPassword
                      ? "border-red-500"
                      : "border-borderColor"
                  }`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <IoEyeOffOutline className="text-borderColor" />
                  ) : (
                    <MdOutlineRemoveRedEye className="text-borderColor" />
                  )}
                </button>
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="text-red-500 pt-2 text-sm"
                />
              </div>

              <div className="mb-4 relative">
                <Field
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className={`w-full px-4 py-2 bg-bgGray text-paragraphColor rounded-md border focus:outline-none focus:ring-2 placeholder-paragraphColor ${
                    errors.confirmPassword && touched.confirmPassword
                      ? "border-red-500"
                      : "border-borderColor"
                  }`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-white"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <IoEyeOffOutline className="text-borderColo " />
                  ) : (
                    <MdOutlineRemoveRedEye className="text-borderColor" />
                  )}
                </button>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 pt-2 text-sm"
                />
              </div>

              <Button className="w-full" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
