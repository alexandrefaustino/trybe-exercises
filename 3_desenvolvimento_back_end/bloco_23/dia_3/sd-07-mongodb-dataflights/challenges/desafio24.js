db.voos.findOne({
  $and: [
    { litrosCombustivel: { $lte: 600 } },

    { $nor: [
      { "empresa.nome": "GOL" },
      { "empresa.nome": "AZUL" },
    ] },

    {
      litrosCombustivel: { $exists: true },
    },
  ],
}, { vooId: true, _id: false, "empresa.nome": true, litrosCombustivel: true });
