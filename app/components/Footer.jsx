export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 border-t mt-10">
      <p style={{ fontFamily: "var(--font-manrope)" }} className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} MeetingSummarizer. Built by Team Innovate.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <img src="/images/linkedin.png" className="h-5" />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <img src="/images/github.png" className="h-5" />
        </a>
      </div>
    </footer>
  );
}
