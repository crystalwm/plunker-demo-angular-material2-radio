/** Add Transpiler for Typescript */
System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    packages: {
        '.': {
            defaultExtension: 'js'
        },
        'vendor': {
            defaultExtension: 'js'
        }
    }
});

System.config({
    paths: {
        // paths serve as alias
        'npm:': './node_modules/'
    },
    map: {
        'main': 'main.js',

        // Angular specific mappings.



        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/material': 'npm:@angular/material/bundles/material.umd.js',

        // Angular specific mappings.
        // '@angular/core': 'https://unpkg.com/@angular/core/bundles/core.umd.js',
        // '@angular/common': 'https://unpkg.com/@angular/common/bundles/common.umd.js',
        // '@angular/compiler': 'https://unpkg.com/@angular/compiler/bundles/compiler.umd.js',
        // '@angular/http': 'https://unpkg.com/@angular/http/bundles/http.umd.js',
        // '@angular/forms': 'https://unpkg.com/@angular/forms/bundles/forms.umd.js',
        // '@angular/router': 'https://unpkg.com/@angular/router/bundles/router.umd.js',
        // '@angular/platform-browser': 'https://unpkg.com/@angular/platform-browser/bundles/platform-browser.umd.js',
        // '@angular/platform-browser-dynamic': 'https://unpkg.com/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        // '@angular/material': 'https://unpkg.com/@angular/material/bundles/material.umd.js',

        // other libraries
        'rxjs': 'npm:rxjs',
    },
    packages: {
        // Thirdparty barrels.
        'rxjs': { main: 'index' }
    }
});