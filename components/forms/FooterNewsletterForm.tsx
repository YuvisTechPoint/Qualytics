"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Spinner } from "@/components/ui/Spinner";

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
  source: z.string().optional(),
  website: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

export function FooterNewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { source: "footer-newsletter" },
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
      reset({ source: "footer-newsletter" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-4">
        <h2 className="font-sans text-base font-medium text-[#ffffff]">Newsletter</h2>
        <p className="mt-1 text-xs uppercase tracking-[0.12em] text-neutral-500">
          Subscribe for product updates and industry trends
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex overflow-hidden rounded-sm border border-white/10 bg-[#1a1a1a]">
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            className="min-w-0 flex-1 bg-transparent px-4 py-3 font-sans text-sm text-[#ffffff] placeholder:text-neutral-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="shrink-0 bg-brand-400 px-5 py-3 font-mono text-sm font-medium text-black transition-colors hover:bg-brand-300 disabled:opacity-60"
          >
            {status === "loading" ? <Spinner className="h-4 w-4" /> : "Subscribe"}
          </button>
        </div>
        <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />
        <input type="hidden" {...register("source")} />
        {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
        {status === "success" && <p className="text-xs text-green-400">Subscribed successfully!</p>}
        {status === "error" && <p className="text-xs text-red-400">Something went wrong. Try again.</p>}
      </form>
    </div>
  );
}
