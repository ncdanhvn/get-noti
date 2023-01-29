<template>
  <div>
    <Navbar />
    <!-- <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold text-xl">Wallet</NuxtLink>
        <NuxtLink to="/auth/login">Log In</NuxtLink>
      </nav>
    </header> -->
    <div class="container max-w-2xl mx-auto px-4">
      <slot />
    </div>
  </div>
</template>
