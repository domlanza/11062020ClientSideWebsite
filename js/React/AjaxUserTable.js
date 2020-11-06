const AjaxUserTable = () => {
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
        ajax_alt("webAPIs/listUsersAPI.jsp",
                function (obj) {        // success function gets obj already run thru JSON.parse
                    if (obj.dbError.length > 0) {
                        setError(obj.dbError);
                    } else {
                        setItems(obj.webUserList);
                        setError("");
                    }
                },
                function (msg) {   // failure message gets error message
                    setError(msg);
                }
        );
    }, []);


    const UserTable = ({list}) => {
        return (
                <div className="clickSort">
                    <table>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Image</th>
                                <th>Birthday</th>
                                <th className="textAlignRight">Membership Fee</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map(listObj =>
                                <tr key={listObj.webUserId}>
                                    <td>{listObj.userEmail}</td>
                                    <td  className="shadowImage"><img src={listObj.image}/></td>
                                    <td>{listObj.birthday}</td>
                                    <td className="textAlignRight">{listObj.membershipFee}</td>
                                    <td>{listObj.userRoleType}</td> 
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
                { error ? <div>Error: {error} </div> : <UserTable list={items} /> }
            </div>
            );
};