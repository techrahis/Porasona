import React from "react";
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
    navigate("/login")
  };
  return (
    <div className="h-screen flex justify-center items-center flex-col bg-white dark:bg-black">
      <Logo />
      <h1 className="text-xl mb-3">Signup</h1>
      <div className="border border-gray-500 p-4 w-[30%] md:w-[50%] sm:w-[90%] h-fit">
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
                    <Input placeholder="Enter email" {...field} />
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
                    <Input placeholder="Enter email" {...field} />
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
                    <Input placeholder="Enter password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center items-center">
              <Button type="submit">Signup</Button>
            </div>
          </form>
        </Form>

        <div className="mt-4 flex justify-center text-sm items-center gap-x-2">
          <p>Already have an account ? </p>
          <Link to="/login" className="text-base text-blue-600 font-semibold underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
