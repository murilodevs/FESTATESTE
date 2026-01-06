import { motion } from "framer-motion";
import { CheckCircle, PartyPopper, Sparkles, Heart, Share2, Calendar } from "lucide-react";

interface ClosingScreenProps {
  onRestart: () => void;
}

export function ClosingScreen({ onRestart }: ClosingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center relative overflow-hidden"
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
      <div className="confetti" />
      <div className="confetti" />
      <div className="confetti" />
      <div className="confetti" />

      {/* Success celebration */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="mb-6 relative z-10"
      >
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm flex items-center justify-center border-2 border-primary/40 border-glow">
          <span className="text-7xl">🎉</span>
        </div>

        {/* Decorations */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute -top-3 -right-3"
        >
          <span className="text-3xl">✨</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="absolute -bottom-2 -left-4"
        >
          <span className="text-3xl">🎊</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
          className="absolute top-0 -left-2"
        >
          <span className="text-2xl">⭐</span>
        </motion.div>
      </motion.div>

      {/* Main message */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-foreground mb-3 z-10"
      >
        <span className="text-gradient">MISSÃO</span>
        <br />
        ACEITA!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-foreground text-xl mb-6 max-w-sm z-10 font-medium"
      >
        Você é oficialmente um agente! 🕵️
      </motion.p>

      {/* Fun card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="card-classified rounded-2xl p-5 mb-5 z-10 max-w-sm w-full"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <PartyPopper className="w-6 h-6 text-primary" />
          <span className="text-lg font-bold text-foreground">Próximos passos:</span>
          <PartyPopper className="w-6 h-6 text-primary" />
        </div>

        <div className="space-y-3 text-left">
          <div className="flex items-center gap-3 text-foreground">
            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-lg">1</span>
            <span>📦 Comprar seu item da missão</span>
          </div>
          <div className="flex items-center gap-3 text-foreground">
            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-lg">2</span>
            <span>🥩 Não esquecer a carne/bebida!</span>
          </div>
          <div className="flex items-center gap-3 text-foreground">
            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-lg">3</span>
            <span>🎈 Comparecer e ARRASAR!</span>
          </div>
        </div>
      </motion.div>

      {/* Location card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="card-classified rounded-2xl p-5 mb-6 z-10 max-w-sm w-full border-2 border-primary/30"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-2xl">📍</span>
          <span className="text-lg font-bold text-primary">LOCALIZAÇÃO</span>
        </div>

        <div className="text-center mb-4">
          <p className="text-foreground font-medium text-lg mb-1">
            Casa Nova do Murilo
          </p>
          <p className="text-foreground text-sm">
            R. Min. Lindolfo Color, 44
          </p>
          <p className="text-muted-foreground text-sm">
            Cidade Universitária - Maceió/AL
          </p>
          <p className="text-muted-foreground text-xs mt-2 italic">
            🏠 Referência: Casa com placa de quebra-mola
          </p>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=R.+Min.+Lindolfo+Color+44+Cidade+Universitária+Maceió+AL+57073-417"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary font-semibold py-3 px-4 rounded-xl transition-all"
        >
          <span>🗺️</span>
          ABRIR NO GOOGLE MAPS
        </a>
      </motion.div>

      {/* Heart decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center gap-3 mb-8 z-10"
      >
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
        <span className="text-lg flex items-center gap-2 text-primary font-medium">
          <Heart className="w-5 h-5 fill-primary" />
          Te esperamos com carinho!
          <Heart className="w-5 h-5 fill-primary" />
        </span>
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
      </motion.div>

      {/* Restart button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onRestart}
        className="btn-mission px-10 py-5 rounded-xl text-lg z-10"
      >
        <span className="flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5" />
          VER MISSÃO NOVAMENTE
          <Sparkles className="w-5 h-5" />
        </span>
      </motion.button>
    </motion.div>
  );
}
