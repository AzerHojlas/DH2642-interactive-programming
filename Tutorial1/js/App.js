function App(props){  
    
    function RenderTest(){ console.log("Vue sub-component render test"); return false; }

    return  ( 
        <div>
             <SidebarPresenter model={props.model}  />
             <SummaryPresenter model={props.model}  />
             <RenderTest />
         </div>  
    );
}
