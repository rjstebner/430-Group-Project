"use server";
import bcrypt from "bcrypt";
import { validateCreateUserForm } from "./validations";
import moment from "moment";
//import { insertUser, insertSocialUser } from '../db/queries';
import { redirect } from "next/navigation";
import { newUser } from "../db/mongoQueries";

function getCurrentDate() {
  const date = moment();
  const currentDate = date.format("MM/DD/YYYY");
  return currentDate;
}

export async function createUser(formData: FormData) {
  //safe parsing
  const currentDate = getCurrentDate();
  const { data } = validateCreateUserForm.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: bcrypt.hashSync(formData.get("password1"), 10),
    type: "user",
    registration_dt: currentDate,
  });
  newUser(data);
  redirect("/api/auth/signin");
}

export async function createSocialUserMongo(
  name: string,
  email: string,
  picture: string
) {
  console.log(picture);
  const currentDate = getCurrentDate();
  const data = {
    name: name,
    email: email,
    picture: picture,
    password: null,
    type: "user",
    socialLogin: true,
    registration_dt: currentDate,
  };

  const result = await newUser(data);
  if (result) {
    return result;
  } else {
    return false;
  }
}
