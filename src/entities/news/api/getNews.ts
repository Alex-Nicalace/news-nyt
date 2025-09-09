import { apiFetch } from 'shared/api';
import type { NewsDTO } from './dto';
import { adaptNewsDTO } from './mapper';

export async function getNews(
  year: number,
  month: number,
  options?: RequestInit
) {
  const url = `/${year}/${month}`;
  const response = await apiFetch<NewsDTO>(url, options);

  return adaptNewsDTO(response);
}
