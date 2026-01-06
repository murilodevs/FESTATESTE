import { motion } from "framer-motion";
import { PartyPopper, Sparkles, User, Search } from "lucide-react";
import { useState } from "react";
import { findAgentByName, Agent } from "@/data/agents";

interface IdentificationScreenProps {
  onSelectAgent: (agent: Agent) => void;
}

export function IdentificationScreen({ onSelectAgent }: IdentificationScreenProps) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    setTimeout(() => {
      const agent = findAgentByName(name.trim());

      if (agent) {
        onSelectAgent(agent);
      } else {
        setError("Agente não encontrado! Verifique o nome e tente novamente.");
        setIsSearching(false);
      }
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden"
    >
      {/* Party glow effects */}
      <div className="party-glow pink" />
      <div className="party-glow purple" />
      <div className="party-glow cyan" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center max-w-md w-full z-10"
      >
        {/* Agent Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary/80 backdrop-blur-sm border-2 border-primary/40 border-glow">
            <span className="text-6xl" role="img" aria-label="agent">🕵️</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-2"
        >
          <span className="text-gradient">Qual agente</span>
          <br />
          você é?
        </motion.h2>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-muted-foreground text-lg mb-2">
            🔍 Digite seu nome para descobrir sua missão!
          </p>
          <p className="text-muted-foreground/70 text-sm">
            (Pode ser só o primeiro nome 😉)
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">👤</span>
            <input
              type="text"
              placeholder="Seu nome aqui..."
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              disabled={isSearching}
              className="input-party w-full pl-14 pr-4 py-5 text-foreground placeholder:text-muted-foreground text-xl font-medium"
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-accent/20 border border-accent/30 rounded-xl p-3"
            >
              <p className="text-accent text-sm font-medium flex items-center justify-center gap-2">
                <span>😅</span>
                {error}
              </p>
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={!name.trim() || isSearching}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-mission w-full py-5 rounded-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed animate-pulse-glow"
          >
            {isSearching ? (
              <span className="flex items-center justify-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6" />
                </motion.span>
                BUSCANDO AGENTE...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                🎯 DESCOBRIR MINHA MISSÃO
              </span>
            )}
          </motion.button>
        </motion.form>

        {/* Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center justify-center gap-2"
        >
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-primary text-sm font-medium tracking-wide flex items-center gap-2">
            <span>🎈</span>
            Convite Especial
            <span>🎈</span>
          </span>
          <div className="w-10 h-px bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}


