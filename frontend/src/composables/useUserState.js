import { computed, ref } from "vue";

const userState = ref({
  firstName: "Abigzoz",
  lastName: "Flitzerman",
  image: "https://cdn.quasar.dev/img/avatar.png",
  isAdmin: true
});

export default () => {
  const user = computed(() => userState.value);
  const setLogin = payload => (userState.value = payload);
  const logout = () => {
    userState.value = {
      firstName: null,
      lastName: null,
      image: null,
      isAdmin: false
    };
    localStorage.removeItem("token");
  };
  return {
    user,
    setLogin,
    logout
  };
};
