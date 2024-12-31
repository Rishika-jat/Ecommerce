import React, { useState, useEffect } from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import shopping from "../../assets/Shopping.png";
import { IoIosLogOut } from "react-icons/io";

const initialValues = {
  Name: "",
  email: "",
  password: ""
};

const validationSchema = Yup.object({
  Name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[!@#$%^&*()_{}?><~]/, "Password must contain at least one special character")
    .required("Password is required")
});

const Register = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (storedUserDetails) {
      setUserDetails(storedUserDetails);
      setIsLoggedIn(true);
    }
  }, []);

  const onSubmit = (values) => {
    const userDetails = {
      Name: values.Name,
      email: values.email,
      password: values.password
    };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setUserDetails(userDetails);
    setIsLoggedIn(true);
  };

  const handleDiscoverNow = () => {
    navigate('/shop');
  };

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    setUserDetails(null);
    setIsLoggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div className="flex justify-center items-center mt-10">
          <div className="w-96 px-10 py-5 pb-10 bg-gray-50">
            <h1>Create an Account</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="text-gray-500 flex gap-5 flex-col">
                <div className="flex flex-col gap-2">
                  <label htmlFor="Name" className="text-sm">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="Name"
                    name="Name"
                    className="h-7 w-72 px-3 py-2 focus:shadow-lg focus:outline-none focus:border-0 text-base font-bold"
                    placeholder="Enter your name"
                  />
                  <ErrorMessage name="Name" component="div" className="text-red-500 text-xs" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="h-7 w-72 px-3 py-2 focus:shadow-lg focus:outline-none focus:border-0 text-base font-bold"
                    placeholder="Enter Email"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="h-7 w-72 px-3 py-2 focus:shadow-lg focus:outline-none focus:border-0 text-base font-bold"
                    placeholder="Enter Password"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
                </div>

                <div>
                  <button className="color-blue w-80 py-3 text-white border-0 font-bold rounded-sm" type="submit">
                    Create
                  </button>
                </div>
              </Form>
            </Formik>

            <button className="border-0 text-blue-500 bg-white">
              Already have an account?
            </button>
          </div>
        </div>
      ) : (
      
        <div className="mt-10">

             <div className="flex items-end justify-end  w-full bg-transparent ">
          <button onClick={handleLogout} className="border-0 bg-white "><IoIosLogOut className="text-3xl mr-10"  /></button>   
             </div>   
        <div className="flex items-center justify-around -mt-28">
          <div>
            <img src={shopping} alt="shopping" width={700} />
          </div>
          <div className="flex flex-col items-start justify-center mb-28 mr-20">
            <h1 style={{ fontFamily: "cursive" }} className="text-8xl line-coverage">
              Welcome, <br /> {userDetails.Name}!
            </h1>
            <button className="color-blue text-white font-bold border-0 px-5 py-3" onClick={handleDiscoverNow}>
              Let's Shopping!
            </button>
           
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Register;
