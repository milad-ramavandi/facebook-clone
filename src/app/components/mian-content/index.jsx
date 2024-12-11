import React from "react";
import Feed from "../feed";
import SidebarLeft from "../sidebar-left";
import SidebarRight from "../sidebar-right";

const MainContent = () => {
  return (
    <main className="flex space-x-2">
      <SidebarLeft />
      <Feed />
      <SidebarRight />
    </main>
  );
};

export default MainContent;
