function Contact() {
  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      <p className="text-gray-400 mb-8">
        Let's connect and build something amazing 🚀
      </p>

      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-800 border border-gray-700"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-800 border border-gray-700"
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          className="p-3 rounded bg-gray-800 border border-gray-700"
        ></textarea>

        <button className="bg-blue-500 py-3 rounded hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;