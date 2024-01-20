import React from "react";
import LoginImage from "@/assets/login.png";
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
import { setIsAuthenticated } from "@/redux/Slice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { LockKeyhole } from "lucide-react";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginSchema = yup.object().shape({
    email: yup.string().email().required("Please provide email"),
    password: yup.string().min(8).required("PLease provie password"),
  });

  const form = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleSubmit = () => {
    dispatch(setIsAuthenticated());
    navigate("/");
  };
  return (
    <div className="bg-white dark:bg-black w-full h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 gap-x-4 md:grid-cols-1  w-[80%] m-auto md:w-full">
        <div className="md:hidden h-full w-[90%] flex items-center justify-center">
          <img src={LoginImage} alt="" />
        </div>
        <div className="w-[80%] m-auto md:w-[50%] sm:w-[90%] flex flex-col justify-center items-center">
          <div className="h-[2rem] w-[10rem] mb-8 md:mb-16">
            <Logo />
          </div>
          <h1 className="text-xl mb-3 font-semibold text-blue-600 underline">Sign in</h1>
          <div className="p-4 h-fit w-full md:border rounded-md">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
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
                  <Button type="submit" variant="teacher">Login</Button>
                </div>
              </form>
            </Form>
            <div className="mt-4 flex justify-center text-sm items-center gap-x-2">
              <p>Don't have an account ? </p>
              <Link
                to="/signup"
                className="text-base text-blue-600 font-semibold underline"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
