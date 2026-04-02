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
  youtube_url: string;
  team_image_1: string;
  team_title_1: string;
  team_content_1: string;
  team_image_2: string;
  team_title_2: string;
  team_content_2: string;
  team_image_3: string;
  team_title_3: string;
  team_content_3: string;
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
  is_draft: boolean;
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
  is_draft: boolean;
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

export type DepartmentSection = {
  id: number;
  department_slug: string;
  position: number;
  title: string;
  content: string;
  image_url: string;
  image_alt: string;
  image_credit: string;
};

export type DepartmentConfig = {
  slug: string;
  name: string;
  pageTitle: string;
  metaDescription: string;
  categorySlug: string;
};
