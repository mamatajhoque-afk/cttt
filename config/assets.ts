// PROFESSIONAL ASSET MANAGEMENT
// -----------------------------
// For deployment, place your files in the "public" folder of your project root.
// Recommended Structure:
// /public
//   /assets
//     /images
//       apparelbd_logo.png
//     /videos
//       home.mp4
//       about.mp4
//       products.mp4
//       market-intel.mp4
//       sustainability.mp4
//       ethical.mp4
//       manufacturing.mp4

export const ASSETS = {
  // Brand Assets
  // Path corresponds to public/assets/images/apparelbd_logo.png
  logo: "/assets/images/apparelbd_logo.png", 

  // Page Header Videos
  // Place your .mp4 files in public/assets/videos/
  videos: {
    home: "/assets/videos/home.mp4",
    about: "/assets/videos/about.mp4",
    products: "/assets/videos/products.mp4",
    marketIntel: "/assets/videos/market-intel.mp4",
    sustainability: "/assets/videos/sustainability.mp4",
    ethical: "/assets/videos/ethical.mp4",
    manufacturing: "/assets/videos/manufacturing.mp4"
  },

  // Fallback Placeholders (Used if video fails to load or while loading)
  placeholders: {
    heroFallback: "https://picsum.photos/1920/1080?grayscale"
  }
};