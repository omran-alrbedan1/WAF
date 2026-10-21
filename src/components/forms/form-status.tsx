type FormStatusProps = {
  tone: "success" | "error";
  message: string;
};

export function FormStatus({ tone, message }: FormStatusProps) {
  return (
    <p
      role={tone === "error" ? "alert" : "status"}
      aria-live={tone === "error" ? "assertive" : "polite"}
      className={`rounded-2xl border px-4 py-3 text-sm ${
        tone === "success"
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
          : "border-brand-strong/30 bg-brand/10 text-brand-strong"
      }`}
    >
      {message}
    </p>
  );
}
