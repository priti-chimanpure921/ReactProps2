import Product from "./product.jsx";
function ProductList()
{
    let features = ["fast","durable","fine"];
    let options = {a:"fast",b:"durable",c:"black"};
    return(
        <>
            <Product title="Pen" price={10} features={features} options={options}/>
            {/* <Product title="Pencil" price={5} /> */}
        </>
    
    );
}
export default ProductList;