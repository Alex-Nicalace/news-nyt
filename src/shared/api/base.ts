import { ApiError } from './ApiError';

const API_URL = '/svc/archive/v1';

export async function apiFetch<T>(path: string, options?: RequestInit) {
  const response = await fetch(
    `${API_URL}${path}.json?api-key=${import.meta.env.VITE_API_KEY}`,
    options
  );

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new ApiError(errorMessage, response.status, response.statusText);
  }

  const data: T = await response.json();
  return data;
}
