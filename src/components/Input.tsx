type Props = {
  label: string;
  placeholder?: string;
  error?: string;
  type?: string;
};

export function Input({ label, placeholder, error, type = "text" }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-3 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-slate-300"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}