export type RootStackParamList = {
  Characters: undefined;
  CharacterList: undefined;
  CharacterDetails: {
    characterId: number;
    name?: string;
  };
  Locations: undefined;
  LocationList: undefined;
  LocationDetails: { locationId: number; name?: string; locationUrl?: string };
};
