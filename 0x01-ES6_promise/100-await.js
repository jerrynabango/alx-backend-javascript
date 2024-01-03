import { uploadPhoto, createUser } from './utils';

const awaitAsync = async () => {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
};
const AsyncUploadUser = awaitAsync;

export default AsyncUploadUser;
