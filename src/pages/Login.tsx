import { useState } from "react";
import { login } from "../api/auth";
import { auth } from "../store/auth";

export default function Login({ onLogin }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setError("");
    setLoading(true);

    const res = await login(email, password);
    setLoading(false);

    if (!res.success) {
      setError(res.message);
      return;
    }

    auth.setToken(res.data.token);
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 border border-indigo-100">

        {/* BRAND */}
        <div className="text-center mb-8">
          <div className="mx-auto w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl">
            ES
          </div>
          <h1 className="mt-4 text-2xl font-extrabold text-slate-800">
            EmployeeSys
          </h1>
          <p className="text-sm text-slate-500">
            Sign in to your dashboard
          </p>
        </div>

        {/* FORM */}
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-slate-600">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-slate-600">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mt-4 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* BUTTON */}
        <button
          onClick={submit}
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        {/* FOOTER */}
        <p className="mt-6 text-center text-xs text-slate-400">
          © 2026 EmployeeSys. All rights reserved.
        </p>
      </div>
    </div>
  );
}
