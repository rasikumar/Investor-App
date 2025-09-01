import { ApiRoute } from "@/helper/service";
import { RequestApi } from "@/helper/utils";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const CashHandles = () => {
  const Deposit = useMutation({
    mutationFn: (data) => RequestApi("post", ApiRoute.CASH_DEPOSIT, data),
    onSuccess: (res) => {
      toast.success(res.message);
      console.log(res);
    },
    onError: (res) => {
      toast.error(res.message);
    },
  });
  return { Deposit };
};

export default CashHandles;
