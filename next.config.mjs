/** @type {import('next').NextConfig} */
const nextConfig = {
    // データ取得時にキャッシュがヒットしたかターミナルで確認可能になります。
    logging: {
        fetches: {
            fullUrl: true
        }
    }
};

export default nextConfig;
