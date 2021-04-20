export const loginAuth = (user) => {
  return {
    type: "AUTH_REQUEST",
    payload: user,
  };
};
