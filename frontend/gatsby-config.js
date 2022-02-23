require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken:
          process.env.STRAPI_TOKEN ||
          "16673bd21a814d5f8b8629d5439f57fe9678873d2ba61ec184a0e3500f1287fc6316da49a48050402b9db028882bce5d579f7bb36b32ce7cb620cacef20f9c2b0c064560b69947c0c1dacd3ce9375a5fcd276fce551c05fca55295ce7a7afa80aee72ed7cd519029fe51a141629dbb387064b0a634e4e80866aac159f742ff35",
        collectionTypes: [
          {
            singularName: "article",
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW
                ? "preview"
                : "live",
              populate: {
                cover: "*",
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "author",
          },
          {
            singularName: "category",
          },
        ],
        singleTypes: [
          {
            singularName: "about",
            queryParams: {
              populate: {
                blocks: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
                defaultSeo: {
                  populate: "*",
                },
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
}
