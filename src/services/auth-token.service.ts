import Cookies from "js-cookie";

export enum EnumTokens {
  "ACCESS_TOKEN" = "accessToken",
  "REFRESH_TOKEN" = "refreshToken",
}

export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
  return accessToken || null;
};

export const saveTokenStorage = (accessToken: string, refreshToken: string) => {

  const domain = process.env.NODE_ENV === "production" ? ".vercel.app" : "localhost";

  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: domain,
    sameSite: "strict",
  });
  Cookies.set(EnumTokens.REFRESH_TOKEN, refreshToken, {
    domain: domain,
    sameSite: "strict",
  });
};

export const removeFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN);
  Cookies.remove(EnumTokens.REFRESH_TOKEN);
};
