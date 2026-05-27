export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center px-6">
        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
          <span className="text-4xl">👋</span>
        </div>
        <h1 className="text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
          Hello, World!
        </h1>
        <p className="text-xl text-purple-200 mb-8 max-w-md mx-auto">
          A simple Next.js app — built, pushed to GitHub, and deployed online.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
            ⚡ Next.js 15
          </span>
          <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
            🎨 Tailwind CSS
          </span>
          <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
            🚀 Deployed on Netlify
          </span>
        </div>
      </div>
    </main>
  );
}
