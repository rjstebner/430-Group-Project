import { createUser } from "@/app/lib/actions";

export default function Register() {
  return (
    <div className="p-2 border border-[#4A4E69] rounded-md flex flex-col w-xs mt-5">
      <h2 className="text-2xl text-center">Create your account</h2>
      <form className="w-96 p-2 inline-block" action={createUser}>
        <label className="block mt-2" htmlFor="name">
          Name
        </label>
        <input
          className="border w-full rounded-md text-black"
          id="name"
          name="name"
          type="text"
          required
        ></input>
        <label className="block mt-2" htmlFor="email">
          Email
        </label>
        <input
          className="border w-full rounded-md text-black"
          id="email"
          name="email"
          type="email"
          required
        ></input>

        <label className="block mt-2" htmlFor="password1">
          password
        </label>
        <input
          className="border w-full rounded-md text-black"
          id="password1"
          name="password1"
          type="password"
          required
        ></input>
        <label className="block mt-2" htmlFor="password2">
          confirm Password
        </label>
        <input
          className="border w-full rounded-md text-black"
          id="password2"
          name="password2"
          type="password"
          required
        ></input>

        <button className="block border rounded-md mt-6 mb-2 w-full">
          Create your account!
        </button>
      </form>
    </div>
  );
}
