"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Spinner } from "@/components/ui/Spinner";
import { trialRequestSchema } from "@/lib/validations";

type FormData = z.infer<typeof trialRequestSchema>;

export function FreeTrialForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(trialRequestSchema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/trial", {
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
        <h3 className="font-display text-display-sm text-neutral-50">You&apos;re on the list!</h3>
        <p className="mt-2 text-body-md text-neutral-400">Check your email for trial access details.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" {...register("name")} className="mt-2" />
        {errors.name && <p className="mt-1 text-body-xs text-error">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="email">Work Email</Label>
        <Input id="email" type="email" {...register("email")} className="mt-2" />
        {errors.email && <p className="mt-1 text-body-xs text-error">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="company">Company</Label>
        <Input id="company" {...register("company")} className="mt-2" />
        {errors.company && <p className="mt-1 text-body-xs text-error">{errors.company.message}</p>}
      </div>
      <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />
      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full">
        {status === "loading" ? <Spinner /> : "Start free trial"}
      </Button>
      {status === "error" && <p className="text-body-sm text-error">Something went wrong. Please try again.</p>}
    </form>
  );
}
