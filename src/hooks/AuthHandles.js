import { ApiRoute } from "@/helper/service";
import { RequestApi } from "@/helper/utils";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const Auth = () => {
  const SignUp = useMutation({
    mutationFn: (data) => RequestApi("post", ApiRoute.SIGN_UP, data),
    onSuccess: (res) => {
      localStorage.setItem("user", res.user);
      toast.success(res.message);
    },
    onError: (res) => {
        toast.error(res.message)
    }
  });

  return { SignUp };
};
export default Auth;
