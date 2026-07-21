import { motion } from "framer-motion";
export default function PageTransition({ children, className = "" }) { return <motion.div className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .35 }}>{children}</motion.div>; }
