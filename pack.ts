import * as coda from "@codahq/packs-sdk";
export const pack = coda.newPack();

// Allow the Pack to access the CoinGecko domain.
pack.addNetworkDomain("api.coingecko.com");

// Attributions to the phenomenal CoinGecko Team 👏
const attributionImage = coda.makeAttributionNode({ type: coda.AttributionNodeType.Image, imageUrl: "https://static.coingecko.com/s/coingecko-branding-guide-4f5245361f7a47478fa54c2c57808a9e05d31ac7ca498ab189a3827d6000e22b.png", anchorUrl: "www.coingecko.com" });
const attributionText = coda.makeAttributionNode({ type: coda.AttributionNodeType.Text, text: "Powered by CoinGecko" });
const attributionLink = coda.makeAttributionNode({ type: coda.AttributionNodeType.Link, anchorUrl: "www.coingecko.com", anchorText: "Powered by CoinGecko" });

//TODO add 7d sparkline rendered as chart, using a service such as quickchart.io
const CoinGeckoSchema = coda.makeObjectSchema({

  displayProperty: "name",
  idProperty: "id",
  featuredProperties: [
    "image",
    //"sparkline_in_7d",
    "token_handle",
    "description_en",
    "price_change_24h",
    "price_change_30d",
    "market_cap_change_24h",
    "market_cap",
    "market_cap_rank",
    "price_change_1h",
    "total_volume",
    "followers",
    "reddit_average_posts_48h",
    "reddit_average_comments_48h",
    "telegram_channel_user_count",
    "public_interest_score",
    "liquidity_score",
    "community_score"],
  makeAttribution: "Powered by CoinGecko",
  description: "description_en",
  identity: {
    attribution: [
      attributionImage,
      attributionText,
      attributionLink
    ],
    name: "Coin",
    type: coda.ValueType.Object,
  },
  properties: {
    image: { type: coda.ValueType.String, codaType: coda.ValueHintType.ImageAttachment },
    //sparkline_in_7d: { type: coda.ValueType.Array, items: { type: coda.ValueType.Number } },
    description_en: { type: coda.ValueType.String },
    price_change_24h: { type: coda.ValueType.Number },
    price_change_30d: { type: coda.ValueType.Number },
    market_cap_change_24h: { type: coda.ValueType.Number },
    market_cap: { type: coda.ValueType.Number },
    price_change_1h: { type: coda.ValueType.Number },
    total_volume: { type: coda.ValueType.Number },
    followers: { type: coda.ValueType.Number },
    reddit_average_posts_48h: { type: coda.ValueType.Number },
    reddit_average_comments_48h: { type: coda.ValueType.Number },
    telegram_channel_user_count: { type: coda.ValueType.Number },
    id: { type: coda.ValueType.String, fromKey: "id" },
    token_handle: { type: coda.ValueType.String, fromKey: "symbol" },
    name: { type: coda.ValueType.String, fromKey: "name" },
    block_time_in_minutes: { type: coda.ValueType.Number, fromKey: "block_time_in_minutes" },
    hashing_algorithm: { type: coda.ValueType.String, fromKey: "hashing_algorithm" },
    categories: {
      type: coda.ValueType.Array, fromKey: "categories", items:
        { type: coda.ValueType.String },
    },
    localization: {
      type: coda.ValueType.Object, fromKey: "localization",
      properties: {
        en: { type: coda.ValueType.String, fromKey: "en" },
        de: { type: coda.ValueType.String, fromKey: "de" },
        es: { type: coda.ValueType.String, fromKey: "es" },
        fr: { type: coda.ValueType.String, fromKey: "fr" },
        it: { type: coda.ValueType.String, fromKey: "it" },
        pl: { type: coda.ValueType.String, fromKey: "pl" },
        ro: { type: coda.ValueType.String, fromKey: "ro" },
        hu: { type: coda.ValueType.String, fromKey: "hu" },
        nl: { type: coda.ValueType.String, fromKey: "nl" },
        pt: { type: coda.ValueType.String, fromKey: "pt" },
        sv: { type: coda.ValueType.String, fromKey: "sv" },
        vi: { type: coda.ValueType.String, fromKey: "vi" },
        tr: { type: coda.ValueType.String, fromKey: "tr" },
        ru: { type: coda.ValueType.String, fromKey: "ru" },
        ja: { type: coda.ValueType.String, fromKey: "ja" },
        zh: { type: coda.ValueType.String, fromKey: "zh" },
        zhtw: { type: coda.ValueType.String, fromKey: "zhtw" },
        ko: { type: coda.ValueType.String, fromKey: "ko" },
        ar: { type: coda.ValueType.String, fromKey: "ar" },
        th: { type: coda.ValueType.String, fromKey: "th" },
        id: { type: coda.ValueType.String, fromKey: "id" },
        cs: { type: coda.ValueType.String, fromKey: "cs" },
        da: { type: coda.ValueType.String, fromKey: "da" },
        el: { type: coda.ValueType.String, fromKey: "el" },
        hi: { type: coda.ValueType.String, fromKey: "hi" },
        no: { type: coda.ValueType.String, fromKey: "no" },
        sk: { type: coda.ValueType.String, fromKey: "sk" },
        uk: { type: coda.ValueType.String, fromKey: "uk" },
        he: { type: coda.ValueType.String, fromKey: "he" },
        fi: { type: coda.ValueType.String, fromKey: "fi" },
        bg: { type: coda.ValueType.String, fromKey: "bg" },
        hr: { type: coda.ValueType.String, fromKey: "hr" },
        lt: { type: coda.ValueType.String, fromKey: "lt" },
        sl: { type: coda.ValueType.String, fromKey: "sl" },
      }
    },
    description: {
      type: coda.ValueType.Object, fromKey: "description",
      properties: {
        en: { type: coda.ValueType.String, fromKey: "en" },
        de: { type: coda.ValueType.String, fromKey: "de" },
        es: { type: coda.ValueType.String, fromKey: "es" },
        fr: { type: coda.ValueType.String, fromKey: "fr" },
        it: { type: coda.ValueType.String, fromKey: "it" },
        pl: { type: coda.ValueType.String, fromKey: "pl" },
        ro: { type: coda.ValueType.String, fromKey: "ro" },
        hu: { type: coda.ValueType.String, fromKey: "hu" },
        nl: { type: coda.ValueType.String, fromKey: "nl" },
        pt: { type: coda.ValueType.String, fromKey: "pt" },
        sv: { type: coda.ValueType.String, fromKey: "sv" },
        vi: { type: coda.ValueType.String, fromKey: "vi" },
        tr: { type: coda.ValueType.String, fromKey: "tr" },
        ru: { type: coda.ValueType.String, fromKey: "ru" },
        ja: { type: coda.ValueType.String, fromKey: "ja" },
        zh: { type: coda.ValueType.String, fromKey: "zh" },
        tw: { type: coda.ValueType.String, fromKey: "tw" },
        ko: { type: coda.ValueType.String, fromKey: "ko" },
        ar: { type: coda.ValueType.String, fromKey: "ar" },
        th: { type: coda.ValueType.String, fromKey: "th" },
        id: { type: coda.ValueType.String, fromKey: "id" },
        cs: { type: coda.ValueType.String, fromKey: "cs" },
        da: { type: coda.ValueType.String, fromKey: "da" },
        el: { type: coda.ValueType.String, fromKey: "el" },
        hi: { type: coda.ValueType.String, fromKey: "hi" },
        no: { type: coda.ValueType.String, fromKey: "no" },
        sk: { type: coda.ValueType.String, fromKey: "sk" },
        uk: { type: coda.ValueType.String, fromKey: "uk" },
        he: { type: coda.ValueType.String, fromKey: "he" },
        fi: { type: coda.ValueType.String, fromKey: "fi" },
        bg: { type: coda.ValueType.String, fromKey: "bg" },
        hr: { type: coda.ValueType.String, fromKey: "hr" },
        lt: { type: coda.ValueType.String, fromKey: "lt" },
        sl: { type: coda.ValueType.String, fromKey: "sl" },
      }
    }, links: {
      type: coda.ValueType.Object, fromKey: "links",
      properties: {
        homepage: {
          type: coda.ValueType.Array, fromKey: "homepage", items:
            { type: coda.ValueType.String },
        },
        blockchain_site: {
          type: coda.ValueType.Array, fromKey: "blockchain_site", items:
            { type: coda.ValueType.String },
        },
        official_forum_url: {
          type: coda.ValueType.Array, fromKey: "official_forum_url", items:
            { type: coda.ValueType.String },
        },
        chat_url: {
          type: coda.ValueType.Array, fromKey: "chat_url", items:
            { type: coda.ValueType.String },
        },
        announcement_url: {
          type: coda.ValueType.Array, fromKey: "announcement_url", items:
            { type: coda.ValueType.String },
        },
        twitter_screen_name: { type: coda.ValueType.String, fromKey: "twitter_screen_name" },
        facebook_username: { type: coda.ValueType.String, fromKey: "facebook_username" },
        telegram_channel_identifier: { type: coda.ValueType.String, fromKey: "telegram_channel_identifier" },
        subreddit_url: { type: coda.ValueType.String, fromKey: "subreddit_url" },
        repos_url: {
          type: coda.ValueType.Object, fromKey: "repos_url",
          properties: {
            github: {
              type: coda.ValueType.Array, fromKey: "github", items:
                { type: coda.ValueType.String },
            },
          }
        },
      }
    }, images: {
      type: coda.ValueType.Object, fromKey: "image",
      properties: {
        thumb: {
          type: coda.ValueType.String,
          codaType: coda.ValueHintType.ImageAttachment,
          fromKey: "thumb"
        },
        small: {
          type: coda.ValueType.String,
          codaType: coda.ValueHintType.ImageAttachment, fromKey: "small"
        },
        large: {
          type: coda.ValueType.String,
          codaType: coda.ValueHintType.ImageAttachment, fromKey: "large"
        },
      }
    }, country_origin: { type: coda.ValueType.String, fromKey: "country_origin" },
    genesis_date: { type: coda.ValueType.String, fromKey: "genesis_date" },
    sentiment_votes_up_percentage: { type: coda.ValueType.Number, fromKey: "sentiment_votes_up_percentage" },
    sentiment_votes_down_percentage: { type: coda.ValueType.Number, fromKey: "sentiment_votes_down_percentage" },
    market_cap_rank: { type: coda.ValueType.Number, fromKey: "market_cap_rank" },
    coingecko_rank: { type: coda.ValueType.Number, fromKey: "coingecko_rank" },
    coingecko_score: { type: coda.ValueType.Number, fromKey: "coingecko_score" },
    developer_score: { type: coda.ValueType.Number, fromKey: "developer_score" },
    community_score: { type: coda.ValueType.Number, fromKey: "community_score" },
    liquidity_score: { type: coda.ValueType.Number, fromKey: "liquidity_score" },
    public_interest_score: { type: coda.ValueType.Number, fromKey: "public_interest_score" },
    market_data: {
      type: coda.ValueType.Object, fromKey: "market_data",
      properties: {
        current_price: {
          type: coda.ValueType.Object, fromKey: "current_price",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, ath: {
          type: coda.ValueType.Object, fromKey: "ath",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, ath_change_percentage: {
          type: coda.ValueType.Object, fromKey: "ath_change_percentage",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, ath_date: {
          type: coda.ValueType.Object, fromKey: "ath_date",
          properties: {
            aed: { type: coda.ValueType.String, fromKey: "aed" },
            ars: { type: coda.ValueType.String, fromKey: "ars" },
            aud: { type: coda.ValueType.String, fromKey: "aud" },
            bch: { type: coda.ValueType.String, fromKey: "bch" },
            bdt: { type: coda.ValueType.String, fromKey: "bdt" },
            bhd: { type: coda.ValueType.String, fromKey: "bhd" },
            bmd: { type: coda.ValueType.String, fromKey: "bmd" },
            bnb: { type: coda.ValueType.String, fromKey: "bnb" },
            brl: { type: coda.ValueType.String, fromKey: "brl" },
            btc: { type: coda.ValueType.String, fromKey: "btc" },
            cad: { type: coda.ValueType.String, fromKey: "cad" },
            chf: { type: coda.ValueType.String, fromKey: "chf" },
            clp: { type: coda.ValueType.String, fromKey: "clp" },
            cny: { type: coda.ValueType.String, fromKey: "cny" },
            czk: { type: coda.ValueType.String, fromKey: "czk" },
            dkk: { type: coda.ValueType.String, fromKey: "dkk" },
            dot: { type: coda.ValueType.String, fromKey: "dot" },
            eos: { type: coda.ValueType.String, fromKey: "eos" },
            eth: { type: coda.ValueType.String, fromKey: "eth" },
            eur: { type: coda.ValueType.String, fromKey: "eur" },
            gbp: { type: coda.ValueType.String, fromKey: "gbp" },
            hkd: { type: coda.ValueType.String, fromKey: "hkd" },
            huf: { type: coda.ValueType.String, fromKey: "huf" },
            idr: { type: coda.ValueType.String, fromKey: "idr" },
            ils: { type: coda.ValueType.String, fromKey: "ils" },
            inr: { type: coda.ValueType.String, fromKey: "inr" },
            jpy: { type: coda.ValueType.String, fromKey: "jpy" },
            krw: { type: coda.ValueType.String, fromKey: "krw" },
            kwd: { type: coda.ValueType.String, fromKey: "kwd" },
            lkr: { type: coda.ValueType.String, fromKey: "lkr" },
            ltc: { type: coda.ValueType.String, fromKey: "ltc" },
            mmk: { type: coda.ValueType.String, fromKey: "mmk" },
            mxn: { type: coda.ValueType.String, fromKey: "mxn" },
            myr: { type: coda.ValueType.String, fromKey: "myr" },
            ngn: { type: coda.ValueType.String, fromKey: "ngn" },
            nok: { type: coda.ValueType.String, fromKey: "nok" },
            nzd: { type: coda.ValueType.String, fromKey: "nzd" },
            php: { type: coda.ValueType.String, fromKey: "php" },
            pkr: { type: coda.ValueType.String, fromKey: "pkr" },
            pln: { type: coda.ValueType.String, fromKey: "pln" },
            rub: { type: coda.ValueType.String, fromKey: "rub" },
            sar: { type: coda.ValueType.String, fromKey: "sar" },
            sek: { type: coda.ValueType.String, fromKey: "sek" },
            sgd: { type: coda.ValueType.String, fromKey: "sgd" },
            thb: { type: coda.ValueType.String, fromKey: "thb" },
            try: { type: coda.ValueType.String, fromKey: "try" },
            twd: { type: coda.ValueType.String, fromKey: "twd" },
            uah: { type: coda.ValueType.String, fromKey: "uah" },
            usd: { type: coda.ValueType.String, fromKey: "usd" },
            vef: { type: coda.ValueType.String, fromKey: "vef" },
            vnd: { type: coda.ValueType.String, fromKey: "vnd" },
            xag: { type: coda.ValueType.String, fromKey: "xag" },
            xau: { type: coda.ValueType.String, fromKey: "xau" },
            xdr: { type: coda.ValueType.String, fromKey: "xdr" },
            xlm: { type: coda.ValueType.String, fromKey: "xlm" },
            xrp: { type: coda.ValueType.String, fromKey: "xrp" },
            yfi: { type: coda.ValueType.String, fromKey: "yfi" },
            zar: { type: coda.ValueType.String, fromKey: "zar" },
            bits: { type: coda.ValueType.String, fromKey: "bits" },
            link: { type: coda.ValueType.String, fromKey: "link" },
            sats: { type: coda.ValueType.String, fromKey: "sats" },
          }
        }, atl: {
          type: coda.ValueType.Object, fromKey: "atl",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, atl_change_percentage: {
          type: coda.ValueType.Object, fromKey: "atl_change_percentage",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, atl_date: {
          type: coda.ValueType.Object, fromKey: "atl_date",
          properties: {
            aed: { type: coda.ValueType.String, fromKey: "aed" },
            ars: { type: coda.ValueType.String, fromKey: "ars" },
            aud: { type: coda.ValueType.String, fromKey: "aud" },
            bch: { type: coda.ValueType.String, fromKey: "bch" },
            bdt: { type: coda.ValueType.String, fromKey: "bdt" },
            bhd: { type: coda.ValueType.String, fromKey: "bhd" },
            bmd: { type: coda.ValueType.String, fromKey: "bmd" },
            bnb: { type: coda.ValueType.String, fromKey: "bnb" },
            brl: { type: coda.ValueType.String, fromKey: "brl" },
            btc: { type: coda.ValueType.String, fromKey: "btc" },
            cad: { type: coda.ValueType.String, fromKey: "cad" },
            chf: { type: coda.ValueType.String, fromKey: "chf" },
            clp: { type: coda.ValueType.String, fromKey: "clp" },
            cny: { type: coda.ValueType.String, fromKey: "cny" },
            czk: { type: coda.ValueType.String, fromKey: "czk" },
            dkk: { type: coda.ValueType.String, fromKey: "dkk" },
            dot: { type: coda.ValueType.String, fromKey: "dot" },
            eos: { type: coda.ValueType.String, fromKey: "eos" },
            eth: { type: coda.ValueType.String, fromKey: "eth" },
            eur: { type: coda.ValueType.String, fromKey: "eur" },
            gbp: { type: coda.ValueType.String, fromKey: "gbp" },
            hkd: { type: coda.ValueType.String, fromKey: "hkd" },
            huf: { type: coda.ValueType.String, fromKey: "huf" },
            idr: { type: coda.ValueType.String, fromKey: "idr" },
            ils: { type: coda.ValueType.String, fromKey: "ils" },
            inr: { type: coda.ValueType.String, fromKey: "inr" },
            jpy: { type: coda.ValueType.String, fromKey: "jpy" },
            krw: { type: coda.ValueType.String, fromKey: "krw" },
            kwd: { type: coda.ValueType.String, fromKey: "kwd" },
            lkr: { type: coda.ValueType.String, fromKey: "lkr" },
            ltc: { type: coda.ValueType.String, fromKey: "ltc" },
            mmk: { type: coda.ValueType.String, fromKey: "mmk" },
            mxn: { type: coda.ValueType.String, fromKey: "mxn" },
            myr: { type: coda.ValueType.String, fromKey: "myr" },
            ngn: { type: coda.ValueType.String, fromKey: "ngn" },
            nok: { type: coda.ValueType.String, fromKey: "nok" },
            nzd: { type: coda.ValueType.String, fromKey: "nzd" },
            php: { type: coda.ValueType.String, fromKey: "php" },
            pkr: { type: coda.ValueType.String, fromKey: "pkr" },
            pln: { type: coda.ValueType.String, fromKey: "pln" },
            rub: { type: coda.ValueType.String, fromKey: "rub" },
            sar: { type: coda.ValueType.String, fromKey: "sar" },
            sek: { type: coda.ValueType.String, fromKey: "sek" },
            sgd: { type: coda.ValueType.String, fromKey: "sgd" },
            thb: { type: coda.ValueType.String, fromKey: "thb" },
            try: { type: coda.ValueType.String, fromKey: "try" },
            twd: { type: coda.ValueType.String, fromKey: "twd" },
            uah: { type: coda.ValueType.String, fromKey: "uah" },
            usd: { type: coda.ValueType.String, fromKey: "usd" },
            vef: { type: coda.ValueType.String, fromKey: "vef" },
            vnd: { type: coda.ValueType.String, fromKey: "vnd" },
            xag: { type: coda.ValueType.String, fromKey: "xag" },
            xau: { type: coda.ValueType.String, fromKey: "xau" },
            xdr: { type: coda.ValueType.String, fromKey: "xdr" },
            xlm: { type: coda.ValueType.String, fromKey: "xlm" },
            xrp: { type: coda.ValueType.String, fromKey: "xrp" },
            yfi: { type: coda.ValueType.String, fromKey: "yfi" },
            zar: { type: coda.ValueType.String, fromKey: "zar" },
            bits: { type: coda.ValueType.String, fromKey: "bits" },
            link: { type: coda.ValueType.String, fromKey: "link" },
            sats: { type: coda.ValueType.String, fromKey: "sats" },
          }
        }, market_cap: {
          type: coda.ValueType.Object, fromKey: "market_cap",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, market_cap_rank: { type: coda.ValueType.Number, fromKey: "market_cap_rank" },
        fully_diluted_valuation: {
          type: coda.ValueType.Object, fromKey: "fully_diluted_valuation",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, total_volume: {
          type: coda.ValueType.Object, fromKey: "total_volume",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, high_24h: {
          type: coda.ValueType.Object, fromKey: "high_24h",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, low_24h: {
          type: coda.ValueType.Object, fromKey: "low_24h",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, price_change_24h: { type: coda.ValueType.Number, fromKey: "price_change_24h" },
        price_change_percentage_24h: { type: coda.ValueType.Number, fromKey: "price_change_percentage_24h" },
        price_change_percentage_7d: { type: coda.ValueType.Number, fromKey: "price_change_percentage_7d" },
        price_change_percentage_14d: { type: coda.ValueType.Number, fromKey: "price_change_percentage_14d" },
        price_change_percentage_30d: { type: coda.ValueType.Number, fromKey: "price_change_percentage_30d" },
        price_change_percentage_60d: { type: coda.ValueType.Number, fromKey: "price_change_percentage_60d" },
        price_change_percentage_200d: { type: coda.ValueType.Number, fromKey: "price_change_percentage_200d" },
        price_change_percentage_1y: { type: coda.ValueType.Number, fromKey: "price_change_percentage_1y" },
        market_cap_change_24h: { type: coda.ValueType.Number, fromKey: "market_cap_change_24h" },
        market_cap_change_percentage_24h: { type: coda.ValueType.Number, fromKey: "market_cap_change_percentage_24h" },
        price_change_24h_in_currency: {
          type: coda.ValueType.Object, fromKey: "price_change_24h_in_currency",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, price_change_percentage_1h_in_currency: {
          type: coda.ValueType.Object, fromKey: "price_change_percentage_1h_in_currency",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, price_change_percentage_24h_in_currency: {
          type: coda.ValueType.Object, fromKey: "price_change_percentage_24h_in_currency",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, price_change_percentage_7d_in_currency: {
          type: coda.ValueType.Object, fromKey: "price_change_percentage_7d_in_currency",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, price_change_percentage_14d_in_currency: {
          type: coda.ValueType.Object, fromKey: "price_change_percentage_14d_in_currency",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, price_change_percentage_30d_in_currency: {
          type: coda.ValueType.Object, fromKey: "price_change_percentage_30d_in_currency",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, price_change_percentage_60d_in_currency: {
          type: coda.ValueType.Object, fromKey: "price_change_percentage_60d_in_currency",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, price_change_percentage_200d_in_currency: {
          type: coda.ValueType.Object, fromKey: "price_change_percentage_200d_in_currency",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, price_change_percentage_1y_in_currency: {
          type: coda.ValueType.Object, fromKey: "price_change_percentage_1y_in_currency",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, market_cap_change_24h_in_currency: {
          type: coda.ValueType.Object, fromKey: "market_cap_change_24h_in_currency",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, market_cap_change_percentage_24h_in_currency: {
          type: coda.ValueType.Object, fromKey: "market_cap_change_percentage_24h_in_currency",
          properties: {
            aed: { type: coda.ValueType.Number, fromKey: "aed" },
            ars: { type: coda.ValueType.Number, fromKey: "ars" },
            aud: { type: coda.ValueType.Number, fromKey: "aud" },
            bch: { type: coda.ValueType.Number, fromKey: "bch" },
            bdt: { type: coda.ValueType.Number, fromKey: "bdt" },
            bhd: { type: coda.ValueType.Number, fromKey: "bhd" },
            bmd: { type: coda.ValueType.Number, fromKey: "bmd" },
            bnb: { type: coda.ValueType.Number, fromKey: "bnb" },
            brl: { type: coda.ValueType.Number, fromKey: "brl" },
            btc: { type: coda.ValueType.Number, fromKey: "btc" },
            cad: { type: coda.ValueType.Number, fromKey: "cad" },
            chf: { type: coda.ValueType.Number, fromKey: "chf" },
            clp: { type: coda.ValueType.Number, fromKey: "clp" },
            cny: { type: coda.ValueType.Number, fromKey: "cny" },
            czk: { type: coda.ValueType.Number, fromKey: "czk" },
            dkk: { type: coda.ValueType.Number, fromKey: "dkk" },
            dot: { type: coda.ValueType.Number, fromKey: "dot" },
            eos: { type: coda.ValueType.Number, fromKey: "eos" },
            eth: { type: coda.ValueType.Number, fromKey: "eth" },
            eur: { type: coda.ValueType.Number, fromKey: "eur" },
            gbp: { type: coda.ValueType.Number, fromKey: "gbp" },
            hkd: { type: coda.ValueType.Number, fromKey: "hkd" },
            huf: { type: coda.ValueType.Number, fromKey: "huf" },
            idr: { type: coda.ValueType.Number, fromKey: "idr" },
            ils: { type: coda.ValueType.Number, fromKey: "ils" },
            inr: { type: coda.ValueType.Number, fromKey: "inr" },
            jpy: { type: coda.ValueType.Number, fromKey: "jpy" },
            krw: { type: coda.ValueType.Number, fromKey: "krw" },
            kwd: { type: coda.ValueType.Number, fromKey: "kwd" },
            lkr: { type: coda.ValueType.Number, fromKey: "lkr" },
            ltc: { type: coda.ValueType.Number, fromKey: "ltc" },
            mmk: { type: coda.ValueType.Number, fromKey: "mmk" },
            mxn: { type: coda.ValueType.Number, fromKey: "mxn" },
            myr: { type: coda.ValueType.Number, fromKey: "myr" },
            ngn: { type: coda.ValueType.Number, fromKey: "ngn" },
            nok: { type: coda.ValueType.Number, fromKey: "nok" },
            nzd: { type: coda.ValueType.Number, fromKey: "nzd" },
            php: { type: coda.ValueType.Number, fromKey: "php" },
            pkr: { type: coda.ValueType.Number, fromKey: "pkr" },
            pln: { type: coda.ValueType.Number, fromKey: "pln" },
            rub: { type: coda.ValueType.Number, fromKey: "rub" },
            sar: { type: coda.ValueType.Number, fromKey: "sar" },
            sek: { type: coda.ValueType.Number, fromKey: "sek" },
            sgd: { type: coda.ValueType.Number, fromKey: "sgd" },
            thb: { type: coda.ValueType.Number, fromKey: "thb" },
            try: { type: coda.ValueType.Number, fromKey: "try" },
            twd: { type: coda.ValueType.Number, fromKey: "twd" },
            uah: { type: coda.ValueType.Number, fromKey: "uah" },
            usd: { type: coda.ValueType.Number, fromKey: "usd" },
            vef: { type: coda.ValueType.Number, fromKey: "vef" },
            vnd: { type: coda.ValueType.Number, fromKey: "vnd" },
            xag: { type: coda.ValueType.Number, fromKey: "xag" },
            xau: { type: coda.ValueType.Number, fromKey: "xau" },
            xdr: { type: coda.ValueType.Number, fromKey: "xdr" },
            xlm: { type: coda.ValueType.Number, fromKey: "xlm" },
            xrp: { type: coda.ValueType.Number, fromKey: "xrp" },
            yfi: { type: coda.ValueType.Number, fromKey: "yfi" },
            zar: { type: coda.ValueType.Number, fromKey: "zar" },
            bits: { type: coda.ValueType.Number, fromKey: "bits" },
            link: { type: coda.ValueType.Number, fromKey: "link" },
            sats: { type: coda.ValueType.Number, fromKey: "sats" },
          }
        }, total_supply: { type: coda.ValueType.Number, fromKey: "total_supply" },
        max_supply: { type: coda.ValueType.Number, fromKey: "max_supply" },
        circulating_supply: { type: coda.ValueType.Number, fromKey: "circulating_supply" },
        last_updated: { type: coda.ValueType.String, fromKey: "last_updated" },
      }
    },
    community_data: {
      type: coda.ValueType.Object, fromKey: "community_data",
      properties: {
        twitter_followers: { type: coda.ValueType.Number, fromKey: "twitter_followers" },
        reddit_average_posts_48h: { type: coda.ValueType.Number, fromKey: "reddit_average_posts_48h" },
        reddit_average_comments_48h: { type: coda.ValueType.Number, fromKey: "reddit_average_comments_48h" },
        reddit_subscribers: { type: coda.ValueType.Number, fromKey: "reddit_subscribers" },
        reddit_accounts_active_48h: { type: coda.ValueType.Number, fromKey: "reddit_accounts_active_48h" },
      }
    }, developer_data: {
      type: coda.ValueType.Object, fromKey: "developer_data",
      properties: {
        forks: { type: coda.ValueType.Number, fromKey: "forks" },
        stars: { type: coda.ValueType.Number, fromKey: "stars" },
        subscribers: { type: coda.ValueType.Number, fromKey: "subscribers" },
        total_issues: { type: coda.ValueType.Number, fromKey: "total_issues" },
        closed_issues: { type: coda.ValueType.Number, fromKey: "closed_issues" },
        pull_requests_merged: { type: coda.ValueType.Number, fromKey: "pull_requests_merged" },
        pull_request_contributors: { type: coda.ValueType.Number, fromKey: "pull_request_contributors" },
        code_additions_deletions_4_weeks: {
          type: coda.ValueType.Object, fromKey: "code_additions_deletions_4_weeks",
          properties: {
            additions: { type: coda.ValueType.Number, fromKey: "additions" },
            deletions: { type: coda.ValueType.Number, fromKey: "deletions" },
          }
        }, commit_count_4_weeks: { type: coda.ValueType.Number, fromKey: "commit_count_4_weeks" },
        last_4_weeks_commit_activity_series: {
          type: coda.ValueType.Array, fromKey: "last_4_weeks_commit_activity_series", items:
            { type: coda.ValueType.Number },
        },
      }
    }, public_interest_stats: {
      type: coda.ValueType.Object, fromKey: "public_interest_stats",
      properties: {
        alexa_rank: { type: coda.ValueType.Number, fromKey: "alexa_rank" },
      }
    }, last_updated: { type: coda.ValueType.String, fromKey: "last_updated" },
    tickers: {
      type: coda.ValueType.Array, fromKey: "tickers", items:
      {
        type: coda.ValueType.Object,
        properties: {
          0: {
            type: coda.ValueType.Object, fromKey: "0",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 1: {
            type: coda.ValueType.Object, fromKey: "1",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 2: {
            type: coda.ValueType.Object, fromKey: "2",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 3: {
            type: coda.ValueType.Object, fromKey: "3",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 4: {
            type: coda.ValueType.Object, fromKey: "4",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 5: {
            type: coda.ValueType.Object, fromKey: "5",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 6: {
            type: coda.ValueType.Object, fromKey: "6",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 7: {
            type: coda.ValueType.Object, fromKey: "7",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 8: {
            type: coda.ValueType.Object, fromKey: "8",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 9: {
            type: coda.ValueType.Object, fromKey: "9",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 10: {
            type: coda.ValueType.Object, fromKey: "10",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 11: {
            type: coda.ValueType.Object, fromKey: "11",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 12: {
            type: coda.ValueType.Object, fromKey: "12",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 13: {
            type: coda.ValueType.Object, fromKey: "13",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 14: {
            type: coda.ValueType.Object, fromKey: "14",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 15: {
            type: coda.ValueType.Object, fromKey: "15",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 16: {
            type: coda.ValueType.Object, fromKey: "16",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 17: {
            type: coda.ValueType.Object, fromKey: "17",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 18: {
            type: coda.ValueType.Object, fromKey: "18",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 19: {
            type: coda.ValueType.Object, fromKey: "19",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 20: {
            type: coda.ValueType.Object, fromKey: "20",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 21: {
            type: coda.ValueType.Object, fromKey: "21",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 22: {
            type: coda.ValueType.Object, fromKey: "22",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 23: {
            type: coda.ValueType.Object, fromKey: "23",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 24: {
            type: coda.ValueType.Object, fromKey: "24",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 25: {
            type: coda.ValueType.Object, fromKey: "25",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 26: {
            type: coda.ValueType.Object, fromKey: "26",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 27: {
            type: coda.ValueType.Object, fromKey: "27",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 28: {
            type: coda.ValueType.Object, fromKey: "28",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 29: {
            type: coda.ValueType.Object, fromKey: "29",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 30: {
            type: coda.ValueType.Object, fromKey: "30",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 31: {
            type: coda.ValueType.Object, fromKey: "31",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 32: {
            type: coda.ValueType.Object, fromKey: "32",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 33: {
            type: coda.ValueType.Object, fromKey: "33",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 34: {
            type: coda.ValueType.Object, fromKey: "34",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 35: {
            type: coda.ValueType.Object, fromKey: "35",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 36: {
            type: coda.ValueType.Object, fromKey: "36",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 37: {
            type: coda.ValueType.Object, fromKey: "37",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 38: {
            type: coda.ValueType.Object, fromKey: "38",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 39: {
            type: coda.ValueType.Object, fromKey: "39",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 40: {
            type: coda.ValueType.Object, fromKey: "40",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 41: {
            type: coda.ValueType.Object, fromKey: "41",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 42: {
            type: coda.ValueType.Object, fromKey: "42",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 43: {
            type: coda.ValueType.Object, fromKey: "43",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 44: {
            type: coda.ValueType.Object, fromKey: "44",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 45: {
            type: coda.ValueType.Object, fromKey: "45",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 46: {
            type: coda.ValueType.Object, fromKey: "46",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 47: {
            type: coda.ValueType.Object, fromKey: "47",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 48: {
            type: coda.ValueType.Object, fromKey: "48",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 49: {
            type: coda.ValueType.Object, fromKey: "49",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 50: {
            type: coda.ValueType.Object, fromKey: "50",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 51: {
            type: coda.ValueType.Object, fromKey: "51",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 52: {
            type: coda.ValueType.Object, fromKey: "52",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 53: {
            type: coda.ValueType.Object, fromKey: "53",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 54: {
            type: coda.ValueType.Object, fromKey: "54",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 55: {
            type: coda.ValueType.Object, fromKey: "55",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 56: {
            type: coda.ValueType.Object, fromKey: "56",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 57: {
            type: coda.ValueType.Object, fromKey: "57",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 58: {
            type: coda.ValueType.Object, fromKey: "58",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 59: {
            type: coda.ValueType.Object, fromKey: "59",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 60: {
            type: coda.ValueType.Object, fromKey: "60",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 61: {
            type: coda.ValueType.Object, fromKey: "61",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 62: {
            type: coda.ValueType.Object, fromKey: "62",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 63: {
            type: coda.ValueType.Object, fromKey: "63",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 64: {
            type: coda.ValueType.Object, fromKey: "64",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 65: {
            type: coda.ValueType.Object, fromKey: "65",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 66: {
            type: coda.ValueType.Object, fromKey: "66",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 67: {
            type: coda.ValueType.Object, fromKey: "67",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 68: {
            type: coda.ValueType.Object, fromKey: "68",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 69: {
            type: coda.ValueType.Object, fromKey: "69",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 70: {
            type: coda.ValueType.Object, fromKey: "70",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 71: {
            type: coda.ValueType.Object, fromKey: "71",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 72: {
            type: coda.ValueType.Object, fromKey: "72",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 73: {
            type: coda.ValueType.Object, fromKey: "73",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 74: {
            type: coda.ValueType.Object, fromKey: "74",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 75: {
            type: coda.ValueType.Object, fromKey: "75",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 76: {
            type: coda.ValueType.Object, fromKey: "76",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 77: {
            type: coda.ValueType.Object, fromKey: "77",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 78: {
            type: coda.ValueType.Object, fromKey: "78",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 79: {
            type: coda.ValueType.Object, fromKey: "79",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 80: {
            type: coda.ValueType.Object, fromKey: "80",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 81: {
            type: coda.ValueType.Object, fromKey: "81",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 82: {
            type: coda.ValueType.Object, fromKey: "82",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 83: {
            type: coda.ValueType.Object, fromKey: "83",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 84: {
            type: coda.ValueType.Object, fromKey: "84",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 85: {
            type: coda.ValueType.Object, fromKey: "85",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 86: {
            type: coda.ValueType.Object, fromKey: "86",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 87: {
            type: coda.ValueType.Object, fromKey: "87",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 88: {
            type: coda.ValueType.Object, fromKey: "88",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 89: {
            type: coda.ValueType.Object, fromKey: "89",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 90: {
            type: coda.ValueType.Object, fromKey: "90",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 91: {
            type: coda.ValueType.Object, fromKey: "91",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 92: {
            type: coda.ValueType.Object, fromKey: "92",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 93: {
            type: coda.ValueType.Object, fromKey: "93",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 94: {
            type: coda.ValueType.Object, fromKey: "94",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
            }
          }, 95: {
            type: coda.ValueType.Object, fromKey: "95",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 96: {
            type: coda.ValueType.Object, fromKey: "96",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 97: {
            type: coda.ValueType.Object, fromKey: "97",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 98: {
            type: coda.ValueType.Object, fromKey: "98",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          }, 99: {
            type: coda.ValueType.Object, fromKey: "99",
            properties: {
              base: { type: coda.ValueType.String, fromKey: "base" },
              target: { type: coda.ValueType.String, fromKey: "target" },
              market: {
                type: coda.ValueType.Object, fromKey: "market",
                properties: {
                  name: { type: coda.ValueType.String, fromKey: "name" },
                  identifier: { type: coda.ValueType.String, fromKey: "identifier" },
                  has_trading_incentive: { type: coda.ValueType.Boolean, fromKey: "has_trading_incentive" },
                }
              }, last: { type: coda.ValueType.Number, fromKey: "last" },
              volume: { type: coda.ValueType.Number, fromKey: "volume" },
              converted_last: {
                type: coda.ValueType.Object, fromKey: "converted_last",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, converted_volume: {
                type: coda.ValueType.Object, fromKey: "converted_volume",
                properties: {
                  btc: { type: coda.ValueType.Number, fromKey: "btc" },
                  eth: { type: coda.ValueType.Number, fromKey: "eth" },
                  usd: { type: coda.ValueType.Number, fromKey: "usd" },
                }
              }, trust_score: { type: coda.ValueType.String, fromKey: "trust_score" },
              bid_ask_spread_percentage: { type: coda.ValueType.Number, fromKey: "bid_ask_spread_percentage" },
              timestamp: { type: coda.ValueType.String, fromKey: "timestamp" },
              last_traded_at: { type: coda.ValueType.String, fromKey: "last_traded_at" },
              last_fetch_at: { type: coda.ValueType.String, fromKey: "last_fetch_at" },
              is_anomaly: { type: coda.ValueType.Boolean, fromKey: "is_anomaly" },
              is_stale: { type: coda.ValueType.Boolean, fromKey: "is_stale" },
              trade_url: { type: coda.ValueType.String, fromKey: "trade_url" },
              coin_id: { type: coda.ValueType.String, fromKey: "coin_id" },
              target_coin_id: { type: coda.ValueType.String, fromKey: "target_coin_id" },
            }
          },
        },
      },
    },
  }
});

// A formula to fetch information about a coin.
pack.addFormula({
  name: "Coin",
  description: "Get information about a coin from CoinGecko.",
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: "coin_id",
      description: "The CoinGecko id of the coin (f.e. 'bitcoin' or 'usd-coin' for usdc).",
    }),
  ],
  resultType: coda.ValueType.Object,
  schema: CoinGeckoSchema,
  execute: async function ([coin_id], context) {
    let response = await context.fetcher.fetch({
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/${coin_id}`,
    });
    let coin = response.body;
    
    // Parse nested properties to be top-level so that they can be used in 'featured properties' and displayed as columns.  
    coin["description_en"] = coin["description"]["en"];
    coin["image"] = coin["image"]["thumb"];
    coin["price_change_24h"] = coin["market_data"]["price_change_percentage_24h"];
    coin["price_change_7d"] = coin["market_data"]["price_change_percentage_7d"];
    coin["price_change_30d"] = coin["market_data"]["price_change_percentage_30d"];
    coin["market_cap_change_24h"] = coin["market_data"]["market_cap_change_percentage_24h"];
    coin["market_cap"] = coin["market_data"]["market_cap"]["usd"];
    coin["price_change_1h"] = coin["market_data"]["price_change_percentage_1h_in_currency"]["usd"];
    coin["total_volume"] = coin["market_data"]["total_volume"]["usd"];
    coin["followers"] = coin["community_data"]["twitter_followers"];
    coin["reddit_average_posts_48h"] = coin["community_data"]["reddit_average_posts_48h"];
    coin["reddit_average_comments_48h"] = coin["community_data"]["reddit_average_comments_48h"];
    coin["telegram_channel_user_count"] = coin["community_data"]["telegram_channel_user_count"];
    coin["sparkline_in_7d"] = coin["sparkline_in_7d"]["price"];
    
    return coin;
  },
});

// A sync table that lists all of the top CoinGecko coins.
pack.addSyncTable({
  name: "Cryptocurrencies",
  description: "Get info on all of the top coins.",
  identityName: "Coin",
  schema: CoinGeckoSchema,
  formula: {
    name: "Coins",
    description: "Sync top coins.",
    parameters: [],
    execute: async function ([], context) {
      // Get the page to start from.
      let page = (context.sync.continuation?.page as number) || 1;

      // Fetch a list of coins from the CoinGecko API.
      let url = coda.withQueryParams("https://api.coingecko.com/api/v3/coins/markets", {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 100,
        sparkline: true,
      });

      let response = await context.fetcher.fetch({
        method: "GET",
        url: url,
      });

      let coins = response.body;

      // If there were some results, re-run this formula for the next page.
      let continuation;
      if (coins.length > 0) {
        continuation = { page: page + 1 };
      }

      // Return the coins and the continuation (if any).
      return {
        result: coins,
        continuation: continuation,
      };
    },
  },
});