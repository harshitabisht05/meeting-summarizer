'use client';

import Navbar from './components/Navbar';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '🎙️',
    title: 'Multi-format Audio Input',
    description: 'Supports MP3/WAV uploads via an easy-to-use interface (Google Colab or frontend UI).',
  },
  {
    icon: '📝',
    title: 'Multilingual Transcription',
    description: 'Powered by OpenAI Whisper (base) supporting Hindi, Tamil, and English natively.',
  },
  {
    icon: '🧠',
    title: 'Smart Meeting Summarizer',
    description: 'Summarizes meetings using Mistral-medium LLM. Extracts decisions, sentiments, and key action items.',
  },
  {
    icon: '🛡️',
    title: 'Privacy-Preserving Security',
    description: 'Implements AES-256 encryption. Deletes original files. Shows encryption key only once.',
  },
  {
    icon: '📤',
    title: 'Multi-format Export',
    description: 'Exports summaries to TXT, tasks to CSV, and full reports to PDF for easy sharing.',
  },
  {
    icon: '📡',
    title: 'Offline-Compatible Processing',
    description: 'Whisper + fallback rule-based task extractor works offline. Future plans for TinyLlama integration.',
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* 🔵 Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/images/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔴 Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />

        {/* 🔻 Bottom Fade Overlay */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-20 pointer-events-none" />

        {/* 🟢 Hero Section */}
        <div className="relative z-30 flex items-center justify-center min-h-screen text-center px-4">
          <div>
            <h1
              style={{ fontFamily: 'var(--font-manrope)' }}
              className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
            >
              Summarize Faster.
              <br />
              Work Smarter.
            </h1>
          </div>

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 px-6 text-center">
            <button
              onClick={() => router.push('/login')}
              style={{ fontFamily: 'var(--font-manrope)' }}
              className="group inline-flex items-center gap-2 px-6 md:px-8 py-2 
                bg-white/10 hover:bg-white/20 text-white 
                text-sm md:text-base font-semibold 
                rounded-full shadow-lg 
                transition-all duration-300 
                ring-1 ring-white/10 hover:ring-white/20 backdrop-blur-md"
            >
              Try Now
              <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p
              style={{ fontFamily: 'var(--font-eurostile)' }}
              className="text-sm md:text-lg mt-2 text-white/80 max-w-2xl"
            >
              Experience the future of summarization with our AI-powered tool.
              Save time and enhance your productivity effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* 🟦 Features Section */}
      <section id="features" className="relative z-20 py-24 px-6 bg-black/90 backdrop-blur-md">
        <h2
          style={{ fontFamily: 'var(--font-manrope)' }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-14"
        >
          Why Choose Our AI Summarizer?
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 shadow-lg text-left text-white"
            >
              <div className="text-2xl mb-3">{feature.icon}</div>
              <h3 style={{ fontFamily: "var(--font-manrope)" }} className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p style={{ fontFamily: "var(--font-eurostile)" }} className="text-white/80 text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🟪 Sentienta Project Info Section */}
      <section className="relative z-20 py-16 px-6 bg-[#0b0b0b] border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6 text-white">
          <div className="w-full md:w-1/2">
            <h2
              style={{ fontFamily: 'var(--font-manrope)' }}
              className="text-3xl md:text-5xl font-extrabold"
            >
              Sentienta QualityAI
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            <h3
              style={{ fontFamily: 'var(--font-manrope)' }}
              className="text-lg md:text-2xl font-semibold mb-2 text-white/80"
            >
              Empowering smarter meetings
            </h3>
            <p
              style={{ fontFamily: 'var(--font-eurostile)' }}
              className="text-sm md:text-base text-white/60 max-w-md"
            >
              Developed by Sentienta, this AI-powered meeting assistant helps Indian teams transcribe, summarize, and take action — across languages, formats, and workflows. All in one secure solution.
            </p>
          </div>
        </div>
      </section>
      </>
  );
}
