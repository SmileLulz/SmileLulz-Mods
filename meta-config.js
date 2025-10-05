(function () {
    const meta = {
        siteName: "SmileLulz' Mods",
        siteUrl: "https://mods.smilelulz.com",
        siteDescription: "Discover Minecraft mods and packs made by SmileLulz",
        themeColor: "#ffffff",
        image: "/icons/social-banner.png",
        iconPath: "/icons/",
    };

    const head = document.head;

    head.insertAdjacentHTML(
        "beforeend",
        `
        <!-- Favicons -->
        <link rel="apple-touch-icon" sizes="57x57" href="${meta.iconPath}apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="${meta.iconPath}apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="${meta.iconPath}apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="${meta.iconPath}apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="${meta.iconPath}apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="${meta.iconPath}apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="${meta.iconPath}apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="${meta.iconPath}apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="${meta.iconPath}apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192" href="${meta.iconPath}android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="${meta.iconPath}favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="${meta.iconPath}favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="${meta.iconPath}favicon-16x16.png">
        <link rel="manifest" href="${meta.iconPath}manifest.json">
        <meta name="msapplication-TileColor" content="${meta.themeColor}">
        <meta name="msapplication-TileImage" content="${meta.iconPath}ms-icon-144x144.png">
        <meta name="theme-color" content="${meta.themeColor}">

        <!-- SEO + Social -->
        <meta name="description" content="${meta.siteDescription}">
        <meta property="og:title" content="${meta.siteName}">
        <meta property="og:description" content="${meta.siteDescription}">
        <meta property="og:type" content="website">
        <meta property="og:url" content="${meta.siteUrl}">
        <meta property="og:image" content="${meta.siteUrl}${meta.image}">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${meta.siteName}">
        <meta name="twitter:description" content="${meta.siteDescription}">
        <meta name="twitter:image" content="${meta.siteUrl}${meta.image}">
    `
    );
})();
