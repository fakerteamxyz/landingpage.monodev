"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Terminal, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-20">

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-900/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            Open for Commissions & Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
          >
            Partner Handal Untuk <br />
            <span className="text-violet-500">Solusi Digital Anda</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10"
          >
            Kami membantu mewujudkan ide digital Anda. Dari pengembangan website, aplikasi mobile, hingga solusi coding dan tugas pemrograman. Cepat, Tepat, dan Berkualitas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-violet-600 rounded-full hover:bg-violet-700 transition-colors md:py-4 md:text-lg md:px-10"
            >
              Konsultasi Sekarang <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border border-white/10 rounded-full hover:bg-white/10 transition-colors md:py-4 md:text-lg md:px-10"
            >
              Lihat Layanan
            </Link>
          </motion.div>

          {/* Tech Stack Icons Floating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {/* Simple representation of tech stack */}
            <div className="flex items-center gap-2"><Code className="w-5 h-5" /> Next.js</div>
            <div className="flex items-center gap-2"><Zap className="w-5 h-5" /> React</div>
            <div className="flex items-center gap-2"><Terminal className="w-5 h-5" /> Node.js</div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
