import { useEffect, useState } from "react";
import Section from "./Section";

const mediumProfile = "https://medium.com/@prasetyoputra";

function formatDate(date) {
  if (!date) return "";

  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);
}

export default function MediumArticles() {
  const [articles, setArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isCurrent = true;

    fetch(`${import.meta.env.BASE_URL}medium-posts.json`, { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Medium articles are not available yet.");
        return response.json();
      })
      .then((posts) => {
        if (isCurrent && Array.isArray(posts)) setArticles(posts.slice(0, 3));
      })
      .catch(() => {
        if (isCurrent) setArticles([]);
      })
      .finally(() => {
        if (isCurrent) setLoaded(true);
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  return (
    <Section
      id="writing"
      kicker="FROM MEDIUM"
      title="Notes on quality and testing"
      intro="Ideas and lessons from the work, collected in my latest articles."
      className="writing-section"
    >
      {articles.length > 0 ? (
        <div className="medium-grid">
          {articles.map((article) => (
            <article className="medium-card" key={article.link}>
              <a
                className={`medium-card-image${article.thumbnail ? "" : " medium-card-image--empty"}`}
                href={article.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${article.title} on Medium`}
              >
                {article.thumbnail ? (
                  <img src={article.thumbnail} alt="" loading="lazy" />
                ) : (
                  <span>Medium</span>
                )}
              </a>
              <div className="medium-card-content">
                <div className="medium-card-meta">
                  <span>Article</span>
                  {article.publishedAt && <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>}
                </div>
                <h3><a href={article.link} target="_blank" rel="noreferrer">{article.title}</a></h3>
                {article.excerpt && <p>{article.excerpt}</p>}
                <a className="medium-read-link" href={article.link} target="_blank" rel="noreferrer">
                  Read on Medium <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="medium-empty" role="status">
          {loaded ? "New articles will appear here after the next feed sync." : "Loading the latest articles…"}
        </p>
      )}
      <a className="medium-profile-link" href={mediumProfile} target="_blank" rel="noreferrer">
        View all articles on Medium <span aria-hidden="true">↗</span>
      </a>
    </Section>
  );
}
