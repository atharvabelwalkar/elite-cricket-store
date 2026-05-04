export interface ProductSpecs {
  weight?: string;
  grade?: string;
  balance?: string;
  grains?: string;
  shell?: string;
  grille?: string;
  safety?: string;
  outer?: string;
  padding?: string;
  straps?: string;
  palm?: string;
  protection?: string;
  ventilation?: string;
  thumb?: string;
  upper?: string;
  spikes?: string;
  cushioning?: string;
  material?: string;
  capacity?: string;
  pockets?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
