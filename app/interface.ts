export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface simplifiedProduct {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
}

export interface fullProduct {
  _id: string;
  images: SanityImage[];
  price: number;
  name: string;
  description: string;
  slug: string;
  categoryName: string;
  price_id: string;
}

export interface category_service {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: SanityImage;
}

export interface aboutSection {
  _id: string;
  paragraph1: string;
  paragraph2: string;
  image: SanityImage;
}

export interface simplifiedContact {
  email: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
}
