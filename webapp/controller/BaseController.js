sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("nadzeya.kireyenka.app.controller.BaseController", {
    getRouter: function () {
      return this.getOwnerComponent().getRouter();
    },

    getLocalizedString: function (sKey, ...aArgs) {
      const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

      return oResourceBundle.getText(sKey, aArgs);
    },
  });
});
