import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Loading from "../loader";
import CashHandles from "@/hooks/CashHandles";

const depositSchema = z.object({
  amount: z.coerce
    .number()
    .min(1000, { message: "Minimum deposit amount is 1000" }),
});

export default function DepositForm({ className, ...props }) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // control dialog open/close
  const { Deposit } = CashHandles();

  const form = useForm({
    resolver: zodResolver(depositSchema),
    defaultValues: {
      amount: null,
    },
  });

  const onSubmit = (values) => {
    setLoading(true);
    Deposit.mutate(values, {
      onSuccess: () => {
        setLoading(false);
        form.reset();
        setOpen(false);
      },
      onError: () => {
        setLoading(false);
      },
    });
  };

  return (
    <Form {...form}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Deposit Amount</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={cn("flex flex-col gap-6", className)}
            {...props}
          >
            <DialogHeader>
              <DialogTitle>Deposit an Amount</DialogTitle>
              <DialogDescription>
                Make sure to enter the correct amount you want to deposit.
              </DialogDescription>
            </DialogHeader>

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={loading}>
                {!loading ? (
                  "Deposit"
                ) : (
                  <div className="animate-fadeIn">
                    <Loading />
                  </div>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Form>
  );
}
