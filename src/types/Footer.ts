interface FooterLink {
    label: string;
    href: string;
}

export interface FooterData {
    projectName: string;
    description: string;
    rightLinks: FooterLink[];
    leftLinks: FooterLink[];
    helpLinks: FooterLink[];

}