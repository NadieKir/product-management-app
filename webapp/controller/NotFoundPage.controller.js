sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("nadzeya.kireyenka.app.controller.NotFoundPage", {
    onGoHomePageLinkPress: function () {
      this.getOwnerComponent().getRouter().navTo("ProductsOverviewPage");
    },
  });
});
