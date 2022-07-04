export class CONSUME_API {
  static apiUrl: string =
    window["apiUrl"] || location.protocol + "//" + location.host + "/api/v1";

  static PUBLIC_USERS = {
    registerUser: '/users/register',
    resetPassword: '/users/reset',
    setPassword: '/users/reset-password'
  }

  static AUTH_USERS = {
    logIn: "/users/authen",
    logOut: "/users/logout",
    refreshToken: "/users/refreshToken",

    changePass: "/users/setting/changePass",

    userResetPass: "/users/setting/resetPass",
    changeRole: "/users/setting/role",
  }
}
