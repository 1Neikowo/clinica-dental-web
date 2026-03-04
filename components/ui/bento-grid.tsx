"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[16rem] sm:auto-rows-[14rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
    details,
    whatsappMessage,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
    details?: string[];
    whatsappMessage?: string;
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <div
                key={name}
                className={cn(
                    "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl cursor-pointer",
                    "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                    "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                    className,
                )}
                onClick={() => details && setIsExpanded(true)}
            >
                <div className="absolute inset-0 z-0">{background}</div>
                <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 pt-10 transition-all duration-300 group-hover:-translate-y-10">
                    <Icon className="h-12 w-12 origin-left transform-gpu text-pink-600 transition-all duration-300 ease-in-out group-hover:scale-75" />
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-neutral-300">
                        {name}
                    </h3>
                    <p className="max-w-lg text-slate-500">{description}</p>
                </div>

                <div
                    className={cn(
                        "pointer-events-none absolute bottom-0 flex w-full transform-gpu flex-row items-center p-4 transition-all duration-300 z-10",
                        "translate-y-0 opacity-100 md:translate-y-10 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100",
                    )}
                >
                    <button className="pointer-events-auto inline-flex items-center gap-2 text-sm font-semibold text-pink-600 hover:text-pink-700 hover:bg-pink-50 px-3 py-1.5 rounded-lg transition-colors animate-pulse md:animate-none">
                        {cta}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </button>
                </div>
                <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-slate-50/50 group-hover:dark:bg-neutral-800/10 z-0" />
            </div>

            {/* Expanded Modal */}
            <AnimatePresence>
                {isExpanded && details && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
                        onClick={() => setIsExpanded(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-100 max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="relative p-6 pb-4 bg-gradient-to-br from-pink-50 to-white">
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="absolute top-4 right-4 h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                                >
                                    <X className="h-4 w-4 text-slate-600" />
                                </button>
                                <Icon className="h-10 w-10 text-pink-600 mb-3" />
                                <h3 className="text-2xl font-bold text-slate-800">{name}</h3>
                                <p className="text-slate-500 mt-1">{description}</p>
                            </div>

                            {/* Details */}
                            <div className="px-6 py-4">
                                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">¿Qué incluye?</h4>
                                <ul className="space-y-3">
                                    {details.map((detail, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * i }}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="mt-1.5 h-2 w-2 rounded-full bg-pink-500 shrink-0" />
                                            <span className="text-slate-700 text-sm leading-relaxed">{detail}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* WhatsApp CTA */}
                            {whatsappMessage && (
                                <div className="p-6 pt-2">
                                    <a
                                        href={`https://wa.me/56982623887?text=${encodeURIComponent(whatsappMessage)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                        Consultar por WhatsApp
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    </motion.div >
                )}
            </AnimatePresence >
        </>
    );
};

export { BentoCard, BentoGrid };
