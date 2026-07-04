"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Select({
  label,
  options,
  value,
  onChange,
  placeholder = "Elegí una opción",
}: SelectProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-label text-text-secondary">{label}</span>
      <div className="relative">
        <select
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "h-14 w-full appearance-none rounded-button border border-border-highlight bg-bg-base px-4 text-body-base text-text-primary",
            "transition-colors duration-base ease-base",
            "focus:border-action-primary focus:outline-none focus:ring-0",
            "[font-size:16px]" // evita auto-zoom en Mobile Safari
          )}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary"
          strokeWidth={1.5}
        />
      </div>
    </label>
  );
}
