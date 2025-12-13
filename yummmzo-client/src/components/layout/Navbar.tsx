import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X, User, Heart, Settings, HelpCircle, LogOut, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";
import { LoginModal } from "../modals/LoginModal";
import { SignupModal } from "../modals/SignupModal";

export function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "About", href: "/about" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 glass border-b border-border"
            >
                <div className="container mx-auto px-4">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2">
                            {/* Mobile Logo - Shows on small screens */}
                            <img 
                                src="/logo-icon.svg" 
                                alt="YUMMMZO" 
                                className="h-10 w-auto md:hidden"
                            />
                            
                            {/* Desktop Logo - Shows on medium+ screens */}
                            <img 
                                src="/logo.svg" 
                                alt="YUMMMZO - Taste the Yummm, Delivered By Zo" 
                                className="hidden md:block h-12 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-3">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                                className="rounded-full"
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </Button>

                            <div className="hidden md:flex items-center gap-3">
                                <Button variant="ghost" onClick={() => setLoginOpen(true)}>
                                    Login
                                </Button>
                                <Button onClick={() => setSignupOpen(true)}>Sign Up</Button>
                            </div>

                            {/* Profile Dropdown - shows after login simulation */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild className="hidden md:flex">
                                    <Button variant="ghost" size="icon" className="rounded-full">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                            <User className="h-4 w-4 text-primary" />
                                        </div>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56 bg-card border-border">
                                    <div className="px-3 py-2">
                                        <p className="font-medium">John Doe</p>
                                        <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                                    </div>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link to="/profile" className="flex items-center gap-2 cursor-pointer">
                                            <User className="h-4 w-4" />
                                            Profile
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link to="/orders/active" className="flex items-center gap-2 cursor-pointer">
                                            <Package className="h-4 w-4" />
                                            My Orders
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link to="/favorites" className="flex items-center gap-2 cursor-pointer">
                                            <Heart className="h-4 w-4" />
                                            Favorites
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link to="/settings" className="flex items-center gap-2 cursor-pointer">
                                            <Settings className="h-4 w-4" />
                                            Settings
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link to="/help" className="flex items-center gap-2 cursor-pointer">
                                            <HelpCircle className="h-4 w-4" />
                                            Help & Support
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-destructive cursor-pointer">
                                        <LogOut className="h-4 w-4 mr-2" />
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* Mobile Menu Button */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden py-4 border-t border-border"
                        >
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <Link
                                    to="/profile"
                                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Profile
                                </Link>
                                <Link
                                    to="/orders/active"
                                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    My Orders
                                </Link>
                                <div className="flex gap-3 pt-4 border-t border-border">
                                    <Button
                                        variant="outline"
                                        className="flex-1"
                                        onClick={() => {
                                            setLoginOpen(true);
                                            setIsOpen(false);
                                        }}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        className="flex-1"
                                        onClick={() => {
                                            setSignupOpen(true);
                                            setIsOpen(false);
                                        }}
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.nav>

            <LoginModal
                open={loginOpen}
                onOpenChange={setLoginOpen}
                onSwitchToSignup={() => {
                    setLoginOpen(false);
                    setSignupOpen(true);
                }}
            />
            <SignupModal
                open={signupOpen}
                onOpenChange={setSignupOpen}
                onSwitchToLogin={() => {
                    setSignupOpen(false);
                    setLoginOpen(true);
                }}
            />
        </>
    );
}
