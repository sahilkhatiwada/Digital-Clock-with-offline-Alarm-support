import Head from "next/head";


interface SEOProps {
    title: string;
    description: string;
    url: string;
}

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