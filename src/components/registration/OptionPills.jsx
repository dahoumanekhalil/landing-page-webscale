import { useRef } from "react";
import { motion } from "framer-motion";

const BRAND = "#FABC05";

export default function OptionPills({ label, options, value, onChange, required, name }) {
  const groupRef = useRef(null);

  const handleKeyDown = (e) => {
    const idx = options.findIndex((o) => o === value);
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const delta = e.key === "ArrowRight" ? -1 : 1;
      const next = options[(idx === -1 ? 0 : (idx + delta + options.length) % options.length)];
      onChange(next);
    }
  };

  return (
    <div className="md:col-span-2">
      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div
        ref={groupRef}
        role="radiogroup"
        aria-label={label}
        onKeyDown={handleKeyDown}
        className="flex flex-wrap gap-2"
      >
        {options.map((opt) => {
          const active = value === opt;
          return (
            <motion.button
              key={opt}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(opt)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all
                ${active
                  ? "bg-[var(--brand)] text-white border-[var(--brand)] shadow-md"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-600 dark:hover:bg-neutral-700"
                }`}
              style={{ "--brand": BRAND }}
            >
              {opt}
            </motion.button>
          );
        })}
      </div>

      {required && (
        <input
          tabIndex={-1}
          readOnly
          value={value ? "chosen" : ""}
          required
          className="sr-only"
          name={name}
        />
      )}
    </div>
  );
}
