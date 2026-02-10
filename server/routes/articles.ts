import { RequestHandler } from "express";
import { ArticlesResponse, Article } from "@shared/api";

const defaultArticles: Article[] = [
  {
    id: "1",
    title: "Comment optimiser vos rendements avec l'IA",
    description: "Découvrez comment utiliser l'intelligence artificielle pour augmenter vos rendements agricoles de jusqu'à 35%.",
    content: "L'intelligence artificielle révolutionne l'agriculture. Avec agricult, vous pouvez analyser vos données en temps réel et recevoir des recommandations personnalisées pour optimiser vos cultures. Notre système d'IA apprend de vos habitudes et de votre environnement pour vous proposer les meilleures stratégies.",
    author: "Jean Dupont",
    date: "2024-01-15",
    category: "Technologie",
    image: "🤖",
    readTime: 5,
  },
  {
    id: "2",
    title: "Guide complet de gestion des cultures",
    description: "Un guide étape par étape pour gérer vos cultures avec efficacité et réduire vos coûts.",
    content: "La gestion efficace des cultures est essentielle pour la rentabilité de votre exploitation. Ce guide couvre tous les aspects: du semis à la récolte, en passant par la gestion des ressources et la prévention des maladies. Avec les bons outils et les bonnes pratiques, vous pouvez maximiser vos rendements tout en minimisant vos coûts.",
    author: "Marie Dupuis",
    date: "2024-01-10",
    category: "Guide",
    image: "🌾",
    readTime: 8,
  },
  {
    id: "3",
    title: "Témoignage: +40% de rendement en 6 mois",
    description: "Découvrez comment un agriculteur a augmenté ses rendements de 40% en utilisant agricult.",
    content: "Pierre, agriculteur en région parisienne, partage son expérience avec agricult. En seulement 6 mois, il a augmenté ses rendements de 40% tout en réduisant ses coûts d'exploitation. \"C'est incroyable ce qu'on peut accomplir quand on a les bonnes données et les bons outils\", dit-il.",
    author: "Pierre Bernard",
    date: "2024-01-05",
    category: "Témoignage",
    image: "📈",
    readTime: 4,
  },
  {
    id: "4",
    title: "Les meilleures pratiques pour économiser l'eau",
    description: "Comment réduire votre consommation d'eau tout en maintenant la qualité de vos cultures.",
    content: "L'eau est une ressource précieuse. En utilisant les outils d'agricult, vous pouvez monitorer votre consommation d'eau en temps réel et optimiser votre irrigation. Découvrez les meilleures pratiques pour économiser l'eau sans sacrifier la qualité de vos cultures.",
    author: "Sophie Martin",
    date: "2023-12-28",
    category: "Durabilité",
    image: "💧",
    readTime: 6,
  },
];

export const handleGetArticles: RequestHandler = (req, res) => {
  const response: ArticlesResponse = {
    articles: defaultArticles,
  };
  res.json(response);
};

export const handleGetArticle: RequestHandler = (req, res) => {
  const { id } = req.params;
  const article = defaultArticles.find((a) => a.id === id);

  if (!article) {
    return res.status(404).json({ error: "Article not found" });
  }

  res.json(article);
};
