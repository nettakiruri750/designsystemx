export function Badge({ children, color = "blue" }: { children: React.ReactNode; color?: "blue" | "green" | "red" | "amber" }) {
  const map: any = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
    amber: "bg-amber-100 text-amber-700",
  };
  return <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${map[color]}`}>{children}</span>;
}