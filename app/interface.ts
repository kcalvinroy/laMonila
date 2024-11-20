interface SanityImage {
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
