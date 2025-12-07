const nouns = [
      "actor",
      "animal",
      "book",
      "car",
      "cat",
      "computer",
      "desk",
      "food",
      "friend",
      "house",
      "school",
      "teacher",
      "water"
    ];

function generate() {
      const randomIndex = Math.floor(Math.random() * nouns.length);
      const noun = nouns[randomIndex];
      document.getElementById("noun").innerText = noun;
    }