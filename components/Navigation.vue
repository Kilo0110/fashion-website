<template>
  <nav class="nav fixed bottom-0 left-o w-[100vw] bg-slate-50 rounded-t-2xl z-50">
    <ul
      class="nav__items-container flex items-center justify-evenly w-full min-h-[13vh]"
      ref="navItemsContainer"
    >
      <NuxtLink to="/">
        <li class="nav__item flex flex-col gap-1 items-center cursor-pointer">
          <client-only>
            <font-awesome-icon :icon="['fas', 'home']" />
          </client-only>
          <span class="nav__item-name text-xs font-bold">Home</span>
        </li>
      </NuxtLink>
      <li class="nav__item flex flex-col gap-1 items-center cursor-pointer">
        <client-only>
          <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        </client-only>
        <span class="nav__item-name text-xs font-bold">Shop</span>
      </li>
      <li class="nav__item flex flex-col gap-1 items-center cursor-pointer">
        <client-only>
          <font-awesome-icon :icon="['fas', 'bag-shopping']" />
        </client-only>
        <span class="nav__item-name text-xs font-bold">Bag</span>
      </li>
      <NuxtLink to="/profile/favourites">
        <li class="nav__item flex flex-col gap-1 items-center cursor-pointer">
          <client-only>
            <font-awesome-icon :icon="['fas', 'heart']" />
          </client-only>
          <span class="nav__item-name text-xs font-bold">Favourite</span>
        </li>
      </NuxtLink>
      <NuxtLink to="/profile/">
        <li class="nav__item flex flex-col gap-1 items-center cursor-pointer">
          <client-only>
            <font-awesome-icon :icon="['fas', 'user']" />
          </client-only>
          <span class="nav__item-name text-xs font-bold">Profile</span>
        </li>
      </NuxtLink>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  activeItem: {
    type: Number,
    default: 0,
  },
});

const navItemsContainer = ref(null);

onMounted(() => {
  const navItems = navItemsContainer.value.querySelectorAll('.nav__item');
  navItems.forEach((item, index) => {
    if (index === props.activeItem) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});
</script>

<style lang="scss" scoped>
.nav {
  box-shadow: 0 -2px 10px 3px rgba(#000, 0.1);
}

.active {
  color: rgb(239 68 68);
}
</style>
