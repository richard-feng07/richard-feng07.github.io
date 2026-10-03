import type { MessageId } from "../types";

export default function MessageItem({
  id,
  label,
  message,
  activeMessage,
  setActiveMessage,
}: {
  id: MessageId;
  label: string;
  message: string;
  activeMessage: MessageId | null;
  setActiveMessage: (message: MessageId | null) => void;
}) {
  const isVisible = activeMessage === id;

  return (
    <li className="relative">
      <button
        type="button"
        aria-expanded={isVisible}
        onClick={() => setActiveMessage(isVisible ? null : id)}
        onMouseLeave={() => setActiveMessage(null)}
        className="cursor-pointer border-b border-dotted border-terracotta text-left transition-colors hover:bg-terracotta hover:text-ivory"
      >
        {label}
      </button>
      <span
        role="status"
        className={`absolute left-0 top-full z-10 mt-2 whitespace-nowrap bg-terracotta px-3 py-2 font-sans text-xs font-semibold tracking-wide text-ivory shadow-[3px_3px_0_var(--color-gunmetal)] transition-opacity duration-200 ${isVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        {message}
      </span>
    </li>
  );
}
