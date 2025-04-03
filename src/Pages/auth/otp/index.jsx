import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthHeader from "../../../Components/layout/header/authHeader";
import { ROUTES } from "../../../router/routes";
import { IMAGES } from "../../../Components/constants/assets";
import Button from "../../../Components/common/button";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";

const validationSchema = Yup.object({
  otp: Yup.string()
    .length(4, "OTP must be 4 digits")
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .required("OTP is required"),
});

const Otp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("OTP Data:", values);
    navigate(ROUTES.RESET_PASSWORD);
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
          Verify OTP
        </h2>

        <div className="text-paragraphColor text-center py-2">
          Please enter the OTP you received on your registered email id
          <span className="font-semibold text-white">
            {" "}
            johndoe123@gmail.com
          </span>
        </div>

        <Formik
          initialValues={{ otp: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, errors, touched, isSubmitting }) => (
            <Form>
              <div className="flex justify-center gap-2 mt-4">
                <OtpInput
                  value={values.otp}
                  onChange={(otp) => setFieldValue("otp", otp)}
                  numInputs={4}
                  renderInput={(props, index) => (
                    <input
                      {...props}
                      style={{ width: "80px", height: "72px" }}
                      className={`border rounded-lg bg-transparent text-white text-xl text-center focus:outline-none focus:ring-2 
        ${
          errors.otp && touched.otp
            ? "border-red-500 focus:ring-red-500"
            : "border-borderColor focus:ring-orange-500"
        }
        mx-2 caret-orange-500`}
                    />
                  )}
                />
              </div>

              <div className="h-5 mt-2 text-red-500 text-sm text-center">
                <ErrorMessage name="otp" />
              </div>

              <Button
                className="w-full mt-4"
                type="submit"
                disabled={isSubmitting}
              >
                Verify
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Otp;
