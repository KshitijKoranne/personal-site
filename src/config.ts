export const SITE = {
  website: "https://kkshitij.vercel.app/",
  author: "Kshitij Koranne",
  profile: "https://github.com/KshitijKoranne",
  desc: "A pharmaceutical professional by day, passionate coder by night. Building tools, experimenting with ideas, and sharing thoughts on tech.",
  title: "Kshitij",
  ogImage: "devosfera-og.webp", // located in public folder — replace with your own OG image
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showGalleries: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/KshitijKoranne/personal-site/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Asia/Kolkata",
  introAudio: {
    enabled: false,
    src: "/audio/intro-web.mp3",
    label: "INTRO.MP3",
    duration: 30,
  },
} as const;
