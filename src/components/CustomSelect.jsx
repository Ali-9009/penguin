// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Check, ChevronDown } from "lucide-react";

// export default function CustomSelect({
//   id,
//   value,
//   onChange,
//   options = [],
//   placeholder = "Select option",
//   className = "",
//   disabled = false,
// }) {
//   const [open, setOpen] = useState(false);
//   const wrapperRef = useRef(null);
//   const selected = options.find((option) => option.value === value);

//   useEffect(() => {
//     const handleClick = (e) => {
//       if (!wrapperRef.current?.contains(e.target)) setOpen(false);
//     };
//     const handleKey = (e) => {
//       if (e.key === "Escape") setOpen(false);
//     };
//     document.addEventListener("pointerdown", handleClick);
//     document.addEventListener("keydown", handleKey);
//     return () => {
//       document.removeEventListener("pointerdown", handleClick);
//       document.removeEventListener("keydown", handleKey);
//     };
//   }, []);

//   const handleSelect = (option) => {
//     onChange?.({ target: { value: option.value } });
//     setOpen(false);
//   };

//   return (
//     <div ref={wrapperRef} className={`relative min-w-0 ${className}`}>
//       <button
//         id={id}
//         type="button"
//         disabled={disabled}
//         aria-haspopup="listbox"
//         aria-expanded={open}
//         aria-controls={`${id}-options`}
//         onClick={() => setOpen(!open)}
//         className={`text-primary focus-visible:ring-primary/30 flex h-11 w-full items-center justify-between gap-2 rounded-xl border bg-white px-3 text-left text-sm font-semibold transition-all outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 ${
//           open ? "border-primary" : "hover:border-primary/50 border-[#E8DCEA]"
//         }`}
//       >
//         <span className="truncate">{selected?.label || placeholder}</span>
//         <ChevronDown
//           size={16}
//           className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
//         />
//       </button>

//       {open && (
//         <div
//           id={`${id}-options`}
//           role="listbox"
//           aria-label={placeholder}
//           className="animate-in fade-in slide-in-from-top-1 absolute top-full right-0 left-0 z-50 mt-2 overflow-hidden rounded-2xl border border-[#E8DCEA] bg-white p-1.5 shadow-[0_15px_40px_rgba(40,20,50,0.15)] duration-200"
//         >
//           {options.map((option) => {
//             const active = option.value === value;

//             return (
//               <button
//                 key={option.value}
//                 type="button"
//                 role="option"
//                 aria-selected={active}
//                 onClick={() => handleSelect(option)}
//                 className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left text-[13px] transition-colors sm:text-sm ${
//                   active
//                     ? "text-primary bg-[#E3F2FF] font-semibold"
//                     : "text-[#29232D] hover:bg-[#E3F2FF]"
//                 }`}
//               >
//                 <span>{option.label}</span>
//                 {active && (
//                   <Check size={17} className="text-primary shrink-0" />
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export default function CustomSelect({
  id,
  value,
  onChange,
  options = [],
  placeholder = "Select option",
  className = "",
  disabled = false,
  compact = false,
  triggerClassName = "",
  dropdownClassName = "",
  openUp = false,
}) {
  const generatedId = useId();
  const selectId = id || generatedId;

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);

  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClick = (event) => {
      if (!wrapperRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("pointerdown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const handleSelect = (option) => {
    onChange?.({ target: { value: option.value } });
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative min-w-0 ${open ? "z-50" : ""} ${className}`}
    >
      <button
        ref={triggerRef}
        id={selectId}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${selectId}-options`}
        onClick={() => setOpen((previous) => !previous)}
        className={`text-primary focus-visible:ring-primary/30 flex w-full items-center justify-between border text-left font-semibold transition-all outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${
          compact
            ? "gap-1 rounded-full bg-[#FAF7FB] px-3 py-1.5 text-[11px]"
            : "h-11 gap-2 rounded-xl bg-white px-3 text-sm sm:px-4"
        } ${
          open ? "border-primary" : "hover:border-primary/50 border-[#E8DCEA]"
        } ${triggerClassName}`}
      >
        <span className="truncate">{selected?.label || placeholder}</span>

        <ChevronDown
          size={compact ? 12 : 16}
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          id={`${selectId}-options`}
          role="listbox"
          aria-label={placeholder}
          className={`absolute right-0 z-50 max-h-56 overflow-y-auto overscroll-contain rounded-2xl border border-[#DCE8ED] bg-white p-1.5 shadow-[0_15px_40px_rgba(7,85,143,0.15)] ${
            openUp ? "bottom-full mb-2" : "top-full mt-2"
          } ${compact ? "w-44" : "left-0"} ${dropdownClassName}`}
        >
          {options.map((option) => {
            const active = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => handleSelect(option)}
                className={`focus-visible:ring-primary/30 flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] transition-colors focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset ${
                  active
                    ? "text-primary bg-[#E3F2FF] font-semibold"
                    : "text-[#29232D] hover:bg-[#E3F2FF]"
                }`}
              >
                <span>{option.label}</span>

                {active && (
                  <Check
                    size={16}
                    aria-hidden="true"
                    className="text-primary shrink-0"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}