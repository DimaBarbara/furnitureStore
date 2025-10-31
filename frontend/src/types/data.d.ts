export interface CircleItem {
  id: number;
  svg: string;
  title: string;
  subtitle: string;
}

export interface SliderItem {
  id: number;
  imageUrl: string;
  altText: string;
  title: string;
  subtitle: string;
  description: string;
  circles: CircleItem[];
}

export interface CategoryGridItem {
  id: number;
  title: string;
  description: string;
  price: string;
  availability: string;
  imageUrl: string;
  linkUrl: string;
}
