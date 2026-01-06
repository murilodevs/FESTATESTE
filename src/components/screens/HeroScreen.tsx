import { motion } from "framer-motion";
import { PartyPopper, Sparkles, Gift } from "lucide-react";

interface HeroScreenProps {
  onStart: () => void;
}

export function HeroScreen({ onStart }: HeroScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Party glow effects */}
      <div className="party-glow pink" />
      <div className="party-glow purple" />
      <div className="party-glow cyan" />

      {/* Scan line animation */}
      <div className="scan-line" />

      {/* Confetti */}
      <div className="confetti" />
      <div className="confetti" />
      <div className="confetti" />
      <div className="confetti" />
      <div className="confetti" />
      <div className="confetti" />
      <div className="confetti" />
      <div className="confetti" />
      <div className="confetti" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 max-w-md"
      >
        {/* Icons */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          className="mb-8 inline-flex items-center gap-4"
        >
          <div className="w-14 h-14 rounded-full bg-secondary/80 backdrop-blur-sm border border-border flex items-center justify-center">
            <Gift className="w-7 h-7 text-primary" />
          </div>
          <div className="w-16 h-16 rounded-full bg-secondary/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center border-glow">
            <PartyPopper className="w-8 h-8 text-primary" />
          </div>
          <div className="w-14 h-14 rounded-full bg-secondary/80 backdrop-blur-sm border border-border flex items-center justify-center">
            <Sparkles className="w-7 h-7 text-accent" />
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-glow mb-4"
        >
          <span className="text-gradient">ASSALTO</span>
          <br />
          <span className="text-foreground">AUTORIZADO</span>
        </motion.h1>

        {/* Subtitle - Party Event Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <div className="card-classified rounded-2xl p-5 border-glow">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-3xl">🏠</span>
              <span className="text-2xl text-primary">+</span>
              <span className="text-3xl">🎂</span>
            </div>
            <p className="text-xl font-bold text-foreground mb-1">
              Chá de Casa Nova
            </p>
            <p className="text-lg text-primary font-semibold">
              & Aniversário do Murilo!
            </p>
            <div className="flex items-center justify-center gap-2 mt-3 text-muted-foreground text-sm">
              <span>🎈</span>
              <span>Duas comemorações, uma festa épica!</span>
              <span>🎈</span>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-foreground/90 text-xl mb-10 leading-relaxed font-medium"
        >
          🕵️ Você foi convocado para uma <span className="text-primary">missão especial</span>!
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="btn-mission px-10 py-5 rounded-xl text-lg animate-pulse-glow"
        >
          🎉 ACESSAR MISSÃO
        </motion.button>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-12 flex items-center justify-center gap-2 text-muted-foreground"
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-border" />
          <span className="text-xs tracking-widest font-medium">CONVITE EXCLUSIVO</span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-border" />
        </motion.div>
      </motion.div>
    </div>
  );
}

