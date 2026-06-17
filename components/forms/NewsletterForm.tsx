"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Spinner } from "@/components/ui/Spinner";

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
  firstName: z.string().optional(),
  source: z.string().optional(),
  website: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

export function NewsletterForm({ source = "footer" }: { source?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { source },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="flex gap-2">
        <Input
          {...register("email")}
          placeholder="Enter your email"
          className="flex-1"
        />
        <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />
        <input type="hidden" {...register("source")} />
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? <Spinner /> : "Subscribe"}
        </Button>
      </div>
      {errors.email && <p className="text-body-xs text-error">{errors.email.message}</p>}
      {status === "success" && <p className="text-body-xs text-success">Subscribed successfully!</p>}
      {status === "error" && <p className="text-body-xs text-error">Something went wrong. Try again.</p>}
    </form>
  );
}
