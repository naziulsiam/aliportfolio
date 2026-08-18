import React, { useEffect, useState, useCallback } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, ArrowUp, Award, CheckCircle2, ChevronDown, Code2, Copy, FileDown, Mail, Menu, Network, Radar, ShieldCheck, Terminal, Users, X, Zap } from 'lucide-react'
import './styles.css'

function LinkedinIcon(props) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

const projects = [
  { index:'01', name:'ZeroScan', category:'AI / Offensive Security', title:'AI-powered penetration testing, with a human in the loop.', copy:'A commercial-grade vulnerability testing platform with autonomous, mixed, and manual modes—designed to accelerate reconnaissance without removing professional judgement.', stack:['Python','AI / ML','Cybersecurity'], href:'https://github.com/naziulsiam/zeroscan', icon:Radar, stats:[['03','testing modes'],['AI','decision engine'],['OWASP','aligned']] },
  { index:'02', name:'NightBite', category:'Full-stack / Marketplace', title:'Turning surplus food into an accessible local marketplace.', copy:'A production-ready food rescue platform connecting restaurants and customers through discounted mystery boxes, secure payments, authentication, and live inventory.', stack:['TypeScript','React','Vite'], href:'https://github.com/naziulsiam/nightbite', icon:Zap, stats:[['50–70%','customer savings'],['Full','auth flow'],['Live','inventory']] },
  { index:'03', name:'ToolJam', category:'Productivity / APIs', title:'One fast, focused home for everyday digital tools.', copy:'A suite of 10+ polished utilities built with the Next.js App Router, live third-party APIs, secure environment handling, responsive UI, and an SEO-first structure.', stack:['Next.js 14','TypeScript','REST APIs'], href:'https://github.com/naziulsiam/tooljam', icon:Code2, stats:[['10+','working tools'],['Live','API data'],['SEO','optimised']] },
  { index:'04', name:'ZeroDay Hub', category:'Community / Platform', title:'A digital basecamp built for technical communities.', copy:'A custom society hub that centralises events, rules, resources, and social channels while giving the LSBU ZeroDay community a strong, consistent identity.', stack:['Next.js','React','Tailwind'], href:'https://github.com/naziulsiam/zeroday-linktree', icon:Users, stats:[['100+','members served'],['One','central hub'],['LSBU','community']] }
]

const experience = [
  { date:'OCT 2025 — NOW', role:'President & Founder', company:'LSBU ZeroDay Cybersecurity Society', place:'London, UK', summary:'Building a practical security community from the ground up—turning technical curiosity into hands-on capability.', points:['Lead workshops and CTF training for 100+ members','Mentor students in ethical hacking, network security, and exploitation','Organise penetration-testing competitions and collaborative research'] },
  { date:'MAR 2023 — AUG 2024', role:'Junior Cybersecurity Engineer', company:'SoftBD Ltd', place:'Dhaka, Bangladesh', summary:'Tested production systems, translated technical risk into clear reports, and worked alongside developers to close vulnerabilities.', points:['Executed web and network tests with Burp Suite, Nmap, Wireshark, and ZAP','Identified SQL injection, XSS, CSRF, and other OWASP Top 10 risks','Produced technical reports, executive summaries, and remediation guidance'] },
  { date:'DEC 2024 — JUL 2025', role:'Casual Assistant', company:'Sports Direct', place:'London, UK', summary:'Delivered reliable operations and accurate inventory handling in a high-volume, customer-facing environment.', points:['Maintained stock accuracy across fast-moving inventory','Built strong time management, teamwork, and operational discipline'] },
  { date:'2021 — 2023', role:'Volunteer', company:'Red Crescent Society', place:'Dhaka, Bangladesh', summary:'Supported vaccination and disaster-relief operations where calm communication and accurate coordination mattered.', points:['Supported registration and crowd control for 500+ daily visitors','Coordinated emergency supplies and flood-relief logistics'] }
]

const skills = [
  ['OFFENSIVE SECURITY','Burp Suite · OWASP ZAP · Nmap · Wireshark · Metasploit · Nessus · Kali Linux'],
  ['ENGINEERING','Python · TypeScript · JavaScript · Java · SQL · React · Next.js · Node.js · Flask'],
  ['SECURITY PRACTICE','Web security · Vulnerability assessment · Threat analysis · Secure code review · Incident response'],
  ['METHODS','OWASP Testing Guide · PTES · NIST Cybersecurity Framework · Technical reporting']
]

const fade = { hidden:{opacity:0,y:28}, visible:{opacity:1,y:0,transition:{duration:.65,ease:[.22,1,.36,1]}} }
function Reveal({children,className=''}) { const reduced=useReducedMotion(); return <motion.div className={className} variants={reduced?undefined:fade} initial={reduced?false:'hidden'} whileInView={reduced?undefined:'visible'} viewport={{once:true,margin:'-70px'}}>{children}</motion.div> }

function Nav({ activeSection }){
  const [open,setOpen]=useState(false); 
  const links=['work','experience','capabilities','about','contact']
  return <header className="nav-wrap">
    <a className="brand" href="#top" aria-label="Ali Siam home"><span>AS</span><b>ALI SIAM</b></a>
    <nav className={open?'nav-links open':'nav-links'}>
      {links.map((link,i)=>(
        <a key={link} href={`#${link}`} className={activeSection===link?'active':''} onClick={()=>setOpen(false)}>
          <small>0{i+1}</small>{link}
        </a>
      ))}
      <a className="nav-cta" href="mailto:naziulsiam3@gmail.com">LET'S TALK <ArrowUpRight size={15}/></a>
    </nav>
    <button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
      {open?<X/>:<Menu/>}
    </button>
  </header>
}

function ProjectCarousel(){
  const [active,setActive]=useState(0); 
  const reduced=useReducedMotion(); 
  const move=useCallback(d=>setActive(i=>(i+d+projects.length)%projects.length), []); 
  const p=projects[active]; 
  const Icon=p.icon

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') move(-1);
      else if (e.key === 'ArrowRight') move(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [move]);

  return <div className="project-shell" tabIndex={0} aria-label="Project showcase controls, use arrow keys to navigate">
    <div className="project-topline">
      <span>SELECTED BUILDS / {p.index}</span>
      <div className="carousel-controls">
        <button onClick={()=>move(-1)} aria-label="Previous project"><ArrowLeft/></button>
        <button onClick={()=>move(1)} aria-label="Next project"><ArrowRight/></button>
      </div>
    </div>
    <AnimatePresence mode="wait" initial={false}>
      <motion.article key={p.name} className="project-card" initial={reduced?false:{opacity:0,x:35}} animate={{opacity:1,x:0}} exit={reduced?undefined:{opacity:0,x:-35}} transition={{duration:.35}}>
        <div className="project-copy">
          <span className="eyebrow">{p.category}</span>
          <h3>{p.title}</h3>
          <p>{p.copy}</p>
          <div className="tag-row">{p.stack.map(t=><span key={t}>{t}</span>)}</div>
          <a className="text-link" href={p.href} target="_blank" rel="noreferrer">EXPLORE {p.name.toUpperCase()} <ArrowUpRight/></a>
        </div>
        <div className="project-visual">
          <div className="scan-grid"/>
          <motion.div className="project-icon" animate={reduced?undefined:{rotate:[0,4,0,-4,0]}} transition={{duration:8,repeat:Infinity}}>
            <Icon/>
          </motion.div>
          <div className="status-line"><i/> SYSTEM // ONLINE</div>
          <div className="project-stats">{p.stats.map(([v,l])=><div key={l}><strong>{v}</strong><span>{l}</span></div>)}</div>
        </div>
      </motion.article>
    </AnimatePresence>
    <div className="project-tabs">
      {projects.map((item,i)=>(
        <button key={item.name} className={i===active?'active':''} onClick={()=>setActive(i)}>
          <span>{item.index}</span>{item.name}
        </button>
      ))}
    </div>
  </div>
}

function App(){
  const [loaded,setLoaded]=useState(false); 
  const [activeSection, setActiveSection] = useState('top');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('naziulsiam3@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  useEffect(()=>{
    const id=setTimeout(()=>setLoaded(true),500);
    return()=>clearTimeout(id);
  },[]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 450);
      const sections = ['work', 'experience', 'capabilities', 'about', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) setActiveSection('top');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <>
    <AnimatePresence>
      {!loaded&&<motion.div className="loader" exit={{opacity:0}}><div><Terminal/><span>BOOTING PORTFOLIO.OS</span></div><i/></motion.div>}
    </AnimatePresence>
    <Nav activeSection={activeSection}/>
    <main id="top">
      <section className="hero section-pad">
        <div className="hero-orbit" aria-hidden="true"><i/><i/><i/></div>
        <motion.div className="hero-copy" initial={{opacity:0,y:24}} animate={loaded?{opacity:1,y:0}:{}} transition={{delay:.15,duration:.7}}>
          <div className="availability"><i/> AVAILABLE FOR CYBERSECURITY & SOFTWARE PROJECTS</div>
          <p className="kicker">CYBERSECURITY ENGINEER <span>/</span> SOFTWARE BUILDER</p>
          <h1>I break systems<br/>to build them <em>stronger.</em></h1>
          <p className="hero-intro">I’m Ali Siam—a security engineer and full-stack developer turning vulnerabilities into resilient products, practical tools, and stronger technical communities.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">VIEW MY WORK <ArrowRight/></a>
            <a className="button ghost" href="alisiam.pdf" download>DOWNLOAD CV <FileDown/></a>
          </div>
        </motion.div>
        <div className="hero-metrics">
          <div><strong>100+</strong><span>COMMUNITY MEMBERS LED</span></div>
          <div><strong>03</strong><span>SECURITY TESTING MODES BUILT</span></div>
          <div><strong>500+</strong><span>PEOPLE SUPPORTED DAILY</span></div>
        </div>
        <a className="scroll-cue" href="#work">SCROLL TO EXPLORE <ChevronDown/></a>
      </section>

      <section className="trust-strip">
        <span>FIELD EXPERIENCE</span><b>SOFTBD LTD</b><b>LSBU ZERODAY</b><b>RED CRESCENT</b><span>OWASP ALIGNED</span>
      </section>

      <section id="work" className="section-pad section">
        <Reveal className="section-head">
          <span className="section-index">01 / SELECTED WORK</span>
          <h2>Proof, not promises.</h2>
          <p>Security tools and digital products built around real problems, clear decisions, and usable outcomes.</p>
        </Reveal>
        <Reveal><ProjectCarousel/></Reveal>
      </section>

      <section id="experience" className="section section-pad experience-section">
        <Reveal className="section-head split">
          <div>
            <span className="section-index">02 / EXPERIENCE</span>
            <h2>Built in the real world.</h2>
          </div>
          <p>From production security assessments to student leadership and high-pressure public service.</p>
        </Reveal>
        <div className="timeline">
          {experience.map((job,i)=>(
            <Reveal className="timeline-row" key={job.company}>
              <div className="timeline-date">
                <span>{job.date}</span>
                <small>{job.place}</small>
              </div>
              <div className="timeline-marker"><i>{String(i+1).padStart(2,'0')}</i></div>
              <div className="timeline-content">
                <span>{job.company}</span>
                <h3>{job.role}</h3>
                <p>{job.summary}</p>
                <ul>{job.points.map(x=><li key={x}><CheckCircle2/>{x}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section section-pad">
        <Reveal className="section-head split">
          <div>
            <span className="section-index">03 / CAPABILITIES</span>
            <h2>Operator mindset.<br/>Builder toolkit.</h2>
          </div>
          <p>I work across the full security loop: discover the weakness, communicate the risk, build the fix, and make it usable.</p>
        </Reveal>
        <div className="cap-grid">
          {skills.map(([t,c],i)=>(
            <Reveal key={t} className="cap-card">
              <span>0{i+1}</span>
              {i===0?<ShieldCheck/>:i===1?<Code2/>:i===2?<Network/>:<Terminal/>}
              <h3>{t}</h3>
              <p>{c}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="award-section section-pad">
        <Reveal className="award-card">
          <div className="award-emblem"><Award/><span>LSBU</span></div>
          <div>
            <span className="section-index">RECOGNITION / COMMUNITY IMPACT</span>
            <h2>LSBU Group Award</h2>
            <h3>ZeroDay Cybersecurity Society</h3>
            <p>Recognised by London South Bank University for the society’s collective impact—creating an inclusive, practical space where students build real cybersecurity capability together.</p>
          </div>
          <div className="award-meta">
            <strong>AWARD</strong><span>TEAM IMPACT</span>
            <strong>ROLE</strong><span>PRESIDENT & FOUNDER</span>
          </div>
        </Reveal>
      </section>

      <section id="about" className="section section-pad about-section">
        <Reveal className="about-grid">
          <div>
            <span className="section-index">04 / ABOUT</span>
            <h2>Curious by default.<br/><em>Useful by design.</em></h2>
          </div>
          <div className="about-copy">
            <p>I’m a Computer Science student at London South Bank University, a former Junior Cybersecurity Engineer, and the founder of LSBU ZeroDay.</p>
            <p>My work sits where offensive security meets product thinking. I enjoy finding the edge case, understanding why it matters, and turning that insight into software, guidance, or training people can actually use.</p>
            <div className="education">
              <span>EDUCATION</span>
              <strong>BSc (Hons) Computer Science</strong>
              <small>London South Bank University · 2024—2027</small>
              <strong>Diploma in Computer Technology</strong>
              <small>VTTI · CGPA 3.61/4.00</small>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="contact section-pad">
        <Reveal>
          <span className="section-index">OPEN CHANNEL / LET’S CONNECT</span>
          <h2>Have a challenge worth solving?</h2>
          <p>I’m open to cybersecurity engineering roles, penetration testing challenges, and software development projects. If you’re building safer systems—or want help finding where they might fail—I’d like to hear from you.</p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:naziulsiam3@gmail.com">START A CONVERSATION <Mail/></a>
            <button className="button ghost copy-button" onClick={handleCopyEmail}>
              {copied ? <>COPIED! <CheckCircle2 size={16}/></> : <>COPY EMAIL <Copy size={16}/></>}
            </button>
          </div>
          <div className="socials">
            <a href="https://github.com/naziulsiam" target="_blank" rel="noreferrer"><Code2/>GITHUB</a>
            <a href="https://www.linkedin.com/in/naziulsiam" target="_blank" rel="noreferrer"><LinkedinIcon/>LINKEDIN</a>
            <a href="mailto:naziulsiam3@gmail.com"><Mail/>EMAIL</a>
          </div>
        </Reveal>
      </section>
    </main>

    <AnimatePresence>
      {showScrollTop && (
        <motion.a 
          href="#top" 
          className="scroll-top-btn" 
          initial={{ opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: 15 }} 
          aria-label="Scroll back to top"
        >
          <ArrowUp size={18}/>
        </motion.a>
      )}
    </AnimatePresence>

    <footer>
      <a className="brand" href="#top"><span>AS</span><b>ALI SIAM</b></a>
      <p>SECURITY ENGINEER · SOFTWARE BUILDER · LONDON, UK</p>
      <span>© 2026</span>
    </footer>
  </>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)
