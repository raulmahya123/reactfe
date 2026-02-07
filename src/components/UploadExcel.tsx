import { uploadExcel } from "../api/employee";
import { useState } from "react";

export default function UploadExcel({ onSuccess }: any) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const upload = async () => {
    if (!file) return;
    setLoading(true);
    await uploadExcel(file);
    setFile(null);
    setLoading(false);
    onSuccess();
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-indigo-100 p-6 w-full max-w-md">
      {/* HEADER */}
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-slate-800">
          Upload Employee Data
        </h3>
        <p className="text-sm text-slate-500">
          Import employees from Excel file (.xlsx / .xls)
        </p>
      </div>

      {/* DROPZONE */}
      <label
        className="
          flex flex-col items-center justify-center
          border-2 border-dashed border-indigo-200
          rounded-xl p-6 cursor-pointer
          hover:bg-indigo-50 transition
        "
      >
        <input
          type="file"
          accept=".xlsx,.xls"
          className="hidden"
          onChange={(e) =>
            setFile(e.target.files?.[0] || null)
          }
        />

        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
            📊
          </div>

          <p className="text-sm font-medium text-slate-700">
            {file ? file.name : "Click to upload Excel file"}
          </p>

          <p className="text-xs text-slate-500">
            Supported format: .xlsx, .xls
          </p>
        </div>
      </label>

      {/* BUTTON */}
      <button
        onClick={upload}
        disabled={!file || loading}
        className="
          mt-6 w-full rounded-xl
          bg-gradient-to-r from-indigo-600 to-blue-500
          py-2.5 text-sm font-semibold text-white
          shadow-md hover:opacity-90 transition
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {loading ? "Uploading..." : "Upload Excel"}
      </button>
    </div>
  );
}
