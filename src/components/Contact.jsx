import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#283618]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-[#FEFAE0]">
            Contact<span className="text-[#DDA15E]">.</span>
          </h2>
          <p className="text-[#DDA15E] uppercase tracking-[0.3em] text-[10px] font-bold mt-4">
            Let's build something together
          </p>
        </div>

        {/* The Form */}
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          className="space-y-6"
        >
          {/* REPLACE THIS KEY: Go to web3forms.com to get your free access key */}
          <input type="hidden" name="access_key" value="be4dcb53-1b55-4d1f-8d8f-7b1db32bf854" />
          
          {/* This sends the email to you */}
          <input type="hidden" name="to_name" value="Pallavi" />
          
          <input type="hidden" name="subject" value="New Portfolio Message" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              name="name" 
              placeholder="YOUR NAME" 
              required 
              className="w-full bg-transparent border-b-2 border-[#FEFAE0]/10 py-4 text-[#FEFAE0] outline-none focus:border-[#DDA15E] transition-all placeholder:text-[#FEFAE0]/20 font-bold text-sm"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="YOUR EMAIL" 
              required 
              className="w-full bg-transparent border-b-2 border-[#FEFAE0]/10 py-4 text-[#FEFAE0] outline-none focus:border-[#DDA15E] transition-all placeholder:text-[#FEFAE0]/20 font-bold text-sm"
            />
          </div>

          <textarea 
            name="message" 
            placeholder="YOUR MESSAGE" 
            rows="5" 
            required 
            className="w-full bg-transparent border-b-2 border-[#FEFAE0]/10 py-4 text-[#FEFAE0] outline-none focus:border-[#DDA15E] transition-all placeholder:text-[#FEFAE0]/20 font-bold text-sm resize-none"
          ></textarea>

          <div className="flex justify-center mt-10">
            <button 
              type="submit" 
              className="px-16 py-4 bg-[#DDA15E] text-[#283618] font-black uppercase text-[10px] tracking-[0.3em] rounded-full hover:bg-[#FEFAE0] transition-all shadow-xl"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;