import React from "react";
export default function producTile(addtocart,product){
    return(<div className="col-3">
    <div className="card mb-3" style={{"maxWidth": "540px"}}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src="1.jpg" className="card-img" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <button
                     className="btn btn-primary add-btn"
                     onClick={()=>{
                        addtocart(product)
                        }}
                    >
                    Add
                     </button>
                    </div>
                
            </div>
        </div>
    </div>
</div>

    )
}