"use client"

import { Mail, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-zinc-900/50 backdrop-blur-lg border border-white/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Mulai Proyek Anda</h2>
            <p className="text-zinc-400">
              Hubungi kami untuk konsultasi gratis mengenai kebutuhan digital Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Kontak Langsung</h3>
              <div className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-violet-500" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="font-medium">hello@monodev.id</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                 <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">WhatsApp</p>
                  <p className="font-medium">+62 812-3456-7890</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Nama</label>
                <input type="text" className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Pesan</label>
                <textarea rows={4} className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Ceritakan kebutuhan Anda..." />
              </div>
              <button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-3 rounded-lg transition-colors">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
