'use client';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background video */}
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

      {/* Overlay with blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />

      {/* Centered Gradient Heading */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 text-center">
        <h1
        style={{ fontFamily: "var(--font-manrope)" }}
        className="text-4xl md:text-6xl font-extrabold bg-clip-text text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
        >
        Meeting Summarizer
        </h1>

      </div>
    </div>
  );
}
