"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var radio_ng_model_example_1 = require("./radio-ng-model-example");
var PlunkerAppModule = (function () {
    function PlunkerAppModule() {
    }
    return PlunkerAppModule;
}());
PlunkerAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            material_1.MaterialModule,
        ],
        declarations: [radio_ng_model_example_1.RadioNgModelExample],
        bootstrap: [radio_ng_model_example_1.RadioNgModelExample],
        providers: []
    })
], PlunkerAppModule);
exports.PlunkerAppModule = PlunkerAppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(PlunkerAppModule);
//# sourceMappingURL=main.js.map