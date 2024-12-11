import React, { Suspense } from "react";
import Feed from "../feed";
import SidebarLeft from "../sidebar-left";
// import SidebarRight from "../sidebar-right";
import SkeletonContact from "../skeleton-contact";

import dynamic from 'next/dynamic'
const SidebarRight = dynamic(() => import('../sidebar-right'))

const MainContent = () => {
  return (
    <main className="flex">
      <SidebarLeft />
      <Feed />
      <Suspense fallback={<p>loading</p>}>
        <SidebarRight />
      </Suspense>
    </main>
  );
};

export default MainContent;
