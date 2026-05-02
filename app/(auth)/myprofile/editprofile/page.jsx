"use client";
import { authClient } from "@/app/lib/auth-client";
import { toast } from "sonner";

const EditProfilePage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const obj = Object.fromEntries(data.entries());

    // Update user name and imageURL
    await authClient.updateUser({
      name: obj.name,
      image: obj.photoUrl,
    });
    toast.success("Your Account Information Update!.");
  };

  return (
    <div className="flex justify-center p-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md bg-base-200 p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Edit Profile</h1>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Name</legend>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Enter New Name"
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Photo URL</legend>
          <input
            type="text"
            name="photoUrl"
            className="input w-full"
            placeholder="https://example.com"
          />
        </fieldset>

        <button type="submit" className="btn btn-primary mt-4">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfilePage;
