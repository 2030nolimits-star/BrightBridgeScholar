import { auth0 } from "@/lib/auth0"
import Link from "next/link"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export const dynamic = "force-dynamic"

export async function Navbar() {
  let user = null
  try {
    const session = await auth0.getSession()
    user = session?.user
  } catch (e) {
    console.warn("Auth0 session retrieval failed.", e)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1E3A8A] shadow-md transition-transform hover:scale-105">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground font-mono">
            BrightBridgeScholar
          </span>

        </Link>
        

        <nav className="hidden items-center gap-8 md:flex">
          {["Deep Research", "PaperBreaker", "PathFinder", "Pricing"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#1E3A8A]"
            >
              {item}
            </Link>
          ))}
          {user && (
            <Link
              href="/dashboard"
              className="text-sm font-bold text-[#1E3A8A] transition-colors hover:text-[#1E3A8A]/80 underline underline-offset-4"
            >
              Dashboard
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hidden sm:flex text-muted-foreground" asChild>
                <Link href="/dashboard">Hello, {user.nickname || user.name}</Link>
              </Button>
              <Button variant="outline" className="hidden sm:flex" asChild>
                <Link href="/api/auth/logout">Log out</Link>
              </Button>
            </div>
          ) : (
            <>
              <Button variant="ghost" className="hidden sm:flex" asChild>
                <Link href="/api/auth/login">Log in</Link>
              </Button>
              <Button className="bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90" asChild>
                <Link href="/api/auth/login?screen_hint=signup">Get Started</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
