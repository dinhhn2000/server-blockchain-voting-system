const axios = require("axios");

const candidates = [
  "Nguyễn Doãn Anh",
  "Phạm Xuân Anh",
  "Phan Thanh Chung",
  "Trần Thị Phương Hoa",
  "Nguyễn Phú Trọng",
  "Hoàng Văn Cường",
  "Trần Việt Khoa",
  "Hoàng Châu Sơn",
  "Nguyễn Hồng Sơn",
  "Nguyễn Quang Tuấn",
  "Đào Tú Hoa",
  "Tạ Văn Thảo",
  "Nguyễn Hữu Thỉnh",
];

const election = "ĐẠI BIỂU QUỐC HỘI KHOÁ XIV";

const SCRUTINEER_ENDPOINT = "http://127.0.0.1:3000";

exports.getCandidates = (req, res, next) => {
  try {
    return res.status(200).json({
      candidates,
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

exports.getElectionName = (req, res, next) => {
  try {
    return res.status(200).json({
      election,
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

exports.vote = async (req, res, next) => {
  const { info, voteTo } = req.body;
  try {
    const url = SCRUTINEER_ENDPOINT + "/add-vote";
    await axios({
      method: "post",
      url,
      data: {
        info,
        voteTo,
      },
    });

    return res.status(200).json({
      result: true,
      message: "Succeed",
    });
  } catch (error) {
    return res.status(400).json({
      result: false,
      message: "Failed",
      error,
    });
  }
};
