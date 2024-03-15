sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("nadzeya.kireyenka.app.controller.ProductDetailsPage", {
    onInit: function () {
      this.getOwnerComponent()
        .getRouter()
        .getRoute("ProductDetailsPage")
        .attachPatternMatched(this._onPatternMatched, this);
    },

    _onPatternMatched: function (oEvent) {
      this.productId = oEvent.getParameter("arguments").productId;
    },

    onNavToProductDetailsPage: function () {
      this.getOwnerComponent()
        .getRouter()
        .navTo("ProductDetailsPage", { productId: this.productId, productId: "1" });
    },

    onNavToProductsOverviewPage: function () {
      this.getOwnerComponent().getRouter().navTo("ProductsOverviewPage");
    },
  });
});
