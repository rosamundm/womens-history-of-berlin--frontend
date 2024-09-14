export type District = {
  name: string;
  districtSlug: string;
  streets: Street[];
};

export type Street = {
  name: string;
  streetSlug: string;
  district: District;
  image: string,
  tags: Tag[];
};

export type Tag = {
  name: string;
  slug: string;
  streets: Street[];
};
