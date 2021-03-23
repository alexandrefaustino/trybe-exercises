db.produtos.updateMany(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);

db.produtos.updateMany(
  { nome: "Big Mac" },
  {
    $set: {
      "vendasPorDia.3": 60,
    },
  },
);

db.produtos.updateMany(
  {
    $and: [
      { tags: "bovino" },
      { tags: "pão" },
    ],
  },
  {
    $set: {
      "vendasPorDia.6": 120,
    },
  },
);

db.produtos.find(
  {},
  { _id: false, nome: true, vendasPorDia: true },
);
