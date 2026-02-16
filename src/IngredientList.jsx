
export default function IngredientList(props){

      const ingredientsList = props.ingredients.map((value,index)=>(
            <li key={index}>{value}</li>
        ))

    return (
        <section>
                <div className="ingredients">
                    <h2>Ingredients List :</h2>
                    <ul>{ingredientsList}</ul>
                </div >

                {
                ingredientsList.length>=4&&<div className='recipe' ref={props.ref} >
                    <h3>Ready for recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                        <button onClick={props.showRecipe}>Get a recipe</button>
                            </div>
                 }
                </section>
    )
    
}