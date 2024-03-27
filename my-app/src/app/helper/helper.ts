export class helper{

  async getData(url:string): Promise<Document> {
    return await fetch(url)
      .then((response) => response.text())
      .then((text) => {
        const parser = new DOMParser();
        console.log(parser)
        return parser.parseFromString(text, "text/xml")
      });
  }
  parseXML(rss:Document):string[]{
    console.log(rss)
    const regex = /<!\[CDATA\[(.*?)\]\]>/g;
    const items= rss.querySelectorAll("item");
    let htmlArray : string[] =[];
    items.forEach(element =>{
      const imgSrc = element.children[5].attributes[2].nodeValue;
      console.log('element',element.children[5].attributes[2])
      //title extraction
      const titleContent = element.querySelector('title')!.textContent!;
      const matchesTitle = titleContent.match(regex);
      const title = matchesTitle ? matchesTitle[0].replace(/<!\[CDATA\[|\]\]>/g, '') : titleContent; // Strip CDATA wrapper if present


      const date = element.querySelector('pubDate')!.innerHTML;
      const descriptionContent = element.querySelector('description')!.textContent;
      const matchedDescription = descriptionContent!.match(regex);
      const description = matchedDescription ? matchedDescription[0].replace(/<!\[CDATA\[|\]\]>/g, '') : descriptionContent;
      htmlArray.push( `
        <article>
            <img src="${imgSrc}" alt="" width=100% height=100%>
                <h2>
                    ${title}
                </h2>
                <p class="date">${date}</p>
                <p class="description">${description}</p>
        </article>
      `)
    })
    return htmlArray;
  }
}
