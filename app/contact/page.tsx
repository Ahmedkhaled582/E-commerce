

export default function Contact() {

  return (
    <div className="p-6 md:p-10 grid md:grid-cols-2 gap-10">
      
      {/* 💌 FORM */}
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <form  className="space-y-4">
          <input
            placeholder="Your Name"
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <input
            placeholder="Your Email"
            type="email"
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-xl border h-32 focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition">
            Send Message 🚀
          </button>
        </form>
      </div>

      {/* 🗺️ MAP */}
      <div className="rounded-3xl overflow-hidden shadow-xl">
        <iframe
          src="https://www.google.com/maps?q=Egypt&output=embed"
          className="w-full h-[400px] border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}