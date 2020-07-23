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
        Prism is designed to handle the plumbing between Microservices and let
        developers focus on writing business logic.
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
        Prism can stream responses to WebSocket clients by polling multiple
        backend services or by reading from Redis queues.
      </>
    ),
  },
  {
    html: (
      <div style={{ textAlign: "center", padding: "4em 0" }}>
        <h1>
          &ldquo;Plenty of{" "}
          <a
            style={{ textDecoration: "underline" }}
            href="https://github.com/retransmit/retransmit-examples"
          >
            examples
          </a>{" "}
          to help you get started.&rdquo;
        </h1>
      </div>
    ),
    colSize: 12,
  },
  {
    title: <>A Capable Reverse-Proxy</>,
    imageUrl: "img/undraw_server_cluster.svg",
    description: (
      <>
        SSL termination, configurable caching, and optional stream mode for high
        performance. Supports Node.JS cluster mode.
      </>
    ),
  },
  {
    title: <>Extensible</>,
    imageUrl: "img/undraw_building_blocks.svg",
    description: (
      <>
        Write hooks in JavaScript to customize requests and responses flowing
        through Prism. Write plugins to handle custom protocols.
      </>
    ),
  },
  {
    title: <>Free and Open Source</>,
    imageUrl: "img/undraw_happy_music.svg",
    description: (
      <>
        Prism is Free and MIT-licensed Open Source. We are actively looking for
        contributors. Check our GitHub profile.
      </>
    ),
  },

  {
    html: (
      <div style={{ textAlign: "center", padding: "4em 0" }}>
        <h1>&ldquo;Don't start with complexity. Scale up as needed.&rdquo;</h1>
      </div>
    ),
    colSize: 12,
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
    html: (
      <div style={{}} className="homepage-highlight">
        <h2>Commercial Support?</h2>
        <p>
          Retransmit Enterprise Stack will be available after our beta. It will
          include better support for auto-scaling, more monitoring and alerting
          options, out-of-the-box support for cloud providers, additional
          integrations such as Kafka, authentication providers, metering and
          more. And of course, 24x7 technical support.
        </p>
        <p>
          We expect to launch the Retransmit Stack private beta in September.{" "}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIvIn70pFPLGn4nnJlc2WrH7gKgzf1HWYi3Wu83Vadvj6eZQ/viewform?usp=sf_link">
            Join our wait list
          </a>{" "}
          for early bird prices.
        </p>
      </div>
    ),
    colSize: 8,
  },
];

function Feature({ html, imageUrl, title, colSize, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return html ? (
    <div
      className={classnames(
        `col ${typeof colSize !== "undefined" ? `col--${colSize}` : "col--4"}`,
        styles.feature
      )}
    >
      {html}
    </div>
  ) : (
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
    <Layout title={siteConfig.title} description="API Gateway">
      <header
        className={classnames("hero hero--primary hero-bg", styles.heroBanner)}
      >
        <div className="container">          
          <h1 className="hero__title" style={{ color: "white" }}>
            Prism
          </h1>
          <p className="hero__subtitle" style={{ color: "white" }}>
            HTTP and WebSocket Gateway
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              style={{ color: "white", backgroundColor: "rgb(128, 116, 116)" }}
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
