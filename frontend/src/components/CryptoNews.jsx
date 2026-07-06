import { useEffect, useState } from "react";

export default function CryptoNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8001/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="text-white text-xl">Loading Crypto News...</h2>;
  }

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-white mb-8">
        📰 Latest Crypto News
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            )}

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
                rel="noreferrer"
                className="inline-block mt-5 text-yellow-400 hover:underline"
              >
                Read Full News →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}