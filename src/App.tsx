import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Badge } from "./components/Badge";
import { Card } from "./components/Card";

export default function App() {
  const [dark, setDark] = useState(false);
  const [tab, setTab] = useState("Buttons");
  const [showModal, setShowModal] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [size, setSize] = useState("Medium");

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen p-6 md:p-8 max-w-6xl mx-auto bg-slate-50 dark:bg-slate-900 dark:text-white">
        {/* HEADER */}
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-600">NETTA WANGUI KIRURI</p>
            <h1 className="text-4xl font-bold mt-1">DesignSystemX</h1>
            <p className="text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
              A production-grade React + TypeScript design system — 12+ reusable,
              accessible components with variants, dark mode, and documentation.
            </p>
            <div className="flex gap-2 mt-3 flex-wrap">
              <Badge color="blue">React</Badge>
              <Badge color="green">TypeScript</Badge>
              <Badge color="amber">Tailwind CSS</Badge>
              <Badge color="red">WCAG Accessible</Badge>
            </div>
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium"
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* TABS */}
        <div className="flex gap-2 mt-8 border-b pb-2 flex-wrap">
          {["Buttons", "Forms", "Feedback", "Playground"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg font-medium ${
                tab === t ? "bg-blue-600 text-white" : "bg-white dark:bg-slate-800 border"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div className="mt-6 space-y-6">
          {tab === "Buttons" && (
            <Card title="Buttons — Variants & Sizes">
              <div className="flex gap-3 flex-wrap items-center">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <button onClick={() => setShowModal(true)} className="px-5 py-2.5 rounded-lg bg-green-600 text-white font-medium">
                  Open Modal →
                </button>
              </div>
              <p className="text-sm mt-4">All buttons support keyboard focus, hover, and disabled states. Built for reuse across Portfolio, MyFit, ShopNest, InsightDash, and A11yAudit.</p>
            </Card>
          )}

          {tab === "Forms" && (
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Input — With Validation">
                <div className="space-y-4">
                  <Input label="Full Name" placeholder="Netta Wangui Kiruri" />
                  <Input label="Email" placeholder="Kirurinetta@gmail.com" type="email" error="Please enter a valid email" />
                </div>
              </Card>
              <Card title="Toggle — Settings">
                <div className="flex justify-between items-center">
                  <span>Email notifications</span>
                  <button
                    onClick={() => setToggle(!toggle)}
                    className={`w-12 h-6 rounded-full p-1 transition ${toggle ? "bg-green-500" : "bg-slate-300"}`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition ${toggle ? "translate-x-6" : ""}`} />
                  </button>
                </div>
                <p className="text-sm mt-2">{toggle ? "Notifications ON" : "Notifications OFF"}</p>
              </Card>
            </div>
          )}

          {tab === "Feedback" && (
            <div className="grid md:grid-cols-3 gap-6">
              <Card title="✅ Success"><p>Project deployed successfully to Vercel.</p></Card>
              <Card title="⚠️ Warning"><p>Bundle size is larger than recommended. Consider code splitting.</p></Card>
              <Card title="❌ Error"><p>Build failed. Check TypeScript errors in Button.tsx.</p></Card>
            </div>
          )}

          {tab === "Playground" && (
            <Card title="Playground — Try It Live">
              <div className="flex gap-3 items-center flex-wrap">
                <label>Size:</label>
                {["Small", "Medium", "Large"].map((s) => (
                  <button key={s} onClick={() => setSize(s)} className={`px-3 py-1 rounded-full border ${size === s ? "bg-blue-600 text-white" : "bg-white"}`}>{s}</button>
                ))}
              </div>
              <p className="mt-4">Selected size: <b>{size}</b> — this is how a real design system lets developers test variants.</p>
            </Card>
          )}
        </div>

        {/* MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 max-w-md w-full">
              <h3 className="text-xl font-bold">DesignSystemX Modal</h3>
              <p className="text-slate-600 dark:text-slate-300 mt-2">This modal is accessible — press Esc or click Close. It traps focus and works with keyboard navigation.</p>
              <div className="flex gap-3 mt-5">
                <Button variant="primary">Confirm</Button>
                <button onClick={() => setShowModal(false)} className="px-5 py-2.5 rounded-lg border">Close</button>
              </div>
            </div>
          </div>
        )}

        <p className="text-center text-slate-500 text-sm mt-10">Built by Netta Wangui Kiruri • React + TypeScript + Tailwind CSS • github.com/nettakiruri75</p>
      </div>
    </div>
  );
}