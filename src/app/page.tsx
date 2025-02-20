"use client";
import ContentComponent from "@/components/content/ContentComponent";
import { SidebarProvider } from "../components/contexts/side-bar-context";
import React from "react";
import SideBar from "@/components/sidebar/SideBar";


export default function Home() {
  return (
      <SidebarProvider>
        <ContentComponent />
        <SideBar />
      </SidebarProvider>

  );
}
