export const authAPI = {
    signupUser: {
        method:"post",
        url: "users/signup"
    },
    signinUser: {
        method:"post",
        url: "users/signin"
    },
    logoutUser: {
        method:"post",
        url: "users/logoutall"
    },
    getUser: (email) => ({
    method: "get",
    url: "users/getUser/" + email,
  }),
  updateProfile: {
    method: "patch",
    url: "users/editprofile",
  },
  getBooks: {
    method:"get",
    url:"books/allbooks"
  },
  getSingleBook: (id) => ({
    method:"get",
    url:"books/singlebook/"+id
  })
}