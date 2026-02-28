import { auth0 } from "@/lib/auth0"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Mail, Shield, LogOut } from "lucide-react"
import Link from "next/link"

export default async function SettingsPage() {
    const session = await auth0.getSession()
    const user = session?.user

    if (!user) return null

    return (
        <div className="space-y-8 max-w-2xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Settings</h1>
                <p className="text-muted-foreground mt-2">Manage your account and profile preferences.</p>
            </div>

            <Card className="border-border/50 shadow-sm">
                <CardHeader className="pb-4">
                    <CardTitle>Profile Details</CardTitle>
                    <CardDescription>Public information about your account.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-6">
                        <Avatar className="h-20 w-20 border-2 border-border shadow-sm">
                            <AvatarImage src={user.picture} alt={user.name} />
                            <AvatarFallback className="bg-[#1E3A8A] text-white text-xl">
                                {user.name?.charAt(0) || user.nickname?.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <Button variant="outline" size="sm" className="mb-1" disabled>Change Avatar</Button>
                            <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size 2MB</p>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" value={user.name || ""} readOnly className="bg-muted/50 cursor-not-allowed" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="nickname">Nickname</Label>
                            <Input id="nickname" value={user.nickname || ""} readOnly className="bg-muted/50 cursor-not-allowed" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input id="email" value={user.email || ""} readOnly className="pl-10 bg-muted/50 cursor-not-allowed" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-destructive/20 bg-destructive/[0.02]">
                <CardHeader>
                    <CardTitle className="text-destructive">Danger Zone</CardTitle>
                    <CardDescription>Actions that cannot be undone.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex items-center justify-between p-4 rounded-xl border border-destructive/20 bg-white">
                        <div>
                            <p className="font-semibold text-sm">Sign Out</p>
                            <p className="text-xs text-muted-foreground">Terminate your current session.</p>
                        </div>
                        <Button variant="outline" className="border-destructive/20 text-destructive hover:bg-destructive hover:text-white" asChild>
                            <Link href="/api/auth/logout">
                                <LogOut className="h-4 w-4 mr-2" />
                                Logout
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
