"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-center"
      >
        Gabriel Seabra
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-2xl text-gray-400 mt-4 text-center"
      >
        Desenvolvedor Full Stack
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
      >
        Entrar em contato
      </motion.button>

    </main>
  );
}