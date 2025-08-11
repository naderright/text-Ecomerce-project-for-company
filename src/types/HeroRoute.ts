interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface HeroRootProps {
  title: string;
  breadcrumb: BreadcrumbItem[];
}