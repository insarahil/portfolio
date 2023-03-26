import Bar from "@/components/Bar";
import { languages, tools } from "@/data";
import React from "react";
import { motion } from "framer-motion";
import { fadeInup } from "@/animation";

function resume() {
  return (
    <div className="px-6 py-2">
      {/* Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInup} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              BS in Software Engineering
            </h5>
            <p className="my-3">Acadmic of Technology(2011 - 2015)</p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Master of Computer Science (MCS)
            </h5>
            <p className="my-3">Acadmic of Technology(2017 - 2019)</p>
          </div>
        </motion.div>

        <motion.div variants={fadeInup} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Fullstack Developer</h5>
            <p className="font-semibold"> Q Soft Technologies</p>
            <p className="my-3">
              Currently working as MERN Stack Web and Mobile Developer
            </p>
          </div>
        </motion.div>
      </div>

      {/* Languages & Tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Framwork</h5>
          <div className="my-2">
            {languages.map((Language) => (
              <Bar data={Language} key={Language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map((Tool) => (
              <Bar data={Tool} key={Tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default resume;
