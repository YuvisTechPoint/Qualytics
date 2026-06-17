"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Label } from "@/components/ui/Label";
import { Select } from "@/components/ui/Select";
import { Spinner } from "@/components/ui/Spinner";
import { demoRequestSchema } from "@/lib/validations";

type FormData = z.infer<typeof demoRequestSchema>;

export function DemoRequestForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(demoRequestSchema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/demo", {
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
        <h3 className="font-display text-display-sm text-neutral-50">Thank you!</h3>
        <p className="mt-2 text-body-md text-neutral-400">
          We&apos;ll be in touch within one business day.
        </p>
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
        <Label htmlFor="email">Work Email</Label>
        <Input id="email" type="email" {...register("email")} className="mt-2" />
        {errors.email && <p className="mt-1 text-body-xs text-error">{errors.email.message}</p>}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" {...register("company")} className="mt-2" />
          {errors.company && <p className="mt-1 text-body-xs text-error">{errors.company.message}</p>}
        </div>
        <div>
          <Label htmlFor="jobTitle">Job Title</Label>
          <Input id="jobTitle" {...register("jobTitle")} className="mt-2" />
          {errors.jobTitle && <p className="mt-1 text-body-xs text-error">{errors.jobTitle.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="companySize">Company Size</Label>
        <Select id="companySize" {...register("companySize")} className="mt-2">
          <option value="">Select size</option>
          <option value="UNDER_500">Under 500</option>
          <option value="SIZE_500_2000">500 - 2,000</option>
          <option value="SIZE_2000_10000">2,000 - 10,000</option>
          <option value="OVER_10000">Over 10,000</option>
        </Select>
      </div>
      <div>
        <Label htmlFor="challenge">What challenge are you trying to solve?</Label>
        <Textarea id="challenge" {...register("challenge")} className="mt-2" />
      </div>
      <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />
      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full">
        {status === "loading" ? <Spinner /> : "Schedule a demo"}
      </Button>
      {status === "error" && <p className="text-body-sm text-error">Something went wrong. Please try again.</p>}
    </form>
  );
}
