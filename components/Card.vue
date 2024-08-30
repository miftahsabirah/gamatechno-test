<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="flex justify-center pb-3">
    <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <a :href="link">
        <img class="rounded-t-xl" src="assets/image/webporto.png" alt="Image" />
      </a>
      <div class="flex-1 p-5 flex flex-col">
        <a :href="link">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
        </a>
        <p class="mb-3 text-xs text-gray-700 dark:text-gray-400 flex-1">{{ description }}</p>
        <!-- Container for the button -->
        <div class="mt-auto flex justify-center">
          <a :href="link"
            class="inline-flex font-bold items-center px-4 py-2 text-sm text-center text-white bg-dark-primary rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            See more
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
