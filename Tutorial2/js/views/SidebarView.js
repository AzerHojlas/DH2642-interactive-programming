function SidebarView(props) {

    return (  
        <div>
            <button disabled={props.guests <= 1} onClick={event=> props.setGuests(props.guests - 1) }>-</button>
             {props.guests}
             <button onClick={event=> props.setGuests(props.guests + 1) } >+</button>
       </div>
    );
}

function ReactSidebarLocalState(){
    // const numberState= React.useState(2);   // an array with 2 elem. !
    // const num=       numberState[0];        // a number, initially 2 
    // const setNumber= numberState[1];        // a function!
    const [num, setNumber]= React.useState(2);
    return <SidebarView guests={num}
                        setGuests={x=>setNumber(x)} />;
}

function RenderTest(){ console.log("React sub-component render test"); return false; }

function ReactTopLevelNumber(){
    const [num, setNumber]= React.useState(2); 
    return (
      <div>
         <SidebarView guests={num} setGuests={x=> setNumber(x)} />
         <SummaryView persons={num} />
         <RenderTest />
      </div> 
    );
}