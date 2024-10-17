
import { Key } from "lucide-react";

export default function Browse() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black">
      <div className="border-2 border-gray-300 rounded-xl w-1/5 flex flex-col items-center justify-center p-5">
        <Key color="white" />
        <h2 className="mt-4 text-white text-xl">Forms</h2>
        <p className="mt-2 text-white text-sm">5 Components</p>
      </div>
      
    </div>
  );
}
