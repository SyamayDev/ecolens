export const products = [
  {
    barcode: "123456",
    name: "Botol Air Plastik",
    brand: "Aqua",
    ecoScore: 30,
    status: "Merah",
    recyclable: false,
    ingredients: [
      {
        name: "PET Plastic",
        impact:
          "Polyethylene terephthalate (PET) is a fossil-fuel based plastic that is recyclable but often ends up in landfills or oceans, taking hundreds of years to decompose.",
      },
      {
        name: "Water",
        impact:
          "The water itself is harmless, but the process of bottling and transporting it has a significant carbon footprint.",
      },
    ],
    alternatives: [
      {
        barcode: "789012",
        name: "Botol Air Kaca",
        brand: "Voss",
        ecoScore: 75,
        status: "Hijau",
        recyclable: true,
        ingredients: [
          {
            name: "Glass",
            impact:
              "Glass is infinitely recyclable and less harmful to produce than plastic.",
          },
        ],
      },
    ],
  },
  {
    barcode: "654321",
    name: "Sabun Cair",
    brand: "Lifebuoy",
    ecoScore: 55,
    status: "Kuning",
    recyclable: true,
    ingredients: [
      {
        name: "Sodium Lauryl Sulfate",
        impact:
          "SLS is a surfactant that can be irritating to the skin and may be toxic to aquatic life if released into waterways in large quantities.",
      },
      {
        name: "Palm Oil",
        impact:
          "Unsustainable palm oil production is a major driver of deforestation, habitat loss, and climate change.",
      },
    ],
    alternatives: [
      {
        barcode: "987654",
        name: "Sabun Batang Organik",
        brand: "Dr. Bronner's",
        ecoScore: 95,
        status: "Hijau",
        recyclable: true,
        ingredients: [
          {
            name: "Organic Oils",
            impact:
              "Made from organic and fair-trade oils, reducing chemical runoff and supporting sustainable farming.",
          },
        ],
      },
    ],
  },
  {
    barcode: "111222",
    name: "Tisu Gulung",
    brand: "Indah",
    ecoScore: 25,
    status: "Merah",
    recyclable: false,
    ingredients: [
      {
        name: "Bleached Paper",
        impact:
          "Bleaching chemicals can contaminate waterways; paper production is energy‑intensive.",
      },
    ],
    alternatives: [
      {
        barcode: "333444",
        name: "Tisu Gulung Daur Ulang",
        brand: "EcoTissue",
        ecoScore: 80,
        status: "Hijau",
        recyclable: true,
        ingredients: [
          {
            name: "Recycled Paper",
            impact:
              "Made from post‑consumer waste, significantly reducing deforestation and energy use.",
          },
        ],
      },
    ],
  },
  {
    barcode: "222333",
    name: "Krim Wajah",
    brand: "Viva",
    ecoScore: 40,
    status: "Merah",
    recyclable: true,
    ingredients: [
      {
        name: "Paraben",
        impact:
          "Parabens are preservatives linked to endocrine disruption and bioaccumulate in the environment.",
      },
      {
        name: "Microplastics",
        impact:
          "Small plastic particles that enter waterways and harm marine life.",
      },
    ],
    alternatives: [
      {
        barcode: "555666",
        name: "Krim Organik",
        brand: "Herborist",
        ecoScore: 85,
        status: "Hijau",
        recyclable: true,
        ingredients: [
          {
            name: "Natural Oils",
            impact:
              "Derived from plants with minimal processing and fewer pollutants.",
          },
        ],
      },
    ],
  },
  {
    barcode: "444555",
    name: "Minuman Soda",
    brand: "Sprite",
    ecoScore: 35,
    status: "Merah",
    recyclable: true,
    ingredients: [
      {
        name: "Sugar",
        impact:
          "High sugar consumption drives intensive agriculture with heavy fertilizer/pesticide use.",
      },
      {
        name: "Aluminium Can",
        impact:
          "Recyclable but energy‑intensive to produce; often not recycled properly.",
      },
    ],
    alternatives: [
      {
        barcode: "777888",
        name: "Air Mineral",
        brand: "Aqua",
        ecoScore: 60,
        status: "Kuning",
        recyclable: false,
        ingredients: [
          { name: "Water", impact: "Low impact if recycled container used." },
        ],
      },
    ],
  },
  {
    barcode: "999000",
    name: "Tablet PC",
    brand: "Samsung",
    ecoScore: 20,
    status: "Merah",
    recyclable: false,
    ingredients: [
      {
        name: "Lithium Battery",
        impact: "Mining for lithium devastates ecosystems and water supplies.",
      },
      {
        name: "Plastic Housing",
        impact: "Derived from petroleum; difficult to recycle.",
      },
    ],
    alternatives: [
      {
        barcode: "000111",
        name: "Refurbished Tablet",
        brand: "Generic",
        ecoScore: 70,
        status: "Hijau",
        recyclable: true,
        ingredients: [
          {
            name: "Reused Components",
            impact: "Extends lifecycle and reduces e‑waste.",
          },
        ],
      },
    ],
  },
  {
    barcode: "121314",
    name: "Sampo Sachet",
    brand: "Pantene",
    ecoScore: 45,
    status: "Kuning",
    recyclable: false,
    ingredients: [
      {
        name: "Silicone",
        impact: "Not biodegradable and can accumulate in aquatic habitats.",
      },
    ],
    alternatives: [
      {
        barcode: "151617",
        name: "Sampo Botol Refill",
        brand: "Local",
        ecoScore: 90,
        status: "Hijau",
        recyclable: true,
        ingredients: [
          {
            name: "Natural Surfactants",
            impact: "Gentler on the environment and skin.",
          },
        ],
      },
    ],
  },
  {
    barcode: "181920",
    name: "Kopi Instan",
    brand: "Nescafe",
    ecoScore: 50,
    status: "Kuning",
    recyclable: true,
    ingredients: [
      {
        name: "Instant Coffee Powder",
        impact:
          "Processing requires energy and often uses non‑sustainable beans.",
      },
      {
        name: "Plastic Jar",
        impact: "May not be recycled and contributes to plastic waste.",
      },
    ],
    alternatives: [
      {
        barcode: "212223",
        name: "Kopi Bubuk Organik",
        brand: "Kapal Api",
        ecoScore: 65,
        status: "Kuning",
        recyclable: true,
        ingredients: [
          {
            name: "Organic Coffee",
            impact:
              "Grown without synthetic inputs, better for soil and water.",
          },
        ],
      },
    ],
  },
  {
    barcode: "242526",
    name: "Pasta Gigi",
    brand: "Colgate",
    ecoScore: 60,
    status: "Kuning",
    recyclable: true,
    ingredients: [
      {
        name: "Triclosan",
        impact: "Antibacterial agent that may harm aquatic organisms.",
      },
    ],
    alternatives: [
      {
        barcode: "272829",
        name: "Pasta Gigi Alami",
        brand: "Himalaya",
        ecoScore: 85,
        status: "Hijau",
        recyclable: true,
        ingredients: [
          { name: "Herbal Extracts", impact: "Biodegradable and plant‑based." },
        ],
      },
    ],
  },
];

export const getProductByBarcode = (barcode) =>
  products.find((p) => p.barcode === barcode) || null;
