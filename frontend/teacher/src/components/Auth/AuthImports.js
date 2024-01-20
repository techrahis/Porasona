import React from "react";
import LoginImage from "@/assets/login.png";
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
import { setIsAuthenticated } from "@/redux/Slice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { UserRound } from 'lucide-react';
import { loginSchema, signupSchema } from "./AuthSchema";
import { loginDefaultValues, signupDefaultValues } from "./AuthSchema";

export {
  React,
  LoginImage,
  loginSchema,
  signupSchema,
  loginDefaultValues,
  signupDefaultValues,
  SignupImage,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Logo,
  yup,
  yupResolver,
  useForm,
  Button,
  setIsAuthenticated,
  useDispatch,
  useNavigate,
  Link,
  Mail,
  LockKeyhole,
  UserRound
} ;
