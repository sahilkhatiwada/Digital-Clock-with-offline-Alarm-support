import Head from "next/head";


interface SEOProps {
    title: string;
    description: string;
    url: string;
}


/**
 * SEO component that injects SEO-related meta tags into the <head> of the document.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title of the webpage.
 * @param {string} props.description - The description of the webpage.
 * @param {string} props.url - The URL of the webpage.
 *
 * This component includes standard meta tags, Open Graph tags for social media,
 * Twitter card tags, and links for PWA support.
 */

export default function SEO({ title, description, url }: SEOProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />

            {/* Open Graph Meta Tags(for sharing on social media) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />

            {/* PWA Support Meta Tags */}
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/icon.png" />
        </Head>
    );
}