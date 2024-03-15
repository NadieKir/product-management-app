sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("nadzeya.kireyenka.app.controller.ProductsOverviewPage", {
    onNavToProductDetailsPage: function () {
      this.getOwnerComponent().getRouter().navTo("ProductDetailsPage", { productId: "1" });
    },
  });
});
