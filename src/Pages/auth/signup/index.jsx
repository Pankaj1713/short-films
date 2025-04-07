import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthHeader from "../../../Components/layout/header/authHeader";
import { ROUTES } from "../../../router/routes";
import { IMAGES } from "../../../Components/constants/assets";
import Button from "../../../Components/common/button";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  newPassword: Yup.string()
    .min(6, "New Password must be at least 6 characters")
    .required("New Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues = {
  name: "",
  email: "",
  newPassword: "",
  confirmPassword: "",
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      console.log("Sign Up Data:", values);

      navigate(ROUTES.PRICE_PLANS);
    } catch (error) {
      console.error("Sign Up Error:", error);
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.AUTH_IMAGE})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <AuthHeader buttonText="Sign Up" buttonRoute={ROUTES.REGISTER} />

      <div className="relative z-10 bg-bgGray p-8 rounded-3xl shadow-lg w-[400px] text-white">
        <h2 className="text-center text-3xl md:text-5xl font-normal mb-2 uppercase font-bebas">
          Sign Up
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <div className="mt-1 mb-2">
                <Field
                  type="name"
                  name="name"
                  placeholder="Full name"
                  className={`w-full px-4 py-2 bg-bgGray text-paragraphColor rounded-md border focus:outline-none focus:ring-2  ${
                    errors.name && touched.name
                      ? "border-red-500"
                      : "border-borderColor"
                  }`}
                />
                <div className="h-5 mt-1">
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="mt-1 mb-2">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className={`w-full px-4 py-2 bg-bgGray text-paragraphColor rounded-md border focus:outline-none focus:ring-2  ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-borderColor"
                  }`}
                />
                <div className="h-5 mt-1">
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div className="relative mt-1 mb-2">
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
                <div className="h-5 mt-2">
                  <ErrorMessage
                    name="newPassword"
                    component="div"
                    className="text-red-500 my-2 text-sm"
                  />
                </div>
              </div>

              <div className="relative mt-1 mb-2">
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
                <div className="h-5 mt-1">
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 mt-1 text-sm"
                  />
                </div>
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

export default Signup;
