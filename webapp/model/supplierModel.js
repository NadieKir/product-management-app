sap.ui.define(["sap/ui/model/json/JSONModel"], function (JSONModel) {
  "use strict";

  return {
    getModel: function () {
      return new JSONModel("data/suppliers.json");
    },
  };
});
