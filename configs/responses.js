module.exports = {
  notAuthentication: (req, res, data) => {
    res.status(401).json({
      status: 401,
      pesan: "Anda harus masuk sebagai pengguna yang dipercaya !",
      data: null,
    });
  },
  notAuthorization: (req, res, data) => {
    res.status(403).json({
      status: 403,
      pesan: "Anda tidak memiliki ijin untuk mendapat sumber ini !",
      data: null,
    });
  },
  serverError: (req, res, data) => {
    res.status(500).json({
      status: 500,
      pesan: "Kesalahan pada server !",
      data,
    });
  },
  notFound: (req, res, data) => {
    res.status(404).json({
      status: 404,
      pesan: "Data tidak ditemukan !",
      data: null,
    });
  },
  objectResult: (req, res, data) => {
    res.status(200).json({
      status: 200,
      pesan: "Data ditemukan.",
      data,
    });
  },
  arrayResult: async (req, res, data) => {
    const jumlah = await data.length;
    res.status(200).json({
      status: 200,
      pesan: "Data ditemukan.",
      jumlah,
      data,
    });
  },
};
