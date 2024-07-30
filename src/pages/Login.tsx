import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { varifyToken } from "../utils/varifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [login, { error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  console.log("Error", error);
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in", {
      duration: 2000,
      position: "top-center",
    });
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = varifyToken(res.data.accessToken) as TUser;
      console.log(user);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Something is wrong", {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default Login;
//
