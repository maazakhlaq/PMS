"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  ClipboardList,
  Settings,
} from "lucide-react";

const links = [
  {
    href: "/",
    label: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    href: "/schedule",
    label: "Schedule",
    icon: <CalendarDays className="w-5 h-5" />,
  },
  { href: "/patients", label: "Patients", icon: <Users className="w-5 h-5" /> },
  {
    href: "/appointments",
    label: "Appointments",
    icon: <ClipboardList className="w-5 h-5" />,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: <Settings className="w-5 h-5" />,
  },
];

const Sidebar: React.FC = () => {
  const path = usePathname() || "/";
 
  return (
    <aside className=" w-16 md:w-48 p-2 bg-header   text-black ">
      <nav className="overflow-y-auto w-full h-[calc(100vh-80px)]">
        {links.map((link) => {
          const isActive = link.href === '/'+path?.split('/')[1];
          return (
            <Link key={link.href} href={link.href}>
              <div
                className={`flex text-white items-center mb-2 py-2 px-3 text-xs font-medium rounded-3xl cursor-pointer transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-primary hover:text-white"
                }`}
              >
                <div className="mr-2 ">{link.icon}</div>
                <span className="hidden md:inline-block">{link.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
