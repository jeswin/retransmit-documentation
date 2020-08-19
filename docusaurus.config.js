module.exports = {
  title: "Retransmit",
  tagline: "Tools for Microservices",
  url: "https://retransmit.io",
  baseUrl: "/",
  favicon: "img/logo.ico",
  organizationName: "retransmit", // Usually your GitHub org/user name.
  projectName: "retransmit.io", // Usually your repo name.
  themeConfig: {
    defaultDarkMode: true,
    navbar: {
      title: "Retransmit Stack",
      logo: {
        alt: "Retransmit Logo",
        src: "img/logo-small.png",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Retransmit, Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "prism/http/getting-started",
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
