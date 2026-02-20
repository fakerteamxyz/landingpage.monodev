"use client"
import { motion } from "framer-motion"
import { Monitor, Smartphone, Code2, Server, Database, BrainCircuit } from "lucide-react"

const services = [
  {
    icon: <Monitor className="w-8 h-8 text-violet-500" />,
    title: "Web Development",
    description: "Pembuatan website responsif, cepat, dan modern dengan teknologi terbaru seperti Next.js dan React."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-violet-500" />,
    title: "Mobile Apps",
    description: "Pengembangan aplikasi Android dan iOS yang user-friendly menggunakan React Native atau Flutter."
  },
  {
    icon: <Code2 className="w-8 h-8 text-violet-500" />,
    title: "Custom Coding & Joki",
    description: "Bantuan penyelesaian tugas coding, skripsi, atau proyek khusus dengan jaminan kode bersih dan error-free."
  },
  {
    icon: <Server className="w-8 h-8 text-violet-500" />,
    title: "Backend Systems",
    description: "Membangun API dan sistem backend yang aman dan scalable untuk kebutuhan bisnis Anda."
  },
  {
    icon: <Database className="w-8 h-8 text-violet-500" />,
    title: "Database Management",
    description: "Perancangan dan optimasi database SQL/NoSQL untuk performa aplikasi yang maksimal."
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-violet-500" />,
    title: "AI Integration",
    description: "Integrasi solusi AI cerdas ke dalam aplikasi bisnis Anda untuk automasi dan efisiensi."
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Layanan Kami</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Solusi komprehensif untuk setiap kebutuhan teknologi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-violet-500/50 hover:bg-zinc-900/80 transition-all group"
            >
              <div className="mb-4 p-3 bg-violet-500/10 rounded-lg w-fit group-hover:bg-violet-500/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
