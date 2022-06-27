import {BallTriangle} from "react-loader-spinner";
export const Loader = () =>{
    const properties= {
        color: "#ca2535",
        height: 110,
        width: 130
      }
    return (
        <>
          <BallTriangle {...properties} />
        </>
    )
}