import Link from "next/link";

const Footer = () => {

    const linkSections = [
        {
            title: "PRODUCTS",
            links: [
                { text: "Earphones" },
                { text: "Headphones" },
                { text: "Smartphones" },
                { text: "Laptops" },
            ]
        },
        {
            title: "WEBSITE?",
            links: [
                { text: "Home" },
                { text: "Privacy Policy" },
                { text: "Become Plus Member" },
                { text: "Create Your Store" },
            ]
        },
        {
            title: "CONTACT",
            links: [
                { text: "+1-212-456-7890" },
                { text: "contact@example.com" },
                { text: "794 Francisco, 94102" }
            ]
        }
    ];

    return (
        <footer className="mx-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-slate-500/30 text-slate-500">
                    <div>
                        <Link href="/" className="text-4xl font-semibold text-slate-700">
                            <span className="text-green-600">Touch</span>gram<span className="text-green-600 text-5xl leading-0">.</span>
                        </Link>
                        <p className="max-w-[410px] mt-6 text-sm">Welcome to Touchgram, your ultimate destination for the latest and smartest gadgets. From smartphones and smartwatches to essential accessories, we bring you the best in innovation — all in one place.</p>
                    </div>
                    <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5 text-sm ">
                        {linkSections.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-medium text-slate-700 md:mb-5 mb-3">{section.title}</h3>
                                <ul className="space-y-2.5">
                                    {section.links.map((link, i) => (
                                        <li key={i} className="text-slate-500">{link.text}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="py-4 text-sm text-slate-500">
                    Copyright 2026 © Touchgram All Right Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;