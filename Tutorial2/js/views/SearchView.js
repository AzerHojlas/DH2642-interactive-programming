function giveOptions(opt){return (<option> {opt} </option>);}

function eventPrinter(evt){console.log(evt);}

function SearchFormView(props) {

    return (  
        <div>
            <input onInput={ e=> props.onText(e.target.value) } />


            <select onChange={ event=> props.onDishType(event.target.value) } >

                    <option>Choose:</option>
                    {props.options.map(giveOptions)}

            </select> 
            <button onClick={ event=> props.onSearch() } >search!</button>        
    </div>
    );
}

