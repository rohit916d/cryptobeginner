import { memo, useEffect, useState } from "react";

function CryptoNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadNews = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/news`,
          {
            signal: controller.signal,
            cache: "force-cache",
          }
        );

        const data = await res.json();

        setNews(data.data || []);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(loadNews);
    } else {
      setTimeout(loadNews, 500);
    }

    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <div className="h-60 flex items-center justify-center text-zinc-500">
        Loading Crypto News...
      </div>
    );
  }

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-white mb-8">
        📰 Latest Crypto News
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <article
            key={item.link || index}
            className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition"
          >
            <img
              src={item.image || "/news-placeholder.jpg"}
              alt={item.title}
              width="600"
              height="350"
              loading="lazy"
              decoding="async"
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/news-placeholder.jpg";
              }}
            />

            <div className="p-5">
              <p className="text-xs text-yellow-400 mb-2">
                {item.source}
              </p>

              <h3 className="text-lg font-bold text-white line-clamp-2">
                {item.title}
              </h3>

              <p className="text-zinc-400 text-sm mt-3 line-clamp-3">
                {item.description}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-yellow-400 hover:underline"
              >
                Read Full News →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default memo(CryptoNews);