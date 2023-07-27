/* eslint-disable @next/next/no-img-element */

import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

/* eslint-disable jsx-a11y/alt-text */
export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <div className="w-10 h-10 relative">
        <Image
          width={0}
          height={0}
          layout="fill"
          alt=""
          className="rounded-full hover:brightness-95 hover:cursor-pointer"
          src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
        />
      </div>
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px]"
            rows={2}
            placeholder="What's happening?"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex ">
            <PhotoIcon className="h-10 w-10 hover-effect p-2 text-sky-500" />
            <FaceSmileIcon className="h-10 w-10 hover-effect p-2 text-sky-500" />
          </div>
          <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-90 disabled:opacity-60">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
