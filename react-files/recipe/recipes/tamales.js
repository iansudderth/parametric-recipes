const recipe = {
  title: 'Pressure Cooked Tamales',
  serving: { amount: 10, unit: 'servings' },
  recipe:
  [
    {
      ingredients: [
        { name: 'Dried corn husks', amount: '20', unit: ' Husks', scaling: null },
      ],
      procedure: [
        'Soak in warm water until the husks are pliable, at least 30 minutes. Shake them dry,',
      ],
    },
    {
      ingredients: [
        { name: 'Lard or unsalted butter', amount: 225, unit: 'g', scaling: 50 },
      ],
      procedure: [
        'Whip in a stand mixer, scraping the sides often, until light and airy, about 5 minutes.',
      ],
    },
    {
      ingredients: [
        { name: 'Masa harina (Maseca brand)', amount: 450, unit: 'g', scaling: 100 },
        { name: 'Toasted Corn Stock or water, lukewarm see page 90', amount: 300, unit: 'g', scaling: 67 },
      ],
      procedure: [
        'Gradually add to the mixer, alternating between the two ingredients, until fully blended to make masa batter.',
      ],
    },
    {
      ingredients: [
        { name: 'Fresh corn kernels, cut from the cob', amount: 525, unit: 'g', scaling: 117 },
        { name: 'Unsalted butter, melted', amount: 22, unit: 'g', scaling: 4.9 },
        { name: 'Sour cream, creme fraiche, or crema', amount: 22, unit: 'g', scaling: 4.9 },
        { name: 'Sugar', amount: 15, unit: 'g', scaling: 3.3 },
        { name: 'Salt', amount: 14, unit: 'g', scaling: 3.3 },
      ],
      procedure: [
        'Combine in a food processor, and blend to make com puree',
        'Fold the corn puree and masa batter together to make the tamale battel',
        'Place a dollop of tamale batter, about 70 g / 5 Tbsp, in each corn husk, andwrap firmly.',
        'Arrange the tamales, seam-side down, on a metal rack or trivet in a pressure cooker, and then add 2.5 cm / I in of water.',
        'Pressure-cook at a gauge pressure of 1 bar / 15psi for 20 minutes.  Start timing when full pressure is reached.',
        'Depressurize the cooker.',
        'Allow the tamales to cool until set, about 2 hours.',
        'Steam over boiling water for 15-20 minutes to reheat, and serve hot.',
      ],
    },
  ],
};

export default recipe;
