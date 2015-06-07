/*global Meteor, $, Template, Session */

Meteor.startup(function () {
    Session.set("filter", "*");
    Session.set("changeAvailable", false);

    $('.grid').isotope({
        layoutMode: 'fitRows',
        itemSelector: '.grid-item',
        fitRows: {
            gutter: 25
        }
    });
});

Template.grid.helpers({
    "items": [
        {id: "maqlouba", name: "Ma’louba", categories: "main-dish chicken active", image: "/images/chicken/maqlouba.jpeg", ingredients: [
            {name: "Rice", unit: "cup", amount: "2"},
            {name: "Chicken", unit: "gram", amount: "1000"},
            {name: "Cauliflower", unit: "gram", amount: "1000"},
            {name: "Carrot", unit: "gram", amount: "250"},
            {name: "Potato", unit: "gram", amount: "250"},
            {name: "Egg Plant", unit: "gram", amount: "500"},
            {name: "Onion", unit: "gram", amount: "100"},
            {name: "Vegetable Oil", unit: "cup", amount: "2"}
        ]},
        {id: "addas", name: "Addas (Lentils)", categories: "soup active", image: "/images/soups/addas.jpg", ingredients: [
            {name: "Rice", unit: "cup", amount: "2"},
            {name: "Chicken", unit: "gram", amount: "1000"},
            {name: "Cauliflower", unit: "gram", amount: "1000"},
            {name: "Carrot", unit: "gram", amount: "250"},
            {name: "Potato", unit: "gram", amount: "250"},
            {name: "Egg Plant", unit: "gram", amount: "500"},
            {name: "Onion", unit: "gram", amount: "100"},
            {name: "Vegetable Oil", unit: "cup", amount: "2"}
        ]},
        {id: "musakhan", name: "Musakhan", categories: "main-dish, chicken, active", image: "/images/chicken/musakhan.jpeg", ingredients: [
            {name: "Bread", unit: "gram", amount: "1000"},
            {name: "Chicken", unit: "gram", amount: "2000"},
            {name: "Onion", unit: "gram", amount: "2000"},
            {name: "Olive Oil", unit: "cup", amount: "2"}
        ]},
        {id: "arayes", name: "Arayes", categories: "pastry active", image: "/images/pastries/arayis.jpg", ingredients: [
            {name: "Bread", unit: "gram", amount: "500"},
            {name: "Vegetable Oil", unit: "cup", amount: "0.33"},
            {name: "Mince Beef", unit: "gram", amount: "500"},
            {name: "Parsley", unit: "cup", amount: "0.5"},
            {name: "Onion", unit: "cup", amount: "0.5"}
        ]},
        {id: "maftoul", name: "Maftoul", categories: "main-dish chicken active", image: "/images/chicken/maftoul.jpeg", ingredients: [
            {name: "Chicken", unit: "gram", amount: "1000"},
            {name: "Chick Peas", unit: "gram", amount: "500"},
            {name: "Onion", unit: "gram", amount: "100"},
            {name: "Tomato", unit: "gram", amount: "1000"},
            {name: "Carrot", unit: "gram", amount: "250"},
            {name: "Pumpkin", unit: "gram", amount: "250"},
            {name: "Maftoul", unit: "gram", amount: "500"},
            {name: "Vegetable Oil", unit: "tbsp", amount: "5"}
        ]},
        {id: "hareesa", name: "Hareesa", categories: "dessert active", image: "/images/dessert/hareesa.jpg", ingredients: [
            {name: "Semolina", unit: "cup", amount: "2"},
            {name: "Sugar", unit: "cup", amount: "3.5"},
            {name: "Yoghurt", unit: "cup", amount: "1"},
            {name: "Carrot", unit: "gram", amount: "250"},
            {name: "Almonds", unit: "cup", amount: "0.25"},
            {name: "Baking Powder", unit: "tsp", amount: "1"},
            {name: "Vegetable Oil", unit: "cup", amount: "0.5"}
        ]},
        {id: "pastry-cheese", name: "Muajanat (Cheese)", categories: "pastry active", image: "/images/pastries/cheese.jpeg", ingredients: [
            {name: "Flour", unit: "cup", amount: "4"},
            {name: "Powder Milk", unit: "tbsp", amount: "5"},
            {name: "Yeast", unit: "tbsp", amount: "1.5"},
            {name: "Sugar", unit: "tbsp", amount: "2"},
            {name: "Vegetable Oil", unit: "cup", amount: "0.5"}
        ]},
        {id: "mansaf", name: "Mansaf", categories: "main-dish meat active", image: "/images/meat/mansaf.jpg", ingredients: [
            {name: "Rice", unit: "cup", amount: "2"},
            {name: "Chicken", unit: "gram", amount: "1000"},
            {name: "Cauliflower", unit: "gram", amount: "1000"},
            {name: "Carrot", unit: "gram", amount: "250"},
            {name: "Potato", unit: "gram", amount: "250"},
            {name: "Egg Plant", unit: "gram", amount: "500"},
            {name: "Onion", unit: "gram", amount: "100"},
            {name: "Vegetable Oil", unit: "cup", amount: "2"}
        ]},
        {id: "kibbeh-yoghurt", name: "Kibbeh (Yoghurt)", categories: "main-dish meat active", image: "/images/meat/kibbeh-yoghurt.jpg", ingredients: [
            {name: "Lamb meat", unit: "gram", amount: "2000"},
            {name: "Rice", unit: "cup", amount: "2"},
            {name: "Yoghurt", unit: "cup", amount: "2"},
            {name: "Jameed", unit: "cup", amount: "2"},
            {name: "Bread", unit: "gram", amount: "300"},
            {name: "Nuts", unit: "gram", amount: "250"},
            {name: "Parsley", unit: "cup", amount: "0.25"},
        ]},
        {id: "awwameh", name: "Awwameh", categories: "dessert active", image: "/images/dessert/awwameh.png", ingredients: [
            {name: "Rice", unit: "cup", amount: "2"},
            {name: "Chicken", unit: "gram", amount: "1000"},
            {name: "Cauliflower", unit: "gram", amount: "1000"},
            {name: "Carrot", unit: "gram", amount: "250"},
            {name: "Potato", unit: "gram", amount: "250"},
            {name: "Egg Plant", unit: "gram", amount: "500"},
            {name: "Onion", unit: "gram", amount: "100"},
            {name: "Vegetable Oil", unit: "cup", amount: "2"}
        ]},
        {id: "pastry-spinach", name: "Muajanat (Spinach)", categories: "pastry active", image: "/images/pastries/spinach.jpeg", ingredients: [
            {name: "Rice", unit: "cup", amount: "2"},
            {name: "Chicken", unit: "gram", amount: "1000"},
            {name: "Cauliflower", unit: "gram", amount: "1000"},
            {name: "Carrot", unit: "gram", amount: "250"},
            {name: "Potato", unit: "gram", amount: "250"},
            {name: "Egg Plant", unit: "gram", amount: "500"},
            {name: "Onion", unit: "gram", amount: "100"},
            {name: "Vegetable Oil", unit: "cup", amount: "2"}
        ]},
        {id: "eish-el-sarayeh", name: "Eish El-Sarayeh", categories: "dessert active", image: "/images/dessert/aish-al-saraya.jpg", ingredients: [
            {name: "Rice", unit: "cup", amount: "2"},
            {name: "Chicken", unit: "gram", amount: "1000"},
            {name: "Cauliflower", unit: "gram", amount: "1000"},
            {name: "Carrot", unit: "gram", amount: "250"},
            {name: "Potato", unit: "gram", amount: "250"},
            {name: "Egg Plant", unit: "gram", amount: "500"},
            {name: "Onion", unit: "gram", amount: "100"},
            {name: "Vegetable Oil", unit: "cup", amount: "2"}
        ]},
        {id: "molokhia", name: "Molokhia", categories: "main-dish chicken active", image: "/images/chicken/molokhia.jpg", ingredients: [
            {name: "Rice", unit: "cup", amount: "2"},
            {name: "Chicken", unit: "gram", amount: "1000"},
            {name: "Cauliflower", unit: "gram", amount: "1000"},
            {name: "Carrot", unit: "gram", amount: "250"},
            {name: "Potato", unit: "gram", amount: "250"},
            {name: "Egg Plant", unit: "gram", amount: "500"},
            {name: "Onion", unit: "gram", amount: "100"},
            {name: "Vegetable Oil", unit: "cup", amount: "2"}
        ]},
        {id: "", name: "Waraq Inab", categories: "main-dish mahashy", image: "/images/mahashy/waraq-inab.png"},
        {id: "", name: "Karawiah", categories: "dessert", image: "/images/dessert/karawya.jpg"},
        {id: "", name: "Qatayef", categories: "dessert", image: "/images/dessert/qatayef.jpg"}
    ]
});

Template.filter.events({
   "click li": function (event) {
        var filter = $(event.currentTarget).data("filter");

        $('.grid').isotope({ filter: filter });

        Session.set("filter", filter);
   }
});

Template.filter.helpers({
    "isFilter": function (filter) {
        if (Session.get("filter") === filter) {
            return "active";
        }
    }
});

Template.grid.events({
    "change .form-control": function (event) {
        Session.set("changeAvailable", true);
    },
    "click .close": function (event) {
        Session.set("changeAvailable", false);
        $('.protein:visible').text("");
        $('.carbs:visible').text("");
        $('.total-fat:visible').text("");
        $('.sat-fat:visible').text("");
        $('.calories:visible').text("");
    },
    "click #update-amounts": function (event) {
        if (Session.get("changeAvailable") || $('.protein:visible').text() === "") {
            var protein = _.random(0, 50),
                carbs = _.random(10, 100),
                fat = _.random(0, 16),
                satFat = Math.round(fat * Math.random()),
                calories = (protein * 4) + (carbs * 4) + (9 * fat),
                kj = Math.round(calories * 4.2);

            $('.protein:visible').text(protein + "g");
            $('.carbs:visible').text(carbs + "g");
            $('.total-fat:visible').text(fat + "g");
            $('.sat-fat:visible').text(satFat + "g");
            $('.calories:visible').text(calories + " (" + kj + "kJ)");

            Session.set("changeAvailable", false);
        }
    }
});
