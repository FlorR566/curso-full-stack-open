import { useState } from "react";

const App = () => {
	const [clicks, setClicks] = useState({
		left: 0,
		right: 0,
	});

	// Agregamos la sintaxis de 'object spread' (...):
	const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 });

	const handleRightClick = () =>
		setClicks({ ...clicks, right: clicks.right + 1 });

	return (
		<div>
			{clicks.left}
			<button onClick={handleLeftClick}>Left</button>

			<button onClick={handleRightClick}>Right</button>
			{clicks.right}
		</div>
	);
};

export default App;

// const handleLeftClick = () => {
// 	const newClicks = {
// 		left: clicks.left + 1,
// 		right: clicks.right,
// 	};
// 	setClicks(newClicks);
// };

// const handleRightClick = () => {
// 	const newClicks = {
// 		left: clicks.left,
// 		right: clicks.right + 1,
// 	};
// 	setClicks(newClicks);
// };

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   return (
//     <div>
//       {left}
//       <button onClick={() => setLeft(left + 1)}>
//         left
//       </button>
//       <button onClick={() => setRight(right + 1)}>
//         right
//       </button>
//       {right}
//     </div>
//   )
// }
// export default App;
