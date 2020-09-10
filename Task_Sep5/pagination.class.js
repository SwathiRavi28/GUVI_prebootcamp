var tableData=[];

fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json").then(
    res => {
      res.json().then(
        data => {
         
            tableData=[...data];
            console.log(tableData);
            sample();
        }

      )
    }

  )

  function sample(){
   
var state = {
    'querySet': tableData,
    
    'page': 1,
    'rows': 10,
    'window': 5,
    }
    
    buildTable()
    
    function pagination(querySet, page, rows) {
    
    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows
    
    var trimmedData = querySet.slice(trimStart, trimEnd)
    
    var pages = Math.round(querySet.length / rows);
    
    return {
        'querySet': trimmedData,
        'pages': pages,
    }
    }
    
    function pageButtons(pages) {
    var wrapper = document.getElementById('pagination-wrapper')
    
    wrapper.innerHTML = "";
    console.log('Pages:', pages)
    
    var maxLeft = (state.page - Math.floor(state.window / 2))
    var maxRight = (state.page + Math.floor(state.window / 2))
    
    if (maxLeft < 1) {
        maxLeft = 1
        maxRight = state.window
    }
    
    if (maxRight > pages) {
        maxLeft = pages - (state.window - 1)
        
        if (maxLeft < 1){
            maxLeft = 1
        }
        maxRight = pages
    }
    
    
    
    for (var page = maxLeft; page <= maxRight; page++) {
        wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
    }
    
    if (state.page != 1) {
        wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
    }
    
    if (state.page != pages) {
        wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
    }
    
    var obj=document.getElementsByClassName("page");
    for (var i = 0; i < obj.length; i++) {
        obj[i].addEventListener('click', specialFunc, false);
    }

    function specialFunc() {
       document.getElementById('table-body').innerHTML=null;
        state.page = Number($(this).val())

        buildTable()
    }
    
    }
    
    
    function buildTable() {
      var table=document.getElementById('table-body');
   console.log('table is',table);
    var data = pagination(state.querySet, state.page, state.rows)
    var myList = data.querySet
    var temp="";
    for (var i = 1 in myList) {

                  temp += "<tr>";
              temp += "<td>" + myList[i].id + "</td>";
              temp += "<td>" + myList[i].name + "</td>";
              temp += "<td>" + myList[i].email + "</td>";
                temp += "</tr>";
                document.getElementById("table-body").innerHTML = temp;
    }
    
    pageButtons(data.pages)
    }
  }

