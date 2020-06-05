function isEmpty(val){
    return (val == "" || (typeof(val) === "object" && Object.keys(val).length == 0) || val === [] || val === null || val === undefined);
}