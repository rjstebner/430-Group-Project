import { connectDB } from '@/app/db/mongoConnection';
import User from '@/app/db/models/user';
import Product from '@/app/db/models/product';
import Review from '@/app/db/models/review';
import { Product as ProductType, User as UserType } from './types/index'; //importing types

export const isRegistered = async (email: string) => {
  try {
    await connectDB();
    const foundEmail = await User.findOne({
      email: email,
    });
    return foundEmail ? true : false;
  } catch (error) {
    throw new Error(`MongoDB error: ${error}`);
  }
};

export const findUser = async (email: string) => {
  try {
    await connectDB();
    const result = await User.findOne({
      email: email,
    });
    if (!result || result.length == 0) {
      return null;
    } else {
      return result;
    }
  } catch (error) {
    throw new Error(`MongoDB failed to find user ${error}`);
  }
};

export const newUser = async (values: UserType): Promise<UserType | null> => {
  const data = {
    name: values.name,
    email: values.email,
    type: values.type,
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

//Products
export const createProduct = async (
  values: ProductType
): Promise<ProductType | null> => {
  const data = {
    name: values.name,
    description: values.description,
    price: values.price,
    image: values.image,
    owner_id: values.owner_id,
  };

  try {
    await connectDB();
    const savedProduct = await Product.create(data);
    return savedProduct;
  } catch (error) {
    throw new Error(`MongoDB failed to save user ${error}`);
  }
};

export const deleteProduct = async (id: string): Promise<boolean> => {
  try {
    await connectDB();
    const deletedProduct = await Product.deleteOne({ _id: id });
    if (deletedProduct) return true;
    return false;
  } catch (error) {
    throw new Error(`MongoDB failed to save user ${error}`);
  }
};

export const fetchProducts = async () => {
  try {
    await connectDB();
    const productsList = await Product.find();
    return productsList;
  } catch (error) {
    throw new Error(`MongoDB failed to save user ${error}`);
  }
};

//reviews
export const fetchReviews = async () => {
  try {
    await connectDB();
    const reviewsList = await Review.find();
    return reviewsList;
  } catch (error) {
    throw new Error(`MongoDB failed to save user ${error}`);
  }
};
