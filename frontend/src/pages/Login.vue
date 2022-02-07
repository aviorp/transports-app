<template>
  <div class="row space-between q-mx-lg" style="height: 100vh">
    <div
      class="col-10 col-md-6 flex justify-center content-center"
      v-if="$q.screen.gt.md"
    >
      <img
        src="@/assets/authentication.svg"
        class="responsive"
        alt="login-image"
      />
    </div>
    <div
      class="col-12 col-md-6 flex content-center justify-center items-center"
    >
      <q-card
        :style="$q.screen.lt.sm ? { width: '80%' } : { width: '50%' }"
        class="mx-auto"
      >
        <q-card-section>
          <q-avatar size="103px" class="absolute-center shadow-10">
            <img src="@/assets/male_avatar.svg" alt="avatar" />
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="q-pt-xl column">
            <div class="col text-h6 ellipsis flex justify-center">
              <h3 class="text-h5 text-uppercase q-mt-2xl text-weight-regular">
                Login
              </h3>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form
            class="q-gutter-md q-pa-lg q-mb-md"
            @submit.prevent="submitForm"
          >
            <q-input label="Email" v-model="email"> </q-input>
            <q-input label="Password" type="password" v-model="password">
            </q-input>
            <div class="q-py-lg">
              <q-btn
                class="full-width"
                color="dark"
                label="Login"
                type="submit"
                rounded
                dark
              />
              <div class="text-center q-mt-lg q-gutter-lg">
                <router-link to="/login">Forgot Password</router-link>
                <router-link to="/register">Register</router-link>
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import useUserState from "@/composables/useUserState";
import useGeneralStates from "@/composables/useGeneralStates";
import { login } from "@/api/auth";
import { getPropFromToken } from "@/utils";
export default defineComponent({
  name: "login",
  setup() {
    const { setLogin } = useUserState();
    const { showLoading, hideLoading, setNotification } = useGeneralStates();
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const submitForm = async () => {
      showLoading();
      try {
        const token = await login({
          email: email.value,
          password: password.value
        });
        localStorage.setItem("token", token);
        const user = getPropFromToken();
        setLogin(user);
        router.push({ name: "home" });
        setNotification("User Connected.");
      } catch (error) {
        setNotification(error.message, "negative");
      } finally {
        hideLoading();
      }
    };
    return {
      email,
      password,
      submitForm
    };
  }
});
</script>

<style lang="scss" scoped></style>
