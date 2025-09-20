import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Mail = FiMail;
const Github = FaGithub;
const Linkedin = FaLinkedin;

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-sky-900 
                 min-h-screen flex flex-col justify-center items-center
                 text-center text-white px-4 ml-64"
    >
      <div className="max-w-2xl">
        <h3 className="text-3xl font-semibold mb-6 text-sky-400">
          Get In Touch
        </h3>
        <p className="text-lg mb-8 text-gray-300">
          I’m always open to discussing new opportunities, collaborations, or
          just chatting about web development. Feel free to connect with me!
        </p>

        {/* Contact Buttons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="mailto:prakruti.kapadia@gmail.com"
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 px-5 py-3 rounded shadow-md"
          >
            <Mail className="w-5 h-5" /> Email Me
          </a>
          <a
            href="https://github.com/PrakrutiPareek"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-5 py-3 rounded shadow-md"
          >
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/prakruti-pareek"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded shadow-md"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </div>

        {/* Resume Button */}
        <a
          href="./public/Prakruti_Pareek_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded shadow-md">
            Download My Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Contact;
