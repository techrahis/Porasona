import AuthForm from "@/components/Auth/AuthForm";
import {
  React,
  SignupImage,
  Logo,
  yupResolver,
  useForm,
  useNavigate,
  signupSchema,
  signupDefaultValues,
} from "@/components/Auth/AuthImports";
const Signup = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: signupDefaultValues,
  });
  const handleSubmit = (values) => {
    console.log(values)
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
            <AuthForm form={form} handleSubmit={handleSubmit} />
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
