sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("nadzeya.kireyenka.app.controller.BaseController", {
    getRouter: function () {
      const oComponent = this.getOwnerComponent();

      return oComponent.getRouter();
    },

    i18n: function (sKey, ...aArgs) {
      const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

      return oResourceBundle.getText(sKey, aArgs);
    },
  });
});
