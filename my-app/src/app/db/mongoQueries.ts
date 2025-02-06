import { connectDB } from "@/app/db/mongoConnection";
import User from "@/app/db/models/User";

export const isRegistered = async (email: string) => {
  try {
    await connectDB();
    const foundEmail = await User.findOne({
      email: email,
    });
    return foundEmail ? true : false;
  } catch (error) {
    throw new Error(`MongoDB failed to save user ${error}`);
  }
};

export const findUser = async (email: string) => {
  try {
    await connectDB();
    const result = await User.findOne({
      email: email,
    });
    if (result.length == 0) {
      return null;
    } else {
      return result;
    }
  } catch (error) {
    throw new Error(`MongoDB failed to save user ${error}`);
  }
};

export const newUser = async (values: any) => {
  const data = {
    name: values.name,
    email: values.email,
    type: values.type,
    picture: values.picture,
    password: values.password,
    registration_dt: values.registration_dt,
  };

  try {
    await connectDB();
    const savedUser = await User.create(data);
    return savedUser;
  } catch (error) {
    throw new Error(`MongoDB failed to save user ${error}`);
  }
};
