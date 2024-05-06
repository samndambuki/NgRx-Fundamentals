import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./products.reducer";
import { sumProducts } from '../../utils/sum-products';

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectProducts = createSelector(
    selectProductsState,
    (produtsState) => produtsState.products
)

export const selectProductsLoading = createSelector(
    selectProductsState,
    (produtsState) => produtsState.loading
)

export const selectProductsShowProductCode = createSelector(
    selectProductsState,
    (produtsState) => produtsState.showProductCode
)

export const selectProductsTotal = createSelector(
    selectProducts,
    sumProducts
)