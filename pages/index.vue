<script>
export default {
  scrollToTop: true,
};
</script>

<template>
  <div class="container mx-auto px-2 w-full py-[30px] md:py-[50px] lg:py-[50px] overflow-hidden">
    <!-- Start Hero -->
    <section id="skill">
      <Hero />
    </section>
    <!-- End Hero -->
    
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
        time: "February 2024 - June 2024",
        place: "School Profile Website (Frontend)",
        work: "Developed 30+ pages for the School Profile website, creating interactive and responsive interfaces for cross-device compatibility using HTML, JavaScript, and Tailwind."
    },
    {
        time: "May 2024 - Jun4 2023",
        place: "RubEase Mobile App Design (UI/UX)",
        work: "Created more than 50 pages for the admin and public interfaces of the Gizkia website, emphasizing interactive and responsive design to improve user engagement and experience",
    },
    {
        time: "May 2024",
        place: "Syncpos (Frontend)",
        work: "Developed a user-friendly and responsive design interface for managing and tracking health data, improving the efficiency of data collection and analysis, Collaborated with backend developers using Laravel for reliable backend functionality",
    },
    {
        time: "September 2023 - December 2023",
        place: "GIZKIA Website (Frontend)",
        work: "Created more than 50 pages for the admin and public interfaces of the Gizkia website, emphasizing interactive and responsive design to improve user engagement and experience",
    },
];
</script>
