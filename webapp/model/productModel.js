sap.ui.define(["sap/ui/model/json/JSONModel"], function (JSONModel) {
  "use strict";

  return {
    _model: new JSONModel("data/products.json"),

    getModel: function () {
      return this._model;
    },

    setData: function (aData) {
      return this._model.setProperty("/", aData);
    },

    getData: function () {
      return this._model.getProperty("/");
    },

    deleteByIds: function (aProductsToDeleteIds) {
      const aRemainingProductsData = this.getData().filter(
        (oProduct) => !aProductsToDeleteIds.includes(oProduct.Id)
      );

      this.setData(aRemainingProductsData);
    },
  };
});
