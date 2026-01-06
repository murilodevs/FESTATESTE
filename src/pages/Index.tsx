import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HeroScreen } from "@/components/screens/HeroScreen";
import { IdentificationScreen } from "@/components/screens/IdentificationScreen";
import { MissionScreen } from "@/components/screens/MissionScreen";
import { ClosingScreen } from "@/components/screens/ClosingScreen";
import { Agent } from "@/data/agents";

type Screen = "hero" | "identification" | "mission" | "closing";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("hero");
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const handleStart = () => {
    setCurrentScreen("identification");
  };

  const handleSelectAgent = (agent: Agent) => {
    setSelectedAgent(agent);
    setCurrentScreen("mission");
  };

  const handleMissionComplete = () => {
    setCurrentScreen("closing");
  };

  const handleRestart = () => {
    setSelectedAgent(null);
    setCurrentScreen("hero");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Screen content */}
      <AnimatePresence mode="wait">
        {currentScreen === "hero" && (
          <HeroScreen key="hero" onStart={handleStart} />
        )}
        
        {currentScreen === "identification" && (
          <IdentificationScreen 
            key="identification" 
            onSelectAgent={handleSelectAgent} 
          />
        )}
        
        {currentScreen === "mission" && selectedAgent && (
          <MissionScreen 
            key="mission" 
            agent={selectedAgent} 
            onComplete={handleMissionComplete} 
          />
        )}
        
        {currentScreen === "closing" && (
          <ClosingScreen key="closing" onRestart={handleRestart} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
