/** @type {import('next').NextConfig} */

import withPlaiceholder from '@plaiceholder/next'

const nextConfig = {
    images: {
        domains: ['images.unsplash.com']
    }
}

// module.exports = nextConfig
export default withPlaiceholder(nextConfig)

