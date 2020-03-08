var components = {
    "packages": [
        {
            "name": "jquery",
            "main": "jquery-built.js"
        },
        {
            "name": "threejs",
            "main": "threejs-built.js"
        },
        {
            "name": "fullcalendar",
            "main": "fullcalendar-built.js"
        },
        {
            "name": "moment",
            "main": "moment-built.js"
        },
        {
            "name": "jsplumb",
            "main": "jsplumb-built.js"
        },
        {
            "name": "tinymce",
            "main": "tinymce-built.js"
        }
    ],
    "shim": {
        "threejs": {
            "exports": "THREE"
        }
    },
    "baseUrl": "components"
};
if (typeof require !== "undefined" && require.config) {
    require.config(components);
} else {
    var require = components;
}
if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = components;
}