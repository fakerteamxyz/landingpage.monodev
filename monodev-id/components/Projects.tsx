"use client"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    color: "from-blue-500 to-cyan-500",
    description: "Platform toko online lengkap dengan payment gateway dan dashboard admin."
  },
  {
    title: "School Management System",
    category: "System",
    color: "from-purple-500 to-pink-500",
    description: "Sistem informasi akademik terintegrasi untuk sekolah menengah."
  },
  {
    title: "Company Profile App",
    category: "Mobile App",
    color: "from-orange-500 to-red-500",
    description: "Aplikasi profil perusahaan berbasis Android dengan fitur booking layanan."
  },
  {
    title: "Crypto Dashboard",
    category: "UI/UX & Web",
    color: "from-emerald-500 to-green-500",
    description: "Dashboard monitoring aset kripto dengan real-time data dan grafik."
  }
]

export function Projects() {
  return (
    <section id="portfolio" className="py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Portfolio</h2>
            <p className="text-zinc-400">Beberapa karya terbaik yang telah kami kerjakan.</p>
          </div>
          <Link href="#contact" className="hidden md:flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors">
            Lihat Semua <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 aspect-video flex flex-col justify-end"
            >
              {/* Fake Image Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />

              <div className="relative p-8 z-10 bg-gradient-to-t from-black/80 to-transparent pt-20">
                <span className="text-sm font-medium text-violet-400 mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-zinc-300 text-sm opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
           <Link href="#" className="inline-flex items-center gap-2 text-violet-400">
            Lihat Semua <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
