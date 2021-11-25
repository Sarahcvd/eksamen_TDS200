export type AllCharacter = {
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
