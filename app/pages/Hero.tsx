export default function Hero() {
  return (
    <div className="relative">
      <div className="flex h-screen items-center justify-center flex-col bg-black z-10">
        <div className="w-full flex items-center justify-center flex-col">
          <h1 className="text-white code text-3xl">This UI</h1>
          <p className="text-white w-1/2 text-balance text-center mt-2 text-sm">
            This UI is a free, open-source Tailwind CSS library that provides a
            wide range of components to help you quickly build your next
            project. This UI offers the flexibility and ease you need to create
            beautiful, responsive designs with minimal effort.
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gray-600/15 blur-3xl br"></div>
    </div>
  );
}
