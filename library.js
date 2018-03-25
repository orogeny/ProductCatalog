(function(window) {

    function myLibrary() {

        // execute code here

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

    }


    if (typeof(window.api) === 'undefined') {
        window.api = myLibrary();
    }

})(window);