export interface DemoResponse {
  message: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

export interface ArticlesResponse {
  articles: Article[];
}
