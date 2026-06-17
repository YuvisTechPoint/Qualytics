"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Label } from "@/components/ui/Label";
import { Spinner } from "@/components/ui/Spinner";
import { contactSchema } from "@/lib/validations";

type FormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-success/30 bg-success/10 p-8 text-center">
        <h3 className="font-display text-display-sm text-neutral-50">Message sent!</h3>
        <p className="mt-2 text-body-md text-neutral-400">We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" {...register("firstName")} className="mt-2" />
          {errors.firstName && <p className="mt-1 text-body-xs text-error">{errors.firstName.message}</p>}
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" {...register("lastName")} className="mt-2" />
          {errors.lastName && <p className="mt-1 text-body-xs text-error">{errors.lastName.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} className="mt-2" />
        {errors.email && <p className="mt-1 text-body-xs text-error">{errors.email.message}</p>}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" {...register("company")} className="mt-2" />
        </div>
        <div>
          <Label htmlFor="jobTitle">Job Title</Label>
          <Input id="jobTitle" {...register("jobTitle")} className="mt-2" />
        </div>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" {...register("message")} className="mt-2" />
        {errors.message && <p className="mt-1 text-body-xs text-error">{errors.message.message}</p>}
      </div>
      <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />
      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full">
        {status === "loading" ? <Spinner /> : "Send message"}
      </Button>
      {status === "error" && <p className="text-body-sm text-error">Something went wrong. Please try again.</p>}
    </form>
  );
}
