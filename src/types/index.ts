export type District = {
  name: string;
  districtSlug: string;
  streets: Street[];
};

export type Street = {
  // todo: add optional fields
  name: string,
  streetSlug: string,
  district: District,
  image: string,
  tags: Tag[],
  geocode: number[]
};

export type Tag = {
  name: string;
  slug: string;
  streets: Street[];
};

export type StreetList = Street[];

export type TagList = Tag[];

