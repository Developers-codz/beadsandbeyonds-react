import axios from "axios";
const loginHandler = async (e, formData) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "/api/auth/login",
      e.target.value === "user"
        ? JSON.stringify(formData)
        : {
            email: "adarshbalika@gmail.com",
            password: "adarshbalika",
          }
    );
    console.log(response);
    //saving the token in localstorage
    localStorage.setItem("token", response.data.encodedToken);
  } catch (err) {
    console.log(err);
  }
};

// Signup Handler

const signupHandler = async (e, formData, setFormData, formObj) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      "/api/auth/signup",
      JSON.stringify(formData)
    );
    // saving the encodedToken in the localStorage
    localStorage.setItem("token", response.data.encodedToken);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
  setFormData(formObj);
};
export { loginHandler, signupHandler };
