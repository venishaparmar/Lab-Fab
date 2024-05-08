import AdminNavbar from "./Faculty/AdminNavbar";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const fileFormData = new FormData();
      fileFormData.append('compImage', data.image[0]);

      const uploadResponse = await axios.post('http://localhost:3000/component/Image', fileFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        });
      console.log(uploadResponse.data.image);
      const fileName = uploadResponse.data.image;

      const formData = {
        componentName: data.name,
        description: data.description,
        location: data.location,
        startTime: data.startingTime,
        endTime: data.endingTime,
        videoUrl: data.videoUrl,
        imageName: fileName,
      };
      console.log(formData);
      const createUserResponse = await axios.post('http://localhost:8080/api/components/', formData);

      if (createUserResponse.status === 201) {
        console.log(createUserResponse.data);
      } else {
        console.error('Error:', createUserResponse.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto mt-10 mb-5 flex justify-center">
        <div className="max-w-md w-full px-8 py-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-center mb-4">Add Component</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold">Description</label>
              <textarea
                {...register("description", { required: "Description is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                rows={4}
              ></textarea>
              {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold">Image</label>
              <input
                type="file"
                {...register("image", { required: "Image is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold">Location</label>
              <input
                type="text"
                {...register("location", { required: "Location is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-semibold">Starting Time</label>
                <input
                  type="time"
                  {...register("startingTime", { required: "Starting Time is required" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.startingTime && <p className="text-red-500 text-xs mt-1">{errors.startingTime.message}</p>}
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">Ending Time</label>
                <input
                  type="time"
                  {...register("endingTime", { required: "Ending Time is required" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.endingTime && <p className="text-red-500 text-xs mt-1">{errors.endingTime.message}</p>}
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full text-white py-2 rounded-lg transition duration-300"
            >
              Add Component
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddComponent;
