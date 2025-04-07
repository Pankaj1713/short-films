import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthHeader from "../../../Components/layout/header/authHeader";
import { ROUTES } from "../../../router/routes";
import { IMAGES } from "../../../Components/constants/assets";
import Button from "../../../Components/common/button";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("Forgot Password Data:", values);
    navigate(ROUTES.OTP);
  };
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.AUTH_IMAGE})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <AuthHeader buttonText="Login" buttonRoute={ROUTES.LOGIN} />

      <div className="relative z-10 bg-bgGray p-8 rounded-3xl shadow-lg w-[400px] text-white">
        <h2 className="text-center text-3xl md:text-5xl font-normal mb-2 uppercase font-bebas">
          Forgot Password
        </h2>

        <div className="text-paragraphColor text-center mb-4">
          Enter your registered email id to reset your password
        </div>

        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
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

              <Button className="w-full" type="submit" disabled={isSubmitting}>
                Next
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
