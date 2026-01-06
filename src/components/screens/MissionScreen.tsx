import { motion } from "framer-motion";
import { Gift, Package, Sparkles, CheckCircle2, PartyPopper, Star, Cake } from "lucide-react";
import { Agent } from "@/data/agents";

interface MissionScreenProps {
  agent: Agent;
  onComplete: () => void;
}

export function MissionScreen({ agent, onComplete }: MissionScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col px-6 py-8 relative overflow-hidden"
    >
      {/* Party glow effects */}
      <div className="party-glow pink" />
      <div className="party-glow purple" />
      <div className="party-glow cyan" />

      {/* Confetti */}
      <div className="confetti" />
      <div className="confetti" />
      <div className="confetti" />
      <div className="confetti" />
      <div className="confetti" />

      {/* Header with celebration */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-6 z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/80 backdrop-blur-sm border-2 border-primary/40 border-glow mb-4"
        >
          <span className="text-5xl">🎯</span>
        </motion.div>

        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: -8 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="stamp-confidential inline-block text-sm mb-2"
        >
          TOP SECRET
        </motion.div>
      </motion.div>

      {/* Agent identity card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="card-classified rounded-2xl p-6 mb-5 border-glow z-10"
      >
        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
            <span className="text-4xl">🕵️</span>
          </div>
          <div className="flex-1">
            <p className="text-xs text-primary uppercase tracking-widest font-bold mb-1">
              Agente Identificado
            </p>
            <p className="text-2xl font-bold text-foreground">
              {agent.name}
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 text-primary" />
              {agent.sector}
            </p>
          </div>
        </div>

        {/* Mission content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Gift className="w-5 h-5 text-primary" />
            <p className="text-sm text-primary uppercase tracking-widest font-bold">
              Sua Missão:
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-xl p-5 border border-primary/30">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                <Package className="w-7 h-7 text-primary" />
              </div>
              <p className="text-xl font-bold text-foreground">
                {agent.mission}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Extra mission card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="card-classified rounded-2xl p-5 mb-5 border-l-4 border-l-accent z-10"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="text-sm font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
              <span>⚡</span> Missão Bônus:
            </p>
            <p className="text-lg text-foreground font-semibold">
              🥩 1kg de carne <span className="text-muted-foreground text-sm">OU</span> 🍺 bebida
            </p>
          </div>
        </div>
      </motion.div>

      {/* Important reminder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="card-classified rounded-2xl p-5 mb-6 text-center z-10 border-2 border-primary/30"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-2xl">📅</span>
          <span className="text-xl font-bold text-primary">PRESENÇA OBRIGATÓRIA</span>
          <span className="text-2xl">📅</span>
        </div>
        <p className="text-foreground font-semibold text-lg flex items-center justify-center gap-2">
          <PartyPopper className="w-6 h-6 text-primary" />
          Assalto autorizado à casa nova!
          <PartyPopper className="w-6 h-6 text-primary" />
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          Não falte, senão você vira alvo! 😜
        </p>
      </motion.div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Complete button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onComplete}
        className="btn-mission w-full py-5 rounded-xl text-lg z-10 animate-pulse-glow"
      >
        <span className="flex items-center justify-center gap-2">
          <CheckCircle2 className="w-6 h-6" />
          ACEITAR MISSÃO
          <CheckCircle2 className="w-6 h-6" />
        </span>
      </motion.button>
    </motion.div>
  );
}
