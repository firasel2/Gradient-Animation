import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-rose-700 relative">
        <motion.h2
          animate={{
            backgroundImage: "linear-gradient(to bottom right,#9333ea,#be123c)",
            transitionEnd: {
              backgroundImage: "none",
            },
          }}
          transition={{ duration: 2 }}
          className="text-5xl md:text-6xl 2xl:text-8xl text-center leading-[4rem] md:leading-[6rem] 2xl:leading-[10rem] font-bold capitalize text-white w-fit relative z-10"
        >
          Design with purpose,
          <br /> code with passion. <br />
          Keep pushing boundaries,
          <br /> innovate without limits.
          <div className="absolute h-full w-full top-0 left-0 flex items-center">
            <motion.div
              initial={{
                backgroundImage:
                  "radial-gradient(circle at 22% 20%, transparent 10%, rgba(0, 0, 0, 1) 12%)",
              }}
              animate={{
                backgroundImage:
                  "radial-gradient(circle at 40% 80%, transparent 12%, rgba(0, 0, 0, 1) 20%)",
                display: "block",
                transitionEnd: { display: "none" },
              }}
              transition={{ duration: 2 }}
              className="w-full h-full hidden"
            ></motion.div>
            <motion.div
              initial={{
                backgroundImage:
                  "radial-gradient(circle at 20% 13%, transparent 10%, rgba(0, 0, 0, 1) 15%)",
              }}
              animate={{
                backgroundImage:
                  "radial-gradient(circle at 30% 80%, transparent 15%, rgba(0, 0, 0, 1) 20%)",
                display: "block",
                transitionEnd: { display: "none" },
              }}
              transition={{ duration: 2 }}
              className="w-full h-full hidden"
            ></motion.div>
            <motion.div
              initial={{
                backgroundImage:
                  "radial-gradient(circle at 50% 80%, transparent 10%, rgba(0, 0, 0, 1) 15%)",
              }}
              animate={{
                backgroundImage:
                  "radial-gradient(circle at 35% 25%, transparent 15%, rgba(0, 0, 0, 1) 25%)",
                display: "block",
                transitionEnd: { display: "none" },
              }}
              transition={{ duration: 2 }}
              className="w-full h-full hidden"
            ></motion.div>
          </div>
        </motion.h2>
        <motion.div
          initial={{ display: "block" }}
          animate={{
            display: "block",
            background: "#000",
            transitionEnd: { display: "none" },
          }}
          transition={{ duration: 2 }}
          className="bg-black w-full h-full absolute top-0 left-0 z-[0] hidden"
        ></motion.div>
      </div>
    </>
  );
}
