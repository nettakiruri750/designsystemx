export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow border dark:border-slate-700">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-slate-600 dark:text-slate-300">{children}</div>
    </div>
  );
}