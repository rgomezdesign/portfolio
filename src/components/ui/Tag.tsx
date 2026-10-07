export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-medium leading-5 text-teal">
      {label}
    </span>
  );
}
