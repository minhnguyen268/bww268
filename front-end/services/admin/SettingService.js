import api from "@/configs/axios";
class SettingService {
  static get = async () => {
    const res = await api.get(`/v1/admin/setting`);
    return res;
  };
  static update = async (logo, maGioiThieu, noiDungPopup, scriptChat, vips) => {
    const res = await api.post(`/v1/admin/setting`, {
      logo,
      maGioiThieu,
      noiDungPopup,
      scriptChat,
      vips,
    });
    return res;
  };
}

export default SettingService;
