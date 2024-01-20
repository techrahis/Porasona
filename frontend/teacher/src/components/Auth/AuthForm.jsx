import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Mail,
  LockKeyhole,
  Input,
  Button,
  UserRound,
  Link,
} from "./AuthImports";
const AuthForm = ({ form, handleSubmit }) => {
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          {location.pathname === "/signup" && (
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
                        border-b-2 w-[90%] bg-transparent
                        outline-none"
                      />
                      <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-0 text-blue-600">
                        <UserRound />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
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
                      border-b-2 w-[90%] bg-transparent
                      outline-none"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 md:left-0 left-2 text-blue-600">
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
                      border-b-2 w-[90%] bg-transparent
                      outline-none"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-0 text-blue-600">
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
              {location.pathname === "/signup" ? "Signup" : "Login"}
            </Button>
          </div>
        </form>
      </Form>
      <div className="mt-4 flex justify-center text-sm items-center gap-x-2">
        <p>
          {location.pathname === "/signup"
            ? "Already have an account ? "
            : "Don't have an account ? "}
        </p>
        <Link
          to={location.pathname === "/signup" ? "/login" : "/signup"}
          className="text-base text-blue-600 font-semibold underline"
        >
          {location.pathname === "/signup" ? "Login" : "Signup"}
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;
