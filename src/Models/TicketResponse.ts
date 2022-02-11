export interface TicketResponse {

    _embedded: Events[]

}

export interface Events {
    name: string;
    id: string;
    url: string;
    images: Images[]
    dates: Dates
    _embedded: Embedded
   
}

export interface Images {
    url: string;
}

export interface Dates {
    start: Start;
    status: {code:string};
    spanMultipleDays: boolean;

}

export interface Start {
    localDate: string;
    localTime: string;
    dateTBD: boolean;
    dateTBA: boolean;
    timeTBA: boolean;
    noSpecificTime: boolean;
}

export interface Embedded {
    attractions: Attractions[]
}

export interface Attractions {
    
}

export interface Classifications {

}