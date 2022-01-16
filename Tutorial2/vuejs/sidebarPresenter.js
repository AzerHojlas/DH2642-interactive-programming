function SidebarPresenter(props){ 
    return <SidebarView guests={props.model.numberOfGuests} 
                      setGuests= {e=> props.model.setNumberOfGuests(e)}
     />
 }
 