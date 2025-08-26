// TSP_stimuli.js
// Array of problems: each has an id, prompt (HTML ok), and solution.
window.TSP_STIMULI_B2 = [
  {
    id: "b2_01",
    cities: ["City 1","City 2","City 3","City 4","City 5"],
    matrix: [
      [0,  5,  6,  3,  5],
      [0,  0,  2,  4,  2],
      [0,  0,  0,  1,  4],
      [0,  0,  0,  0,  1],
      [0,  0,  0,  0,  0]
    ],
    prompt: "<p><strong>Distances Between Cities:</strong></p>"
  },
  {
    id: 'b2_02',
    cities: ["City 1","City 2","City 3","City 4"],
    matrix: [
      [0,  2,  1,  5],
      [0,  0,  6,  4],
      [0,  0,  0,  4],
      [0,  0,  0,  0]
    ],
    prompt: "<p><strong>Distances Between Cities:</strong></p>"
  }
];
