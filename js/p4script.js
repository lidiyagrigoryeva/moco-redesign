document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero");
  let images = [];
  
  // Function to update the date and time
  function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); // Format: MM/DD/YYYY, HH:MM:SS
    document.getElementById('date-time-display').textContent = dateTimeString;
  }

  // Update the date and time every second
  setInterval(updateDateTime, 1000);

  // Call the function immediately to display the time without waiting for 1 second
  updateDateTime();

  // Check which page it is and load the appropriate images
  if (document.body.classList.contains("aquatics-page")) {
    images = [
      { src: "/images/pool1.jpg", alt: "A photo of an outdoor pool in good weather with kids playing in it." },
      { src: "/images/pool2.jpg", alt: "A close-up photo of a woman in an indoor pool, smiling at the camera and holding a pair of water dumbbells." },
      { src: "/images/pool3.jpg", alt: "A group photo of four children around the same age, dressed in swimming clothes near a swimming pool." },
    ];
  } else if (document.body.classList.contains("camps-page")) {
    images = [
      { src: "/images/camp1.jpg", alt: "A group photo of four children around the same age, smiling and standing close to the camera, showing their paint-stained hands." },
      { src: "/images/camp2.jpg", alt: "A group photo of seven children around the same age, dressed in a variety of pirate-themed costumes for a theater performance." },
      { src: "/images/camp3.jpg", alt: "A group photo of six younger teenagers posing and smiling for the camera with paint on their hands and some smudged on their faces." },
    ];
  } else if (document.body.classList.contains("classes-page")) {
    images = [
      { src: "/images/classes1.jpg", alt: "A close up photo of a middle-aged woman smiling at the camera mid-pose while at a dancing class." },
      { src: "/images/classes2.jpg", alt: "A photo of a group of three older adults in a cooking class, looking down at a man in the center handling meat." },
      { src: "/images/classes3.jpg", alt: "A group photo of eight children around the same age dancing in a studio." },
    ];
  } else if (document.body.classList.contains("facilities-page")) {
    images = [
      { src: "/images/facilities1.jpg", alt: "A photo taken of the gymnasium of the Wheaton Community Recreation Center with the volleyball nets set up and people of all ages are playing volleyball." },
      { src: "/images/facilities2.jpg", alt: "A photo of the fitness center at the North Potomac Community Recreation Center, showing several adults using the many treadmills available." },
      { src: "/images/facilities3.jpg", alt: "A photo of the playground and splash zone area of the Wheaton Community Recreation center, there are many children and families enjoying the facility." },
    ];
  } else if (document.body.classList.contains("memberships-page")) {
    images = [
      { src: "/images/facilities1.jpg", alt: "A photo taken of the gymnasium of the Wheaton Community Recreation Center with the volleyball nets set up and people of all ages are playing volleyball." },
      { src: "/images/facilities2.jpg", alt: "A photo of the fitness center at the North Potomac Community Recreation Center, showing several adults using the many treadmills available." },
      { src: "/images/facilities3.jpg", alt: "A photo of the playground and splash zone area of the Wheaton Community Recreation center, there are many children and families enjoying the facility." },
    ];
  } else if (document.body.classList.contains("seniors-page")) {
    images = [
      { src: "/images/seniors1.jpg", alt: "A photo of a large group of senior citizens posing for a photo in front of the gift shop building at Brookside Gardens." },
      { src: "/images/seniors2.jpg", alt: "A photo of a large group of senior citizens at the Margaret Schweinhaut Senior Center's 50th anniversary, taken mid-shot as they are participating in a kickboxing class demonstration." },
      { src: "/images/seniors3.jpg", alt: "A photo of a small group of senior citizens, posing for a photo at Smokey Glen Farms for the 55+ Senior Barbecue Extravaganza event." },
    ];
  } else if (document.body.classList.contains("sports-page")) {
    images = [
      { src: "/images/sports1.jpg", alt: "A photo of a dramatic shot featuring a young adult soccer playing mid-air about to kick a ball." },
      { src: "/images/sports2.jpg", alt: "A photo of teenagers playing basketball at a recreation center." },
      { src: "/images/sports3.jpg", alt: "An action shot of senior citizens participating in a track and field event at the Maryland Senior Olympics." },
    ];
  } else if (document.body.classList.contains("youth-page")) {
    images = [
      { src: "/images/youth1.jpg", alt: "A large group photo consisting of teenagers and a few Montgomery Recreation Staff all posing for selfies on a staff member's phone." },
      { src: "/images/youth2.jpg", alt: "A photo of 3 older teenagers posing for a photo as they showcase their outfits created for Fashion Boot Camp." },
      { src: "/images/youth3.jpg", alt: "A photo of a large group of small children in front of a firetruck with some firefighters." },
    ];
  } else {
    // Default images for homepage or unspecified pages
    images = [
      { src: "/images/winter.png", alt: "A digital flyer with Winter themes, with text that says WINTER REGISTRATION NOW UNDERWAY." },
      { src: "/images/summercamp.png", alt: "A digital flyer featuring 2 cartoon adolescents sitting next to a campfire with text that says OLDER TEEN SUMMER CAMPS REGISTRATION BEGINS SPRING 2024." },
      { src: "/images/yoga.png", alt: "A digital flyer featuring 2 cartoon adults doing yoga with text that says 55+ YOGA - FREE YOGA CLASSES FOR RESIDENTS OVER THE AGE OF 55. REGISTER NOW AT YOUR LOCAL SENIOR CENTER." },
    ];
  }
  

  let currentImageIndex = 0;
  heroSection.style.backgroundImage = `url('${images[currentImageIndex].src}')`;
  
  setInterval(() => {
    let nextImageIndex = (currentImageIndex + 1) % images.length;
    heroSection.style.setProperty(
      "--next-image",
      `url('${images[nextImageIndex].src}')`
    );
    heroSection.classList.add("fade");
  
    heroSection.addEventListener(
      "transitionend",
      () => {
        heroSection.style.backgroundImage = `url('${images[nextImageIndex].src}')`;
        heroSection.classList.remove("fade");
        currentImageIndex = nextImageIndex;
      },
      { once: true }
    );
  }, 5000); // Change image every 5 sec
  
});


