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
        <h2 className="text-8xl text-center leading-[10rem] font-bold capitalize text-white">
          Design with purpose,
          <br /> code with passion. <br />
          Keep pushing boundaries,
          <br /> innovate without limits.
        </h2>

        <div
          className="absolute h-full w-full top-0 left-0 flex items-center"
        >
          <motion.div
            initial={{
              backgroundImage:
                "radial-gradient(circle at 600px 100px, transparent 50px, rgba(0, 0, 0, 1) 100px)",
            }}
            animate={{
              backgroundImage:["radial-gradient(circle at 200px 200px, transparent 50px, rgba(0, 0, 0, 1) 100px)", "radial-gradient(circle at 300px 200px, transparent 50px, rgba(0, 0, 0, 1) 100px)","radial-gradient(circle at 300px 300px, transparent 50px, rgba(0, 0, 0, 1) 100px)","radial-gradient(circle at 500px 500px, transparent 50px, rgba(0, 0, 0, 1) 100px)","radial-gradient(circle at 300px 1500px, transparent 50px, rgba(0, 0, 0, 1) 100px)"],
              display:"block",
              transitionEnd:{display:'none'}
            }}
            transition={{ duration: 2}}
            className="w-full h-full hidden"
          ></motion.div>
         <motion.div
            initial={{
              backgroundImage:
                "radial-gradient(circle at 500px 500px, transparent 50px, rgba(0, 0, 0, 1) 100px)",
            }}
            animate={{
              backgroundImage:["radial-gradient(circle at 400px 400px, transparent 60px, rgba(0, 0, 0, 1) 150px)", "radial-gradient(circle at 300px 400px, transparent 60px, rgba(0, 0, 0, 1) 150px)","radial-gradient(circle at 300px 300px, transparent 60px, rgba(0, 0, 0, 1) 150px)","radial-gradient(circle at 150px 150px, transparent 60px, rgba(0, 0, 0, 1) 150px)", "radial-gradient(circle at 150px -150px, transparent 60px, rgba(0, 0, 0, 1) 150px)"],
              display:"block",
              transitionEnd:{display:'none'}
            }}
            transition={{ duration: 2}}
            className="w-full h-full hidden"
          ></motion.div>
          <motion.div
            initial={{
              backgroundImage:
                "radial-gradient(circle at 100px 100px, transparent 50px, rgba(0, 0, 0, 1) 100px)",
            }}
            animate={{
              backgroundImage:["radial-gradient(circle at 200px 200px, transparent 80px, rgba(0, 0, 0, 1) 160px)", "radial-gradient(circle at 300px 200px, transparent 80px, rgba(0, 0, 0, 1) 160px)","radial-gradient(circle at 300px 300px, transparent 80px, rgba(0, 0, 0, 1) 160px)","radial-gradient(circle at 500px 500px, transparent 80px, rgba(0, 0, 0, 1) 160px)", "radial-gradient(circle at 5000px 5000px, transparent 80px, rgba(0, 0, 0, 1) 160px)"],
              display:"block",
              transitionEnd:{display:'none'}
            }}
            transition={{ duration: 2 }}
            className="w-full h-full hidden"
          ></motion.div>
        </div>
      </div>
    </>
  );
}

{
  /* <svg width="1440" height="1024" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1440" height="1024" fill="url(#paint0_radial_1_3)"/>
<defs>
<radialGradient id="paint0_radial_1_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(331 386) rotate(-98.6649) scale(233.161 231.291)">
<stop stop-opacity="0"/>
<stop offset="1"/>
</radialGradient>
</defs>
</svg> */
}
