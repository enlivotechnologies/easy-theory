import React, { useState, useEffect } from 'react';
// import Logo from './images/East-Theory-Logo-white.png';
import Logo from './images/EastTheory_Logo1.png';
import { 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle, 
  Cpu, 
  BarChart3, 
  Globe, 
  Compass, 
  Search, 
  Layers, 
  BookOpen, 
  Phone, 
  Mail,
  Check,
  MessageCircle 
} from 'lucide-react';
import { config } from './config';

// NOTE FOR LOCAL DEVELOPMENT:
// 1. Run: npm install @emailjs/browser
// 2. Uncomment the line below:
import emailjs from '@emailjs/browser';

  // EmailJS Configuration (Get these from https://dashboard.emailjs.com/)

const EastTheory = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Determine if the navbar should be transparent (Only on Home page when at the top)
  const isTransparent = currentPage === 'home' && !scrolled;

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const MobileNavLink = ({ page, label }) => (
    <button 
      onClick={() => navigate(page)}
      className={`block w-full text-left py-3 px-4 text-base font-medium border-b border-slate-100 ${
        currentPage === page ? 'text-blue-600 bg-blue-50' : 'text-slate-600'
      }`}
    >
      {label}
    </button>
  );

  const SectionTitle = ({ title, subtitle }) => (
    <div className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h2>
      {subtitle && <div className="h-1 w-20 bg-blue-600 mt-4"></div>}
    </div>
  );

  const CtaButton = ({ onClick, primary = true, children }) => (
    <button 
      onClick={onClick}
      className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md transition-all duration-200 ${
        primary 
          ? 'text-white bg-blue-900 hover:bg-blue-800 shadow-lg hover:shadow-xl' 
          : 'text-blue-900 bg-blue-100 hover:bg-blue-200'
      }`}
    >
      {children}
    </button>
  );

  // --- PAGE COMPONENTS ---

  const Home = () => (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900 opacity-20 transform skew-x-12 translate-x-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            We don't just build.<br />
            <span className="text-blue-400">We understand.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl">
            {config.appName} is a clarity firm that builds. <br className="hidden md:block"/>
            Websites. Marketing. Software. Strategy.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <CtaButton onClick={() => navigate('contact')}>Book a Diagnostic Call</CtaButton>
            <button 
              onClick={() => navigate('process')}
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-300 hover:text-white hover:border-white transition-all"
            >
              See How We Work <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">The Problem</h3>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Most businesses don't have a tech problem. They have a clarity problem.</h2>
            <p className="text-lg text-slate-600 mb-6">
              They're not sure what's actually broken, what to fix first, or who can help. 
              So they end up with websites that don't convert, marketing that feels random, and tech that creates more work.
            </p>
            <p className="text-lg font-medium text-slate-900 border-l-4 border-blue-600 pl-4">
              We fix this differently. We're problem-solvers, not order-takers.
            </p>
          </div>
          
          {/* Comparison Table */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-2 text-center">
              <div className="bg-slate-100 py-4 font-bold text-slate-500 uppercase">TYPICAL AGENCY</div>
              <div className="bg-blue-900 py-4 font-bold text-white uppercase">{config.appName}</div>
            </div>
            <div className="divide-y divide-slate-100">
              <div className="grid grid-cols-2 p-4">
                <div className="text-slate-500 text-sm md:text-base pr-2">You say what you want</div>
                <div className="text-blue-900 font-medium text-sm md:text-base pl-2 border-l border-slate-100">We diagnose first</div>
              </div>
              <div className="grid grid-cols-2 p-4 bg-slate-50">
                <div className="text-slate-500 text-sm md:text-base pr-2">They build it</div>
                <div className="text-blue-900 font-medium text-sm md:text-base pl-2 border-l border-slate-200">We recommend what you need</div>
              </div>
              <div className="grid grid-cols-2 p-4">
                <div className="text-slate-500 text-sm md:text-base pr-2">You hope it works</div>
                <div className="text-blue-900 font-medium text-sm md:text-base pl-2 border-l border-slate-100">We build it right</div>
              </div>
              <div className="grid grid-cols-2 p-4 bg-slate-50">
                <div className="text-slate-500 text-sm md:text-base pr-2">-</div>
                <div className="text-blue-900 font-medium text-sm md:text-base pl-2 border-l border-slate-200">We prove it works</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Clarity Cycle Teaser */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">The Clarity Cycle™</h2>
            <p className="text-slate-600 mt-2">Our proprietary process for solving chaos.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['ORIENT', 'DIAGNOSE', 'SIMPLIFY', 'BUILD', 'SYSTEMATIZE'].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
                <div className="text-blue-600 font-bold text-lg mb-2">0{i+1}</div>
                <div className="font-bold text-slate-900 text-sm">{step}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CtaButton onClick={() => navigate('process')} primary={false}>Learn More About Our Process →</CtaButton>
          </div>
        </div>
      </section>

      {/* What We Solve */}
      <section className="max-w-7xl mx-auto px-6">
        <SectionTitle title="What We Solve" subtitle />
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Search, title: "Identity Crisis", desc: "Nobody understands what you do" },
            { icon: BarChart3, title: "Random Marketing", desc: "Your marketing feels random" },
            { icon: Layers, title: "Process Chaos", desc: "You're drowning in manual processes" },
            { icon: Compass, title: "Directionless", desc: "You don't know what to fix first" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
              <item.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why East Theory */}
      <section className="bg-blue-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why "{config.appName}"?</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-blue-400 font-bold text-xl mb-2">EAST = Orientation</h3>
              <p className="text-slate-300">You need to know where you are before you move.</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-bold text-xl mb-2">THEORY = Pattern Recognition</h3>
              <p className="text-slate-300">The practice of seeing your business clearly, then building the right system.</p>
            </div>
          </div>
          <div className="mt-12 pt-12 border-t border-blue-800">
            <p className="text-xl font-medium">"Consulting-grade thinking. Agency-grade execution."</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Stop Guessing. Start Knowing.</h2>
        <p className="text-xl text-slate-600 mb-8">Book a 30-minute diagnostic call. No pressure. No sales theater. Just honest diagnosis and clear next steps.</p>
        <CtaButton onClick={() => navigate('contact')}>Book a Diagnostic Call</CtaButton>
      </section>
    </div>
  );

  const About = () => (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">We Think Before We Build</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Most agencies are execution machines. We're a clarity firm that builds.
          We diagnose what's broken, design the simplest fix, then build it properly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Why We Exist</h3>
          <p className="text-slate-700 mb-4">Digital shouldn't feel overwhelming.</p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <X className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-slate-600">Most businesses don't need "more marketing." They need clarity on their message.</span>
            </li>
            <li className="flex items-start">
              <X className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-slate-600">Most don't need "a new website." They need to understand why the current one fails.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-slate-900 font-medium">We cut through the noise, diagnose the real problem, and build only what matters.</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-900 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6">What Makes Us Different</h3>
          <ul className="space-y-6">
            {[
              "Strategic thinking of consultants",
              "Execution quality of top agencies",
              "Honest communication of founders",
              "Systems mindset of engineers"
            ].map((item, i) => (
              <li key={i} className="flex items-center">
                <Check className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-blue-200 italic">Most firms are good at thinking OR doing. We do both.</p>
        </div>
      </div>

      <div>
        <SectionTitle title="Our Values" subtitle />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { t: "Clarity over complexity", i: "💡" },
            { t: "Diagnosis before execution", i: "🧭" },
            { t: "Logic over trends", i: "📊" },
            { t: "Honesty over hype", i: "💬" },
            { t: "Systems over quick fixes", i: "⚙️" },
            { t: "Results over output", i: "🎯" }
          ].map((val, i) => (
            <div key={i} className="border border-slate-200 p-6 rounded-xl text-center hover:bg-slate-50 transition-colors">
              <div className="text-3xl mb-3">{val.i}</div>
              <div className="font-bold text-slate-900">{val.t}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-100 p-12 rounded-3xl text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Clarity creates momentum</h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
When you understand your business deeply - what you truly offer, who you serve, and why it matters - everything else flows. Strategy becomes intuitive. Messaging becomes natural. Decisions become faster.
We believe the best work happens when thinking comes before doing. When you take time to see the patterns, understand the problems, and distill what matters most.
This is where real growth begins.
        </p>
        <CtaButton onClick={() => navigate('contact')}>If you value honesty, let's talk</CtaButton>
      </div>
    </div>
  );

  const Services = () => (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">What We Build</h1>
        <p className="text-xl text-slate-600">
          We diagnose first, then build the right solution.
        </p>
      </div>

      <div className="space-y-24">
        {/* Websites */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 bg-slate-50 p-8 rounded-2xl sticky top-24">
            <Globe className="h-10 w-10 text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Websites</h2>
            <p className="text-slate-600 italic mb-6">"If your website makes people think too much, it's already failing."</p>
            <div className="space-y-2 text-sm text-slate-500">
              <p>→ Load fast (under 2 seconds)</p>
              <p>→ Explain clearly (5 second rule)</p>
              <p>→ Look clean (no clutter)</p>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white border border-slate-200 p-6 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-3">What We Build</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Business & corporate websites</li>
                  <li>• E-commerce stores</li>
                  <li>• Landing pages</li>
                  <li>• Portfolio websites</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 p-6 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-3">What You Get</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2"/> Strategic positioning</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2"/> SEO-optimized from day one</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2"/> Responsive development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* Marketing */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 bg-slate-50 p-8 rounded-2xl sticky top-24">
            <BarChart3 className="h-10 w-10 text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Digital Marketing</h2>
            <p className="text-slate-600 italic mb-6">"Marketing with logic, not noise."</p>
            <p className="text-sm text-slate-500">We target the right audience, with the right message, on the right platform.</p>
          </div>
          <div className="md:col-span-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 p-6 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-3">What We Do</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Social media management</li>
                  <li>• Performance marketing (Ads)</li>
                  <li>• SEO & Content</li>
                  <li>• Email marketing automation</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 p-6 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-3">What You Get</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2"/> Consistent brand content</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2"/> Ads optimized for ROI</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2"/> Monthly logic reports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* Software */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 bg-slate-50 p-8 rounded-2xl sticky top-24">
            <Cpu className="h-10 w-10 text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Custom Software</h2>
            <p className="text-slate-600 italic mb-6">"Tech that solves problems, not creates more."</p>
            <p className="text-sm text-slate-500">We build simple, functional tools to automate repetitive tasks.</p>
          </div>
          <div className="md:col-span-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 p-6 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-3">What We Build</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Custom web applications</li>
                  <li>• Mobile apps (iOS, Android)</li>
                  <li>• Internal business tools</li>
                  <li>• API Integrations</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 p-6 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-3">What You Get</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2"/> Clean, maintainable code</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2"/> User-friendly interfaces</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2"/> Full documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Consulting */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 bg-slate-50 p-8 rounded-2xl sticky top-24">
            <Compass className="h-10 w-10 text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Clarity Consulting</h2>
            <p className="text-slate-600 italic mb-6">"Clarity first, execution second."</p>
            <p className="text-sm text-slate-500">We help you see clearly, then we help you act decisively.</p>
          </div>
          <div className="md:col-span-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 p-6 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-3">What We Do</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Digital diagnostic audits</li>
                  <li>• Business strategy</li>
                  <li>• Funnel optimization</li>
                  <li>• Digital transformation</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 p-6 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-3">What You Get</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2"/> Prioritized recommendations</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2"/> Clear roadmap</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2"/> Honest assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-24 text-center">
        <h3 className="text-2xl font-bold mb-4">Not sure what you need?</h3>
        <CtaButton onClick={() => navigate('contact')}>Book a Free Diagnostic Call</CtaButton>
      </div>
    </div>
  );

  const Process = () => (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">The {config.appName} Clarity Cycle™</h1>
        <p className="text-xl text-slate-600">
          We believe slow thinking leads to fast execution.
          Brief → Design → Build → Launch → Hope is a broken model. We use a cycle that works.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-24 space-y-16">
        {[
          {
            step: "01",
            title: "ORIENT",
            tagline: "Understand your business, not just your brief.",
            desc: "We deep-dive into your business, customers, and competition. We map where you are and where you want to go.",
            output: "Orientation Document"
          },
          {
            step: "02",
            title: "DIAGNOSE",
            tagline: "Find the real bottleneck, not the symptom.",
            desc: "We identify the highest-leverage problem. We distinguish symptoms from root causes.",
            output: "Diagnostic Report with prioritized recommendations"
          },
          {
            step: "03",
            title: "SIMPLIFY",
            tagline: "Remove what's unnecessary, focus on leverage.",
            desc: "We strip away complexity. We design the simplest system that'll work.",
            output: "Simplified Strategy with clear milestones"
          },
          {
            step: "04",
            title: "BUILD",
            tagline: "Execute with precision, not perfection theater.",
            desc: "We optimize for clarity, functionality, and speed. Not awards or unnecessary complexity.",
            output: "The Solution — built right, launched properly"
          },
          {
            step: "05",
            title: "SYSTEMATIZE",
            tagline: "Make it repeatable, not dependent on you.",
            desc: "We document everything, train your team, and hand over ownership. You understand how it works.",
            output: "System Documentation + Training"
          },
        ].map((item, i) => (
          <div key={i} className="relative pl-8 md:pl-16">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
            <div className="md:flex gap-8">
              <div className="mb-4 md:mb-0">
                <span className="text-6xl font-bold text-slate-100">{item.step}</span>
              </div>
              <div className="max-w-2xl bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <h4 className="font-semibold text-slate-900 mb-4">{item.tagline}</h4>
                <p className="text-slate-600 mb-4">{item.desc}</p>
                <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium inline-block">
                  Output: {item.output}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 mt-24 text-center">
        <h3 className="text-2xl font-bold mb-8">Why It Works</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>Diagnose before prescribe</div>
          <div>Avoid expensive mistakes</div>
          <div>Create sustainable systems</div>
          <div>Optimize for impact</div>
        </div>
        <CtaButton onClick={() => navigate('contact')}>Ready to Start With Clarity?</CtaButton>
      </div>
    </div>
  );

  const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormStatus('submitting');

      // --- EMAIL SENDING LOGIC ---
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: config.email 
      };

      // PREVIEW MODE SIMULATION:
      // This timeout simulates a successful email send so you can verify the UI state.
      setTimeout(() => {
          console.log("Simulation: Email successfully sent with params:", templateParams);
          setFormStatus('success');
      }, 1500);

       // ============================================================
      // REAL EMAILJS IMPLEMENTATION (UNCOMMENT THIS FOR PRODUCTION)
      // ============================================================
      
      // emailjs.send(
      //   config.emailjs.serviceId,
      //   config.emailjs.templateId,
      //   templateParams,
      //   config.emailjs.publicKey
      // ).then(
      //   (response) => {
      //     console.log('SUCCESS!', response.status, response.text);
      //     setFormStatus('success');
      //   },
      //   (error) => {
      //     console.log('FAILED...', error);
      //     alert("Something went wrong. Please try again later or email us directly.");
      //     setFormStatus('idle');
      //   }
      // );
    };

    if (formStatus === 'success') {
      return (
        <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-12 border border-slate-100 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Sent!</h2>
            <p className="text-xl text-slate-600 mb-8">
              We've received your details. A member of our team will review them and contact you at <strong>{formData.email}</strong> within 24 hours.
            </p>
            <button 
              onClick={() => navigate('home')}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 transition-all shadow-lg"
            >
              Back to Home
            </button>
            <div className="mt-6">
              <button 
                onClick={() => setFormStatus('idle')}
                className="text-sm text-slate-500 hover:text-blue-600 underline"
              >
                Submit another request
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Let's Figure Out What's Not Working</h1>
          <p className="text-xl text-slate-600 mb-8">
            Book a 30-minute diagnostic call. <br />
            No pressure. No sales theater.
          </p>

          <div className="mb-8">
            <h3 className="font-bold text-slate-900 mb-4">WHAT HAPPENS ON THE CALL:</h3>
            <div className="flex gap-4 text-sm font-medium text-slate-700">
              <div className="bg-slate-100 px-4 py-2 rounded">1. We Listen</div>
              <div className="bg-slate-100 px-4 py-2 rounded">2. We Diagnose</div>
              <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded">3. We Recommend</div>
            </div>
          </div>

          <div className="space-y-4 mb-12">
            <h3 className="font-bold text-slate-900">You should talk to us if:</h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start"><Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"/> Your website exists but doesn't convert</li>
              <li className="flex items-start"><Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"/> Your marketing feels random</li>
              <li className="flex items-start"><Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"/> You don't know what to fix first</li>
              <li className="flex items-start"><Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"/> You value honesty over sales pitches</li>
            </ul>
          </div>

          <div className="border-t border-slate-200 pt-8 space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-600"/>
              <a href={`mailto:${config.email}`} className="text-slate-600 hover:text-blue-600 font-medium">{config.email}</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-600"/>
              <a href={`tel:${config.phone}`} className="text-slate-600 hover:text-blue-600 font-medium">{config.phone}</a>
            </div>
            <p className="text-sm text-slate-400 pt-2">We respond within 24 hours.</p>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 border border-slate-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input 
                required 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
                placeholder="Your name" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input 
                required 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
                placeholder="you@company.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
                placeholder="Company Name" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">What's not working?</label>
              <textarea 
                required 
                rows="4" 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
                placeholder="Tell us briefly about your current bottleneck..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={formStatus === 'submitting'}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-wait flex justify-center items-center"
            >
              {formStatus === 'submitting' ? (
                <>
                  <span className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                  Processing...
                </>
              ) : "Book My Call"}
            </button>

            {/* Added WhatsApp and Phone options below the button */}
            <div className="mt-6 text-center">
              <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 text-xs uppercase font-bold">Or</span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>
              
              <div className="flex flex-col gap-3 mt-2">
                <a 
                  href={`https://wa.me/${config.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-slate-600 hover:text-green-600 transition-colors font-medium"
                >
                  <MessageCircle className="h-5 w-5 text-green-500" />
                  Chat on WhatsApp
                </a>
                <a 
                  href={`tel:${config.whatsApp}`}
                  className="flex items-center justify-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  <Phone className="h-5 w-5 text-blue-500" />
                  {config.whatsApp}
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-24 bg-slate-50 p-8 rounded-xl">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Quick FAQ</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-slate-800">Do you work outside {config.address.split(',')[0]}?</h4>
            <p className="text-slate-600 text-sm">Yes. India and internationally.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800">Typical project size?</h4>
            <p className="text-slate-600 text-sm">Varies by scope. We'll discuss on the call.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800">Ongoing support?</h4>
            <p className="text-slate-600 text-sm">Optional. We build systems you can manage independently.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800">How long does it take?</h4>
            <p className="text-slate-600 text-sm">4-12 weeks depending on complexity.</p>
          </div>
        </div>
      </div>
    </div>
  );
  };

  const Blog = () => (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">The {config.appName} Blog</h1>
        <p className="text-xl text-slate-600">Articles on clarity, strategy, and building systems that work.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Why Most Businesses Build The Wrong Website",
          "Digital Symptoms vs. Digital Problems",
          "5 Signs Your Agency Is Wasting Your Money",
          "Marketing With Logic: A Framework for Founders",
          "When You Actually Need Custom Software",
          "The Clarity Cycle Explained",
          "Why 'Best Practices' Often Aren't",
          "Audit Your Digital Presence in 30 Minutes"
        ].map((title, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-300">
              <BookOpen className="h-12 w-12" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{title}</h3>
              <p className="text-slate-500 text-sm mb-4">5 min read</p>
              <div className="text-blue-600 text-sm font-medium flex items-center">Read Article <ArrowRight className="h-3 w-3 ml-1"/></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${!isTransparent ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            onClick={() => navigate('home')} 
            className={`flex items-center gap-5 cursor-pointer group`}
          >
            <div
    className={`
      h-16 w-16 rounded-2xl overflow-hidden border transition-all duration-200 flex items-center justify-center shadow-md
      ${!isTransparent 
        ? 'bg-white border-slate-200' 
        : 'bg-white/90 border-slate-300'}
    `}
  >
    <img
      src={Logo}
      alt={config.appName}
      className="h-full w-full object-cover"
    />
  </div>

  {/* Company Name */}
  <span
    className={`
      font-bold text-2xl md:text-3xl tracking-tight uppercase transition-colors
      ${!isTransparent ? 'text-slate-900' : 'text-white'}
    `}
  >
    {config.appName}
  </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Process'].map(item => {
              const isActive = currentPage === item.toLowerCase();
              return (
                <button 
                  key={item}
                  onClick={() => navigate(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    !isTransparent
                      ? (isActive ? 'text-blue-600 font-bold' : 'text-slate-600 hover:text-blue-600') 
                      : (isActive ? 'text-white font-bold' : 'text-slate-200 hover:text-white')
                  }`}
                >
                  {item}
                </button>
              );
            })}
            <button 
              onClick={() => navigate('contact')}
              className={`px-4 py-2 rounded text-sm font-bold transition-colors ${
                !isTransparent
                  ? 'bg-blue-900 text-white hover:bg-blue-800' 
                  : 'bg-white text-blue-900 hover:bg-slate-100'
              }`}
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={!isTransparent ? 'text-slate-900' : 'text-white'}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100">
            <div className="flex flex-col">
              {['Home', 'About', 'Services', 'Process', 'Contact'].map(item => (
                <MobileNavLink key={item} page={item.toLowerCase()} label={item} />
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'process' && <Process />}
        {currentPage === 'contact' && <Contact />}
        {/* {currentPage === 'blog' && <Blog />} */}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-white font-bold text-2xl mb-4 uppercase">{config.appName}</div>
            <p className="max-w-xs mb-6">A clarity firm that builds. We diagnose the problem before we build the solution.</p>
            <div className="flex space-x-4">
              <a href={config.website} className="hover:text-white"><Globe className="h-5 w-5"/></a>
              <a href={`mailto:${config.email}`} className="hover:text-white"><Mail className="h-5 w-5"/></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('about')} className="hover:text-white">About</button></li>
              <li><button onClick={() => navigate('services')} className="hover:text-white">Services</button></li>
              <li><button onClick={() => navigate('process')} className="hover:text-white">The Clarity Cycle</button></li>
              {/* <li><button onClick={() => navigate('blog')} className="hover:text-white">Blog</button></li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>{config.email}</li>
              <li>{config.phone}</li>
              <li>{config.address}</li>
              <li className="pt-4"><button onClick={() => navigate('contact')} className="text-blue-400 hover:text-blue-300">Book a Diagnostic Call →</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} {config.Copyright}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EastTheory;