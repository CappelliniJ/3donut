const slides = [
    {
      title: "Introduction",
      content: "Welcome to the presentation. Today's topic: Creating a 3D Matrix-style Donut with Three.js.",
    },
    {
      title: "Overview of the project",
      content: "Objective: Create a 3D donut made of Matrix-style letters using JavaScript. The donut is unique, visually appealing, and showcases the capabilities of Three.js.",
    },
    {
      title: "Introduction to Three.js",
      content: "Three.js: A popular 3D library for creating and displaying 3D graphics using WebGL. Advantages: Simplifies WebGL programming, Provides a high-level, easy-to-use API, Extensive documentation and examples. Used in various applications such as games, data visualization, and 3D design.",
    },
    {
      title: "Explaining the code (Part 1)",
      content: "Setting up the scene: Creating a scene, camera, and renderer, Configuring the camera's field of view and aspect ratio, Adding the renderer to the HTML document. Creating the donut: Defining a helper function to generate random matrix characters, Loading a font using Three.js FontLoader, Generating text geometries for each character, Positioning the characters along the torus path.",
    },
    {
      title: "Explaining the code (Part 2)",
      content: "Illuminating the donut: Adding ambient light for overall lighting, Adding a directional light for highlights and shadows. Animating the donut: Creating an animate function that updates the donut's rotation, Rendering the scene using requestAnimationFrame.",
    },
    {
      title: "Challenges faced",
      content: "Positioning the characters along the torus path: Calculating the correct positions and rotations for each character. Loading and using a font for text geometries: Asynchronously loading the font and generating the text geometries. Ensuring the donut is properly lit: Adding appropriate lighting to make the donut visible and visually appealing.",
    },
    {
      title: "Conclusion",
      content: "Successfully created a 3D Matrix-style donut using JavaScript and Three.js. Demonstrated the power and flexibility of Three.js for creating 3D graphics. Possibilities for future improvements: Adding interactivity, e.g., user-controlled rotation, Generating different shapes or objects with Matrix-style letters. Thank you for attending the presentation!",
    },
  ];
  
  const slideTitle = document.getElementById("slide-title");
  const slideContent = document.getElementById("slide-content");
  
  let currentSlide = 0;
  
  const showSlide = () => {
    slideTitle.innerText = slides[currentSlide].title;
    slideContent.innerText = slides[currentSlide].content;
  
    currentSlide = (currentSlide + 1) % slides.length;
  };
  
  showSlide();
  setInterval(showSlide, 30000);
  
  