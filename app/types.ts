type NavLeaf = { name: string; to: string };
type GroupMap = Record<string, NavLeaf[]>;
export type NavData = { groups: GroupMap; pages: NavLeaf[] };

export type PageData = {
  slug: string;
  title: string;
  description: string[];
};
