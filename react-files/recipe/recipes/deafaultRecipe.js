const recipe = {
	title: 'New Recipe',
	serving: { amount: 1, unit: 'serving' },
	recipe: [
		{
			ingredients: [
				{ name: 'Water', amount: 32, unit: 'oz' },
				{ name: 'Salt', amount: 0, unit: 'a pinch' },
				{ name: 'Pepper', amount: 12, unit: 'grinds' },
			],
			procedure: [
				'Any text or number in the steps or ingredients can be edited',
				'Including units!',
				"If you don't want an ingredient's amount to display, set it to zero and when it is displayed, only the unit will show",
				'You can use this to display "to taste" with no amount, for example',
			],
		},
	],
};

export default recipe;
