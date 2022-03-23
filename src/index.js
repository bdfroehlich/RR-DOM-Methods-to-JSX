let koalaContainer = <div className="ui items"></div>


// Koala Card
// koalas are in './public/koalas.js'
koalas.forEach(koala => {
    let koalaCard = <div style="cursor:pointer" className="item"></div>

    // Koala Card Image
    let koalaImage = <img src={koala.imageURL} className="image"></img>
    let imageContainer = <div>{koalaImage}</div>

    // Koala Card Content
    let koalaContent = <div className="content"></div>

    let header = <div className="header">{koala.name}</div>

    let descriptionParagraph = <p>{koala.description}</p>

    let descriptionContainer = <div className="description">{descriptionParagraph}</div>
    
    koalaContent.append(
        header,
        descriptionContainer
    )

    koalaCard.append(
        imageContainer,
        koalaContent
    )

    koalaContainer.append(koalaCard)
})

document.body.append(koalaContainer)