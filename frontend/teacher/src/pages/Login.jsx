import {
  React,
  LoginImage,
  Logo,
  yupResolver,
  useForm,
  setIsAuthenticated,
  useDispatch,
  useNavigate,
  loginSchema,
  loginDefaultValues
} from "@/components/Auth/AuthImports";
import AuthForm from "@/components/Auth/AuthForm";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: loginDefaultValues,
  });
  const handleSubmit = (values) => {
    console.log(values)
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
          <h1 className="text-xl mb-3 font-semibold text-blue-600 underline">
            Sign in
          </h1>
          <div className="p-4 h-fit w-full md:border rounded-md">
            <AuthForm form={form} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
