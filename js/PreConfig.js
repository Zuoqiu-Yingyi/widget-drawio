/**
 * Copyright (c) 2006-2020, JGraph Ltd
 * Copyright (c) 2006-2020, draw.io AG
 */
// Overrides of global vars need to be pre-loaded
window.EXPORT_URL = 'REPLACE_WITH_YOUR_IMAGE_SERVER';
window.PLANT_URL = 'REPLACE_WITH_YOUR_PLANTUML_SERVER';
/* 👇 SIYUAN 👇 */
window.DRAWIO_BASE_URL = `${window.location.origin}${window.location.pathname}`.replace(/\/$/, '')
window.DRAWIO_VIEWER_URL = `${window.DRAWIO_BASE_URL}/js/viewer.min.js`
/* 👆 SIYUAN 👆 */
window.DRAWIO_LIGHTBOX_URL = null; // Replace with your lightbox URL, eg. https://www.example.com
window.DRAW_MATH_URL = 'math/es5';
window.DRAWIO_CONFIG = null; // Replace with your custom draw.io configurations. For more details, https://www.diagrams.net/doc/faq/configure-diagram-editor
urlParams['sync'] = 'manual';
