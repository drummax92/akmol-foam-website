type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#1E6BFF]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-[#10202E] sm:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-lg leading-8 text-[#4A5A68]">{description}</p>
      ) : null}
    </div>
  );
}
