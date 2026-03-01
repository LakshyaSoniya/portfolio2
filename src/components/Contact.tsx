import { useState } from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TfiLinkedin } from "react-icons/tfi";
import { VscGithub } from "react-icons/vsc";

function Contact() {


  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formsubmit.co/ajax/thelakshya31@gmail.com", {
      method: "POST",
      body: data,
    });

    const result = await response.json();

    if (result.success) {
      setStatus("success");
      form.reset(); // ✅ remove fields after success
    } else {
      setStatus("error");
    }
  };

  return (
    <div id="Contact" className="bg-background text-foreground border-t border-border px-4 sm:px-6 md:px-10 py-8">
      
      <div className="
        bg-card 
        border border-gray-700
        shadow-[0_0_25px_rgba(59,130,246,0.25)]
        hover:shadow-[0_0_45px_rgba(59,130,246,0.5)]
        transition-all duration-500
        rounded-xl 
        flex flex-col md:flex-row 
        overflow-hidden
      ">

        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-card">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Get In Touch
          </h1>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Have a project in mind or just want to say hello? 
            Fill out the form or use the contact details below.
          </p>

          <div className="flex flex-col gap-4 text-sm md:text-base">

            <div className="flex gap-3 items-center">
              <MdOutlineAlternateEmail size={20} />
              <span>
                Email :
                <span className="text-blue-400 ml-2">
                  thelakshya31@gmail.com
                </span>
              </span>
            </div>

            <div className="flex gap-3 items-center items-center">
              <FaPhoneSquareAlt size={20} />
              <span>Phone : +91 7877941075</span>
            </div>

            <div>
              <p className="mb-2">Follow us on</p>
              <div className="flex gap-4 text-2xl">

                <a 
                  href="https://github.com/Lakshya-jangid-08" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <VscGithub className="cursor-pointer hover:text-blue-400 transition duration-300 hover:scale-110" />
                </a>

                <a 
                  href="https://www.instagram.com/___user__1__2__3__4____/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <GrInstagram className="cursor-pointer hover:text-pink-400 transition duration-300 hover:scale-110" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/lakshyajangid/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <TfiLinkedin className="cursor-pointer hover:text-blue-500 transition duration-300 hover:scale-110" />
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SECTION */}
       <div className="
          w-full md:w-1/2 
          border-t md:border-t-0 md:border-l 
          border-gray-700 
          backdrop-blur-md 
          p-6 md:p-10
        ">
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col"
            >
          <h2 className="text-xl md:text-2xl font-semibold mb-8">
            Send Message
          </h2>

          {/* Name */}
          <div className="relative mb-8">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="peer w-full bg-transparent border-b-2 border-gray-600 outline-none py-2 text-foreground placeholder-transparent focus:border-blue-400 transition-colors duration-300"
            />
            
            <label className="absolute left-0 top-2 text-gray-300 text-base transition-all duration-300
              peer-placeholder-shown:top-2
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              peer-focus:-top-4
              peer-focus:text-sm
              peer-focus:text-blue-400
              peer-valid:-top-4
              peer-valid:text-sm">
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative mb-8">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="peer w-full bg-transparent border-b-2 border-gray-600 outline-none py-2 text-foreground placeholder-transparent focus:border-blue-400 transition-colors duration-300"
            />
            <label className="absolute left-0 top-2 text-gray-300 text-base transition-all duration-300
              peer-placeholder-shown:top-2
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              peer-focus:-top-4
              peer-focus:text-sm
              peer-focus:text-blue-400
              peer-valid:-top-4
              peer-valid:text-sm">
              Email
            </label>
          </div>

          {/* Message */}
          <div className="relative mb-8">
            <textarea
              rows={3}
              required
              name="message"
              placeholder="Message"
              className="peer w-full bg-transparent border-b-2 border-gray-400 outline-none py-2 text-white placeholder-transparent focus:border-blue-400 resize-none"
            />
            <label className="absolute left-0 top-2 text-gray-300 text-base transition-all duration-300
              peer-placeholder-shown:top-2
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              peer-focus:-top-4
              peer-focus:text-sm
              peer-focus:text-blue-400
              peer-valid:-top-4
              peer-valid:text-sm">
              Message
            </label>
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 transition duration-300 px-6 py-2 rounded-md shadow-md">
            Send Message
          </button>
          {status === "success" && (
            <p className="text-green-500 mt-4">
              Message Send Successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-500 mt-4">
              Something went wrong.
            </p>
          )}
        </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;