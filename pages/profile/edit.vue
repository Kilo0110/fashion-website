<template>
  <div class="bg-gray-50 min-h-[100vh] px-3 pt-3">
    <NormalHeader headerTitle="Edit Your Profile" />
    <FormLayout
      buttonText="Save Edit"
      @submit.prevent="saveEdit"
    >
      <template #inputs>
        <Input
          inputName="fullname"
          inputLabel="Full name"
          inputType="text"
          inputPlaceholder="John Doe"
          v-model="fullname.value"
        />
        <div
          class="gender-input-container-wrapper flex flex-col gap-1 px-4 py-2 bg-white shadow-md"
        >
          <p class="text-sm text-slate-600">Gender</p>
          <div
            class="gender-input-container-wrapper flex items-start -translate-x-3"
          >
            <Input
              inputName="gender"
              inputLabel="Male"
              inputID="Male"
              inputType="radio"
              value="Male"
              inputPlaceholder=""
              v-model="gender"
            />
            <Input
              inputName="gender"
              inputLabel="Female"
              inputID="Female"
              inputType="radio"
              value="Female"
              inputPlaceholder=""
              v-model="gender"
            />
            <Input
              inputName="gender"
              inputLabel="Don't specify"
              inputID="no-specify"
              inputType="radio"
              value="no-specify"
              inputPlaceholder=""
              v-model="gender"
            />
          </div>
        </div>
        <Input
          inputName="phone"
          inputLabel="Mobile No."
          inputType="number"
          inputPlaceholder="+123 4567 890"
          v-model="phone.value"
        />
        <Select @option-selected="saveSelectedOption">
          <template #options>
            <option
              v-for="country in CountriesList"
              :key="country.iso3"
              :value="country.country"
            >
              {{ country.country }}
            </option>
          </template>
        </Select>
      </template>
    </FormLayout>
  </div>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <transition name="toast">
    <Toast
      :warning="toastOptions.isWarning"
      :error="toastOptions.isError"
      :text="toastOptions.text"
      v-if="showToast"
    />
  </transition>
</template>

<script setup>
import NormalHeader from '~~/layouts/NormalHeader.vue';
import FormLayout from '../../layouts/Form.vue';
import Toast from '../../components/Toast.vue';

import axios from 'axios';

import { useToast } from '~~/composables/useToast.js';
import { updateUser } from '~~/firebase/db'
import { useUserStore } from '~~/store/user'

const userStore = useUserStore()

const fullname = reactive({
  value: '',
  isValid: false,
});

const phone = reactive({
  value: '',
  isValid: false,
});

const nationality = reactive({
  value: '',
  isValid: false,
});

const gender = ref('no-specify');

const showToast = ref(false);

const toastOptions = ref({
  text: '',
  isError: false,
  isWarning: false,
});

const saveSelectedOption = (option) => (nationality.value = option);

const CountriesList = ref([]);

(async () => {
  try {
    let response = await axios('https://countriesnow.space/api/v0.1/countries');
    let countries = response.data.data;
    CountriesList.value = countries;
  } catch (error) {
    console.log(error);
  }
})();

const saveEdit = () => {
  if (
    fullname.value === '' ||
    gender.value === '' ||
    phone.value === '' ||
    nationality.value === ''
  ) {
    toastOptions.value.isError = true;
    toastOptions.value.text = 'Please fill out every field';
    useToast(showToast);
  } else {
    const userInfo = {
      fullname: fullname.value,
      gender: gender.value,
      phone: phone.value,
      nationality: nationality.value,
    };
    updateUser(userStore.user.uid, userInfo)
  }
};
</script>

<style lang="scss" scoped>
/* enter transitions */
.toast-enter-active {
  animation: wobble 0.5s ease;
}
/* leave transitions */
.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-leave-active {
  transition: all 0.3s ease;
}

@keyframes wobble {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 1;
  }
  60% {
    transform: translateX(8px);
    opacity: 1;
  }
  70% {
    transform: translateX(-8px);
    opacity: 1;
  }
  80% {
    transform: translateX(4px);
    opacity: 1;
  }
  90% {
    transform: translateX(-4px);
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
