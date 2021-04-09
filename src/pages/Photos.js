import React, {useContext} from "react"
import Image from "../components/Image/Image"
import {Context} from "../Context"
import {getClass} from "../utils"
import "./photos.css"


function Photos(){
    const {allPhotos} = useContext(Context)

    const imageElements = allPhotos.map((photo,index) =>(
        <Image key={photo.id} className={getClass(index)} photo={photo}/>
    ))

    return(
      <main className="Photos">
        {imageElements}
      </main>
    )
}
export default Photos