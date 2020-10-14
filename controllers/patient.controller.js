const sqlAction = require("../configs/simrs.config");
const { arrayResult, serverError } = require("../configs/responses");

module.exports = {
  getPatients: async (req, res) => {
    const _query = `
    SELECT master.pasien.NORM, master.pasien.NAMA,
    IF(master.pasien.JENIS_KELAMIN = 1, "Male", "Female") AS JENIS_KELAMIN,
    master.pasien.TANGGAL_LAHIR,
    master.pasien.ALAMAT, master.kontak_pasien.NOMOR AS KONTAK, master.pasien.POSTING 
    FROM master.pasien 
    JOIN master.kontak_pasien ON master.kontak_pasien.NORM = master.pasien.NORM 
    WHERE master.pasien.POSTING = 0`;
    sqlAction(_query)
      .then((response) => {
        arrayResult(req, res, response);
      })
      .catch((err) => {
        serverError(req, res, err);
      });
  },
};
