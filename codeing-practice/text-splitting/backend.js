const splitting = [
    { date: "9-Dec-2022", invName: "Navneet S. Taneja,Google Kumar,Apple Pandey", pattern: "Single", status: "Approved", folioNum: "00001245" },
    { date: "9-Dec-2022", invName: "Ramesh Kumar", pattern: "Single", status: "Approved", folioNum: "00001246" }
]

splitting.forEach(folioTable);

function folioTable(i,ind) {
    item = i
    const names = item.invName.split(",")
    // console.log(names)
    // console.log(Object.keys(item));
    if (names.length > 1){
        // additional names
        const expandName = names.slice(1)
        document.getElementById("folioTable").innerHTML += `<tr>
            <td>${ind+1}</td>
            <td>${item.date}</td>
            <td>
                <div class="name_expand">
                    ${names[0]} +${names.length - 1}
                </div>
            </td>
            <td>${item.pattern}</td>
            <td>${item.status}</td>
            <td>${item.folioNum}</td>
        </tr>`
    }
    else{
        document.getElementById("folioTable").innerHTML += `<tr>
            <td>${ind+1}</td>
            <td>${item.date}</td>
            <td>${names[0]}</td>
            <td>${item.pattern}</td>
            <td>${item.status}</td>
            <td>${item.folioNum}</td>
        </tr>`
    }
}