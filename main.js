let menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    addDishToCourse: function(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        menu.courses[courseName].push(dish);
    },
    getRandomDishFromCourse: function(courseName) {
        let dishes = menu.courses[courseName];
        const index = Math.floor(Math.random() * dishes.length);
        return dishes[index];
    },
    getRandomMeal: function() {
        const appetizer = menu.getRandomDishFromCourse('appetizers');
        const main = menu.getRandomDishFromCourse('mains');
        const dessert = menu.getRandomDishFromCourse('desserts');
        const price = appetizer.price + main.price + dessert.price;
        return `You have ordered ${appetizer.name}, followed by ${main.name} and you will finish on the ${dessert.name}. The cost of your meal is ${price}.`;
    }
};

menu.addDishToCourse('appetizers', 'Arancini', 7);
menu.addDishToCourse('appetizers', 'Goats Cheese Tart', 5);
menu.addDishToCourse('appetizers', 'Salmon', 8);
menu.addDishToCourse('mains', 'Spaghetti', 11);
menu.addDishToCourse('mains', 'Steak Frites', 19);
menu.addDishToCourse('mains', 'Pizza', 12);
menu.addDishToCourse('desserts', 'Gelato', 5);
menu.addDishToCourse('desserts', 'Tiramisu', 6);
menu.addDishToCourse('desserts', 'Cafe Gourmand', 8);