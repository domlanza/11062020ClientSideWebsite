const AjaxRecipeTable = () => {
    myContent.classList.add("Table");

    //  listProp="webUserList" errorProp="dbError" Component={Table} />,           


    // Tell React that items array is something that
    // (when changed) should redisplay the FoodListComponent.
    // Set items initial value to [].
    const [items, setItems] = React.useState([]);

    // Tell React that if "error" changes, redisplay this 
    // FoodListComponent. Set initial value of error to null.
    const [error, setError] = React.useState(null);

    // useEffect second parameter is an array of elements that 
    // (if they change) should trigger the function specified 
    // as the first useEffect parameter.
    React.useEffect(() => {
        ajax_alt("webAPIs/listOthersAPI.jsp",
                function (obj) {        // success function gets obj already run thru JSON.parse
                    if (obj.dbError.length > 0) {
                        setError(obj.dbError);
                    } else {
                        setItems(obj.otherList);
                        setError("");
                    }
                },
                function (msg) {   // failure message gets error message
                    setError(msg);
                }
        );
    }, []);


    const OtherTable = ({list}) => {
        return (
                <div className="clickSort">
                    <table>
                        <thead>
                            <tr>
                                <th>Recipe Id</th>
                                <th>Recipe Name</th>
                                <th>Image</th>
                                <th className="textAlignRight">recipe rating</th>
                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map(listObj =>
                                <tr key={listObj.recipeId}> 
                                    <td>{listObj.recipeId}</td>
                    
                                    <td>{listObj.recipeName}</td>
                                    <td  className="shadowImage"><img src={listObj.recipeImg}/></td>
                                    <td className="textAlignRight">{listObj.Rating}</td>                  
                                </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
                );
    };

    return (
            <div>
                { error ? <div>Error: {error} </div> : <OtherTable list={items} /> }
            </div>
            );
};