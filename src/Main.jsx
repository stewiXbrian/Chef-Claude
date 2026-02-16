
import {useState,useRef,useEffect} from 'react'
import ClaudeRecipe from './ClaudeRecipe.jsx'
import  IngredientList from './IngredientList.jsx'
import getRecipeFromHf from './ai.js'


export default function Main() {
    

    const [ingredients,setIngredients]=useState([])  
    const [recipe,setRecipe]=useState('')
    const recipeSection=useRef(null)
    

    function handleSubmit(event) {
         
       event.preventDefault()    
       // Create a new FormData object and with specification to the desired form using event.target
       const formData = new FormData(event.target)
       // Get the value of the field named 'ingredient' from the form data 
       const ingredient = formData.get('ingredient')
       setIngredients(prev=>[...prev,ingredient])
       
         event.target.reset() }

  useEffect(()=>{
    //recipeSection.current meaning recipeSection.current!==null
      recipe!==''&&recipeSection.current?recipeSection.current.scrollIntoView({behavior:'smooth'}):null
    
    }
    ,[recipe])       

   async function  showRecipe(){
       const generatedRecipe =await getRecipeFromHf(ingredients)
        setRecipe(generatedRecipe)
    }
    
    
    return (
      
    <main>
        <form onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g. tomato" aria-label="Add Ingredient" name='ingredient'/>
                    <button>Add Ingredient</button>
                 </form>
                   <IngredientList 
                   ingredients={ingredients} 
                   showRecipe={showRecipe}
                  ref={recipeSection}
                   />

                  {recipe?<ClaudeRecipe recipe={recipe}/>:null}     
                        
                                </main>
                                 ) }