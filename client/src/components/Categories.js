import Category from "./Category"

const Categories = () => {

    const test = [1,2,3,4,5]

    return (
        <div style={{
            width: '80%'
        }}>
            {test.map((item, index) => (
               <Category key={index} item={item} />
            ))}
        </div>
    )
};

export default Categories;