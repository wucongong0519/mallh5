import request from './api'
/**获取分类列表 */
export function getProductsCategories() {
    return request('/api/h5/product-category/list')
}
/**获取分类列表下产品 */
export function getProductByCateId(productCategoryId) {
    return request(`/api/h5/product-category/${productCategoryId}/products`)
}
/**获取产品信息 */
export function getProductInfo(productId) {
    return request(`/api/h5/product/${productId}/get`)
}
/**获取产品详情 */
export function getProductDetail(productId) {
    return request(`/api/h5/product/${productId}/detail`)
}