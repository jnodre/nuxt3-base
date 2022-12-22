export interface Magazine {
  title: string;
  subtitle: string;
  entry?: string;
  description?: string;
  date: string;
  featured?: boolean;
  image?: {
    fullUrlThumb: string;
  };
}
