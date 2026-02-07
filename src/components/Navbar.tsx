export default function Navbar({
  onLogout,
}: {
  onLogout: () => void;
}) {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-blue-600 rounded-lg" />
          <span className="font-bold text-lg">
            EmployeeSys
          </span>
        </div>

        <button
          onClick={onLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
