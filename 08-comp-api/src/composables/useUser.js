import { ref } from "vue";
import axios from "axios";

const useUsers = () => {
  const isLoading = ref(true);
  const users = ref([]);
  const currentPage = ref(1);
  const errorMessage = ref();

  const getUsers = async(page = 1) => {
    if (page <= 0) page = 1;
    isLoading.value = true;

    const { data } = await axios.get(`https://reqres.in/api/users`, {
      params: {
        page,
      },
    });

    if (data.data.length > 0) {
      users.value = data.data;
      currentPage.value = page;
      errorMessage.value = null;
    } else if (currentPage.value > 0) {
      errorMessage.value = "No existe mas usuarios";
    }
    isLoading.value = false;
  };

  getUsers();
  return {
    isLoading,
    errorMessage,
    currentPage,
    users,
    getUsers,
    nextPage: () => getUsers(currentPage.value + 1),
    lastPage: () => getUsers(currentPage.value - 1),
  };
};

export default useUsers;
