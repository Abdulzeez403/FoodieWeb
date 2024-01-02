/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'], // Add any other allowed domains here
    },

    env: {
        DB_URL: "mongodb+srv://BlogUser:12345@cluster0.aulb9dq.mongodb.net/?retryWrites=true&w=majority"
    }
}

module.exports = nextConfig
