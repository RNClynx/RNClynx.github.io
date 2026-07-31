import { motion } from "framer-motion";
import {
  FaMicrochip,
  FaDesktop,
  FaMemory,
  FaKeyboard,
  FaMouse,
  FaHeadphones,
} from "react-icons/fa";

const specs = [
  {
    icon: <FaMicrochip />,
    title: "Processor",
    value: "AMD Ryzen 7 9700X (8-Core)",
  },
  {
    icon: <FaDesktop />,
    title: "Graphics Card",
    value: "NVIDIA GeForce RTX 4060 Ti",
  },
  {
    icon: <FaMemory />,
    title: "Memory",
    value: "16GB DDR5",
  },
  {
    icon: <FaKeyboard />,
    title: "Keyboard",
    value: "Razer Huntsman Mini",
  },
  {
    icon: <FaMouse />,
    title: "Mouse",
    value: "Razer Viper V3 HyperSpeed",
  },
  {
    icon: <FaHeadphones />,
    title: "Headset",
    value: "Razer BlackShark V2 Pro (Xbox Edition)",
  },
  {
    icon: <FaDesktop />,
    title: "Monitor",
    value: "MSI G32C4X • 240Hz",
  },
];

export default function Specs() {
  return (
    <section className="specs" id="specs">

      <motion.div
        className="sectionHeading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="sectionTag">
          MY SETUP
        </span>

        <p>
          i know i need more ram pls dont comment on ts
        </p>    
      </motion.div>

      <div className="specsGrid">

        {specs.map((item, i) => (
          <motion.div
            key={item.title}
            className="specCard"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="specIcon">
              {item.icon}
            </div>

            <span>{item.title}</span>

            <h3>{item.value}</h3>

          </motion.div>
        ))}

      </div>

    </section>
  );
}