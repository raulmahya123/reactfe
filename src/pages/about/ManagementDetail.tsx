import { useLocation, useNavigate } from "react-router-dom";

const ManagementDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const member = location.state;

  if (!member) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Data tidak ditemukan</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#4A0404] to-[#6E0A0A] text-white py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <button
          onClick={() => navigate(-1)}
          className="mb-10 text-[#C6A75E] hover:text-white transition"
        >
          ← Kembali
        </button>

        <div className="w-40 h-40 mx-auto rounded-full border-4 border-[#C6A75E] bg-white/10 mb-8 flex items-center justify-center text-4xl font-bold text-[#C6A75E]">
          {member.name.charAt(0)}
        </div>

        <h1 className="text-4xl font-bold text-[#C6A75E]">
          {member.name}
        </h1>

        <p className="mt-3 text-lg tracking-wide">
          {member.position}
        </p>

        <div className="w-24 h-1 bg-[#C6A75E] mx-auto my-8"></div>

        <p className="text-gray-200 leading-relaxed text-lg">
          {member.description}
        </p>
      </div>
    </section>
  );
};

export default ManagementDetail;