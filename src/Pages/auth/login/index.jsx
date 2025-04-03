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
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.AUTH_IMAGE})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <AuthHeader buttonText="Sign Up" buttonRoute={ROUTES.REGISTER} />

      <div className="relative z-10 bg-bgGray p-8 rounded-3xl shadow-lg w-[400px] text-white">
        <h2 className="text-center text-3xl md:text-5xl font-normal mb-2 uppercase font-bebas">
          LOGIN
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Login Data:", values);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <div className="mb-4">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className={`w-full px-4 py-2 bg-bgGray text-paragraphColor rounded-md border focus:outline-none focus:ring-2 ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-gray-600"
                  }`}
                />
                <div className="h-1 mt-1 flex items-center">
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 pt-2 text-sm"
                  />
                </div>
              </div>

              <div className="mb-4 relative">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className={`w-full px-4 py-2 bg-bgGray text-paragraphColor rounded-md border focus:outline-none focus:ring-2 ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-600"
                  }`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <IoEyeOffOutline />
                  ) : (
                    <MdOutlineRemoveRedEye />
                  )}
                </button>
                <div className="h-1 mt-1 flex items-center">
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 pt-2 text-sm"
                  />
                </div>
              </div>

              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </Form>
          )}
        </Formik>

        <div className="text-center mt-4">
          <Link
            to={ROUTES.FORGOT_PASSWORD}
            className="text-white hover:text-primary"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";
// import { IMAGES } from "../../../Components/constants/assets";
// import Button from "../../../Components/common/button";
// import AuthHeader from "../../../Components/layout/header/authHeader";
// import { ROUTES } from "../../../router/routes";

// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
// });

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false); // Toggle state

//   return (
//     <div
//       className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: `url(${IMAGES.AUTH_IMAGE})` }}
//     >
//       <div className="absolute inset-0 bg-black/70"></div>

//       <AuthHeader buttonText="Sign Up" buttonRoute={ROUTES.REGISTER} />

//       <div className="relative z-10 bg-bgGray p-8 rounded-3xl shadow-lg w-[400px] text-white">
//         <h2 className="text-center text-3xl md:text-5xl font-normal mb-2 uppercase font-bebas">
//           LOGIN
//         </h2>

//         <Formik
//           initialValues={{ email: "", password: "" }}
//           validationSchema={validationSchema}
//           onSubmit={(values) => {
//             console.log("Login Data:", values);
//           }}
//         >
//           {({ isSubmitting, errors, touched }) => (
//             <Form>
//               {/* Email Field */}
//               <div className="mb-4">
//                 <Field
//                   type="email"
//                   name="email"
//                   placeholder="Email address"
//                   className={`w-full px-4 py-2 bg-bgGray text-paragraphColor rounded-md border focus:outline-none focus:ring-2 ${
//                     errors.email && touched.email
//                       ? "border-red-500"
//                       : "border-gray-600"
//                   }`}
//                 />
//                 <div className="h-5 mt-1 flex items-center">
//                   <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="text-red-500 text-sm"
//                   />
//                 </div>
//               </div>

//               {/* Password Field with Show/Hide */}
//               <div className="mb-4 relative">
//                 <Field
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   placeholder="Password"
//                   className={`w-full px-4 py-2 bg-bgGray text-paragraphColor rounded-md border focus:outline-none focus:ring-2 pr-10 ${
//                     errors.password && touched.password
//                       ? "border-red-500"
//                       : "border-gray-600"
//                   }`}
//                 />
//                 {/* Show/Hide Icon */}
//                 <button
//                   type="button"
//                   className="absolute right-3 top-3 text-white"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? "👁" : "🔒"}
//                 </button>

//                 <div className="h-5 mt-1 flex items-center">
//                   <ErrorMessage
//                     name="password"
//                     component="div"
//                     className="text-red-500 text-sm"
//                   />
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <Button className="w-full" type="submit" disabled={isSubmitting}>
//                 {isSubmitting ? "Logging in..." : "Login"}
//               </Button>
//             </Form>
//           )}
//         </Formik>

//         {/* Forgot Password */}
//         <div className="text-center mt-4">
//           <Link
//             to={ROUTES.FORGOT_PASSWORD}
//             className="text-white hover:text-primary"
//           >
//             Forgot password?
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
