function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-800" />
        <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-800" />
        <textarea placeholder="Message" className="p-3 rounded bg-gray-800"></textarea>

        <button className="bg-blue-500 py-3 rounded hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;