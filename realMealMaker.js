const menu = {
    _courses:{
  appetizers:[],
  mains:[],
  desserts:[],
    },
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set appetizers(appetizers){
  this._courses.appetizers = appetizers;
  },
  set mains(mains){
  this._courses.mains = mains;
  },
  set desserts(desserts){
  this._courses.desserts = desserts;
  },
  get courses() {
  return{
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts,
  };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
  const dishes = this._courses[courseName],
  
  randomIndex = Math.floor(Math.random()*dishes.length);
  return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizers.price + mains.price + desserts.price;
  return `Your meal is ${appetizers.name}, ${mains.name}, and ${desserts.name}, and the total price is ${totalPrice}`; 
    }
  };
  
  menu.addDishToCourse('appetizers', 'salad', 4.00);
  menu.addDishToCourse('appetizers', 'onion rings', 6.50);
  menu.addDishToCourse('appetizers', 'soup', 4.00);
  
     menu.addDishToCourse('mains', 'steak', 14.95);
     menu.addDishToCourse('mains', 'chicken', 12.50);
     menu.addDishToCourse('mains', 'fish', 13.99);
  
     menu.addDishToCourse('desserts', 'chocolate tarte', 7.00);
     menu.addDishToCourse('desserts', 'creme brule', 10.50);
     menu.addDishToCourse('desserts', 'milkshakes', 6.00);
  
     const meal = menu.generateRandomMeal();
     console.log(meal);