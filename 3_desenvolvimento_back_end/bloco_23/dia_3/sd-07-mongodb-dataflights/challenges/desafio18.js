db.voos.findOne({
  "passageiros.pagos": {
    $gt: 700,
  },
}, { vooId: true, mes: true, ano: true, _id: false });
