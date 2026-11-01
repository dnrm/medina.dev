// ponytail: route-entry animation removed; kept as a plain div so call sites don't change.
// Delete this wrapper and the `motion` dep if you want the dead props gone too.
export function MotionDiv({ children, className }: { children: React.ReactNode; className?: string; initial?: unknown; animate?: unknown; transition?: unknown }) {
  return <div className={className}>{children}</div>
}
