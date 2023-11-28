import toast from 'react-hot-toast';

const generateRandomLetter = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet.charAt(randomIndex);
};

export const generateRandomString = () => {
  const randomLetters1 = Array.from({ length: 4 }, generateRandomLetter).join(
    ""
  );
  const randomLetters2 = Array.from({ length: 4 }, generateRandomLetter).join(
    ""
  );
  const randomString = `${randomLetters1}-${randomLetters2}`;
  return randomString;
};

export const getToken = async (nickname, roomname) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  try {
	toast.success("Connecting please wait...", {
		duration: 3000,
	});
    const response = await fetch(
      `${backendUrl}/getToken?name=${nickname}&roomName=${roomname}`
    );
    const data = await response.json();

	if(data.token){
		return data.token;
	}

	throw new Error("Please try again later");
  } catch (e) {
    toast.error("Something went wrong please try again later");
  }
};
