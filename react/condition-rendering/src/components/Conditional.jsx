import React, { useState } from 'react';

/* Conditional Rendering */

export function Items({ check, name }) {
  return check ? <li>✅{name}</li> : <li><del>❌{name}</del></li>;
}

export function Recips() {
  return <div>
        <div>
       <h1>Pav Bhaji Recipe</h1>
    
    <h2>Ingredients:</h2>
    
    <h3>For the Bhaji:</h3>
    <ul>
        <li className="ingredient">2 tablespoons butter</li>
        <li className="ingredient">1 tablespoon oil</li>
        <li className="ingredient">1 teaspoon cumin seeds</li>
        <li className="ingredient">1 large onion, finely chopped</li>
        <li className="ingredient">2 teaspoons ginger-garlic paste</li>
        <li className="ingredient">2 green chilies, finely chopped</li>
        <li className="ingredient">2 large tomatoes, finely chopped</li>
        <li className="ingredient">1 cup cauliflower, finely chopped</li>
        <li className="ingredient">1 cup green peas</li>
        <li className="ingredient">2 large potatoes, boiled and mashed</li>
        <li className="ingredient">1 green bell pepper, finely chopped</li>
        <li className="ingredient">1 carrot, finely chopped</li>
        <li className="ingredient">1/2 cup water (adjust as needed)</li>
        <li className="ingredient">Salt to taste</li>
        <li className="ingredient">1 teaspoon red chili powder</li>
        <li className="ingredient">1 teaspoon turmeric powder</li>
        <li className="ingredient">2 teaspoons pav bhaji masala</li>
        <li className="ingredient">1 tablespoon lemon juice</li>
        <li className="ingredient">Fresh coriander leaves, chopped (for garnish)</li>
        <li className="ingredient">Extra butter (for serving)</li>
    </ul>
    
    <h3>For the Pav:</h3>
    <ul>
        <li className="ingredient">8 pav buns</li>
        <li className="ingredient">Butter (for toasting)</li>
        <li className="ingredient">Finely chopped coriander leaves (for garnish)</li>
    </ul>
    
    <h2>Instructions:</h2>
    
    <h3>Preparing the Bhaji:</h3>
    <ol>
        <li className="instruction">Heat Butter and Oil: In a large pan, heat the butter and oil over medium heat.</li>
        <li className="instruction">Sauté Onions: Add cumin seeds. When they start to crackle, add the finely chopped onions and sauté until they turn golden brown.</li>
        <li className="instruction">Add Ginger-Garlic Paste: Add the ginger-garlic paste and green chilies. Sauté for a minute until the raw smell disappears.</li>
        <li className="instruction">Add Tomatoes: Add the finely chopped tomatoes and cook until they become soft and oil starts to separate.</li>
        <li className="instruction">Add Vegetables: Add the chopped cauliflower, green peas, green bell pepper, and carrot. Sauté for a few minutes.</li>
        <li className="instruction">Add Potatoes: Add the boiled and mashed potatoes to the pan.</li>
        <li className="instruction">Spices: Add salt, red chili powder, turmeric powder, and pav bhaji masala. Mix well.</li>
        <li className="instruction">Cook Bhaji: Add 1/2 cup of water (adjust as needed) and mash the vegetables using a potato masher. Cook for 10-15 minutes, stirring occasionally, until the mixture thickens and the flavors blend.</li>
        <li className="instruction">Finish: Add lemon juice and mix well. Garnish with chopped coriander leaves.</li>
    </ol>
    
    <h3>Preparing the Pav:</h3>
    <ol>
        <li className="instruction">Slice and Toast: Slice the pav buns horizontally. Heat a tawa (griddle) and add butter. Place the buns on the tawa and toast until they turn golden brown and crisp on both sides.</li>
        <li className="instruction">Garnish: Sprinkle some finely chopped coriander leaves on the buns while toasting.</li>
    </ol>
    
    <h3>Serving:</h3>
    <ul>
        <li className="instruction">Serve the hot bhaji on a plate, topped with a dollop of butter.</li>
        <li className="instruction">Place the toasted pav buns on the side.</li>
        <li className="instruction">Garnish with chopped onions, lemon wedges, and fresh coriander leaves.</li>
    </ul>
    
    <p>Enjoy your homemade Pav Bhaji!</p>
    </div>
  </div>;
}

const Conditional = () => {
  const [showRecips, setShowRecips] = useState(false);

  const handleButtonClick = () => {
    setShowRecips(!showRecips); // Toggle the state
  };

  return (
    <div>
      <h1 className='bg-yellow-400 text-orange-500 p-5 text-center text-5xl'>React Conditional Rendering</h1>
      <ul className='mt-7'>
        <button onClick={handleButtonClick}>
          Show/Hide Pavbhaji
        </button>
        <Items check={true} name='Mobile' />
        <Items check={true} name='Laptop' />
        <Items check={true} name='Keyboard' />
        <Items check={false} name='Mouse' />
        <Items check={true} name='Pendrive' />
        <Items check={false} name='Hard Disk' />
        <Items check={true} name='CPU' />
      </ul>
      {showRecips && <Recips />}
    </div>
  );
};

export default Conditional;
