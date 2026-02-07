import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../api/employee";
import UploadExcel from "../components/UploadExcel";
import EmployeeForm from "../components/EmployeeForm";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#4f46e5", "#0ea5e9", "#22c55e", "#f97316"];

export default function Dashboard() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [editing, setEditing] = useState<any | null>(null);

  const load = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const stats = Object.values(
    employees.reduce((acc: any, cur) => {
      acc[cur.position] = acc[cur.position] || {
        name: cur.position,
        value: 0,
      };
      acc[cur.position].value++;
      return acc;
    }, {})
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* ================= HEADER ================= */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-800">
            Employee <span className="text-indigo-600">Dashboard</span>
          </h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Overview of employee distribution, roles, and workforce composition.
          </p>
        </div>

        {/* ================= KPI ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Kpi title="Total Employees" value={employees.length} />
          <Kpi title="Job Positions" value={stats.length} />
          <Kpi title="Departments" value={stats.length} />
          <Kpi title="Active Status" value="100%" />
        </div>

        {/* ================= CHART ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <Card className="lg:col-span-2" title="Employees by Position">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={stats}>
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="#4f46e5"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card title="Workforce Composition">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={stats}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                >
                  {stats.map((_, i) => (
                    <Cell
                      key={i}
                      fill={COLORS[i % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* ================= ACTION ================= */}
        <div className="flex flex-wrap gap-4 mb-10">
          <EmployeeForm onSuccess={load} />
          <UploadExcel onSuccess={load} />
        </div>

        {/* ================= TABLE ================= */}
        <Card title="Employee List">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Position</Th>
                  <Th align="right">Action</Th>
                </tr>
              </thead>
              <tbody>
                {employees.map((e) => (
                  <tr
                    key={e.id}
                    className="border-b hover:bg-indigo-50/40 transition"
                  >
                    <Td>{e.name}</Td>
                    <Td>{e.email}</Td>
                    <Td>
                      <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs">
                        {e.position}
                      </span>
                    </Td>
                    <Td align="right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setEditing(e)}
                          className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition px-3 py-1 rounded-lg text-xs font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            deleteEmployee(e.id).then(load)
                          }
                          className="bg-red-500 hover:bg-red-600 transition text-white px-3 py-1 rounded-lg text-xs"
                        >
                          Delete
                        </button>
                      </div>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* ================= EDIT MODAL ================= */}
        {editing && (
          <EditModal
            employee={editing}
            onClose={() => setEditing(null)}
            onSuccess={() => {
              setEditing(null);
              load();
            }}
          />
        )}
      </div>
    </div>
  );
}

/* ================= UI COMPONENT ================= */

const Card = ({ title, children, className = "" }: any) => (
  <div
    className={`bg-white rounded-2xl shadow-md p-6 border border-slate-100 ${className}`}
  >
    <h3 className="font-semibold text-slate-800 mb-4">
      {title}
    </h3>
    {children}
  </div>
);

const Kpi = ({ title, value }: any) => (
  <div className="bg-white rounded-2xl shadow-md p-6 border border-indigo-100">
    <p className="text-indigo-500 text-xs uppercase tracking-wide">
      {title}
    </p>
    <h2 className="text-4xl font-bold text-indigo-700 mt-2">
      {value}
    </h2>
  </div>
);

const Th = ({ children, align = "left" }: any) => (
  <th
    className={`px-4 py-3 font-medium ${
      align === "right" ? "text-right" : "text-left"
    }`}
  >
    {children}
  </th>
);

const Td = ({ children, align = "left" }: any) => (
  <td
    className={`px-4 py-3 ${
      align === "right" ? "text-right" : "text-left"
    }`}
  >
    {children}
  </td>
);

/* ================= EDIT MODAL ================= */

function EditModal({ employee, onClose, onSuccess }: any) {
  const [form, setForm] = useState({
    name: employee.name,
    email: employee.email,
    position: employee.position,
  });

  const submit = async () => {
    await fetch(
      `http://localhost:3000/api/employees/${employee.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );
    onSuccess();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-slate-800">
          Edit Employee
        </h3>

        <div className="space-y-3">
          <input
            className="w-full border rounded-lg px-3 py-2 text-sm"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            placeholder="Name"
          />
          <input
            className="w-full border rounded-lg px-3 py-2 text-sm"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            placeholder="Email"
          />
          <input
            className="w-full border rounded-lg px-3 py-2 text-sm"
            value={form.position}
            onChange={(e) =>
              setForm({ ...form, position: e.target.value })
            }
            placeholder="Position"
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-lg border hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            onClick={submit}
            className="px-4 py-2 text-sm rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
