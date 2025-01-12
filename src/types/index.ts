export interface PageThemeProps {
  disableCustomTheme?: boolean
}

export type Link = string

export type District = {
  name: string;
  districtSlug: string;
  streets: Street[];
  imagePath?: Link
};

export type Street = {
  name: string,
  streetSlug: string,
  district: District,
  image: Link,
  tags: Tag[],
  geocode: number[]
  eponymDateOfBirth?: Date,
  eponymDateOfDeath?: Date
  eponymPlaceOfBirth?: string,
  eponymPlaceOfDeath?: string
  eponymDescription?: string,
};

export type Tag = {
  name: string;
  slug: string;
  streets: Street[];
};

export type Page = {
  title: string;
  body: string;
  slug: string;
}

export interface Post extends Page {
  published: string;
}

export type StreetList = Street[];

export type TagList = Tag[];

