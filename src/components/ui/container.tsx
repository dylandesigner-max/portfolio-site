import { clsx } from "clsx";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx("mx-auto max-w-[1400px] px-4 md:px-8", className)}>
      {children}
    </div>
  );
}
