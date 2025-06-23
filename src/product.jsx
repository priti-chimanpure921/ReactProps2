function Product({title,price,features,options})
{
    // console.log(features);
    return (
        <>
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{features}</p>
            <p>{options.b}</p>
        </>
        
    );
}
export default Product;
