sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
], function (
    UIComponent,
    JSONModel,
    ResourceModel,
    HelloDialog
) {
    "use strict";

    return UIComponent.extend("sap.ui.crud.component", {
        metadata: {
            // rootView: {
            //     "viewName": "sap.ui.demo.walkthrough.view.App",
            //     "type": "XML",
            //     "async": true,
            //     "id": "app"

            // }

            manifest: "json"
        },
        init: function () {
            //call the init function on the parent

            UIComponent.prototype.init.apply(this, arguments);
            //set data model

            const oData = {
                recipient: {
                    name: "Component"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel)
            //set i18n model on view. its like const file
            // const i18nModel = new ResourceModel({
            //     bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
            //     supportedLocales: [""],
            //     fallbackLocale: ""
            // });
            // this.setModel(i18nModel, "i18n")

            // set dialog
            // this._helloDialog = new HelloDialog(this.getRootControl());

            // create the views based on the url/hash
            this.getRouter().initialize();

        },

        exit: function () {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openHelloDialog: function () {
            this._helloDialog.open();
        }

    });
});