import { PageData } from "~/types";

export function getPageDataBySlug<T extends PageData>(
  slug: string | undefined,
  pageData: Record<string, T>
) {
  if (!slug) {
    return null;
  }
  return pageData[slug] ?? null;
}
