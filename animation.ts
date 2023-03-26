import { animate } from "framer-motion";

export const fadeInup = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  export const stager ={
    initial :{

    },
    animate:{
      transition:{
        staggerChildren: 0.1,
      }
    }
  }