const DATA = {
  factions: [
    {
      id: "the-capital",
      name: "The Capital",
      description: "A disciplined alliance focused on governance, commerce, and maintaining the heart of the SMP.",
      color: "#d4af37",
      pois: ["town-hall"],
      members: ["Crackle2K", "Oofus5678"]
    },
    {
      id: "growtopia",
      name: "Growtopia",
      description: "A resilient, nature-minded faction rooted in expansion, cultivation, and sustainable builds.",
      color: "#7cb342",
      pois: ["nether-hub", "blaze-fortress", "lava-lake-outpost"],
      members: ["Crackle2K", "Oofus5678"]
    }
  ],

  pois: [
    {
      id: "town-hall",
      name: "Town Hall",
      faction: "the-capital",
      coordinates: "X: 0, Y: 70, Z: 0",
      description: "The administrative center of The Capital where leadership meetings, public votes, and city planning are held.",
      type: "Government",
      builder: "Crackle2K",
      status: "Active"
    },
    {
      id: "nether-hub",
      name: "Nether Hub",
      faction: "growtopia",
      coordinates: "X: 0, Y: 110, Z: 0 (Nether)",
      description: "A grand intersection in the Nether ceiling where all major ice roads and highways meet. Growtopia maintains this fast-travel nexus.",
      type: "Infrastructure",
      builder: "Oofus5678",
      status: "Active"
    },
    {
      id: "blaze-fortress",
      name: "Blaze Fortress",
      faction: "growtopia",
      coordinates: "X: -400, Y: 45, Z: 200 (Nether)",
      description: "Built around a natural Nether fortress and expanded into Growtopia's primary base with industrial blaze farming.",
      type: "Base",
      builder: "Crackle2K",
      status: "Active"
    },
    {
      id: "lava-lake-outpost",
      name: "Lava Lake Outpost",
      faction: "growtopia",
      coordinates: "X: -900, Y: 30, Z: 500 (Nether)",
      description: "A small observation tower built above a vast lava lake and used as a waypoint for Growtopia expeditions.",
      type: "Outpost",
      builder: "Oofus5678",
      status: "Inactive"
    }
  ],

  members: [
    {
      id: "Crackle2K",
      username: "Crackle2K",
      factions: ["growtopia", "the-capital"],
      role: "Member",
      factionRoles: {
        growtopia: "President",
        "the-capital": "Member"
      },
      description: "President of Growtopia and an active member of The Capital, known for strategic planning and large-scale builds.",
      joinDate: "Season 1, Day 1",
      specialty: "Architecture & Diplomacy",
      skin: null
    },
    {
      id: "Oofus5678",
      username: "Oofus5678",
      factions: ["the-capital", "growtopia"],
      role: "Member",
      factionRoles: {
        "the-capital": "Member",
        growtopia: "Member"
      },
      description: "A dual-faction member who supports both civic projects in The Capital and expeditions with Growtopia.",
      joinDate: "Season 2, Day 1",
      specialty: "Logistics & Exploration",
      skin: null
    }
  ]
};
