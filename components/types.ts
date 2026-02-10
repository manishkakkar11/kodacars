export interface NavItem {
  label: string;
  href: string;
}

export interface InsightCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  linkText?: string;
}

export interface StatProps {
  value: string;
  label: string;
}
