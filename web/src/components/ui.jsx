import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Reveal({ children, className = "", delay = 0 }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 18, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: .65, delay }}>{children}</motion.div>;
}

export function Eyebrow({ children }) { return <span className="eyebrow"><i />{children}</span>; }

export function SectionHeading({ eyebrow, title, copy, align = "center" }) {
  return <Reveal className={`section-heading ${align}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{copy && <p>{copy}</p>}</Reveal>;
}

export function Action({ children, secondary = false, className = "", ...props }) {
  return <motion.button whileTap={{ scale: .97 }} className={`action ${secondary ? "secondary" : ""} ${className}`} {...props}>{children}{!secondary && <ArrowUpRight size={16} />}</motion.button>;
}
