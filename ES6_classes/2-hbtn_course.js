class HolbertonCourse {
  constructor(name, length, students) {
    // Vérification des types lors de la création de l'objet
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    
    // Stockage des attributs avec un underscore
    this._name = name;
    this._length = length;
    this._students = students;
  }
  
  // Getter pour name
  get name() {
    return this._name;
  }
  
  // Setter pour name
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }
  
  // Getter pour length
  get length() {
    return this._length;
  }
  
  // Setter pour length
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }
  
  // Getter pour students
  get students() {
    return this._students;
  }
  
  // Setter pour students
  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}

// Exemple d'utilisation
try {
  const course = new HolbertonCourse('JavaScript Basics', 3, ['Alice', 'Bob', 'Charlie']);
  console.log(course.name);  // Affiche : JavaScript Basics
  console.log(course.length);  // Affiche : 3
  console.log(course.students);  // Affiche : ['Alice', 'Bob', 'Charlie']
  
  // Modification des attributs via les setters
  course.name = 'Advanced JavaScript';
  course.length = 4;
  course.students = ['David', 'Eve'];
  
  console.log(course.name);  // Affiche : Advanced JavaScript
} catch (error) {
  console.error(error.message);
}
