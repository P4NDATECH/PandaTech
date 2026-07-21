import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu, ShieldCheck, Command } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { Eyebrow, Reveal, SectionHeading } from "../components/ui";

const features = [
  [Cpu, "Diseñado para rendir", "Control y claridad sobre los recursos que importan."],
  [Sparkles, "Inteligencia útil", "Tecnología que entiende el contexto y elimina fricción."],
  [ShieldCheck, "Siempre en control", "Herramientas transparentes, cuidadas y fiables."],
];

export default function Home() {
  return <PageTransition className="home"><section className="hero"><div className="hero-copy"><Reveal><Eyebrow>El futuro, bien pensado</Eyebrow><h1>Tu mundo digital,<br /><em>en su mejor versión.</em></h1><p>PandaTech crea software que hace que la tecnología se sienta más rápida, más clara y completamente tuya.</p><div className="hero-actions"><Link className="action" to="/productos">Explorar ecosistema <ArrowRight size={16} aria-hidden="true" /></Link><a className="text-link" href="https://youtube.com/@panduchiz?si=ATxXaclmviy-RCNp" target="_blank" rel="noreferrer">Ver en YouTube <ArrowRight size={16} aria-hidden="true" /></a></div></Reveal><Reveal delay={.15} className="metric-row"><div><b>01</b><span>ecosistema<br />unificado</span></div><div><b>24/7</b><span>pensado para<br />acompañarte</span></div><div><b>∞</b><span>posibilidades<br />por descubrir</span></div></Reveal></div><motion.div className="hero-product" initial={{ opacity: 0, scale: .92, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .18, ease: [.22, 1, .36, 1] }}><div className="product-orb"><div className="orb-inner"><Command size={56} aria-hidden="true" /></div></div><div className="floating-window"><div className="window-dots"><i /><i /><i /></div><span>SISTEMA · EN EQUILIBRIO</span><strong>98<span>%</span></strong><div className="mini-chart">{[28, 46, 34, 67, 41, 79, 56, 92, 68].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div><small>OPTIMIZACIÓN ACTIVA</small></div><div className="orbit-label">PANDA<br />OPTIMIZER</div></motion.div></section><section className="home-features"><SectionHeading eyebrow="Una forma más elegante de avanzar" title="Potencia sin complejidad." copy="Cada detalle está diseñado para que tu tecnología trabaje mejor, sin pedirte más atención." /><div className="feature-grid">{features.map(([Icon, title, copy], i) => <Reveal delay={i * .1} key={title}><article className="feature-card"><Icon aria-hidden="true" /><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article></Reveal>)}</div></section></PageTransition>;
}
