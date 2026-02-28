import { auth0 } from "@/lib/auth0"
import { redirect } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"

export const dynamic = "force-dynamic"

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    let session = null
    try {
        session = await auth0.getSession()
    } catch (e) {
        console.error("Auth0 Session Error on Dashboard:", e)
    }

    if (!session) {
        redirect("/api/auth/login")
    }

    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full bg-[#F8FAFC]">
                <DashboardSidebar />
                <SidebarInset className="flex flex-col">
                    <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <div className="flex items-center gap-2">
                            <SidebarTrigger />
                            <Separator orientation="vertical" className="mr-2 h-4" />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="/dashboard">BrightBridgeScholar</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Dashboard</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <main className="flex-1 overflow-y-auto p-6 md:p-8">
                        <div className="mx-auto max-w-7xl">{children}</div>
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
}
