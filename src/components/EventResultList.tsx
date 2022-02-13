import {Events} from '../Models/TicketResponse'
import { EventResults } from './EventResults'

export function EventResultsList(props: {events:Events[]}){


        return(

        <div>
                   

                  
                        {props.events.map(event =>  <EventResults key={event.id} events={event}></EventResults>)}
                  
                  
               
                <button className="add-saved">Favorite</button>
        </div>
        
        )
}