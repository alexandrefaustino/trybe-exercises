db.produtos.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: [
          "tasty", "combo",
        ],
        $sort: 1,
      },
    },
  },
);

db.produtos.find(
  {},
  { _id: false, nome: true, tags: true },
);
