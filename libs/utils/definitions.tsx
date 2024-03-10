export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: number;
};

export type Odonate = {
  id: number;
  scientific_name: string;
  author_and_year: string;
  french_name: string;
  suborder: string;
  family: string;
  link: string;
};

export type Media = {
  id: number;
  title: string;
  url: string;
  type: string;
};

export type Publication = {
  id: number;
  title: string;
  author: string;
  year: string;
  journal: string;
  book_citation: string;
  volume: string;
  number: string;
  editor: string;
  additional_comments: string;
  link: string;
};

export type Fact = {
  iconName: string;
  number: string;
  shortText: string;
  aosDelay: string;
};

export type FactType = {
  id: number;
  members: number;
  odonates_data: number;
  actions: number;
  posted_publications: number;
};

export type Article = {
  id: number;
  title: string;
  image_url: string;
  intro: string;
  content: string;
  category_id: number;
  publication_date: Date;
  slug: string;
  tags: Tag[];
};

export type ArticleWithoutTag = {
  id: number;
  title: string;
  image_url: string;
  intro: string;
  content: string;
  category_id: number;
  publication_date: Date;
  slug: string;
};

export type MinimalArticle = {
  id: number;
  title: string;
};

export type FullDataArticle = {
  id: number;
  title: string;
  image_url: string;
  intro: string;
  content: string;
  category_id: number;
  publication_date: Date;
  slug: string;
  tags: Tag[];
  category: Category;
};

export type ArticleWithCategoryName = {
  id: number;
  authorId: number;
  title: string;
  image_url: string;
  intro: string;
  content: string;
  category_id: number;
  publication_date: Date;
  slug: string;
  tags: Tag[];
  category_name: string;
  category_slug: string;
  waiting_for_approbation: boolean;
};

export type LastArticle = {
  id: number;
  title: string;
  image_url: string;
  intro: string;
  content: string;
  category_id: number;
  publication_date: Date;
  slug: string;
  category: Category;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type Tag = {
  id: number;
  name: string;
  slug: string;
};

export type FullDataCirculaire = {
  id: number;
  title: string;
  slug: string;
  articles: ArticleWithoutTag[];
};
