import * as Yup from "yup";
export const sigupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Your username must consist of at least 3 characters ")
    .max(50, "Your username must consist of at least 3 characters ")
    .required("Please enter a username"),
  password: Yup.string()
    .min(6, "Your password must be at least 6 characters long")
    .max(50, "Your password must be at least 6 characters long")
    .required("Please provide a password"),
  email: Yup.string()
    .email("Please enter a valid email address ")
    .required("Please provide a Email address"),
});
export const siginSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Your password must be at least 5 characters long")
    .max(50, "Your password must be at least 5 characters long")
    .required("Please provide a password"),
  email: Yup.string()
    .email("Please enter a valid email address ")
    .required("Please provide a Email address"),
});

export const forgetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address ")
    .required("Please provide a Email address"),
});
