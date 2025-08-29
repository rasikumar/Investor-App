import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import Loading from "../loader";
import Auth from "@/hooks/AuthHandles";
import { useNavigate } from "react-router";
import { ClientRoutes } from "@/const/ClientRoutes";

const FormSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const OtpForm = ({ userId }) => {
  const [loading, setLoading] = useState(false);
  const auth = Auth();
  const { OTPVerify } = auth;
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: "",
    },
  });
  const onSubmit = (value) => {
    const data = {
      otp: parseInt(value.otp, 10),
    };
    console.log("data", data);
    setLoading(true);
    OTPVerify.mutate(
      { data, userId },
      {
        onSuccess: () => {
          setLoading(false);
          form.reset();
          navigate(ClientRoutes.INDEX_ROUTE);
        },
        onError: () => {
          setLoading(false);
        },
      }
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field} pattern={REGEXP_ONLY_DIGITS}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your Email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {!loading ? (
            "Submit"
          ) : (
            <div className="animate-fadeIn">
              <Loading />
            </div>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default OtpForm;
