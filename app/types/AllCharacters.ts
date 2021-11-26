export type AllCharacters = {
  info: {
    next: string | null;
    prev: string | null;
  };
  results: [
    {
      id: number;
      name: string;
      species?: string;
      origin?: {
        name: string;
        url: string;
      };
      image: string;
    }
  ];
};
