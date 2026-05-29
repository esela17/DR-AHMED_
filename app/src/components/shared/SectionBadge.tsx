interface Props {
  label: string;
  variant?: 'light' | 'dark';
}

export default function SectionBadge({ label, variant = 'light' }: Props) {
  const isDark = variant === 'dark';
  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 ${
        isDark
          ? 'bg-medical-blue/20 text-medical-blue'
          : 'bg-soft-blue text-medical-blue'
      }`}
    >
      {label}
    </span>
  );
}
