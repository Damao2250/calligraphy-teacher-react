import * as types from "./../action-types"
const initUserInfo = {
  userInfo: {
    avatar: "",
    name: "",
    id: "",
    account: "",
  }
}
export default function app(state=initUserInfo, action){
  switch (action.type) {
    case types.APP_SET_USER_INFO:
      return {
        ...state,
        ...action
      }
  
    default:
      return state
  }
}