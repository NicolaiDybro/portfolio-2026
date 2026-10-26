/** Inline list with evenly spaced middle-dot separators. */
export default function Dotted({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-2 gap-y-1 ${className}`}>
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="inline-flex items-baseline gap-x-2">
          {i > 0 && (
            <span aria-hidden className="opacity-50">
              ·
            </span>
          )}
          {item}
        </span>
      ))}
    </span>
  );
}
