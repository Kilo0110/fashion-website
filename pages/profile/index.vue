<template>
  <Navigation :activeItem=4 />
  <main class="main bg-gray-50 min-h-[100vh] px-3 pt-3">
    <BoldHeader headerTitle="My Profile" />
    <div class="user-bio-container flex gap-3">
      <img
        src=""
        alt=""
        class="user-img h-14 aspect-square rounded-full border-2"
      />
      <div class="user-bio-credetianls flex flex-col">
        <p class="user-name font-bold">Matilda Brown</p>
        <span class="user-email text-xs text-gray-400 font-bold"
          >matildabrown@mail.com</span
        >
      </div>
    </div>
    <ul class="profile-actions-list mt-6 mb-20 flex flex-col gap-7">
      <NuxtLink to="/profile/edit-profile">
        <li class="profile-action cursor-pointer relative">
          <p class="text-sm font-bold">Edit Profile</p>
          <p class="text-xs text-gray-400 font-bold">Update your information</p>
          <client-only>
            <font-awesome-icon
              class="absolute top-1/2 -translate-y-1/2 right-2 text-sm text-gray-400"
              :icon="['fas', 'chevron-right']"
            />
          </client-only>
        </li>
      </NuxtLink>
      <NuxtLink to="/profile/favourites">
        <li class="profile-action cursor-pointer relative">
          <p class="text-sm font-bold">My Favourites</p>
          <p class="text-xs text-gray-400 font-bold">30 favourites</p>
          <client-only>
            <font-awesome-icon
              class="absolute top-1/2 -translate-y-1/2 right-2 text-sm text-gray-400"
              :icon="['fas', 'chevron-right']"
            />
          </client-only>
        </li>
      </NuxtLink>
      <NuxtLink to="/profile/shipping-address">
        <li class="profile-action cursor-pointer relative">
          <p class="text-sm font-bold">Shipping addresses</p>
          <p class="text-xs text-gray-400 font-bold">3 addresses</p>
          <client-only>
            <font-awesome-icon
              class="absolute top-1/2 -translate-y-1/2 right-2 text-sm text-gray-400"
              :icon="['fas', 'chevron-right']"
            />
          </client-only>
        </li>
      </NuxtLink>
      <NuxtLink to="/profile/payment-methods">
        <li class="profile-action cursor-pointer relative">
          <p class="text-sm font-bold">Payment methods</p>
          <p class="text-xs text-gray-400 font-bold">Visa **34</p>
          <client-only>
            <font-awesome-icon
              class="absolute top-1/2 -translate-y-1/2 right-2 text-sm text-gray-400"
              :icon="['fas', 'chevron-right']"
            />
          </client-only>
        </li>
      </NuxtLink>
      <li class="profile-action cursor-pointer relative">
        <p class="text-sm font-bold">Promocodes</p>
        <p class="text-xs text-gray-400 font-bold">
          You have special promocodes
        </p>
        <client-only>
          <font-awesome-icon
            class="absolute top-1/2 -translate-y-1/2 right-2 text-sm text-gray-400"
            :icon="['fas', 'chevron-right']"
          />
        </client-only>
      </li>
      <NuxtLink to="/profile/reviews">
        <li class="profile-action cursor-pointer relative">
          <p class="text-sm font-bold">My reviews</p>
          <p class="text-xs text-gray-400 font-bold">Reviewed 4 items</p>
          <client-only>
            <font-awesome-icon
              class="absolute top-1/2 -translate-y-1/2 right-2 text-sm text-gray-400"
              :icon="['fas', 'chevron-right']"
            />
          </client-only>
        </li>
      </NuxtLink>
      <li class="profile-action cursor-pointer relative" @click="logUserOut">
        <p class="text-sm font-bold">Logout</p>
        <p class="text-xs text-gray-400 font-bold">End your session</p>
        <client-only>
          <font-awesome-icon
            class="absolute top-1/2 -translate-y-1/2 right-2 text-sm text-gray-400"
            :icon="['fas', 'chevron-right']"
          />
        </client-only>
      </li>
    </ul>
  </main>
</template>

<script setup>
import BoldHeader from '~~/layouts/BoldHeader.vue';
import { useUserStore } from '~~/store/user';

const userStore = useUserStore();

definePageMeta({
  middleware: 'auth'
})

const logUserOut = () => {
  userStore.logUserOut()
}
</script>

<style lang="scss" scoped></style>
