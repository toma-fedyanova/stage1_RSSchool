export interface NewsData {
    author: string | null;
    title: string | null;
    description: string | null;
    url: string;
    urlToImage: string;
    sourse: {
        name: string;
        id: string;
    };
    publishedAt: string;
    content: string;
}
