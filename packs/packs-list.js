const mods = [
    {
        title: "Yippee Ghastling!",
        description: "Ghatlings Say Yippeeee!!",
        img: "/images/yippee_ghastling.png",
        curseforge: "https://www.curseforge.com/minecraft/texture-packs/yippee-ghastling",
        modrinth: "https://modrinth.com/resourcepack/yippee-ghastling",
        link: "yippee-ghastling/"
    },
];

const container = document.getElementById("mods-container");

mods.forEach(mod => {
    const card = document.createElement("div");
    card.classList.add("mod-card");
    card.innerHTML = `
        <a href="${mod.link}" class="mod-card-banner">
        <img src="${mod.img}" class="mod-img">
        </a>
        <h3>${mod.title}</h3>
        <p>${mod.description}</p>
        <div class="mod-links">
            <a href="${mod.curseforge}" target="_blank" class="mod-link-bttn">CurseForge</a>
            <a href="${mod.modrinth}" target="_blank" class="mod-link-bttn">Modrinth</a>
        </div>
    `;
    container.appendChild(card);
});
