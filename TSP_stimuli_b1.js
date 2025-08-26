// TSP_stimuli.js
// Array of problems: each has an id, prompt (HTML ok), and solution.
window.TSP_STIMULI_B1 = [
  {
    id: "b1_01",
    cities: ["City 1","City 2","City 3","City 4","City 5", "City 6"],
    matrix: [
      [0,  3,  6,  4,  4, 1],
      [0,  0,  1,  2,  5, 3],
      [0,  0,  0,  2,  6, 4],
      [0,  0,  0,  0,  7, 1],
      [0,  0,  0,  0,  0, 2],
      [0,  0,  0,  0,  0, 0],
    ],
    prompt: "<p><strong>Distances Between Cities:</strong></p>"
  },
  {
    id: 'b1_02',
    cities: ["City 1","City 2","City 3","City 4","City 5"],
    matrix: [
      [0,  1,  2,  3,  4],
      [0,  0,  4,  5,  3],
      [0,  0,  0,  2,  6],
      [0,  0,  0,  0,  1],
      [0,  0,  0,  0,  0]
    ],
    prompt: "<p><strong>Distances Between Cities:</strong></p>"
  }
];
