<template>
  <div>
    <NuxtLayout>
      <header>
        <ul>
          <li class="mt-2 mb-2 hover:font-bold">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/events" class="ml-4">Events</NuxtLink>
            <NuxtLink to="/custom" class="ml-4">Custom</NuxtLink>
          </li>
        </ul>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
