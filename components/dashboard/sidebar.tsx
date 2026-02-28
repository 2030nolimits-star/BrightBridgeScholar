"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    BookOpen,
    FileSearch,
    LayoutDashboard,
    Map,
    Search,
    Settings,
    Sparkles,
    User,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from "@/components/ui/sidebar"

const menuItems = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        url: "/dashboard",
    },
    {
        title: "Deep Research",
        icon: Search,
        url: "/deep-research",
    },
    {
        title: "PaperBreaker",
        icon: FileSearch,
        url: "/paperbreaker",
    },
    {
        title: "PathFinder AI",
        icon: Map,
        url: "/pathfinder",
    },
]

export function DashboardSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar variant="inset" collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1E3A8A] text-white shadow-md transition-transform group-hover:scale-110">
                                    <Sparkles className="h-4 w-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="text-sm font-bold font-mono">BrightBridge</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {menuItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                isActive={pathname === item.url}
                                tooltip={item.title}
                            >
                                <Link href={item.url} className="flex items-center gap-3 px-3 py-2">
                                    <item.icon className="h-4 w-4" />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive={pathname === "/settings"} tooltip="Settings">
                            <Link href="/settings" className="flex items-center gap-3 px-3 py-2">
                                <Settings className="h-4 w-4" />
                                <span>Settings</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild tooltip="Profile">
                            <Link href="/api/auth/logout" className="flex items-center gap-3 px-3 py-2">
                                <User className="h-4 w-4" />
                                <span>Profile</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
