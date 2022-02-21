import { PhotoResultList } from "./PhotoResultList";

export function PhotoResult(prop: { photo?: any }) {
  return (
    <div className="photo-container">
      <img src={prop.photo} alt={"City"} />
    </div>
  );
}
