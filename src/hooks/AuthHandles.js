import { ApiRoute } from "@/helper/service";
import { RequestApi } from "@/helper/utils";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const Auth = () => {
  const SignUp = useMutation({
    mutationFn: (data) => RequestApi("post", ApiRoute.SIGN_UP, data),
    onSuccess: (res) => {
      toast.success(res.message);
    },
    onError: (res) => {
      toast.error(res.message);
    },
  });
  const OTPVerify = useMutation({
    mutationFn: ({data , userId}) => RequestApi("post", `${ApiRoute.VERIFY_USER}/${userId}`, data),
    onSuccess: (res) => {
      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("token", res.token);
      toast.success(res.message);
    },
    onError: (res) => {
      toast.error(res.message);
    },
  });

  return { SignUp, OTPVerify };
};
export default Auth;
