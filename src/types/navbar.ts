export interface NavLink {
  label: string;
  href: string;
}

export interface NavIcon {
  name: string;
  icon: string; 
  href?: string;
}

export interface NavbarData {
  links: NavLink[];
  icons: NavIcon[];
}