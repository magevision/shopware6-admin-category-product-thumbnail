!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=(window.__sw__.assetPath + '/bundles/magevisionadmincategoryproductthumbnail/'),n(n.s="aVDG")}({aVDG:function(e,t,n){"use strict";n.r(t);Shopware.Component.override("sw-category-detail-products",{template:'\n{% block sw_category_detail_product_assignment_column_name %}\n    <template #[nameColumn]="{ item, column }">\n        <sw-media-preview-v2 :source="item.cover ? item.cover.media : null"/>\n        <router-link\n                :to="{ name: column.routerLink, params: { id: item.id } }"\n        >\n            <sw-product-variant-info :variations="item.options">\n                {{ item.name || item.translated.name }}\n            </sw-product-variant-info>\n        </router-link>\n    </template>\n{% endblock %}',computed:{productCriteria:function(){return this.$super("productCriteria").addAssociation("cover").addAssociation("media")}}})}});