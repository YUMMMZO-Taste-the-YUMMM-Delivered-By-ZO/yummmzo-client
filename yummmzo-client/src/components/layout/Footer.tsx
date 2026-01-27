import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react";

export function Footer() {
    const footerLinks = {
        company: [
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "#" },
            { name: "Press", href: "#" },
        ],
        support: [
            { name: "Help Center", href: "/help" },
            { name: "Contact Us", href: "#" },
            { name: "FAQs", href: "/help" },
        ],
        legal: [
            { name: "Terms of Service", href: "#" },
            { name: "Privacy Policy", href: "#" },
            { name: "Cookie Policy", href: "#" },
        ],
    };

    const socialLinks = [
        { icon: Facebook, href: "#" },
        { icon: Instagram, href: "#" },
        { icon: Twitter, href: "#" },
        { icon: Youtube, href: "#" },
    ];

    return (
        <footer className="relative pb-10 pt-20 overflow-hidden">
            {/* Ambient Background Glow behind footer */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[120px] rounded-full z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="glass-card rounded-[3rem] border border-white/5 p-8 md:p-16 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                        
                        {/* Brand & Newsletter */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <Link to="/" className="inline-block hover-lift">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-primary rounded-xl shadow-glow">
                                            <img src="/logo-icon.svg" alt="Y" className="h-6 w-6 brightness-0" />
                                        </div>
                                        <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                                            YUMMM<span className="text-primary">ZO</span>
                                        </span>
                                    </div>
                                </Link>
                                <p className="mt-4 text-body-sm text-muted-foreground max-w-xs leading-relaxed">
                                    Taste the Yummm, Delivered By Zo. Your favorite restaurants,
                                    delivered fast to your doorstep with bank-level security.
                                </p>
                            </div>

                            {/* Newsletter Input for added Branding appeal */}
                            <div className="max-w-xs">
                                <label className="text-xs font-black uppercase tracking-widest text-primary mb-3 block">Subscribe to Yummm</label>
                                <div className="flex gap-2 p-1.5 bg-background/50 rounded-2xl border border-border focus-within:border-primary/50 transition-all">
                                    <input 
                                        type="email" 
                                        placeholder="Enter email" 
                                        className="flex-1 bg-transparent px-3 text-body-sm outline-none placeholder:text-muted-foreground/50"
                                    />
                                    <button className="p-2.5 bg-primary text-black rounded-xl hover:scale-105 transition-transform">
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-body-md font-black text-white mb-6 uppercase tracking-tighter">Company</h4>
                            <ul className="space-y-4">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-body-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="text-body-md font-black text-white mb-6 uppercase tracking-tighter">Support</h4>
                            <ul className="space-y-4">
                                {footerLinks.support.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-body-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal & Social */}
                        <div>
                            <h4 className="text-body-md font-black text-white mb-6 uppercase tracking-tighter">Legal</h4>
                            <ul className="space-y-4 mb-8">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-body-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a key={index} href={social.href} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 hover:bg-primary hover:text-black hover:border-primary transition-all hover:-translate-y-1">
                                        <social.icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-muted-foreground font-medium">
                            © {new Date().getFullYear()} YUMMMZO. All rights reserved. Built by Zo.
                        </p>
                        <div className="flex items-center gap-6">
                            <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 rounded-full bg-success" /> System Status: Online
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}