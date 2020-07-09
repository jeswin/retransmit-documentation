import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>For Microservices</>,
    imageUrl: "img/undraw_product_teardown.svg",
    description: (
      <>
        Retransmit is designed to handle the plumbing between Microservices and
        let developers focus on writing business logic.
      </>
    ),
  },
  {
    title: <>Traffic Control</>,
    imageUrl: "img/undraw_fast_loading.svg",
    description: (
      <>
        Load balancing, metering, response aggregation, rate limiting, circuit
        breakers, authentication, web jobs and more.
      </>
    ),
  },
  {
    title: <>WebSockets Support</>,
    imageUrl: "img/websocket.svg",
    description: (
      <>
        Retransmit can stream responses to WebSocket clients by polling multiple
        backend services or by reading from Redis queues.
      </>
    ),
  },
  {
    title: <>Analytics and Monitoring</>,
    imageUrl: "img/undraw_dashboard.svg",
    description: (
      <>
        Real-time dashboards to see what's happening across your stack. Alerts
        when your servers go south. This feature is Work-in-progress.
      </>
    ),
  },
  {
    title: <>Extensible</>,
    imageUrl: "img/undraw_building_blocks.svg",
    description: (
      <>
        Write hooks in JavaScript to customize requests and responses flowing
        through Retransmit. Write plugins to handle custom protocols.
      </>
    ),
  },
  {
    title: <>Free and Open Source</>,
    imageUrl: "img/undraw_happy_music.svg",
    description: (
      <>
        Retransmit Core is Free and Open Source. We are actively looking for
        contributors and testers. Check our GitHub profile.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
