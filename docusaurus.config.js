module.exports = {
  title: "Retransmit",
  tagline: "Tools for Microservices",
  url: "https://retransmit.netlify.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "retransmit", // Usually your GitHub org/user name.
  projectName: "retransmit.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Retransmit",
      logo: {
        alt: "Retransmit Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "releases/",
          activeBasePath: "releases",
          label: "Releases",
          position: "left",
        },
        // {
        //   to: "pricing/",
        //   activeBasePath: "pricing",
        //   label: "Pricing",
        //   position: "left",
        // },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/retransmit",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/",
            },
            {
              label: "Get Started",
              to: "docs/get-started/",
            },
            {
              label: "Documentation",
              to: "docs/contributing/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/retransmit",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/retransmit_io",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            // TODO
            {
              label: "About",
              href: "https://www.retransmit.io/about",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Retransmit, Inc. Icons from undraw.co. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "prism/intro",
          sidebarPath: require.resolve("./sidebars.js"),
          // // Please change this to your repo.
          // editUrl:
          //   'https://github.com/retransmit/retransmit-documentation/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/retransmit/retransmit-documentation/master/website/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
