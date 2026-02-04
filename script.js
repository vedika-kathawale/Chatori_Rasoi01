const recipes = [
    /*veg*/
    {
  type: "veg",
  name: "Cheese Corn Toast",
  image: "cheese corn toast.png",//cheese corn toast
  category: "Quick Snacks, Healthy Snacks",
  time: "10 mins",
  tags: ["Kids Friendly", "Calcium Rich"],
  ingredients: [
    "2 bread slices",
    "1/4 cup boiled sweet corn",
    "2 tbsp grated cheese",
    "Butter"
  ],
  instructions: [
    "Take bread slices and apply butter lightly.",
    "Mix boiled corn and grated cheese in a bowl.",
    "Spread the mixture evenly on bread slices.",
    "Heat a pan and place the bread on it.",
    "Cover and cook on low flame until cheese melts.",
    "Serve warm."
  ],
  nutrition: "Calories: 220 kcal | Protein: 8g",
  tips: "Use whole wheat bread for a healthier option."
},
{
  type: "veg",
  name: "Fruit Yogurt Bowl",
  image: "fruit yoghurt.png",//Fruit Yogurt Bowl
  category: "Healthy Snacks, Quick Snacks",
  time: "5 mins",
  tags: ["Kids Friendly", "No Cooking"],
  ingredients: [
    "1 cup thick curd",
    "Chopped fruits (apple, banana, papaya)",
    "Honey (optional)"
  ],
  instructions: [
    "Take curd in a bowl and whisk it well.",
    "Add chopped fruits.",
    "Mix gently.",
    "Drizzle honey if needed.",
    "Serve immediately."
  ],
  nutrition: "Calories: 160 kcal | Protein: 6g",
  tips: "Avoid citrus fruits to prevent curd from curdling."
},
{
  type: "veg",
  name: "Vegetable Cheese Roll",
  image: "roll.png",//Vegetable Cheese Roll
  category: "Quick Snacks",
  time: "10 mins",
  tags: ["Kids Friendly", "Filling"],
  ingredients: [
    "1 chapati",
    "Grated carrot and cabbage",
    "Grated cheese",
    "Salt"
  ],
  instructions: [
    "Heat chapati lightly on a pan.",
    "Add grated vegetables on one side.",
    "Sprinkle salt and cheese.",
    "Roll tightly.",
    "Serve warm."
  ],
  nutrition: "Calories: 200 kcal | Protein: 7g",
  tips: "You can add paneer instead of cheese."
},
{
  type: "veg",
  name: "Peanut Butter Banana Sandwich",
  image: "peanutbuttersandsandwich.png",//Peanut Butter Banana Sandwich
  category: "Quick Snacks, Kids Snacks",
  time: "5 mins",
  tags: ["Energy Boost", "Kids Friendly"],
  ingredients: [
    "2 bread slices",
    "Peanut butter",
    "Banana slices"
  ],
  instructions: [
    "Apply peanut butter on bread slices.",
    "Add banana slices evenly.",
    "Cover with another bread slice.",
    "Cut and serve."
  ],
  nutrition: "Calories: 260 kcal | Protein: 9g",
  tips: "Use unsweetened peanut butter."
},
{
  type: "veg",
  name: "Roasted Chana Chaat",
  image: "roastedchana chaat.png",//roasted chana chaat
  category: "Healthy Snacks, Quick Snacks",
  time: "5 mins",
  tags: ["High Protein", "Crunchy"],
  ingredients: [
    "1 cup roasted chana",
    "Salt",
    "Chaat masala",
    "Lemon juice"
  ],
  instructions: [
    "Take roasted chana in a bowl.",
    "Add salt and chaat masala.",
    "Squeeze lemon juice.",
    "Mix well and serve."
  ],
  nutrition: "Calories: 180 kcal | Protein: 10g",
  tips: "Avoid too much masala for kids."
},
{
  type: "veg",
  name: "Paneer Cubes Snack",
  image: "paneercubes.png",//paneer cubes
  category: "Healthy Snacks",
  time: "5 mins",
  tags: ["High Protein", "Kids Friendly"],
  ingredients: [
    "1/2 cup paneer cubes",
    "Salt",
    "Black pepper"
  ],
  instructions: [
    "Take paneer cubes in a bowl.",
    "Sprinkle salt and black pepper.",
    "Mix gently.",
    "Serve fresh."
  ],
  nutrition: "Calories: 170 kcal | Protein: 9g",
  tips: "Use fresh homemade paneer."
},
{
  type: "veg",
  name: "Vegetable Omelette Style Besan Toast",
  image: "besan toast.png",//beasan toast
  category: "Quick Snacks",
  time: "10 mins",
  tags: ["Kids Friendly", "Protein Rich"],
  ingredients: [
    "1/2 cup besan",
    "Chopped onion and capsicum",
    "Salt",
    "Bread slices"
  ],
  instructions: [
    "Mix besan, vegetables and salt with water.",
    "Make a thick batter.",
    "Dip bread slice into batter.",
    "Place on hot pan and cook both sides.",
    "Serve hot."
  ],
  nutrition: "Calories: 210 kcal | Protein: 8g",
  tips: "Cook on low flame for even cooking."
},
{
  type: "veg",
  name: "Apple Peanut Chaat",
  image: "Gemini_Generated_Image_41zlj741zlj741zl.png",//apple peanut chaat
  category: "Healthy Snacks",
  time: "5 mins",
  tags: ["Kids Friendly", "Sweet & Savory"],
  ingredients: [
    "Chopped apple",
    "Roasted peanuts",
    "Salt"
  ],
  instructions: [
    "Take chopped apple in a bowl.",
    "Add roasted peanuts.",
    "Sprinkle salt.",
    "Mix and serve."
  ],
  nutrition: "Calories: 140 kcal | Protein: 4g",
  tips: "Best served fresh to avoid browning."
},
{
  type: "veg",
  name: "Instant Veg Dalia",
  image: "daila.png",//Instant Veg Dalia
  category: "Healthy Snacks",
  time: "10 mins",
  tags: ["Fiber Rich", "Light"],
  ingredients: [
    "1/2 cup cooked dalia",
    "Chopped vegetables",
    "Salt"
  ],
  instructions: [
    "Heat cooked dalia in a pan.",
    "Add chopped vegetables.",
    "Add salt and mix well.",
    "Cook for 3–4 minutes.",
    "Serve warm."
  ],
  nutrition: "Calories: 190 kcal | Protein: 6g",
  tips: "Pre-cooked dalia saves time."
},
{
  type: "veg",
  name: "Chocolate Banana Milk",
  image: "Gemini_Generated_Image_fohg9vfohg9vfohg.png",//Chocolate Banana Milk
  category: "Kids Snacks, Healthy Snacks",
  time: "5 mins",
  tags: ["Kids Favorite", "Energy Drink"],
  ingredients: [
    "1 glass milk",
    "1 banana",
    "1 tsp cocoa powder"
  ],
  instructions: [
    "Add milk, banana and cocoa powder to blender.",
    "Blend until smooth.",
    "Pour into glass.",
    "Serve immediately."
  ],
  nutrition: "Calories: 230 kcal | Protein: 8g",
  tips: "Avoid adding sugar for a healthier version."
},
{
  type: "veg",
  name: "Oats Vegetable Uttapam",
  image: "Gemini_Generated_Image_8tex4s8tex4s8tex.png",//uttapam
  category: "Healthy Snacks, Evening Snacks",
  time: "20 mins",
  tags: ["High Fiber", "Healthy"],
  ingredients: [
    "1 cup oats",
    "1/2 cup curd",
    "1 small onion (finely chopped)",
    "1/4 cup carrot (grated)",
    "1 green chilli (finely chopped)",
    "Salt to taste",
    "Water as required",
    "Oil for cooking"
  ],
  instructions: [
    "Dry roast oats on low flame until lightly golden.",
    "Allow the oats to cool completely.",
    "Grind the roasted oats into a fine powder.",
    "Transfer oats powder to a mixing bowl.",
    "Add curd and mix well.",
    "Add water slowly to make a thick batter.",
    "Add onion, carrot, green chilli and salt.",
    "Mix everything evenly.",
    "Heat a non-stick tawa and grease it lightly.",
    "Pour a ladle of batter and spread gently.",
    "Cook on medium flame until bubbles appear.",
    "Flip and cook the other side until golden.",
    "Remove and serve hot with chutney."
  ],
  nutrition: "Calories: 210 kcal | Protein: 7g | Fiber: 5g",
  tips: "You can add capsicum or cabbage for more vegetables."
},
{
  type: "veg",
  name: "Aloo Paneer Stuffed Paratha",
  image: "Gemini_Generated_Image_jy3qctjy3qctjy3q.png", // paneer paratha
  category: "Evening Snacks",
  time: "30 mins",
  tags: ["Filling", "High Protein"],
  ingredients: [
    "1 cup wheat flour",
    "1 boiled potato (mashed)",
    "1/4 cup grated paneer",
    "Salt to taste",
    "1/2 tsp garam masala",
    "Water for dough",
    "Oil or ghee for cooking"
  ],
  instructions: [
    "Take wheat flour in a bowl.",
    "Add water gradually and knead into soft dough.",
    "Cover and rest the dough for 10 minutes.",
    "In another bowl, mix mashed potato and paneer.",
    "Add salt and garam masala to the mixture.",
    "Divide dough into equal portions.",
    "Flatten one dough ball and place stuffing inside.",
    "Seal and roll gently into a round paratha.",
    "Heat a tawa and place the paratha on it.",
    "Cook one side until brown spots appear.",
    "Flip and apply little oil or ghee.",
    "Cook both sides until golden brown.",
    "Serve hot with curd or chutney."
  ],
  nutrition: "Calories: 320 kcal | Protein: 12g | Carbs: 40g",
  tips: "Do not overfill stuffing to avoid breaking."
},
{
  type: "veg",
  name: "Cucumber Peanut Raita Chaat",
  image: "Gemini_Generated_Image_kq74b2kq74b2kq74.png",//cucumber peanut raita chaat
  category: "Quick Snacks, Healthy Snacks",
  time: "10 mins",
  tags: ["Cooling", "Diabetic Friendly"],
  ingredients: [
    "1 cup thick curd",
    "1 small cucumber (grated)",
    "2 tbsp roasted peanuts (crushed)",
    "Salt to taste",
    "Roasted cumin powder",
    "Coriander leaves"
  ],
  instructions: [
    "Take curd in a bowl and whisk it well.",
    "Add grated cucumber to the curd.",
    "Add crushed roasted peanuts.",
    "Add salt and roasted cumin powder.",
    "Mix everything gently.",
    "Garnish with coriander leaves.",
    "Serve chilled or immediately."
  ],
  nutrition: "Calories: 140 kcal | Protein: 6g | Fat: 6g",
  tips: "Use thick curd for best texture."
},
{
    type: "veg",
    name: "Vegetable Poha Cutlet",
    image: "Gemini_Generated_Image_7x10gv7x10gv7x10 (2).png",//poha cutlet
    category: "Healthy Snacks",
    time: "20 mins",
    tags: ["Low Oil", "Kids Friendly"],
   ingredients: [
"1 cup thick poha",
"1/2 cup mixed vegetables (carrot, peas, beans – finely chopped)",
"1 small onion (finely chopped)",
"1 green chilli (chopped)",
"Salt to taste",
"1/2 tsp red chilli powder",
"1/2 tsp garam masala",
"2 tbsp bread crumbs",
"Oil for shallow frying"
],
instructions: [
"Wash poha quickly in water and drain completely.",
"Let the poha rest for 5 minutes until it becomes soft.",
"Take softened poha in a mixing bowl.",
"Add chopped vegetables, onion and green chilli.",
"Add salt, red chilli powder and garam masala.",
"Mix everything well to form a soft mixture.",
"Add bread crumbs to bind the mixture.",
"Shape the mixture into small round or oval cutlets.",
"Heat a pan and add little oil.",
"Shallow fry the cutlets on medium flame.",
"Flip and cook until golden brown on both sides.",
"Remove and serve hot with green chutney."
],
nutrition: "Calories: 180 kcal | Protein: 6g | Carbs: 30g | Fat: 4g",
tips: "Use air-fryer or non-stick pan for a healthier version."
},

  {
    type: "veg",
    name: "Sprouts Chaat",
    image: "Gemini_Generated_Image_87bdq087bdq087bd.png",//sprouts chaat
    category: "Quick Snacks",
    time: "10 mins",
    tags: ["High Protein", "Diabetic Friendly"],
    ingredients: [
"1 cup mixed sprouts (boiled)",
"1 small onion (finely chopped)",
"1 tomato (finely chopped)",
"Salt to taste",
"1/2 tsp chaat masala",
"Lemon juice",
"Coriander leaves"
],
instructions: [
"Take boiled sprouts in a mixing bowl.",
"Add finely chopped onion and tomato.",
"Add salt and chaat masala.",
"Squeeze fresh lemon juice over the mixture.",
"Mix everything gently and evenly.",
"Garnish with chopped coriander leaves.",
"Serve immediately for best taste."
],
nutrition: "Calories: 150 kcal | Protein: 10g",
tips: "Always use boiled sprouts to make it easy to digest."
  },
  {
    type: "veg",
    name: "Vegetable Poha",
    image: " poha.jpeg", //poha
    category: "Quick Snacks, Evening Snacks, Healthy Snacks",
    time: "20 mins",
    tags: ["Light", "Healthy", "Low Oil"],
    ingredients: [
      "2 cups thick poha (flattened rice)",
      "1 onion (finely chopped)",
      "1 small potato (finely chopped)",
      "1 green chilli (chopped)",
      "1/2 tsp mustard seeds",
      "1/2 tsp turmeric powder",
      "Salt to taste",
      "1 tbsp oil",
      "Curry leaves",
      "Lemon juice"
    ],
    instructions: [
      "Wash poha in water for 5–10 seconds and drain completely.",
      "Keep the poha aside so it becomes soft.",
      "Heat oil in a pan and add mustard seeds.",
      "When mustard seeds crackle, add curry leaves and green chilli.",
      "Add chopped onion and sauté till translucent.",
      "Add chopped potato and cook till soft.",
      "Add turmeric powder and salt, mix well.",
      "Add soaked poha and mix gently.",
      "Cook on low flame for 5 minutes.",
      "Switch off the flame and add lemon juice.",
      "Serve hot with tea."
    ],
    nutrition: "Calories: 250 | Protein: 6g",
    tips: "Do not over-soak poha or it will become mushy."
  },
  {
    type: "veg",
    name: "Besan Chilla",
    image: "Gemini_Generated_Image_91967s91967s9196.png",//besan chilla
    category: "Evening Snacks, Healthy Snacks",
    time: "15 mins",
    tags: ["High Protein", "Gluten Free"],
    ingredients: [
      "1 cup besan (gram flour)",
      "1 onion (finely chopped)",
      "1 green chilli (chopped)",
      "Coriander leaves",
      "Salt to taste",
      "Water as required",
      "Oil for cooking"
    ],
    instructions: [
      "Take besan in a bowl.",
      "Add onion, green chilli, coriander leaves and salt.",
      "Add water slowly and make a smooth batter.",
      "Heat a tawa and grease it lightly.",
      "Pour batter and spread it like a pancake.",
      "Cook on medium flame till golden brown.",
      "Flip and cook the other side.",
      "Serve hot with green chutney."
    ],
    nutrition: "Calories: 180 | Protein: 9g",
    tips: "Add grated vegetables to make it more nutritious."
  },
  {
    type: "veg",
    name: "Corn Chaat",
    image: "Gemini_Generated_Image_vdelg1vdelg1vdel.png",//corn chaat
    category: "Quick Snacks, Evening Snacks",
    time: "10 mins",
    tags: ["No Oil", "Healthy"],
    ingredients: [
      "1 cup boiled sweet corn",
      "1 onion (finely chopped)",
      "1 tomato (chopped)",
      "Salt to taste",
      "Chaat masala",
      "Lemon juice",
      "Coriander leaves"
    ],
    instructions: [
      "Take boiled corn in a mixing bowl.",
      "Add chopped onion and tomato.",
      "Add salt and chaat masala.",
      "Squeeze fresh lemon juice.",
      "Mix everything well.",
      "Garnish with coriander leaves.",
      "Serve immediately."
    ],
    nutrition: "Calories: 150 | Protein: 5g",
    tips: "Use fresh sweet corn for best taste."
  },
  {
    type: "veg",
    name: "Vegetable Sandwich",
    image: "Gemini_Generated_Image_bui2ckbui2ckbui2.png", //vegetable sandwich
    category: "Quick Snacks, Evening Snacks",
    time: "15 mins",
    tags: ["Filling", "Kids Friendly"],
    ingredients: [
      "4 bread slices",
      "1 boiled potato (mashed)",
      "1 cucumber (sliced)",
      "Butter",
      "Green chutney",
      "Salt and pepper"
    ],
    instructions: [
      "Apply butter on bread slices.",
      "Spread green chutney evenly.",
      "Add mashed potato and cucumber slices.",
      "Sprinkle salt and pepper.",
      "Cover with another bread slice.",
      "Cut into halves and serve."
    ],
    nutrition: "Calories: 300 | Protein: 7g",
    tips: "You can toast it for extra crunch."
  },
  {
    type: "veg",
    name: "Upma",
    image: "Gemini_Generated_Image_8grovd8grovd8gro.png", //upma
    category: "Healthy Snacks, Evening Snacks",
    time: "20 mins",
    tags: ["Light", "South Indian"],
    ingredients: [
      "1 cup rava (semolina)",
      "1 onion (chopped)",
      "1 green chilli",
      "Mustard seeds",
      "Salt to taste",
      "Oil",
      "Water"
    ],
    instructions: [
      "Dry roast rava till aromatic and keep aside.",
      "Heat oil and add mustard seeds.",
      "Add onion and green chilli.",
      "Sauté till onion turns light brown.",
      "Add water and salt, bring to boil.",
      "Slowly add rava while stirring.",
      "Cook till thick and soft.",
      "Serve hot."
    ],
    nutrition: "Calories: 220 | Protein: 6g",
    tips: "Stir continuously to avoid lumps."
  },
  {
    type: "veg",
    name: "Moong Dal Sprouts Salad",
    image: "Gemini_Generated_Image_cqiay9cqiay9cqia.png",//Moong Dal Sprouts Salad
    category: "Healthy Snacks, Evening Snacks",
    time: "10 mins",
    tags: ["High Protein", "Low Calorie"],
    ingredients: [
      "1 cup moong sprouts",
      "Onion (chopped)",
      "Tomato (chopped)",
      "Salt",
      "Lemon juice"
    ],
    instructions: [
      "Take sprouts in a bowl.",
      "Add onion and tomato.",
      "Add salt and lemon juice.",
      "Mix well and serve fresh."
    ],
    nutrition: "Calories: 120 | Protein: 10g",
    tips: "Steam sprouts lightly if you prefer soft texture."
  },
  {
    type: "veg",
    name: "Masala Peanuts",
    image: "Gemini_Generated_Image_is63e3is63e3is63.png",//masala peanuts
    category: "Quick Snacks, Evening Snacks",
    time: "10 mins",
    tags: ["Crunchy", "Protein Rich"],
    ingredients: [
      "1 cup boiled peanuts",
      "Salt",
      "Chaat masala",
      "Red chilli powder"
    ],
    instructions: [
      "Take peanuts in a bowl.",
      "Add salt, chaat masala and chilli powder.",
      "Mix well.",
      "Serve warm."
    ],
    nutrition: "Calories: 280 | Protein: 12g",
    tips: "Roast peanuts for extra crunch."
  },
  {
    type: "veg",
    name: "Vegetable Cutlet",
    image: "Gemini_Generated_Image_ez7s7gez7s7gez7s.png",//vegetable cutlet
    category: "Evening Snacks",
    time: "30 mins",
    tags: ["Crispy", "Popular Snack"],
    ingredients: [
      "Boiled vegetables",
      "Bread crumbs",
      "Salt and spices",
      "Oil"
    ],
    instructions: [
      "Mash boiled vegetables.",
      "Add salt and spices.",
      "Shape into patties.",
      "Coat with bread crumbs.",
      "Shallow fry till golden.",
      "Serve hot with sauce."
    ],
    nutrition: "Calories: 320 | Protein: 6g",
    tips: "Shallow fry to reduce oil."
  },
  {
    type: "veg",
    name: "Paneer Toast",
    image: "Gemini_Generated_Image_swkbgrswkbgrswkb.png",//paneer toast
    category: "Quick Snacks, Evening Snacks",
    time: "15 mins",
    tags: ["High Protein", "Tasty"],
    ingredients: [
      "Bread slices",
      "Grated paneer",
      "Salt and pepper",
      "Butter"
    ],
    instructions: [
      "Mix paneer with salt and pepper.",
      "Spread mixture on bread slices.",
      "Apply butter on pan.",
      "Toast till golden brown.",
      "Serve hot."
    ],
    nutrition: "Calories: 260 | Protein: 10g",
    tips: "Add capsicum for extra flavor."
  },
  {
    type: "veg",
    name: "Roasted Makhana",
    image: "Gemini_Generated_Image_sob4d5sob4d5sob4.png",//roasted makhaana
    category: "Healthy Snacks, Evening Snacks",
    time: "10 mins",
    tags: ["Low Calorie", "Healthy"],
    ingredients: [
      "1 cup makhana",
      "1 tsp ghee",
      "Salt",
      "Black pepper"
    ],
    instructions: [
      "Heat ghee in a pan.",
      "Add makhana and roast on low flame.",
      "Roast till crispy.",
      "Add salt and pepper.",
      "Serve warm."
    ],
    nutrition: "Calories: 120 | Protein: 4g",
    tips: "Roast on low flame for best crunch."
  },

  /*nonveg*/
  {
  type: "nonveg",
  name: "Egg & Chicken Stuffed Bread Cups",
  image: "Egg & Chicken Stuffed Bread Cups.png",//Egg & Chicken Stuffed Bread Cups
  category: "Quick Snacks, Kids Snacks",
  time: "10 mins",
  tags: ["Kids Friendly", "High Protein"],
  ingredients: [
    "4 bread slices",
    "1 boiled egg (chopped)",
    "1/4 cup cooked chicken (finely chopped)",
    "Salt to taste",
    "Black pepper",
    "2 tbsp grated cheese",
    "Butter"
  ],
  instructions: [
    "Cut the edges of bread slices.",
    "Flatten each bread slice using a rolling pin.",
    "Grease a pan or mould with little butter.",
    "Press bread slices into the mould to form cups.",
    "Mix chopped egg, chicken, salt and pepper in a bowl.",
    "Fill the bread cups with the mixture.",
    "Top with grated cheese.",
    "Cover and cook on low flame for 6–8 minutes.",
    "Remove once bread becomes crisp and cheese melts.",
    "Serve warm."
  ],
  nutrition: "Calories: 260 kcal | Protein: 16g",
  tips: "Use non-stick pan and low flame to avoid burning."
},
{
  type: "nonveg",
  name: "Chicken Cutlet",
  image: "chicken ctulet.png",//chicken ctulet
  category: "Evening Snacks",
  time: "30 mins",
  tags: ["Kids Friendly", "Crispy"],
  ingredients: [
    "1 cup boiled chicken (shredded)",
    "1 boiled potato (mashed)",
    "Onion (finely chopped)",
    "Salt and spices",
    "Bread crumbs",
    "Oil"
  ],
  instructions: [
    "Take shredded chicken in a bowl.",
    "Add mashed potato, onion and spices.",
    "Mix everything well.",
    "Shape into oval cutlets.",
    "Coat with bread crumbs.",
    "Shallow fry until golden brown.",
    "Serve hot with sauce."
  ],
  nutrition: "Calories: 280 kcal | Protein: 18g",
  tips: "Use shallow frying to reduce oil."
},

{
  type: "nonveg",
  name: "Egg Toast",
  image: "egg toast.png",//egg toast
  category: "Quick Snacks",
  time: "10 mins",
  tags: ["High Protein", "Kids Friendly"],
  ingredients: [
    "2 bread slices",
    "2 eggs",
    "Salt and pepper",
    "Butter"
  ],
  instructions: [
    "Beat eggs with salt and pepper.",
    "Heat pan and add butter.",
    "Dip bread slices in egg mixture.",
    "Place on pan and cook both sides.",
    "Toast until golden.",
    "Serve hot."
  ],
  nutrition: "Calories: 220 kcal | Protein: 12g",
  tips: "Cook on low flame for soft texture."
},

{
  type: "nonveg",
  name: "Chicken Sandwich",
  image: "chicken sandwich.png",//chicken sandwich
  category: "Quick Snacks",
  time: "15 mins",
  tags: ["Filling", "Kids Friendly"],
  ingredients: [
    "Bread slices",
    "Boiled chicken (chopped)",
    "Mayonnaise",
    "Salt and pepper"
  ],
  instructions: [
    "Mix chicken with mayonnaise, salt and pepper.",
    "Spread mixture on bread.",
    "Cover with another slice.",
    "Cut and serve."
  ],
  nutrition: "Calories: 300 kcal | Protein: 16g",
  tips: "Use whole wheat bread for healthier version."
},

{
  type: "nonveg",
  name: "Chicken Pakora",
  image: "chicken pakora.png",//chicken pakora
  category: "Evening Snacks",
  time: "25 mins",
  tags: ["Crispy", "Popular"],
  ingredients: [
    "Boneless chicken pieces",
    "Besan",
    "Spices",
    "Oil"
  ],
  instructions: [
    "Marinate chicken with spices.",
    "Add besan and mix well.",
    "Heat oil in pan.",
    "Drop chicken pieces carefully.",
    "Fry till golden brown.",
    "Serve hot."
  ],
  nutrition: "Calories: 320 kcal | Protein: 20g",
  tips: "Fry on medium flame for crispiness."
},

{
  type: "nonveg",
  name: "Egg Bhurji",
  image: "egg burji.png",//egg burji
  category: "Healthy Snacks",
  time: "10 mins",
  tags: ["High Protein", "Quick"],
  ingredients: [
    "2 eggs",
    "Onion (chopped)",
    "Green chilli",
    "Salt and spices"
  ],
  instructions: [
    "Heat oil in pan.",
    "Add onion and green chilli.",
    "Beat eggs with salt.",
    "Pour eggs into pan.",
    "Scramble gently.",
    "Cook till soft.",
    "Serve hot."
  ],
  nutrition: "Calories: 180 kcal | Protein: 13g",
  tips: "Do not overcook eggs."
},

{
  type: "nonveg",
  name: "Chicken Bread Roll",
  image: "chicken bread roll.png",//chicken bread roll
  category: "Evening Snacks",
  time: "25 mins",
  tags: ["Kids Friendly", "Filling"],
  ingredients: [
    "Bread slices",
    "Cooked chicken filling",
    "Salt",
    "Oil"
  ],
  instructions: [
    "Flatten bread slices.",
    "Add chicken filling in center.",
    "Roll tightly.",
    "Shallow fry until golden.",
    "Serve warm."
  ],
  nutrition: "Calories: 290 kcal | Protein: 15g",
  tips: "Seal edges properly to avoid opening."
},

{
  type: "nonveg",
  name: "Egg Cutlet",
  image: "egg cutlet.png",//egg cutlet
  category: "Evening Snacks",
  time: "20 mins",
  tags: ["Protein Rich", "Kids Friendly"],
  ingredients: [
    "Boiled eggs (chopped)",
    "Potato (mashed)",
    "Spices",
    "Bread crumbs"
  ],
  instructions: [
    "Mix eggs, potato and spices.",
    "Shape into cutlets.",
    "Coat with bread crumbs.",
    "Shallow fry till golden.",
    "Serve hot."
  ],
  nutrition: "Calories: 240 kcal | Protein: 14g",
  tips: "Use non-stick pan for less oil."
},

{
  type: "nonveg",
  name: "Chicken Momos",
  image: "chicken momos.png",//chicken momos
  category: "Healthy Snacks",
  time: "30 mins",
  tags: ["Steamed", "Low Oil"],
  ingredients: [
    "Momo wrappers",
    "Minced chicken",
    "Onion",
    "Spices"
  ],
  instructions: [
    "Mix chicken with onion and spices.",
    "Fill mixture in wrappers.",
    "Seal properly.",
    "Steam for 12–15 minutes.",
    "Serve hot with chutney."
  ],
  nutrition: "Calories: 260 kcal | Protein: 18g",
  tips: "Steaming makes it healthier."
},

{
  type: "nonveg",
  name: "Chicken Tikka Bites",
  image: "chicken tikka bites.png",//chicken tikka bites
  category: "Healthy Snacks",
  time: "20 mins",
  tags: ["High Protein", "Low Oil"],
  ingredients: [
    "Boneless chicken",
    "Curd",
    "Spices"
  ],
  instructions: [
    "Marinate chicken with curd and spices.",
    "Rest for 15 minutes.",
    "Cook on pan or oven.",
    "Turn until cooked evenly.",
    "Serve hot."
  ],
  nutrition: "Calories: 220 kcal | Protein: 22g",
  tips: "Use grill pan for best flavor."
},

{
  type: "nonveg",
  name: "Egg Mayo Sandwich",
  image: "egg mayo sandwich.png",//egg mayo sandwich
  category: "Quick Snacks",
  time: "10 mins",
  tags: ["Kids Friendly", "Quick"],
  ingredients: [
    "Boiled eggs",
    "Mayonnaise",
    "Bread slices"
  ],
  instructions: [
    "Mash boiled eggs.",
    "Mix with mayonnaise.",
    "Spread on bread.",
    "Cover and serve."
  ],
  nutrition: "Calories: 280 kcal | Protein: 12g",
  tips: "Add pepper for taste."
},

{
  type: "nonveg",
  name: "Chicken Popcorn",
  image: "chicken popcorns.png",//chicken popcorn
  category: "Evening Snacks",
  time: "25 mins",
  tags: ["Crispy", "Kids Favorite"],
  ingredients: [
    "Chicken cubes",
    "Cornflour",
    "Spices",
    "Oil"
  ],
  instructions: [
    "Marinate chicken with spices.",
    "Coat with cornflour.",
    "Deep fry until crispy.",
    "Drain excess oil.",
    "Serve hot."
  ],
  nutrition: "Calories: 330 kcal | Protein: 19g",
  tips: "Fry in hot oil only."
},

{
  type: "nonveg",
  name: "Chicken Franky",
  image: "chickenfranky.png",//chicken franky
  category: "Evening Snacks",
  time: "20 mins",
  tags: ["Street Style", "Filling"],
  ingredients: [
    "Roti",
    "Chicken filling",
    "Onion",
    "Sauce"
  ],
  instructions: [
    "Heat roti lightly.",
    "Add chicken filling.",
    "Add onion and sauce.",
    "Roll tightly.",
    "Serve hot."
  ],
  nutrition: "Calories: 340 kcal | Protein: 18g",
  tips: "Wrap in foil for easy eating."
},

{
  type: "nonveg",
  name: "Egg Fried Rice (Snack Portion)",
  image: "egg fried rice.png",//egg fried rice
  category: "Evening Snacks",
  time: "15 mins",
  tags: ["Quick", "Filling"],
  ingredients: [
    "Cooked rice",
    "Eggs",
    "Vegetables",
    "Salt"
  ],
  instructions: [
    "Heat oil in pan.",
    "Scramble eggs.",
    "Add vegetables.",
    "Add rice and salt.",
    "Mix well and serve."
  ],
  nutrition: "Calories: 300 kcal | Protein: 11g",
  tips: "Use leftover rice."
},

{
  type: "nonveg",
  name: "Chicken Omelette",
  image: "chicken omlette.png",//chicken omelette
  category: "Healthy Snacks",
  time: "10 mins",
  tags: ["High Protein", "Quick"],
  ingredients: [
    "Eggs",
    "Cooked chicken bits",
    "Salt"
  ],
  instructions: [
    "Beat eggs with salt.",
    "Add chicken pieces.",
    "Pour into pan.",
    "Cook both sides.",
    "Serve hot."
  ],
  nutrition: "Calories: 210 kcal | Protein: 16g",
  tips: "Cook on low flame."
},

{
  type: "nonveg",
  name: "Chicken Shawarma Roll",
  image: "chicken shawarma.png",//chicken shawarma
  category: "Evening Snacks",
  time: "25 mins",
  tags: ["Filling", "Popular"],
  ingredients: [
    "Roti",
    "Chicken shawarma filling",
    "Veggies",
    "Sauce"
  ],
  instructions: [
    "Warm roti.",
    "Add chicken and vegetables.",
    "Add sauce.",
    "Roll tightly.",
    "Serve warm."
  ],
  nutrition: "Calories: 350 kcal | Protein: 20g",
  tips: "Do not overfill."
},

{
  type: "nonveg",
  name: "Egg Puff",
  image: "egg puff.png",//egg puff
  category: "Evening Snacks",
  time: "30 mins",
  tags: ["Bakery Style", "Kids Friendly"],
  ingredients: [
    "Boiled eggs",
    "Puff pastry",
    "Masala"
  ],
  instructions: [
    "Cut boiled eggs in half.",
    "Wrap with pastry and masala.",
    "Bake until golden.",
    "Serve hot."
  ],
  nutrition: "Calories: 320 kcal | Protein: 10g",
  tips: "Brush milk for shine."
},

{
  type: "nonveg",
  name: "Chicken Seekh Kebab",
  image: "chicken sheek kabab.png",//chicken sheek kabab
  category: "Healthy Snacks",
  time: "25 mins",
  tags: ["High Protein", "Low Oil"],
  ingredients: [
    "Minced chicken",
    "Spices",
    "Onion"
  ],
  instructions: [
    "Mix chicken with spices.",
    "Shape on skewers.",
    "Cook on pan or grill.",
    "Turn evenly.",
    "Serve hot."
  ],
  nutrition: "Calories: 240 kcal | Protein: 22g",
  tips: "Soak skewers before use."
},

{
  type: "nonveg",
  name: "Egg Roll",
  image: "egg roll.png",//egg roll
  category: "Quick Snacks",
  time: "15 mins",
  tags: ["Street Style", "Kids Friendly"],
  ingredients: [
    "Roti",
    "Egg",
    "Onion",
    "Sauce"
  ],
  instructions: [
    "Cook egg on pan.",
    "Place roti over egg.",
    "Flip and cook.",
    "Add onion and sauce.",
    "Roll and serve."
  ],
  nutrition: "Calories: 270 kcal | Protein: 11g",
  tips: "Use fresh roti."
},

{
  type: "nonveg",
  name: "Chicken Lollipop (Snack Style)",
  image: "chicken lollipop.png",//chicken lollipop
  category: "Evening Snacks",
  time: "30 mins",
  tags: ["Crispy", "Party Snack"],
  ingredients: [
    "Chicken lollipop pieces",
    "Flour",
    "Spices",
    "Oil"
  ],
  instructions: [
    "Marinate chicken with spices.",
    "Coat with flour.",
    "Deep fry until crispy.",
    "Serve hot."
  ],
  nutrition: "Calories: 360 kcal | Protein: 21g",
  tips: "Serve immediately."
},

{
  type: "nonveg",
  name: "Egg Salad",
  image: "egg salad.png",//egg salad
  category: "Healthy Snacks",
  time: "10 mins",
  tags: ["High Protein", "Light"],
  ingredients: [
    "Boiled eggs",
    "Onion",
    "Curd",
    "Salt"
  ],
  instructions: [
    "Chop boiled eggs.",
    "Add onion and curd.",
    "Add salt.",
    "Mix gently.",
    "Serve fresh."
  ],
  nutrition: "Calories: 190 kcal | Protein: 12g",
  tips: "Best served chilled."
},

{
  type: "nonveg",
  name: "Chicken Nuggets (Homemade)",
  image: "chickrn nuggets.png",//chickrn nuggets
  category: "Kids Snacks",
  time: "25 mins",
  tags: ["Kids Favorite", "Crispy"],
  ingredients: [
    "Minced chicken",
    "Bread crumbs",
    "Spices"
  ],
  instructions: [
    "Mix chicken with spices.",
    "Shape into nuggets.",
    "Coat with bread crumbs.",
    "Shallow fry until golden.",
    "Serve hot."
  ],
  nutrition: "Calories: 300 kcal | Protein: 17g",
  tips: "Air-fry for healthier option."
},

{
  type: "nonveg",
  name: "Egg Cheese Scramble",
  image: "scrambled egg.png",//scrambled egg
  category: "Quick Snacks, Kids Snacks",
  time: "10 mins",
  tags: ["High Protein", "Kids Friendly"],
  ingredients: [
    "2 eggs",
    "2 tbsp grated cheese",
    "Salt to taste",
    "Black pepper",
    "1 tsp butter"
  ],
  instructions: [
    "Crack eggs into a bowl.",
    "Add salt and black pepper.",
    "Beat eggs well using a fork.",
    "Heat butter in a pan on low flame.",
    "Pour egg mixture into the pan.",
    "Stir gently while cooking.",
    "Add grated cheese.",
    "Mix until eggs are soft and cheese melts.",
    "Switch off flame and serve warm."
  ],
  nutrition: "Calories: 240 kcal | Protein: 14g",
  tips: "Cook on low flame to keep eggs soft and creamy."
},
{
  type: "nonveg",
  name: "Quick Chicken Stir Fry",
  image: "chicken stir fry.png",//chicken stir fry
  category: "Healthy Snacks, Quick Snacks",
  time: "10 mins",
  tags: ["High Protein", "Low Oil"],
  ingredients: [
    "1 cup cooked chicken (small pieces)",
    "1/2 onion (sliced)",
    "1/2 capsicum (sliced)",
    "Salt to taste",
    "Black pepper",
    "1 tsp oil"
  ],
  instructions: [
    "Heat oil in a pan on medium flame.",
    "Add sliced onion and sauté for 1 minute.",
    "Add capsicum and cook for another minute.",
    "Add cooked chicken pieces.",
    "Sprinkle salt and black pepper.",
    "Stir fry for 3–4 minutes.",
    "Switch off flame once well mixed.",
    "Serve hot as a snack."
  ],
  nutrition: "Calories: 220 kcal | Protein: 20g",
  tips: "Use leftover cooked chicken to save time."
},

{
  type: "nonveg",
  name: "Chicken Maggi",
  image: "chicken maggie.png",//chickenmaggie 
  category: "Quick Snacks",
  time: "10 mins",
  tags: ["Kids Friendly", "Quick"],
  ingredients: [
    "Maggi noodles",
    "Cooked chicken",
    "Masala"
  ],
  instructions: [
    "Boil noodles as per instructions.",
    "Add cooked chicken.",
    "Add masala.",
    "Mix well.",
    "Serve hot."
  ],
  nutrition: "Calories: 310 kcal | Protein: 14g",
  tips: "Use less masala for kids."
  }
];

// Normalize and validate recipes added dynamically — fixes common issues
;(() => {
  const required = ['type','name'];
  const warnings = [];
  recipes.forEach((r, i) => {
    // Ensure object
    if (!r || typeof r !== 'object') {
      warnings.push(`Recipe at index ${i} is not an object`);
      return;
    }

    // Required fields
    required.forEach(k => { if (!r[k]) warnings.push(`Recipe[${i}] missing '${k}'`); });

    // Normalize arrays
    if (!Array.isArray(r.ingredients)) {
      if (r.ingredients == null) r.ingredients = [];
      else r.ingredients = [r.ingredients];
    }
    if (!Array.isArray(r.tags)) {
      if (r.tags == null) r.tags = [];
      else r.tags = [r.tags];
    }
    if (r.instructions && !Array.isArray(r.instructions)) r.instructions = [r.instructions];

    // Ensure category/time/image strings
    if (r.category == null) r.category = '';
    if (r.time == null) r.time = '';
    if (r.image == null) r.image = '';

    // Trim strings where applicable
    if (typeof r.name === 'string') r.name = r.name.trim();
    if (typeof r.category === 'string') r.category = r.category.trim();
  });

  if (warnings.length) console.warn('Recipes validation warnings:', warnings);
})();

const container = document.getElementById("recipeContainer");
const title = document.getElementById("recipeTitle");

function displayRecipes(list) {
  if (!container) return;
  container.innerHTML = '';
  // Update visible recipe count
  const countEl = document.getElementById('recipeCount');
  if (countEl) {
    const n = Array.isArray(list) ? list.length : 0;
    const strong = countEl.querySelector('strong');
    if (strong) strong.textContent = n;
    else countEl.textContent = `Showing ${n} recipe${n !== 1 ? 's' : ''}`;
  }
  list.forEach(r => {
    const idx = recipes.indexOf(r);
    if (idx === -1) return; // safety: skip if cannot find original
    container.innerHTML += `
      <div class="recipe-card fade-in" onclick="openRecipeModal(${idx})">
        <img src="${r.image}" alt="${r.name}">
        <h3>${r.name}</h3>
        <p>${r.category} • ${r.time}</p>
        <div class="badges">
          ${r.tags.map(t => `<span>${t}</span>`).join("")}
        </div>
        <div style="margin-top:10px">
          <a class="see-recipe" href="recipe.html?idx=${idx}">See recipe</a>
        </div>
      </div>
    `;
  });

  // remove any leftover load-more button
  const existingBtn = document.getElementById('loadMoreBtn');
  if (existingBtn) existingBtn.remove();
}

function openRecipeModal(index) {
  if (index < 0 || index >= recipes.length) return;
  const r = recipes[index];
  // remove existing modal if any
  const existing = document.querySelector('.modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" aria-label="Close">✕</button>
      <div class="modal-header">
        <h3>${r.name}</h3>
        <div class="badges">${r.tags.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
      <div class="modal-body">
        <img src="${r.image}" alt="${r.name}">
        <p><strong>Category:</strong> ${r.category} • <strong>Time:</strong> ${r.time}</p>
        <h4>Ingredients</h4>
        <ul class="ingredients-list">
          ${r.ingredients.map(i => `<li>${i}</li>`).join('')}
        </ul>
        <h4>Nutrition</h4>
        <p>${r.nutrition || 'N/A'}</p>
        <h4>Tips</h4>
        <p>${r.tips || ''}</p>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // close handlers
  modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
  document.addEventListener('keydown', function onEsc(ev) {
    if (ev.key === 'Escape') { modal.remove(); document.removeEventListener('keydown', onEsc); }
  });
}

function showVeg() {
  title.innerText = "Veg Recipes";
  displayRecipes(recipes.filter(r => r.type === "veg"));
}

function showNonVeg() {
  title.innerText = "Non-Veg Recipes";
  displayRecipes(recipes.filter(r => r.type === "nonveg"));
}

function filterCategory(cat) {
  title.innerText = cat;
  const key = (cat || '').toString().toLowerCase();
  displayRecipes(recipes.filter(r => r.category && r.category.toString().toLowerCase().includes(key)));
}

// Scroll to recipes section after updating list
function scrollToRecipes() {
  const section = document.getElementById('recipes');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

// enhance navigation functions to scroll
const _showVeg = showVeg;
const _showNonVeg = showNonVeg;
const _filterCategory = filterCategory;
showVeg = function() { _showVeg(); scrollToRecipes(); };
showNonVeg = function() { _showNonVeg(); scrollToRecipes(); };
filterCategory = function(cat) { _filterCategory(cat); scrollToRecipes(); };

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

let modeToggle = null;
function applyTheme(dark) {
  if (dark) {
    document.body.classList.add('dark');
    if (!modeToggle) modeToggle = document.getElementById('modeToggle');
    if (modeToggle) modeToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    if (!modeToggle) modeToggle = document.getElementById('modeToggle');
    if (modeToggle) modeToggle.textContent = '🌙';
  }
}

// Attach handler when toggle exists
function ensureModeToggle() {
  if (!modeToggle) modeToggle = document.getElementById('modeToggle');
  if (modeToggle) {
    modeToggle.onclick = () => {
      const isDark = !document.body.classList.contains('dark');
      applyTheme(isDark);
      localStorage.setItem('chatori-theme-dark', isDark ? '1' : '0');
    };
  }
}

// Initialize theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
  const stored = localStorage.getItem('chatori-theme-dark');
  const isDark = stored === '1' || (stored === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  applyTheme(isDark);
  ensureModeToggle();
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}