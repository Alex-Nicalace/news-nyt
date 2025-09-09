export interface NewsDTO {
  copyright: string;
  response: Response;
}
export interface Response {
  docs?: DocsEntity[] | null;
  meta: Meta;
}
export interface DocsEntity {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  print_section?: string | null;
  print_page?: string | null;
  source: string;
  multimedia?: (MultimediaEntity | null)[] | null;
  headline: Headline;
  keywords?: (KeywordsEntity | null)[] | null;
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: Byline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
  subsection_name?: string | null;
}
export interface MultimediaEntity {
  rank: number;
  subtype: string;
  caption?: null;
  credit?: null;
  type: string;
  url: string;
  height: number;
  width: number;
  subType: string;
  crop_name: string;
  legacy: Legacy;
}
export interface Legacy {
  xlarge?: string | null;
  xlargewidth?: number | null;
  xlargeheight?: number | null;
  thumbnail?: string | null;
  thumbnailwidth?: number | null;
  thumbnailheight?: number | null;
}
export interface Headline {
  main: string;
  kicker?: string | null;
  content_kicker?: null;
  print_headline: string;
  name?: null;
  seo?: null;
  sub?: null;
}
export interface KeywordsEntity {
  name: string;
  value: string;
  rank: number;
  major: string;
}
export interface Byline {
  original: string;
  person?: (PersonEntity | null)[] | null;
  organization?: string | null;
}
export interface PersonEntity {
  firstname: string;
  middlename?: string | null;
  lastname: string;
  qualifier?: string | null;
  title?: null;
  role: string;
  organization: string;
  rank: number;
}
export interface Meta {
  hits: number;
}
