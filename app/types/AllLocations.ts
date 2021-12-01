export type AllLocations = {
  info: {
    pages: number;
  };
  results: [
    {
      id: number;
      name: string;
      type: string;
      dimension: string;
      residents: string[];
    }
  ];
};
