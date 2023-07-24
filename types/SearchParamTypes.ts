type Params = {
  id: string;
};

type SearchParams = {
  id: string;
  name: string;
  description: string | null;
  unit_amount: number | null;
  image: string;
  features: string;
};

export type SearchParamTypes = {
  params: Params;
  searchparams: SearchParams;
};
