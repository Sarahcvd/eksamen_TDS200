export type Character = {
  id: number;
  name: string;
  species?: string;
  origin?: {
    name: string;
    url: string;
  };
  image: string;
};
