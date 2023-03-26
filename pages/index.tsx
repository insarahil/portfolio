import { fadeInup, stager } from "@/animation";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import React from "react";
import { service } from "../data";

function index() {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 text-base font-medium text-justify">
        I am Master in Computer Science from Virtual University of Pakistan. I
        have 2+ years of experience in Web Development and I am a Full Stack Web
        Developer with background kamowladge of MERN Stack with redux, along
        with knack of Builiding applications with almost efficiency. Strong
        professional with BSC willing to be an asset for an organization.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-semibold tracking-wide">
          What I offer
        </h6>
        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stager}
          initial="initial"
          animate="animate"
        >
          {service.map((service) => (
            <motion.div
              variants={fadeInup}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default index;
