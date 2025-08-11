import { FooterData } from "@/types/Footer";

export const footerData: FooterData = {
    projectName: "Furnicha.",
    description: `400 University Drive Suite 200 Coral Gables,
FL 33134 USA`,

    rightLinks: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
    ],
    leftLinks: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
    ],

    helpLinks: [
        { label: "Payment Options", href: "/payment" },
        { label: "Returns", href: "/returns" },
        { label: "Privacy Policies", href: "/privacy" },
    ],
};
