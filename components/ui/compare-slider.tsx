"use client";

import React, { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import Image from "next/image";

interface CompareSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  title: string;
  description: string;
  colorClass: string;
  isExternalImage?: boolean; // Para soportar imágenes de Unsplash o remotas mientras subimos las locales
}

export function CompareSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Antes",
  afterAlt = "Después",
  title,
  description,
  colorClass,
  isExternalImage = false,
}: CompareSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: ReactMouseEvent | ReactTouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    let clientX = 0;
    if ("touches" in event) {
      clientX = (event as TouchEvent).touches[0].clientX;
    } else {
      clientX = (event as MouseEvent).clientX;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setPosition(percent);
  };

  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mouseup", handleUp);
      window.addEventListener("touchend", handleUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isDragging]);

  const onMouseMove = (e: ReactMouseEvent) => {
    if (isDragging) handleMove(e);
  };
  
  const onTouchMove = (e: ReactTouchEvent) => {
    if (isDragging) handleMove(e);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col h-full group">
      <div
        ref={containerRef}
        className="relative h-56 sm:h-64 cursor-ew-resize select-none overflow-hidden touch-none"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e);
        }}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
      >
        {/* AFTER IMAGE (Bottom Layer) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* OJO: El uso de next/image aquí se encarga de servir WebP/AVIF y optimizar el peso */}
          {isExternalImage ? (
            <img src={afterImage} alt={afterAlt} draggable={false} className="w-full h-full object-cover pointer-events-none" />
          ) : (
            <Image
              src={afterImage}
              alt={afterAlt}
              fill
              draggable={false}
              className="object-cover pointer-events-none"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={85}
            />
          )}
          <span 
            className={`absolute bottom-3 right-3 ${colorClass.replace('text-', 'bg-')} bg-opacity-90 text-white font-medium text-xs px-2.5 py-1 rounded shadow-sm z-0 transition-opacity duration-200`}
            style={{ opacity: position > 80 ? 0 : 1 }}
          >
            {afterAlt}
          </span>
        </div>

        {/* BEFORE IMAGE (Top Layer, clipped) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          {isExternalImage ? (
            <img src={beforeImage} alt={beforeAlt} draggable={false} className="w-full h-full object-cover pointer-events-none" />
          ) : (
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              draggable={false}
              className="object-cover pointer-events-none"
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={85}
            />
          )}
          <span 
            className="absolute bottom-3 left-3 bg-slate-900/80 text-white font-medium text-xs px-2.5 py-1 rounded shadow-sm z-0 transition-opacity duration-200"
            style={{ opacity: position < 20 ? 0 : 1 }}
          >
            {beforeAlt}
          </span>
        </div>

        {/* SLIDER HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
              <path d="M11 18l-6-6 6-6" />
              <path d="M13 18l6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-center">
        <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
        <p className="text-slate-600 text-sm mt-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
