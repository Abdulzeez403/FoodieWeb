/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
        DB_URL: "mongodb+srv://BlogUser:12345@cluster0.aulb9dq.mongodb.net/?retryWrites=true&w=majority"
    }
}

module.exports = nextConfig
