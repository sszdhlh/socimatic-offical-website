import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-pacifico text-2xl text-primary">AI Content Pro</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Revolutionizing content creation with AI-powered automation for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <i className="ri-twitter-x-fill ri-lg"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <i className="ri-facebook-fill ri-lg"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <i className="ri-linkedin-fill ri-lg"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <i className="ri-instagram-fill ri-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/resources/blog" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/guides" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/resources/webinars" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AI Content Pro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
