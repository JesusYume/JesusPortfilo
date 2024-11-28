// We are gonna select the physics button
const PhysButton = document.getElementById('button-physics');

// Add a click listener for the button
PhysButton.addEventListener('click', function() {
    // Adding text to list items
    document.getElementById('courseName').innerText = 'Course for Physics:'   
    document.getElementById('course1').innerText = 'Classical Mechanics - Newtons Laws of Motion, Projectiles and Charged Particles, Momentum and Angular Momentum, Energy, Oscillations, Calculus of Variations, Lagranges Equations and Hamiltonian Mechanics';
    document.getElementById('course2').innerText = 'Mathematical Methods -  Infinite and Power Series, Complex Numbers, Linear Algebra, Integrals, Derivatives, Partial Differentiation, Multiple Integrals, Vector Analysis, Fourier Series and Transformation, Ordinary Differential Equations, Calculus of Variations, and Tensor Analysis';
    document.getElementById('course3').innerText = 'Computational Physics - Python Programming, Graphs and Visualization, Integrals, Derivatives, Solutions of Linear and Nonlinear Equations, Fourier Transformation, Partial Differential Equations, Random Processes, and Monte Carlo Methods';
    document.getElementById('course4').innerText = 'Quantum Mechanics - Stern-Gerlach Experiments, Operators and Measurments, Schrödinger Time Evolution, Quantized Energies: Particle in a Box, Harmonic Oscillator, Unbound and Bond States, Angualr Momentum, Hydrogen Atom, and Perturbation Theory';
    document.getElementById('course5').innerText = 'Thermodynamics - Energy in Thermal Physics, Interactions and Implications, Engines and Refrigerators, Free Energy and Chemical Thermodynamics, and Blotzmann Statistics';
    document.getElementById('course6').innerText = 'General Relativity - Space - Time - and Gravity in Newtonian Physics, Principle of Special Relativity, Special Relativistic Mechanics, Gravity as Geometry, Curved Spacetime, Gravitational Collapse, and Black Holes';
    document.getElementById('course7').innerText = 'Experimental Physics - Arduino Circuit Board, Lasers, Magnetic Torque, Diode Spectroscopy, Faraday Rotation, and Torsional Oscillator';
    document.getElementById('course8').innerText = 'Electrodynamics - Electrostatics, Potentials, Electric Fields in Matter, Magnetostatics, Magnetic Field in Matter, Electrodynamics, Conservation Laws, Electromagnetic Waves, and Radiation';
    
    document.getElementById('course9').style.display = 'none'
    document.getElementById('course10').style.display = 'none'
    document.getElementById('course11').style.display = 'none'
});

// And now for the computer science button
const CSButton = document.getElementById('button-cs');

CSButton.addEventListener('click', function() {
    document.getElementById('courseName').innerText = 'Course for Computer Science:'
    document.getElementById('course1').innerText = 'Python Programming';
    document.getElementById('course2').innerText = 'Data Structures -  Arrays, Vectors, Singly Linked Lists, Doubly Linked Lists, Recursive, Stacks & Queues, Pointers, Dynamic Vector, Binary Search Trees (BST), AVL Trees, Hash Tables, Depth-first Search, and Breadth-first Search';
    document.getElementById('course3').innerText = 'File Strucutures and Database - PHP Programming';
    document.getElementById('course4').innerText = 'Algorithm Engineering - Searching, Sorting, Kruskals, and Dijkstras';
    document.getElementById('course5').innerText = 'Compilers and Languages - Layers of a compiler like for example lexical analysis';
    document.getElementById('course6').innerText = 'Introduction to Machine Learning - Deep Learning, Unsupervised Learning, Supervise Learning, Decision Trees, Reinforcement Learning, and Probabilistic Modeling';
    document.getElementById('course7').innerText = 'Web Front End Engineering - HTML, CSS, JavaScript';
    document.getElementById('course8').innerText = 'Introduction to Game Design - Unity, C# Programming';

    document.getElementById('course9').style.display = ''
    document.getElementById('course10').style.display = ''
    document.getElementById('course11').style.display = ''
    document.getElementById('course9').innerText = 'Artifical Intelligence';
    document.getElementById('course10').innerText = 'Introduction to Data Science and Big Data - R Programming, Data Wrangling, Tidy Data, Linear Modeling, Nearest Neighbors Classification, and K-means Clustering';
    document.getElementById('course11').innerText = 'Cybersecurity Fundamentals and Principles - Cryptographic Tools, Authentication, Access Control, Operating System Concepts & Security, Malicious Software, Networks, and Internet';
});