import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-pacifico text-2xl text-primary">AI Content Pro</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/solutions" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              Solutions
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Resources
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/resources/blog" className="w-full">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources/guides" className="w-full">Guides</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources/webinars" className="w-full">Webinars</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" className="hidden md:flex">
            <Link href="/login">Sign in</Link>
          </Button>
          <Button asChild className="hidden md:flex rounded-button">
            <Link href="/request-demo">Request Demo</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <i className="ri-menu-line ri-lg" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/features" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">
                  Features
                </Link>
                <Link href="/pricing" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">
                  Pricing
                </Link>
                <Link href="/solutions" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">
                  Solutions
                </Link>
                <Link href="/resources/blog" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link href="/resources/guides" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">
                  Guides
                </Link>
                <Link href="/resources/webinars" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">
                  Webinars
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Button asChild variant="outline">
                    <Link href="/login">Sign in</Link>
                  </Button>
                  <Button asChild className="rounded-button">
                    <Link href="/request-demo">Request Demo</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
