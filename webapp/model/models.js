sap.ui.define(
  ["sap/ui/Device", "sap/ui/model/json/JSONModel"],
  function (Device, JSONModel) {
    "use strict";

    return {
      createDeviceModel: function () {
        var oModel = new JSONModel(Device);
        oModel.setDefaultBindingMode("OneWay");
        return oModel;
      },
    };
  }
);
