// import React from 'react';
// import { 
//   Layers, 
//   MessageSquare, 
//   Settings, 
//   ArrowUpRight, 
//   Mail, 
//   Linkedin, 
//   Youtube, 
//   Facebook, 
//   Twitter, 
//   Instagram 
// } from 'lucide-react';

// export default function Home() {
//   const services = [
//     {
//       icon: <Layers className="w-6 h-6 text-emerald-400" />,
//       title: "Product & Catalog Management",
//       desc: "Bulk uploading new products, managing inventory levels, organizing collections, and updating pricing variations on Shopify and WordPress/WooCommerce."
//     },
//     {
//       icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
//       title: "Customer Support & Live Chat",
//       desc: "Monitoring live chat dashboards, handling customer support inquiries in real-time, and setting up automated chatbots to capture leads 24/7."
//     },
//     {
//       icon: <Settings className="w-6 h-6 text-emerald-400" />,
//       title: "General Site Maintenance",
//       desc: "Setting up store pages, updating promotional banners, testing for broken links, and managing basic plugin updates to keep your site optimized."
//     }
//   ];

//   const socials = [
//     { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/coresiteva/', color: 'hover:text-blue-400' },
//     { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, url: 'https://www.youtube.com/@CoreSiteVA', color: 'hover:text-red-500' },
//     // { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: 'https://facebook.com/yourpage', color: 'hover:text-blue-600' },
//     // { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/yourhandle', color: 'hover:text-sky-400' },
//     // { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com/yourprofile', color: 'hover:text-pink-500' },
//   ];

//   return (
//     <div className="min-h-screen w-full overflow-x-hidden bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
//       {/* Navigation */}
//       <nav className="border-b border-slate-900 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
//           <span className="text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap">
//             CoreSite<span className="text-emerald-400">VA</span>
//           </span>
//           <a 
//             href="#contact" 
//             className="text-xs sm:text-sm font-medium bg-emerald-500 text-slate-950 px-3 sm:px-4 h-9 rounded-md flex items-center justify-center hover:bg-emerald-400 transition-colors whitespace-nowrap flex-shrink-0"
//           >
//             Hire Me
//           </a>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-32 flex flex-col items-start gap-5 sm:gap-6">
//         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium tracking-wide">
//           <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
//           Available for New Projects
//         </div>
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-tight break-words">
//           I manage the backend of your store so you can focus on <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">growth.</span>
//         </h1>
//         <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
//           Stop wasting hours resizing product images and managing live chat queues. Get expert Shopify, WordPress, and tech operations support for your digital storefront.
//         </p>
//         <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
//           <a 
//             href="#contact" 
//             className="bg-slate-100 text-slate-950 px-6 h-12 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors group w-full sm:w-auto"
//           >
//             Get in Touch 
//             <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//           </a>
//           <a 
//             href="#services" 
//             className="border border-slate-800 bg-slate-900/50 px-6 h-12 rounded-lg font-medium flex items-center justify-center text-slate-300 hover:border-slate-700 hover:text-white transition-colors w-full sm:w-auto"
//           >
//             View Services
//           </a>
//         </div>
//       </header>

//       {/* Services Section */}
//       <section id="services" className="border-t border-slate-900 bg-slate-900/20 py-14 sm:py-20">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6">
//           <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight mb-2">What I Do</h2>
//           <p className="text-slate-400 mb-10 sm:mb-12 max-w-lg text-sm sm:text-base">Reliable backend administration tailored to keep online stores humming perfectly.</p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
//             {services.map((item, index) => (
//               <div 
//                 key={index} 
//                 className="p-5 sm:p-6 rounded-xl border border-slate-900 bg-slate-900/40 hover:border-slate-800 transition-colors flex flex-col gap-4"
//               >
//                 <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 shadow-inner flex-shrink-0">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-base sm:text-lg font-semibold text-white">{item.title}</h3>
//                 <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-32">
//         <div className="border border-slate-900 bg-gradient-to-b from-slate-900/60 to-slate-950 rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col items-center text-center gap-5 sm:gap-6 max-w-3xl mx-auto">
//           <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Ready to Offload Your Tasks?</h2>
//           <p className="text-slate-400 max-w-md leading-relaxed text-sm sm:text-base">
//             Let's discuss how I can keep your catalog updated and your customers taken care of. Drop me an email or connect across social channels.
//           </p>
          
//           {/* Direct Email CTA */}
//           <a 
//             href="mailto:contact.coresiteva@gmail.com" 
//             className="mt-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 sm:px-8 py-4 rounded-xl font-semibold text-sm sm:text-base transition-colors shadow-lg shadow-emerald-500/10 break-all sm:break-normal"
//           >
//             <Mail className="w-5 h-5 flex-shrink-0" />
//             contact.coresiteva@gmail.com
//           </a>

//           {/* Social Icons Pipeline */}
//           <div className="w-full h-px bg-slate-900 my-4" />
          
//           <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
//             {socials.map((platform, idx) => (
//               <a 
//                 key={idx}
//                 href={platform.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`text-slate-400 transition-colors flex items-center gap-2 text-sm ${platform.color}`}
//                 title={platform.name}
//               >
//                 {platform.icon}
//                 <span className="hidden sm:inline font-medium">{platform.name}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-slate-900 text-slate-600 text-xs py-8">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
//           <p>© {new Date().getFullYear()} CoreSite VA. All rights reserved.</p>
//           <p className="text-slate-500">Premium E-Commerce Operational Support</p>
//         </div>
//       </footer>

//     </div>
//   );
// }



















import React from 'react';
import { 
  Layers, 
  Wrench, 
  TrendingUp,
  MessageSquare, 
  ArrowUpRight, 
  Mail, 
  Linkedin, 
  Youtube, 
  Facebook, 
  Twitter, 
  Instagram 
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      title: "Store & Catalog Management",
      desc: "Bulk product uploads, inventory accuracy, collection organization, and pricing updates handled fast and error-free on Shopify and WordPress/WooCommerce."
    },
    {
      icon: <Wrench className="w-6 h-6 text-emerald-400" />,
      title: "Technical Fixes & Site Speed",
      desc: "Broken layouts, plugin conflicts, checkout errors, and sluggish load times diagnosed and fixed so your store runs fast and stays online."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      title: "SEO That Drives Traffic",
      desc: "On-page optimization, technical SEO audits, metadata, and site structure improvements built to get your products found and ranked."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
      title: "Customer Support & Live Chat",
      desc: "Real-time chat coverage, fast response to customer inquiries, and automated chatbot setup so you never miss a lead or a sale."
    }
  ];

  const socials = [
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/coresiteva/', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, url: 'https://www.youtube.com/@CoreSiteVA', color: 'hover:text-red-500' },
    // { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: 'https://facebook.com/yourpage', color: 'hover:text-blue-600' },
    // { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/yourhandle', color: 'hover:text-sky-400' },
    // { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com/yourprofile', color: 'hover:text-pink-500' },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Navigation */}
      <nav className="border-b border-slate-900 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap">
            CoreSite<span className="text-emerald-400">VA</span>
          </span>
          <a 
            href="#contact" 
            className="text-xs sm:text-sm font-medium bg-emerald-500 text-slate-950 px-3 sm:px-4 h-9 rounded-md flex items-center justify-center hover:bg-emerald-400 transition-colors whitespace-nowrap flex-shrink-0"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-32 flex flex-col items-start gap-5 sm:gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium tracking-wide">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          Available for New Projects
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-tight break-words">
          Your online store, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">running faster, ranking higher, breaking less.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
          I run the technical and operational side of ecommerce stores, catalog management, bug fixes, site speed, SEO, and customer support, so you can spend your time on growth, not troubleshooting.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
          <a 
            href="#contact" 
            className="bg-slate-100 text-slate-950 px-6 h-12 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors group w-full sm:w-auto"
          >
            Get in Touch 
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a 
            href="#services" 
            className="border border-slate-800 bg-slate-900/50 px-6 h-12 rounded-lg font-medium flex items-center justify-center text-slate-300 hover:border-slate-700 hover:text-white transition-colors w-full sm:w-auto"
          >
            View Services
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="border-t border-slate-900 bg-slate-900/20 py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight mb-2">What I Do</h2>
          <p className="text-slate-400 mb-10 sm:mb-12 max-w-lg text-sm sm:text-base">End-to-end ecommerce support: I keep your store fast, functional, findable, and fully stocked.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {services.map((item, index) => (
              <div 
                key={index} 
                className="p-5 sm:p-6 rounded-xl border border-slate-900 bg-slate-900/40 hover:border-slate-800 transition-colors flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 shadow-inner flex-shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-32">
        <div className="border border-slate-900 bg-gradient-to-b from-slate-900/60 to-slate-950 rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col items-center text-center gap-5 sm:gap-6 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Your Store Deserves Better Than Duct Tape Fixes</h2>
          <p className="text-slate-400 max-w-md leading-relaxed text-sm sm:text-base">
            Tell me what's slowing you down, be it bugs, rankings, or an overflowing support inbox, and I'll get it handled. Email me or connect below.
          </p>
          
          {/* Direct Email CTA */}
          <a 
            href="mailto:contact.coresiteva@gmail.com" 
            className="mt-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 sm:px-8 py-4 rounded-xl font-semibold text-sm sm:text-base transition-colors shadow-lg shadow-emerald-500/10 break-all sm:break-normal"
          >
            <Mail className="w-5 h-5 flex-shrink-0" />
            contact.coresiteva@gmail.com
          </a>

          {/* Social Icons Pipeline */}
          <div className="w-full h-px bg-slate-900 my-4" />
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {socials.map((platform, idx) => (
              <a 
                key={idx}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-400 transition-colors flex items-center gap-2 text-sm ${platform.color}`}
                title={platform.name}
              >
                {platform.icon}
                <span className="hidden sm:inline font-medium">{platform.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 text-slate-600 text-xs py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} CoreSite VA. All rights reserved.</p>
          <p className="text-slate-500">Premium E-Commerce Operational Support</p>
        </div>
      </footer>

    </div>
  );
}

