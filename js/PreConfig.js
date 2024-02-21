/**
 * Copyright (c) 2006-2024, JGraph Ltd
 * Copyright (c) 2006-2024, draw.io AG
 */
// Overrides of global vars need to be pre-loaded
window.DRAWIO_PUBLIC_BUILD = true;
window.EXPORT_URL = 'REPLACE_WITH_YOUR_IMAGE_SERVER';
/* 👇 SIYUAN 👇 */
window.PLANT_URL = window.top?.siyuan?.config?.editor?.plantUMLServePath ?? 'https://www.plantuml.com/plantuml/svg/~1';
window.DRAWIO_BASE_URL = `${window.location.origin}${window.location.pathname}`.replace(/\/$/, '')
window.DRAWIO_VIEWER_URL = `${window.DRAWIO_BASE_URL}/js/viewer.min.js`
window.ALLOW_CUSTOM_PLUGINS = true;
/* 👆 SIYUAN 👆 */
window.DRAWIO_LIGHTBOX_URL = null; // Replace with your lightbox URL, eg. https://www.example.com
window.DRAW_MATH_URL = 'math/es5';
window.DRAWIO_CONFIG = null; // Replace with your custom draw.io configurations. For more details, https://www.drawio.com/doc/faq/configure-diagram-editor
urlParams['sync'] = 'manual';
