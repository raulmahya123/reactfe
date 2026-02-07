import { useState } from "react";
import { createEmployee } from "../api/employee";

export default function EmployeeForm({ onSuccess }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
  });
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!form.name || !form.email || !form.position) return;

    setLoading(true);
    await createEmployee(form);
    setForm({ name: "", email: "", position: "" });
    setLoading(false);
    onSuccess();
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-indigo-100 p-6 w-full max-w-md">
      {/* HEADER */}
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-slate-800">
          Create Employee
        </h3>
        <p className="text-sm text-slate-500">
          Add new employee to the system
        </p>
      </div>

      {/* FORM */}
      <div className="space-y-4">
        {/* NAME */}
        <div>
          <label className="text-xs font-medium text-slate-600">
            Full Name
          </label>
          <input
            type="text"
            placeholder="e.g. Budi Santoso"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-xs font-medium text-slate-600">
            Email Address
          </label>
          <input
            type="email"
            placeholder="budi@company.com"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* POSITION */}
        <div>
          <label className="text-xs font-medium text-slate-600">
            Position
          </label>
          <select
            value={form.position}
            onChange={(e) =>
              setForm({ ...form, position: e.target.value })
            }
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select position</option>
            <option>Backend Developer</option>
            <option>Frontend Developer</option>
            <option>HR Manager</option>
            <option>Finance</option>
          </select>
        </div>
      </div>

      {/* BUTTON */}
      <button
        onClick={submit}
        disabled={loading}
        className="mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90 transition disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Employee"}
      </button>
    </div>
  );
}
