db.produtos.updateMany(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: new Date("2021-03-22") } },
);

db.produtos.find({
  ultimaModificacao: { $exists: true },
},
{ _id: false, nome: true });
