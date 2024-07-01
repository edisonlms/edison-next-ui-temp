"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSchema, LoginSchema } from "../../../../schema";
import { useFormStatus } from "react-dom";
import CardWrapper from "@/components/custom/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof ForgotPasswordSchema>) => {
    setLoading(true);
    console.log(data);
  };

  const { pending } = useFormStatus();

  return (
    <CardWrapper
      title="Forgot Password"
      label="Enter the email address associated with your account and we will email you instructions to reset your password"
      href="/auth/signin"
      linklabel="Already have an account? Sign in here"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="abc@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={pending}>
            {loading ? "loading" : "Send Email"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default ForgotPassword;
