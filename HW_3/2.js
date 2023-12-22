'use strict';

// "Управление списком заказов"

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
        this.totalPrice = 0;
    }

    addProduct(obj) {
        this.products.push(obj);
    }

    getTotalPrice() {
        for (const el in this.products) {
            this.totalPrice += this.products[el].price
        }
        return this.totalPrice;
    }
}

// Пример использования класса
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600