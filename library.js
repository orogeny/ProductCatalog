(function(window) {

    function myLibrary() {

        // execute code here

        var catalog = createRandomCatalog(100);

        function searchAllProducts() {
            var promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(catalog)
                }, 1000);
            });
            return promise;
        }

        function searchProductById(id) {
            var promise = new Promise((resolve, reject) => {
                let i = 0;
                setTimeout(() => {
                    while (i < catalog.length) {
                        if (catalog[i].id == id) {
                            resolve({ id: id, price: catalog[i].price, type: catalog[i].type });
                        }
                        i++;
                    }
                    reject("Invalid Id: " + id);
                }, 1000);
            });
            return promise;
        }

        function searchProductByType(type) {
            var promise = new Promise((resolve, reject) => {
                let i = 0;
                let typeArray = [];
                let possibleTypes = [ 'Electronics', 'Book', 'Clothing', 'Food' ];
                if (!possibleTypes.includes(type)) {
                    reject("Invalid Type: " + type);
                }
                else {
                    setTimeout(() => {
                        while (i < catalog.length) {
                            if (catalog[i].type == type) {
                                typeArray.push({ id: catalog[i].id, price: catalog[i].price, type: catalog[i].type });
                            }
                            i++;
                        }
                        resolve(typeArray);
                    }, 1000);
                }
            });
            return promise;
        }

        function searchProductByPrice(price, difference) {
            var promise = new Promise((resolve, reject) => {
                let i = 0;
                let priceArray = [];
                if (!isFinite(price)) {
                    reject("Invalid Price: " + price);
                }
                else {
                    setTimeout(() => {
                        while (i < catalog.length) {
                            if (Math.abs(catalog[i].price - price) < difference) {
                                priceArray.push({ id: catalog[i].id, price: catalog[i].price, type: catalog[i].type });
                            }
                            i++;
                        }
                        resolve(priceArray);
                    }, 1000);
                }
            });
            return promise;
        }

        return {
            searchProductById: searchProductById,
            searchProductByPrice: searchProductByPrice,
            searchProductByType: searchProductByType,
            searchAllProducts: searchAllProducts
        }

        // function definitions here
        function createRandomProduct() {
            var typeArray = ['Electronic','Book','Clothing','Food'];
            var price = (Math.random() * 500).toFixed(2);
            var type = typeArray[Math.floor(Math.random() * 4)];

            return {price: price, type: type};
        }

        function createRandomCatalog(num) {
            var catalog = [];
            for (var i = 0; i < num; i++) {
                var obj = createRandomProduct();
                catalog.push({ id: i, price: obj.price, type: obj.type });
            }
            return catalog;
        }

    }


    if (typeof(window.api) === 'undefined') {
        window.api = myLibrary();
    }

})(window);