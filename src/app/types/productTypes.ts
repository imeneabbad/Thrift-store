import { Theme } from "@mui/material";

export interface ProductCard {
  id: string;
  image: string;
  fallbackImage: string;
  alt: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating?: number;
  reviewCount?: number;
  isNew?: boolean;
  isSale?: boolean;
}

export interface CardWidth {
  xs: string;
  sm: string;
  md: string;
}

export interface CardContainerProps {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  peekAmount: number;
  products: ProductCard[];
  cardWidth: CardWidth;
  theme?: Theme;
  cardHeight: string;
  imageErrors: boolean[];
  handleImageError: (index: number) => void;
  favorites: Set<string>;
  toggleFavorite: (id: string) => void;
  currentIndex: number;
}