import { Reveal } from "./Reveal";

function Contact() {
  return (
    <section id="contact" className="w-full h-screen p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <Reveal>
          <div className="pb-8 text-center">
            <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">Contact</h2>
            <p className="py-6 text-gray-400 text-xl">Submit the form below to get in touch with me</p>
          </div>
        </Reveal>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/your-id-here" method="POST" className="flex flex-col w-full md:w-1/2">
            <Reveal>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-4 bg-transparent border-2 border-gray-800 rounded-xl text-white focus:outline-none focus:border-blue-500 w-full mb-4"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="p-4 bg-transparent border-2 border-gray-800 rounded-xl text-white focus:outline-none focus:border-blue-500 w-full mb-4"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="6"
                className="p-4 bg-transparent border-2 border-gray-800 rounded-xl text-white focus:outline-none focus:border-blue-500 w-full"
              ></textarea>
              <button className="text-white bg-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-full hover:scale-110 duration-300 font-bold shadow-lg shadow-blue-500/20">
                Let's Talk
              </button>
            </Reveal>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;