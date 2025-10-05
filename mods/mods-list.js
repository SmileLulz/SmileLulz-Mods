const mods = [
    {
        title: "RPG Health Overhaul",
        description: "RPG-Like Health/Healing Features!",
        img: "/images/rpg_health_overhaul.png",
        curseforge: "https://www.curseforge.com/minecraft/mc-mods/rpg-health-overhaul",
        modrinth: "https://modrinth.com/mod/rpg-health-overhaul",
        link: "rpg-health-overhaul/"
    },
    {
        title: "Enchanted Relics",
        description: "Find Enchanted Relics all over the world, get max level of Enchantments!",
        img: "/images/enchanted_relics.png",
        curseforge: "https://www.curseforge.com/minecraft/mc-mods/enchanted-relics",
        modrinth: "https://modrinth.com/mod/enchanted-relics",
        link: "enchanted-relics/"
    },
    {
        title: "Wet Fart Sound",
        description: "Plays Wet Fart meme sound on player's death.",
        img: "/images/wet_fart_sound.png",
        curseforge: "https://www.curseforge.com/minecraft/mc-mods/wet-fart-sound",
        modrinth: "https://modrinth.com/mod/wet-fart-sound",
        link: "wet-fart-sound/"
    },
    {
        title: "Advanced Door Bells",
        description: "Wireless modern door bells! Yayy!!!",
        img: "/images/advanced_door_bell.png",
        curseforge: "https://www.curseforge.com/minecraft/mc-mods/advanced-door-bells",
        modrinth: "https://modrinth.com/mod/advanced-door-bells",
        link: "advanced-door-bells/"
    },
    {
        title: "The Forest Additions",
        description: "Adds some things & features from The Forest game.",
        img: "/images/the_forest_additions.png",
        curseforge: "https://www.curseforge.com/minecraft/mc-mods/the-forest-additions",
        modrinth: "https://modrinth.com/mod/the-forest-additions",
        link: "the-forest-additions/"
    },
    {
        title: "Heart Lantern - Reimagined",
        description: "A Lantern that grants chosen effect to nearby players.",
        img: "/images/heart_lantern_reimagined.png",
        curseforge: "https://www.curseforge.com/minecraft/mc-mods/heart-lantern-reimagined",
        modrinth: "https://modrinth.com/mod/heart-lantern-reimagined",
        link: "heart-lantern-reimagined/"
    },
    {
        title: "Just Glowing Buttons [NeoForge]",
        description: "These 16 Colored Buttons Glows/Emits Light. Best To Use With Shaders.",
        img: "/images/just_glowing_buttons.gif",
        curseforge: "https://www.curseforge.com/minecraft/mc-mods/just-glowing-buttons-neoforge",
        modrinth: "https://modrinth.com/mod/just-glowing-buttons",
        link: "just-glowing-buttons-neoforge/"
    },
    {
        title: "Just Glowing Buttons [Forge]",
        description: "These 16 Colored Buttons Glows/Emits Light. Best To Use With Shaders.",
        img: "/images/just_glowing_buttons.gif",
        curseforge: "https://www.curseforge.com/minecraft/mc-mods/just-glowing-buttons-forge",
        modrinth: "https://modrinth.com/mod/just-glowing-buttons",
        link: "just-glowing-buttons-forge/"
    },
    {
        title: "Heart Lantern",
        description: "Heart Lantern grants health regeneration to nearby players.",
        img: "/images/heart_lantern.png",
        curseforge: "https://www.curseforge.com/minecraft/mc-mods/heart-lantern",
        modrinth: "https://modrinth.com/mod/heart-lantern",
        link: "heart-lantern/"
    },
    {
        title: "Campfire Regen",
        description: "Regenerate Your Health Using Campfire!",
        img: "/images/campfire_regen.png",
        curseforge: "https://www.curseforge.com/minecraft/mc-mods/campfire-regen",
        modrinth: "https://modrinth.com/mod/campfire-regen",
        link: "campfire-regen/"
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