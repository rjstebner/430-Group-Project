'use server';
import bcrypt from 'bcrypt';
import { validateCreateUserForm } from './validations';
import moment from 'moment';
import { insertUser, insertSocialUser } from '../db/queries';
import { redirect } from 'next/navigation';

function getCurrentDate() {
  const date = moment();
  const currentDate = date.format('MM/DD/YYYY');
  return currentDate;
}

export async function createUser(formData: FormData) {
  //safe parsing
  const currentDate = getCurrentDate();
  const userData = validateCreateUserForm.safeParse({
    id: formData.get('id'),
    name: formData.get('name'),
    email: formData.get('email'),
    password: bcrypt.hashSync(formData.get('password1'), 10),
    type: 'user',
    registration_dt: currentDate,
  });

  console.log(userData);
  insertUser(userData);
  redirect('/api/auth/signin');
}

export async function createSocialUser(name, email) {
  const currentDate = getCurrentDate();
  const type = 'user';

  insertSocialUser(name, email, type, currentDate);
  console.log(userData);
}
