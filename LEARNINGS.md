# Working with javascript array
    console.log("Work filters are: " + workFilters.length);
    var all = {name:"All", type:"workFilters"}
    workFilters.indexOf(all) === -1 ?? workFilters.push(all); 
    console.log("Work filter are now: " + workFilters.length);
    
    workFilters.map((item, index) => 
    console.log("Filter " + index + ": " + item.name));