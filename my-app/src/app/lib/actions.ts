"use server";
import bcrypt from "bcrypt";
import { validateCreateUserForm } from "./validations";
import moment from "moment";
//import { insertUser, insertSocialUser } from '../db/queries';
import { redirect } from "next/navigation";
import { newUser, isRegistered } from "../db/mongoQueries";
import { signIn } from "../../../auth";
import { AuthError } from "next-auth";

function getCurrentDate() {
  const date = moment();
  const currentDate = date.format("MM/DD/YYYY");
  return currentDate;
}

export async function createUser(
  prevState: string | undefined,
  formData: FormData
) {
  //safe parsing
  try {
    const currentDate = getCurrentDate();
    const validationResult = validateCreateUserForm.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: bcrypt.hashSync(formData.get("password1"), 10),
      type: "user",
      registration_dt: currentDate,
    });
    if (validationResult.success) {
      const registeredEmail = await isRegistered(validationResult.data.email);
      if (!registeredEmail) {
        newUser(validationResult.data);
      } else {
        return "Email already registered!";
      }
    } else {
      return "Invalid New User Data!";
    }
  } catch (error) {
    console.log("Create User error: " + error);
    return "Something went wrong!";
  }
  return redirect("/login");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
