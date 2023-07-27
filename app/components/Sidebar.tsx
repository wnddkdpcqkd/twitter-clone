/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/24/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DocumentIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* Logo */}
      <div className="flex hover-effect p-0 hover:bg-blue-100 xl:px-1 items-center justify-center">
        <Image
          height={"30"}
          width={"30"}
          src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553"}
          alt="twitter-logo"
        ></Image>
      </div>
      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem active={false} text={"Home"} Icon={HomeIcon} />
        <SidebarMenuItem active={false} text={"Explore"} Icon={HashtagIcon} />
        <SidebarMenuItem active={false} text={"Notification"} Icon={BellIcon} />
        <SidebarMenuItem active={false} text={"Messages"} Icon={InboxIcon} />
        <SidebarMenuItem active={false} text={"Bookmarks"} Icon={BookmarkIcon} />
        <SidebarMenuItem active={false} text={"Lists"} Icon={ClipboardIcon} />
        <SidebarMenuItem active={false} text={"Profile"} Icon={UserIcon} />
        <SidebarMenuItem active={false} text={"More"} Icon={EllipsisHorizontalCircleIcon} />
      </div>
      {/* Button */}

      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      {/* Profile */}
      <div className="hover-effect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img className="h-10 w-10 rounded-full xl:mr-2" src={"https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"} alt={"image"} />
        <div className="leading-5 hidden xl:inline-block">
          <div>
            <h4 className="text-bold">salkdj flksdajf</h4>
            <p className="text-gray-500">@dlsakjfklsd</p>
          </div>
        </div>
        <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline-block" />
      </div>
    </div>
  );
}
