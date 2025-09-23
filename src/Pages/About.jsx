import { motion } from "framer-motion";

export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-gray-50 px-8 pt-25 pb-20 md:pt-8 md:ml-64 min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-semibold mb-10 text-center text-sky-400">
          My Learning Journey
        </h3>

        <div className="relative border-l border-gray-600">
          {/* Step 1 */}
          <motion.div
            className=" ml-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute w-3 h-3 bg-sky-400 rounded-full mt-2.5 -left-1.5"></div>
            <motion.h4
              className="text-xl font-bold text-violet-300"
              whileHover={{ scale: 1.1, color: "#38bdf8" }} // hover = scale + glow
              transition={{ type: "spring", stiffness: 300 }}
            >
              Step 1: Foundations
            </motion.h4>
            <p className="mt-2 text-gray-700">
              Started with{" "}
              <span className="font-semibold">HTML, CSS, and JavaScript</span>.
              Built beginner projects like{" "}
              <span className="italic">Tic-Tac-Toe</span> and
              <span className="italic"> FAQ Accordion</span> to strengthen my
              basics.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className=" ml-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute w-3 h-3 bg-sky-400 rounded-full mt-2.5 -left-1.5"></div>
            <motion.h4
              className="text-xl font-bold text-violet-300"
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Step 2: React Basics
            </motion.h4>
            <p className="mt-2 text-gray-700">
              Transitioned into <span className="font-semibold">React</span>.
              Created <span className="italic">Travel Journal</span> — my first
              component-based project, exploring props and reusable components.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="ml-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute w-3 h-3 bg-sky-400 rounded-full mt-2.5 -left-1.5"></div>
            <motion.h4
              className="text-xl font-bold text-violet-300"
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Step 3: React Advanced
            </motion.h4>
            <p className="mt-2 text-gray-700">
              Built <span className="italic">Tenzies Game</span>, showcasing
              <span className="font-semibold">
                {" "}
                state management, conditional rendering, and interactivity
              </span>
              . Added win detection, confetti, and game stats for a polished
              experience.
            </p>
          </motion.div>
          {/* Step 4 */}
          <motion.div
            className="ml-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute w-3 h-3 bg-sky-400 rounded-full mt-2.5 -left-1.5"></div>
            <motion.h4
              className="text-xl font-bold text-violet-300"
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Step 4: React Advanced Project
            </motion.h4>
            <p className="mt-2 text-gray-700">
              Built <span className="italic">Assembly: Endgame</span>, pushing
              my skills in
              <span className="font-semibold">
                {" "}
                component design, state management, and interactive UI
              </span>
              . This project represents my growing confidence in React.
            </p>
          </motion.div>
          {/* Step 5 */}
          <motion.div
            className="ml-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute w-3 h-3 bg-sky-400 rounded-full mt-2.5 -left-1.5"></div>
            <motion.h4
              className="text-xl font-bold text-violet-300"
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Step 5: React Router
            </motion.h4>
            <p className="mt-2 text-gray-700">
              Created <span className="italic">Van Life</span>, a React app
              using
              <span className="font-semibold">
                {" "}
                React Router, nested routes, and dynamic data
              </span>
              . This project simulates a real-world rental app, strengthening my
              skills in routing and UI design.
            </p>
          </motion.div>
          {/* AI Acknowledgement Step */}
          <motion.div
            className="ml-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute w-3 h-3 bg-sky-400 rounded-full mt-2.5 -left-1.5"></div>
            <motion.h4
              className="text-xl font-bold text-violet-300"
              whileHover={{ scale: 1.05, color: "#38bdf8" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              AI Assistance
            </motion.h4>
            <p className="mt-2 text-gray-700 text-sm">
              Throughout building this portfolio and my projects, I leveraged
              AI-assisted guidance to structure components, implement responsive
              design, and optimize project presentation. This helped me learn
              best practices faster and ensure a clean, professional look.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
