<template>
  <!-- Start grid card -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 gap-y-5">
    <!-- component card with props including title, description, and link -->
    <Card
      v-for="(project, index) in listProject"
      :key="index"
      :title="project.title"
      :description="project.description"
      :link="project.link"
    />
  </div>
  <!-- end grid card -->
</template>

<script setup>
const listProject = [
  {
    title: 'Web Portfolio',
    description: 'A sleek and modern web application designed to showcase my portfolio. This site provides an intuitive and engaging interface where users can explore my projects, learn about my skills, and get in touch. Built with React and styled with advanced Sass techniques, this portfolio demonstrates my expertise in creating dynamic and responsive web applications.',
    link: 'https://portfolio-miftahsabirahs-projects.vercel.app/',
  },
  {
    title: "Gizkia Admin",
    description: "The Gizkia Admin website is designed to manage CRUD operations related to maternal and child health data in Boyolali. It facilitates efficient management and updating of information within the Gizkia user dashboard. This web application demonstrates a smooth user experience and interactive UI components, emphasizing its user-friendly interface and seamless data management capabilities.",
    link: 'https://drive.google.com/file/d/1D0VycyyNzvfjE-BcixBqL0oGvCB2SPRX/view?usp=sharing',
  },
  {
    title: "Gizkia Public",
    description: "Gizkia Public is a web application tailored for healthcare professionals, offering comprehensive features to view and edit maternal and child health data in Boyolali. It provides a user-friendly interface for seamless data interaction and management, enhancing efficiency in healthcare operations.",
    link: 'https://drive.google.com/file/d/1mMSLvPIJqz7AEkibYvQRIcLF_sXhz0ce/view?usp=drive_link',
  },
  {
    title: 'Syncpos',
    description: 'A comprehensive integration system designed to enhance communication and data management across multiple posyandu. This web application provides a user-friendly interface for managing and tracking health data, improving the efficiency of data collection and analysis. Syncpos demonstrates advanced use of APIs and interactive UI components to deliver a seamless and effective user experience.',
    link: 'https://github.com/Ghif188/syncpos-fe'
  },
  {
    title: 'myTravel.',
    description: 'myTravel is a comprehensive web application designed for booking travel packages and exploring detailed information about various destinations. The user-friendly interface allows users to browse through different travel packages, including details about destinations, itineraries, accommodations, and activities. myTravel showcases modern web development techniques and interactive UI components.',
    link: 'https://drive.google.com/file/d/1uo5dz8YZVohl9csQxDbX79A2aShhJRvo/view?usp=sharing',
  },
  {
    title: 'School Profile Website',
    description: 'The School Profile website is a comprehensive web application meticulously crafted to showcase a school`s detailed information, including its programs, staff, achievements, and much more. This project exemplifies my proficiency in web development, highlighting my ability to design and implement an intuitive, engaging user interface that ensures seamless functionality and an exceptional user experience',
    link: 'https://drive.google.com/file/d/1ceNaam7ZPjjXaC6GuLt4FXFrIESmyZik/view?usp=drive_link',
  },
  {
    title: 'RubEase',
    description: 'An environmentally oriented mobile application designed to provide specialized services in waste reduction and management, actively addressing community waste issues in Indonesia through user-friendly features and circular economy approaches. Emphasizing user experience and interface design for ease of use and community engagement, RubEase exemplifies cutting-edge UI/UX principles with intuitive navigation, captivating layouts, and engaging interactive elements. ',
    link: 'https://www.figma.com/design/dRrGExn44z9ksbgPRxuLFg/RubEase?node-id=0-1&t=DeCGwz2osZG2me9W-1',
  },
  {
    title: 'Recipedia',
    description: 'Recipedia is a mobile application dedicated to culinary enthusiasts. Designed to streamline recipe discovery and community engagement, Recipedia offers a user-friendly interface for browsing, adding, and sharing recipes. This application emphasizes intuitive navigation, visually appealing layouts, and interactive features to enhance user interaction and satisfaction.',
    link: 'https://www.figma.com/proto/fxVjrFbvwMD5pU00Cbl4D4/BELAJAR-FIGMA?node-id=330-1274&t=ZaIyPQwSonTSz4bL-1',
  },
  {
    title: 'TumbuhKembang',
    description: 'A mobile application designed for parents, offering access to educational videos, articles, and infographics covering child development and nutrition. Designed with intuitive navigation and user-centric features, TumbuhKembang allows parents to monitor their child`s milestones and recognize stunting symptoms early. It prioritizes user-centric design to deliver a visually appealing and informative platform, empowering parents to effectively nurture their child`s growth.',
    link: 'https://www.figma.com/design/xmdbmERREgQSc7ECtyzcWy/Design-Healthtech?node-id=2112-2896&t=ybn1Soku71SjeZ3n-1',
  },

];
</script>
