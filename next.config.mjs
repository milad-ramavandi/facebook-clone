/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'links.papareact.com',
                pathname:'/**'
            },
            {
                protocol:'https',
                hostname:'mediaproxy.salon.com',
                pathname:'/**'
            },
            {
                protocol:'https',
                hostname:'images.newrepublic.com',
                pathname:'/**'
            },
            {
                protocol:'https',
                hostname:'s.abcnews.com',
                pathname:'/**'
            },
            {
                protocol:'https',
                hostname:'upload.wikimedia.org',
                pathname:'/**'
            },
            {
                protocol:'https',
                hostname:'yt3.googleusercontent.com',
                pathname:'/**'
            },
            {
                protocol:'https',
                hostname:'lh3.googleusercontent.com',
                pathname:'/**'
            }
        ]
    },
    env:{
        NEXT_URL:process.env.NEXT_URL
    }
};

export default nextConfig;
