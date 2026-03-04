"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface MinimalistHeroProps {
    logoText: React.ReactNode;
    navLinks?: { label: string; href: string }[];
    mainText: string;
    readMoreLink: string;
    readMoreText?: string;
    imageSrc: string;
    imageAlt: string;
    overlayText: {
        part1: string;
        part2: string;
    };
    socialLinks: { icon: LucideIcon; href: string }[];
    locationText: string;
    className?: string;
    circleClassName?: string;
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="text-sm font-semibold tracking-widest text-slate-500 transition-colors hover:text-pink-600 uppercase"
    >
        {children}
    </Link>
);

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-pink-600">
        <Icon className="h-5 w-5" />
    </a>
);

export const MinimalistHero = ({
    logoText,
    navLinks = [],
    mainText,
    readMoreLink,
    readMoreText = "Saber más",
    imageSrc,
    imageAlt,
    overlayText,
    socialLinks,
    locationText,
    className,
    circleClassName = "bg-pink-100",
}: MinimalistHeroProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerContent = (
        <>
            <div className="text-2xl font-bold tracking-wider text-slate-800 flex items-center gap-2">
                {logoText}
            </div>
            {navLinks.length > 0 && (
                <div className="hidden items-center space-x-8 md:flex">
                    {navLinks.map((link) => (
                        <NavLink key={link.label} href={link.href}>
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            )}
            <button
                className="flex flex-col space-y-1.5 md:hidden z-50 p-2"
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="block h-0.5 w-6 bg-slate-800 transition-transform"
                ></motion.span>
                <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="block h-0.5 w-6 bg-slate-800 transition-opacity"
                ></motion.span>
                <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="block h-0.5 w-6 bg-slate-800 transition-transform"
                ></motion.span>
            </button>
        </>
    );

    return (
        <div
            className={cn(
                'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-slate-50 p-8 font-sans md:p-12',
                className
            )}
        >
            {/* Single header: transparent in hero, sticky white on scroll */}
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-[1100] flex w-full justify-center px-8 py-4 md:px-12 transition-all duration-300",
                    isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
                        : "bg-transparent"
                )}
            >
                <div className="flex w-full max-w-7xl items-center justify-between">
                    {headerContent}
                </div>
            </header>
            {/* Spacer to keep hero layout consistent */}
            <div className="h-14" />

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md md:hidden pt-20"
                    >
                        <nav className="flex flex-col items-center space-y-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl font-bold tracking-widest text-slate-800 hover:text-pink-600 uppercase transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="flex items-center space-x-6 pt-12">
                                {socialLinks.map((link, index) => (
                                    <SocialIcon key={index} href={link.href} icon={link.icon} />
                                ))}
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3">
                {/* Left Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="z-20 order-2 md:order-1 text-center md:text-left -mt-16 md:mt-0 relative px-6 py-5 md:p-0 bg-white/70 backdrop-blur-md md:bg-transparent md:backdrop-blur-none rounded-3xl md:rounded-none shadow-xl md:shadow-none border border-white/50 md:border-none mx-4 md:mx-0"
                >
                    <p className="mx-auto max-w-xs text-sm leading-relaxed text-slate-800 md:mx-0 font-medium pb-4">{mainText}</p>
                    <a
                        href={readMoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold text-white bg-pink-600 rounded-full hover:bg-pink-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        {readMoreText}
                    </a>
                </motion.div>

                {/* Center Image with Circle */}
                <div className="relative order-1 md:order-2 flex justify-center items-center h-full pt-10 md:pt-0">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className={cn("absolute z-0 h-[300px] w-[300px] rounded-full md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]", circleClassName)}
                    ></motion.div>
                    <motion.img
                        src={imageSrc}
                        alt={imageAlt}
                        className="relative z-10 h-auto w-56 object-cover md:w-64 scale-150 lg:w-72 drop-shadow-2xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = `https://placehold.co/400x600/bfdbfe/ffffff?text=Image+Not+Found`;
                        }}
                    />
                </div>

                {/* Right Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="z-20 order-3 flex items-center justify-center text-center md:justify-start -mt-6 md:mt-0"
                >
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-800 md:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
                        {overlayText.part1}
                        <br />
                        <span className="text-pink-600">{overlayText.part2}</span>
                    </h1>
                </motion.div>
            </div>

            {/* Footer Elements */}
            <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex items-center space-x-4"
                >
                    {socialLinks.map((link, index) => (
                        <SocialIcon key={index} href={link.href} icon={link.icon} />
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="text-sm font-medium text-slate-500 uppercase tracking-widest hidden sm:block"
                >
                    {locationText}
                </motion.div>
            </footer>
        </div>
    );
};
