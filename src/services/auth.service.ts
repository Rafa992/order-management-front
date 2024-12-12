import { axiosClassic, axiosWithAuth } from "@/api/interceptors";
import { IAuthForm, IAuthResponse } from "@/types/auth.types";
import { removeFromStorage, saveTokenStorage } from "./auth-token.service";

export const authService = {
  async main(type: "login" | "register", data: IAuthForm) {
    const response = await axiosClassic.post<IAuthResponse>(
      `/auth/${type}`,
      data
    );

    if (response.data.accessToken) {
      saveTokenStorage(response.data.accessToken, response.data.refreshToken);
    }
    return response;
  },

  async getNewTokens() {
    try {
      const response = await axiosClassic.post<IAuthResponse>(
        "/auth/login/access-token"
      );

      if (response.data.accessToken) {
        removeFromStorage();
        saveTokenStorage(response.data.accessToken, response.data.refreshToken);
      }

      return response;
    } catch (error) {
      removeFromStorage();
      window.location.pathname = "/auth/login";
    }
  },

  async logout() {
    const response = await axiosClassic.post<boolean>("/auth/logout");

    if (response.data) removeFromStorage();

    return response;
  },

 async getProfile(){
    try {
      const res = await axiosWithAuth.get('/user/profile')
      const user = await res.data.user
      return user
    } catch (error) {
      console.log('an error occurred while retrieving user data', error);
    }
  }
};
