export interface Agent {
  id: string;
  name: string;
  sector: string;
  mission: string;
  aliases?: string[]; // Tags for typo tolerance
}

export const agents: Agent[] = [
  {
    id: "1",
    name: "Fernanda",
    sector: "Esquadrão Limpeza",
    mission: "Algo para limpeza",
    aliases: ["fer", "fê", "fernandinha", "nanda", "fernada", "fernannda"]
  },
  {
    id: "2",
    name: "Fabrício",
    sector: "Operações Culinárias",
    mission: "Algo útil para a cozinha",
    aliases: ["fabricio", "fab", "fabri", "fabrício", "fabricío"]
  },
  {
    id: "3",
    name: "Franciny",
    sector: "Divisão do Café",
    mission: "Algo relacionado ao café",
    aliases: ["fran", "francini", "franciny", "francine", "fransciny", "fransiny"]
  },
  {
    id: "4",
    name: "Arthur",
    sector: "Setor Banheiro",
    mission: "Algo para o banheiro",
    aliases: ["artur", "art", "arthu", "arthur", "arth"]
  },
  {
    id: "5",
    name: "Jéssica",
    sector: "Organização Geral",
    mission: "Algo para organização geral",
    aliases: ["jessica", "jess", "jé", "jessika", "jesica", "jessyca", "jessy"]
  },
  {
    id: "6",
    name: "Cristine",
    sector: "Conforto & Aconchego",
    mission: "Algo aconchegante (quarto & conforto)",
    aliases: ["cris", "cristina", "christine", "cristini", "cristyne", "kris"]
  },
  {
    id: "7",
    name: "Kelly",
    sector: "Divisão Decoração",
    mission: "Algo decorativo",
    aliases: ["kel", "kely", "kelli", "kelley", "kelle"]
  },
  {
    id: "8",
    name: "Fabiana",
    sector: "Missão Especial",
    mission: "Livre escolha, algo que combine com a casa nova",
    aliases: ["fabi", "fabiane", "fabyana", "fabianna", "fab"]
  },
  {
    id: "9",
    name: "Vera",
    sector: "Limpeza Reforçada",
    mission: "Item de limpeza extra (reforçado)",
    aliases: ["verinha", "vê", "veraa"]
  },
  {
    id: "10",
    name: "Dita",
    sector: "Utensílios Básicos",
    mission: "Utensílio simples para a cozinha",
    aliases: ["ditinha", "ditha", "ditta"]
  },
  {
    id: "11",
    name: "Marlon",
    sector: "Organização Extra",
    mission: "Algo para guardar (organização extra)",
    aliases: ["mar", "marl", "marlin", "marlom", "marlonn"]
  },
  {
    id: "12",
    name: "Brenda",
    sector: "Missão Alegria",
    mission: "Missão alegria (somar na comemoração)",
    aliases: ["bre", "brê", "brendinha", "brenna", "brend"]
  },
  {
    id: "13",
    name: "Rodolfo",
    sector: "Missão Alegria",
    mission: "Missão alegria (somar na comemoração)",
    aliases: ["rodo", "rodolpho", "rodolfinho", "roda", "dodo"]
  },
  {
    id: "14",
    name: "Marcos",
    sector: "Conforto & Aconchego",
    mission: "Trazer jogo de cama",
    aliases: ["marc", "marquinhos", "marcão", "marco"]
  },
];

// Normalize text for comparison (remove accents and lowercase)
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function findAgentByName(name: string): Agent | undefined {
  const normalizedInput = normalizeText(name);

  // First try exact match
  const exactMatch = agents.find(
    (agent) => normalizeText(agent.name) === normalizedInput
  );
  if (exactMatch) return exactMatch;

  // Then try matching aliases
  const aliasMatch = agents.find((agent) =>
    agent.aliases?.some((alias) => normalizeText(alias) === normalizedInput)
  );
  if (aliasMatch) return aliasMatch;

  // Try partial match on name
  const partialMatch = agents.find((agent) =>
    normalizeText(agent.name).includes(normalizedInput) ||
    normalizedInput.includes(normalizeText(agent.name))
  );
  if (partialMatch) return partialMatch;

  // Try partial match on aliases
  const partialAliasMatch = agents.find((agent) =>
    agent.aliases?.some((alias) =>
      normalizeText(alias).includes(normalizedInput) ||
      normalizedInput.includes(normalizeText(alias))
    )
  );

  return partialAliasMatch;
}

export function searchAgents(query: string): Agent[] {
  if (!query) return agents;
  const normalizedQuery = normalizeText(query);

  return agents.filter((agent) =>
    normalizeText(agent.name).includes(normalizedQuery) ||
    agent.aliases?.some((alias) => normalizeText(alias).includes(normalizedQuery))
  );
}

