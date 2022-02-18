import { PhotoResultList } from "./PhotoResultList";

export function PhotoResult(prop:{photo?:any}) {

    return (
    <div>
        <img src={prop.photo} />
     
    </div>
    );
  }
  