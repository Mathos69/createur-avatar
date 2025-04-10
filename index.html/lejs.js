function changePart(partId, imagePath) {
  console.log('change part', partId,imagePath);
    document.getElementById(partId).src = imagePath;
  }
  
  function changeShirt(select) {
    const value = select.value;
    let folder = "Blue", file = "blueShirt1.png";
  
    if (value.startsWith("Blue")) {
      folder = "Blue";
      file = value === "Blue2" ? "blueShirt2.png" : "blueShirt1.png";
    } else if (value.startsWith("Red")) {
      folder = "Red";
      file = value === "Red2" ? "redShirt2.png" : "redShirt1.png";
    } else if (value.startsWith("Green")) {
      folder = "Green";
      file = value === "Green2" ? "greenShirt2.png" : "greenShirt1.png";
    }
  
    document.getElementById("shirt").src = `assets/Shirts/${folder}/${file}`;
  }
 


  const categories = ["faces", "hairs", "shirts", "skins"]; 
  const maxVariants = 4; 

  document.getElementById("randomize").addEventListener("click", () => {
    categories.forEach(cat => {
      const select = document.getElementById(cat);
      if (select) {
        const options = select.options;
        const randomIndex = Math.floor(Math.random() * options.length);
        select.selectedIndex = randomIndex;

        
        select.dispatchEvent(new Event("change"));
      }
    });
  });


  const customNames = [
    "Réda",
    "Mathis",
    "Timohté",
    "Elie",
    "Liam",
    "Maia",
    "Théo",
    "Hélenne",
    "Justin",
    "Chloé",
    "Ludovic"
  ];

  const nameDisplay = document.getElementById("name-display");
  const nameButton = document.getElementById("generate-name");

  nameButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * customNames.length);
    const randomName = customNames[randomIndex];
    nameDisplay.textContent = "Nom : " + randomName;
  });

  
