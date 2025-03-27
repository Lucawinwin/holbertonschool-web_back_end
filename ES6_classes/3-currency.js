class Currency {
  constructor(code, name) {
    // Vérification des types lors de la création de l'objet
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    
    // Stockage des attributs avec un underscore
    this._code = code;
    this._name = name;
  }
  
  // Getter pour code
  get code() {
    return this._code;
  }
  
  // Setter pour code
  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
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
  
  // Méthode pour afficher la devise complète
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

// Exemple d'utilisation
try {
  const dollar = new Currency('USD', 'United States Dollar');
  console.log(dollar.displayFullCurrency());  // Affiche : United States Dollar (USD)
  
  // Modification des attributs
  dollar.name = 'US Dollar';
  dollar.code = 'US';
  console.log(dollar.displayFullCurrency());  // Affiche : US Dollar (US)
} catch (error) {
  console.error(error.message);
}
