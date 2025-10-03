import { PageData } from "~/types";

export function getPageDataBySlug<T extends PageData>(
  slug: string | undefined,
  data: Record<string, T>
) {
  if (!slug) return null;
  return data[slug] ?? null;
}
