import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ end, suffix, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 sec
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div
      className="flex flex-col items-center md:items-start mb-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl md:text-6xl text-gray-600 monument">
        {count}
        {suffix}
      </h2>
      <p className="text-lg md:text-xl text-gray-500">{label}</p>
    </motion.div>
  );
};

const CountUp = () => {
  const stats = [
    { end: 15, suffix: "+", label: "YEARS EXPERIENCE" },
    { end: 1000, suffix: "+", label: "PROJECTS GLOBALLY" },
    { end: 150, suffix: "+", label: "SATISFIED CLIENTS" },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12">
        
        {/* Left Side: Stats */}
        <div className="flex flex-col justify-center">
          {stats.map((item, idx) => (
            <Counter
              key={idx}
              end={item.end}
              suffix={item.suffix}
              label={item.label}
            />
          ))}
        </div>

        {/* Right Side: Image */}
        <motion.div
          className="w-[900px] h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/contact hero.jpg`}  // 🔄 replace with your image
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CountUp;
