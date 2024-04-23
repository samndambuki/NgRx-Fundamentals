import { createReducer, on } from "@ngrx/store";
import { ProductsApiActions, ProductsPageActions } from "./products.actions";
import { Product } from "../product.model";

export interface ProductsState {
    showProductCode: boolean;
    loading: boolean;
    products: Product[];
}

const initialState: ProductsState = {
    showProductCode: true,
    loading: false,
    products: []
}

export const productsReducer = createReducer(
    initialState,
    on(ProductsPageActions.toggleShowProductCode, (state) => ({
        ...state,
        showProductCode: !state.showProductCode
    })),
    //dispatch action
    on(ProductsPageActions.loadProducts, (state) => ({
        ...state,
        loading: true
    })),
    on(ProductsApiActions.productsLoadedSucccess, (state: any, { products }) => ({
        //spread the existing state
        ...state,
        loading: false,
        products
    }))
)