<script>
export default {
  scrollToTop: true,
};
</script>

<template>
  <div class="container mx-auto px-2 w-full py-[30px] md:py-[50px] lg:py-[50px] overflow-hidden">
    <!-- Start timeline experience -->
    <section id="experience" class="py-10">
      <div class="flex justify-center items-center space-x-3 mb-10">
        <h1 class="font-semibold text-xl md:text-4xl text-black">
          My Experience
        </h1>
      </div>
      <!-- Component Timeline dengan props -->
      <Timeline v-for="(timeline, index) in listTimelines" :key="index" :timeline="timeline.time"
        :place="timeline.place" :work="timeline.work" />

    </section>
    <!-- End timeline experience -->

    <!-- start What Can I do for you -->
    <section id="skill" class="py-10">
      <SkillSection />
    </section>

    <!-- end What Can I do for you -->

    <!-- Start projects -->
    <section className="max-w-6xl mx-auto flex flex-col gap-y-8 py-10">
      <div class="flex justify-center items-center space-x-3 mb-10">
        <h1 class="font-semibold text-xl md:text-4xl text-black">
          All Projects
        </h1>
      </div>
      <Projects />
    </section>
    <!-- end projects -->
  </div>
</template>

<script setup>

const listTimelines = [
  {
    time: "February 2024 - July 2024",
    place: "PT FADHIL MIFTAH SEJAHTERA (Istri Developer)",
    work: "COding bareng COding barengCOding barengCOding barengCOding barengCOding barengCOding barengCOding barengCOding barengCOding barengCOding barengCOding barengCOding barengCOding bareng ngCOding barengngCOding barengngCOding bareng",

  },
  {
    time: "February 2024 - July 2024",
    place: "PT Global Data Inspirasi (Backend)",
    work: "COding bareng COding barengCOding barengCOding barengCOding barengCOding barengCOding barengCOding barengCOding barengCOding barengCOding barengCOding barengCOding barengCOding bareng ngCOding barengngCOding barengngCOding bareng",

  },
];
</script>
