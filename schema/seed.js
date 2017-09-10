const mongoose = require('mongoose');
const Recipe = require('./Recipe');

const potatoSalad = {
  password: false,
  title: 'Warm Potato and Pistachio Pesto Salad',
  serving: { amount: 8, unit: 'servings' },
  recipe: [
    {
      ingredients: [
        { name: 'Italian basil leaves', amount: 80, unit: 'g' },
        { name: 'Cilantro leaves', amount: 70, unit: 'g' },
        { name: 'Chives', amount: 70, unit: 'g' },
        { name: 'Scallion greens', amount: 70, unit: 'g' },
      ],
      procedure: [
        'Blanch in boiling water individually until tender, about 2 min each.',
        'Cool in ice water and squeeze to remove excess moisture.',
        'Reserve refrigerated.',
      ],
    },
    {
      ingredients: [{ name: 'Garlic cloves, peeled', amount: 16, unit: 'g' }],
      procedure: ['Blanch in boiling water for 2 min. Drain and reserve.'],
    },
    {
      ingredients: [
        {
          name: 'Extra virgin olive oil',
          amount: 190,
          unit: 'g',
        },
        {
          name: 'Parmiggiano Reggiano, finely grated',
          amount: 100,
          unit: 'g',
        },
        {
          name: 'Pistachios, peeled and toasted',
          amount: 100,
          unit: 'g',
        },
        { name: 'Roasted-pistachio oil', amount: 40, unit: 'g' },
        {
          name: 'Spinach puree (see page 2·424)',
          amount: 30,
          unit: 'g',
        },
        { name: 'Lemon juice', amount: 20, unit: 'g' },
      ],
      procedure: [
        'Puree together with cooked herbs and blanched garlic until smooth.',
      ],
    },
    {
      ingredients: [
        { name: 'Salt', amount: 0, unit: 'to taste' },
        {
          name:
            'Microcrystalline cellulose (AviceI CG 200, FMC BioPolymer brand)',
          amount: 7.8,
          unit: 'g',
        },
        {
          name: 'Xanthan gum (Keltrol T,CP Kelco brand)',
          amount: 1.56,
          unit: 'g',
        },
      ],
      procedure: [
        'Season Pesto with Salt',
        'Blend emulsifiers into pistachio pesto to fully hydrate.',
        'Vacuum seal, and refrigerate for at least 1h to macerate.',
      ],
    },
    {
      ingredients: [
        {
          name: 'Fingerling potatoes, skin on',
          amount: 800,
          unit: 'g',
        },
        { name: 'Olive oil', amount: 80, unit: 'g' },
      ],
      procedure: [
        'Vacuum seal potatoes and cook sous vide in 90°C / 194°F ath until tender, about 45 min.',
        'Remove from bag while still warm.',
        'Slice thinly.',
        'Toss with pesto as desired.',
      ],
    },
  ],
};

const tamales = {
  password: false,
  title: 'Pressure Cooked Tamales',
  serving: { amount: 10, unit: 'servings' },
  recipe: [
    {
      ingredients: [
        {
          name: 'Dried corn husks',
          amount: 20,
          unit: ' Husks',
        },
      ],
      procedure: [
        'Soak in warm water until the husks are pliable, at least 30 minutes. Shake them dry,',
      ],
    },
    {
      ingredients: [
        {
          name: 'Lard or unsalted butter',
          amount: 225,
          unit: 'g',
        },
      ],
      procedure: [
        'Whip in a stand mixer, scraping the sides often, until light and airy, about 5 minutes.',
      ],
    },
    {
      ingredients: [
        {
          name: 'Masa harina (Maseca brand)',
          amount: 450,
          unit: 'g',
        },
        {
          name: 'Toasted Corn Stock or water, lukewarm see page 90',
          amount: 300,
          unit: 'g',
        },
      ],
      procedure: [
        'Gradually add to the mixer, alternating between the two ingredients, until fully blended to make masa batter.',
      ],
    },
    {
      ingredients: [
        {
          name: 'Fresh corn kernels, cut from the cob',
          amount: 525,
          unit: 'g',
        },
        {
          name: 'Unsalted butter, melted',
          amount: 22,
          unit: 'g',
        },
        {
          name: 'Sour cream, creme fraiche, or crema',
          amount: 22,
          unit: 'g',
        },
        { name: 'Sugar', amount: 15, unit: 'g' },
        { name: 'Salt', amount: 14, unit: 'g' },
      ],
      procedure: [
        'Combine in a food processor, and blend to make com puree',
        'Fold the corn puree and masa batter together to make the tamale batter',
        'Place a dollop of tamale batter, about 70 g / 5 Tbsp, in each corn husk, and wrap firmly.',
        'Arrange the tamales, seam-side down, on a metal rack or trivet in a pressure cooker, and then add 2.5 cm / I in of water.',
        'Pressure-cook at a gauge pressure of 1 bar / 15psi for 20 minutes.  Start timing when full pressure is reached.',
        'Depressurize the cooker.',
        'Allow the tamales to cool until set, about 2 hours.',
        'Steam over boiling water for 15-20 minutes to reheat, and serve hot.',
      ],
    },
  ],
};

const tunaConfit = {
  password: false,
  title: 'Tuna Confit',
  serving: { amount: 6, unit: 'servings' },
  recipe: [
    {
      ingredients: [
        { name: 'Water', amount: 600, unit: 'g' },
        { name: 'Salt', amount: 24, unit: 'g' },
        { name: 'Sugar', amount: 12, unit: 'g' },
      ],
      procedure: ['Combine, and stir until dissolved to make a brine.'],
    },
    {
      ingredients: [
        {
          name: 'Ahi tuna, cut into 2.5 cm/1 in pieces',
          amount: 500,
          unit: 'g',
        },
      ],
      procedure: ['Place in the brine, and refrigerate for 24 hours.'],
    },
    {
      ingredients: [
        { name: 'Olive oil', amount: 500, unit: 'g' },
        { name: 'Salt', amount: 0, unit: 'to taste' },
      ],
      procedure: [
        'Preheat a water bath to 51°C/124°F.',
        'Drain the tuna, rinse it in cold water, and then pat it dry.',
        'Divide the tuna evenly into three 500mL/16oz canning jars, and add enough oil to cover the fish by half an inch. Seal the jars tightly.',
        'Place the sealed jars in the water bath, and cook sous vide to a core temperature of 50°C / 122°F, about1 hour.',
        'Serve the tuna warm, or store it, refrigerated, in the canning jars.',
      ],
    },
  ],
};

const recipeArray = [potatoSalad, tamales, tunaConfit];

function seedDB() {
  Recipe.remove({}, error => {
    if (error) {
      console.log(error);
    } else {
      Recipe.create(recipeArray, (error, state) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Seed Recipe Created', state._id);
        }
      });
    }
  });
}

module.exports = seedDB;
