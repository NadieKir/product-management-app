sap.ui.define(["nadzeya/kireyenka/app/controller/BaseController"], function (BaseController) {
  "use strict";

  return BaseController.extend("nadzeya.kireyenka.app.controller.NotFoundPage", {
    onNavToProductsOverviewPage: function () {
      this.getRouter().navTo("ProductsOverviewPage");
    },
  });
});
