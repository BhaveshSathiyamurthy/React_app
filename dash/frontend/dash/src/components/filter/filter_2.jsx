import "./style.css"

export function Filter_2()
{
    return(
        <div className="wrapper">
            
         <div className="filter">
            Filter
            <div className="Date">
                Duration
                <input type="date" placeholder="Select"name="" id="" />
            </div>
            <div className="Date">
                Name
                <select name="" id="2" className="company-select"></select>
            </div>
            <div className="Date">
            <button>Apply</button>
            </div>
            
         </div>
        </div>
    )
}