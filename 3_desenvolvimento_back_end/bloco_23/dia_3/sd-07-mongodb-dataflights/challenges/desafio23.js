db.voos.findOne({
  $and: [
    { litrosCombustivel: { $lte: 1000 } },
    { litrosCombustivel: { $exists: true } },
  ],
}, { vooId: true, _id: false, litrosCombustivel: true });
