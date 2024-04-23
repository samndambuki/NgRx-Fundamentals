import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Product } from "../product.model";

export const ProductsPageActions = createActionGroup(
    {
        source: 'Products Page',
        events: {
            'Toggle Show Product Code': emptyProps(),
            //add another action
            //emptyProps helper
            'Load Products': emptyProps(),
            'Add Product': props<{ product: Product }>(),
            'Update Product': props<{ product: Product }>(),
            'Delete Product': props<{ id: number }>(),

        }
    }
);

//another group of actions
export const ProductsApiActions = createActionGroup(
    {
        source: 'Products  API',
        events: {
            //actions to add to the events property 
            //props function - describes an extra action property
            'Products Loaded Succcess': props<{ products: Product[] }>(),
            'Products Loaded Fail': props<{ message: string }>(),
            'Products Added Succcess': props<{ product: Product }>(),
            'Products Added Fail': props<{ message: string }>(),
            'Product Updated Sucess': props<{ product: Product }>(),
            'Product Updated Fail': props<{ message: string }>(),
            'Product Deleted Success': props<{ id: number }>(),
            'Product Deleted Fail': props<{ message: string }>()
        }
    }
)
