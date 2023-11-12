import React from "react";

export default function SidebarLayout() {
  return (
    <div className="fixed bg-sky-800 left-0 top-10 z-10 h-screen w-60">
      <ul className="text-white p-5">
        <li>Home</li>
        <li>About</li>
        <li>Dashboard</li>
      </ul>
    </div>
  );
}
