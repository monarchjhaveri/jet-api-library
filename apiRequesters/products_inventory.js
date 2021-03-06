var Constants = require("./Constants");
var ApiRequestHelper = require("./helpers/ApiRequestHelper");

var productsInventoryRequester = {};

/**
 *
 * @param sku
 * @param token
 * @param callback
 */
productsInventoryRequester.list = function(sku, token, callback) {
    if (!sku || !token) {
        callback(new Error("sku and token must all be present"));
    } else {
        var options = {
            path: Constants.URL.PRODUCT.INVENTORY.replace("{id}", sku),
            method: 'GET',
            token: token
        };

        ApiRequestHelper.request(null, options, callback);
    }
};

productsInventoryRequester.update = function(sku, fulfillmentNodesDto, token, callback) {
    if (!sku || !fulfillmentNodesDto || !token) {
        callback(new Error("sku, fulfillmentNodesDto and token must all be present"));
    } else {
        var options = {
            path: Constants.URL.PRODUCT.INVENTORY.replace("{id}", sku),
            method: 'PUT',
            token: token
        };

        var payload = JSON.stringify(fulfillmentNodesDto);

        ApiRequestHelper.request(payload, options, callback);
    }
};

module.exports = productsInventoryRequester;