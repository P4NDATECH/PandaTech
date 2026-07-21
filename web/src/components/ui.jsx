import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: 0, y: reduceMotion ? 0 : 16, filter: reduceMotion ? "none" : "blur(6px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: reduceMotion ? 0 : .58, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function Eyebrow({ children }) { return <span className="eyebrow"><i />{children}</span>; }

export function SectionHeading({ eyebrow, title, copy, align = "center" }) {
  return <Reveal className={`section-heading ${align}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{copy && <p>{copy}</p>}</Reveal>;
}

export function Action({ children, secondary = false, className = "", ...props }) {
  const reduceMotion = useReducedMotion();
  return <motion.button whileHover={reduceMotion ? undefined : { y: -1 }} whileTap={{ scale: .98 }} className={`action ${secondary ? "secondary" : ""} ${className}`} {...props}>{children}{!secondary && <ArrowUpRight size={16} aria-hidden="true" />}</motion.button>;
}
