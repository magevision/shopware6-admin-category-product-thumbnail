import template from './sw-category-detail-products.html.twig';

const { Component } = Shopware;

Component.override('sw-category-detail-products', {
    template,

    computed: {
        productCriteria() {
            return this.$super('productCriteria')
                .addAssociation('cover')
                .addAssociation('media');
        }
    }
});