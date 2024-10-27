export default function RedirectSpinning() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-gray-300 rounded-full"></div>
        <div className="absolute inset-0 border-t-4 border-gray-800 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
