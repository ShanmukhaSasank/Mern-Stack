import { products} from "./constants/data.js";
import Product from "./model/product-schema.js";

const Defaultdata = async()  => {
        try{
            await Product.insertMany(products);
            console.log("Data Imported Successfully");
        }
        catch(e)
        {
            console.log(`Error while inserting the default data ${e.message}`);
        }
}

export default Defaultdata;