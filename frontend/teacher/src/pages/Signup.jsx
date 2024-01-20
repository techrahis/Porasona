import React from "react";
import SignupImage from "@/assets/signup.png";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Navbar/Logo";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { UserRound } from 'lucide-react';
const Signup = () => {
  const navigate = useNavigate();
  const signUpValidationSchema = yup.object().shape({
    username: yup.string().required("Please provide username"),
    email: yup.string().email().required("Please provide email"),
    password: yup.string().required("Please provide password"),
  });

  const form = useForm({
    resolver: yupResolver(signUpValidationSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const handleSubmit = (values) => {
    navigate("/login");
  };
  return (
    <div className="bg-white dark:bg-black w-full h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 gap-x-4 md:grid-cols-1  w-[80%] m-auto md:w-full">
        <div className="w-[80%] m-auto md:w-[50%] sm:w-[90%] flex flex-col justify-center items-center">
          <div className="h-[2rem] w-[10rem] mb-8 md:mb-16">
            <Logo />
          </div>
          <h1 className="text-xl mb-3 font-semibold text-blue-600 underline">
            Sign up
          </h1>
          <div className="p-4 h-fit w-full md:border md:rounded-md">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <FormField
                  name="username"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <div className="relative flex justify-end border-b border-blue-300">
                          <Input
                            placeholder="Enter Username"
                            {...field}
                            className="px-4 border-none 
                      border-b-2 w-[91%] bg-transparent
                        border-red-400 outline-none"
                          />
                          <div className="absolute top-1/2 -translate-y-1/2 left-2 text-blue-600">
                            <UserRound />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative flex justify-end border-b border-blue-300">
                          <Input
                            placeholder="Enter email"
                            {...field}
                            className="px-4 border-none 
                      border-b-2 w-[91%] bg-transparent
                        border-red-400 outline-none"
                          />
                          <div className="absolute top-1/2 -translate-y-1/2 left-2 text-blue-600">
                            <Mail />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative flex justify-end border-b border-blue-300">
                          <Input
                            placeholder="Enter Password"
                            {...field}
                            className="px-4 border-none 
                      border-b-2 w-[91%] bg-transparent
                        border-red-400 outline-none"
                          />
                          <div className="absolute top-1/2 -translate-y-1/2 left-2 text-blue-600">
                            <LockKeyhole />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center items-center">
                  <Button type="submit" variant="teacher">
                    Signup
                  </Button>
                </div>
              </form>
            </Form>
            <div className="mt-4 flex justify-center text-sm items-center gap-x-2">
              <p>Already have an account ? </p>
              <Link
                to="/login"
                className="text-base text-blue-600 font-semibold underline"
              >
                Signin
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden h-full w-[90%] flex items-center justify-center">
          <img src={SignupImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
