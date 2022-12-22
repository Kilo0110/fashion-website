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
        <div class="gender-input-container-wrapper flex flex-col gap-1 px-4 py-2 bg-white shadow-md">
          <p class="text-sm text-slate-600">Gender</p>
          <div class="gender-input-container-wrapper flex items-start -translate-x-3">
            <Input
              inputName="gender"
              inputLabel="Male"
              inputID="Male"
              inputType="radio"
              inputPlaceholder=""
            />
            <Input
              inputName="gender"
              inputLabel="Female"
              inputID="Female"
              inputType="radio"
              inputPlaceholder=""
            />
            <Input
              inputName="gender"
              inputLabel="Don't specify"
              inputID="no-specify"
              inputType="radio"
              inputPlaceholder=""
              :checked="true"
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
        <Input
          inputName="country"
          inputLabel="Nationality"
          inputType="text"
          inputPlaceholder=""
          v-model="nationality.value"
        />
      </template>
    </FormLayout>
  </div>
</template>

<script setup>
import NormalHeader from '~~/layouts/NormalHeader.vue';
import FormLayout from '../../layouts/Form.vue';

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

const saveEdit = () => {
  console.log(this);
}
</script>

<style lang="scss" scoped></style>
