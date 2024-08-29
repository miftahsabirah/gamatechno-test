<template>
  <!-- Start grid card -->
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 gap-y-5">
    <!-- component card dengan props berupa title -->
    <Card v-for="(project, index) in listProject" :key="index" :title="project.title" />
  </div>

  <!-- end grid card -->
</template>

<script setup>
const listProject = [
  { title: "Noteworthy technology acquisitions 2021" },
  { title: "LLALA" },
  { title: "LLALA" },
  { title: "LLALA" }
];
</script>
