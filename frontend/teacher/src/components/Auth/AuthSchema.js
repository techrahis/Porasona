import { yup } from "./AuthImports";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Please provide email"),
  password: yup.string().min(8).required("PLease provie password"),
});

export const loginDefaultValues = {
  email: "",
  password: "",
};

export const signupDefaultValues = {
  username: "",
  email: "",
  password: "",
};

export const signupSchema = yup.object().shape({
  username: yup.string().required("Please provide username"),
  email: yup.string().email().required("Please provide email"),
  password: yup.string().required("Please provide password"),
});
