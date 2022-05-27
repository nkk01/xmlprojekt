let xmlContent = '';
let tableBooks = document.getElementById('books');
fetch('books.xml').then((response)=>{
    response.text().then((xml)=>{
        xmlContent = xml;
        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
        let books = xmlDOM.querySelectorAll('book');

        books.forEach(bookXmlNode => {
            let row = document.createElement('tr');
            

            //AUTOR

            let td = document.createElement('td');
            td.innerText = bookXmlNode.children[0].innerHTML;
            row.appendChild(td);


            //NASLOV
            let td1 = document.createElement('td');
            td1.innerText = bookXmlNode.children[1].innerHTML;
            row.appendChild(td1);

            
            //OPIS
            
            let td3 = document.createElement('td');
            td3.innerText = bookXmlNode.children[5].innerHTML;
            row.appendChild(td3);
            
            
            //CIJENA
            let td2 = document.createElement('td');
            td2.innerText = bookXmlNode.children[3].innerHTML + ' €';
            row.appendChild(td2);
            
        


            tableBooks.children[1].appendChild(row);
        });
    });
});
