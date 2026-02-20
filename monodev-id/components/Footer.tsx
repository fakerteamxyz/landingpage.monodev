"use client"
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <span className="text-2xl font-bold font-mono tracking-tighter">monodev<span className="text-violet-500">.id</span></span>
        </div>
        <div className="flex justify-center gap-6 mb-8 text-zinc-400">
          <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
          <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
        </div>
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Monodev.id. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
