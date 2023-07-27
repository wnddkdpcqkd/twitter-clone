import { SparklesIcon } from "@heroicons/react/24/outline";
import Input from "./Input";

export default function Feed() {
  return (
    <div className="xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white justify-between border-b border-gray-200 items-center">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hover-effect flex items-center justify-center px-0 ml-auto hover:scale-110 duration-200">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
    </div>
  );
}
